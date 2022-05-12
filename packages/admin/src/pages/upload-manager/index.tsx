import { useUserStore } from '@web/index/src/store/user'
import { axios, formatDate, HOST, USER_LEVEL } from '@web/shared'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import qs from 'query-string'
import './index.scss'

export default function UploadManager() {
  const user = useUserStore()
  const [page, setPage] = useState(1)
  const { t } = qs.parse(window.location.search)
  const [tabIndex, setTabIndex] = useState(t ? +t : 0)
  const [posts, setPosts] = useState<R.Post[]>([])
  const [status, setStatus] = useState('')
  const [k, setK] = useState('')
  const pageSize = 10

  useEffect(() => {
    setPosts([])
    setPage(1)
    setStatus('')
  }, [tabIndex])

  useEffect(() => {
    if (!user) return
    const t = ['video', 'post'][tabIndex]
    axios
      .get(
        `/posts?type=${t}&uid=${
          user.Level <= USER_LEVEL.ADMIN ? '' : user?.ID
        }&page=${page}&page_size=${pageSize}&status=${status}&keyword=${k}`
      )
      .then((res) => {
        if (!res.err) {
          setPosts(res.data)
        }
      })
  }, [user, page, tabIndex, status, k])

  function handleDelPost(id: number) {
    axios.delete(`/post/${id}`).then((res) => {
      if (!res.err) {
        setPosts(posts.filter((p) => p.ID !== id))
      }
    })
  }

  function handleCheckPost(id: number, query: string) {
    axios.post(`/post/${id}/review?${query}`).then((res) => {
      if (!res.err) {
        if (status == '') {
          setPosts(posts.map((p) => (p.ID === id ? { ...p, Status: 4 } : p)))
        }
        if (status == '3') {
          setPosts(posts.filter((p) => p.ID !== id))
        }
      }
    })
  }

  return (
    <div className=" UploadManager">
      <div className="box">
        <div className="tabs">
          <ul>
            {['视频管理', '文章管理'].map((title, index) => (
              <li
                key={index}
                className={classNames({ 'is-active': tabIndex === index })}
                onClick={() => setTabIndex(index)}
              >
                <a>{title}</a>
              </li>
            ))}
          </ul>
          <input
            type="text"
            className="input is-small"
            placeholder="搜索"
            value={k}
            onChange={(e) => setK(e.target.value)}
          />
        </div>

        <div className="tags">
          {[
            { v: '', t: '全部' },
            { v: '4', t: '已发布' },
            { v: '3', t: '待审核' },
            { v: '2', t: '已下架' }
          ].map((s, i) => (
            <a
              key={i}
              className={classNames('tag', { 'is-primary': status == s.v })}
              onClick={() => setStatus(s.v)}
            >
              {s.t}
            </a>
          ))}
        </div>

        <div className="list has-overflow-ellipsis has-visible-pointer-controls has-hoverable-list-items">
          {posts.map((v) => (
            <div className="list-item" key={v.ID}>
              <div className="list-item-image">
                <figure className="image is-3by4" style={{ backgroundColor: '#f6f7f8' }}>
                  {v.Cover && <img src={v.Cover} />}
                </figure>
              </div>

              <div className="list-item-content">
                <Link href={tabIndex == 0 ? `/video/upload?id=${v.ID}` : `/post/upload?id=${v.ID}`}>
                  <div className="list-item-title is-clickable">{v.Title}</div>
                </Link>
                <div className="list-item-description">{formatDate(v.CreatedAt, true)}</div>
                <div className="list-item-description">
                  <span className="icon-text">
                    <span className="icon">
                      <i className="fa-brands fa-youtube"></i>
                    </span>
                    <span className="text">{v.Hits || '-'}</span>
                    <span className="icon">
                      <i className="fa-solid fa-heart"></i>
                    </span>
                    <span className="text">{v.LikesCount || '-'}</span>
                    <span className="icon">
                      <i className="fa-solid fa-message"></i>
                    </span>
                    <span className="text">{v.CommentCount || '-'}</span>
                    <span className="icon">
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span className="text">{v.CollectionCount || '-'}</span>
                  </span>
                </div>
              </div>

              <div className="list-item-controls">
                <div className="buttons">
                  {user && user?.Level <= USER_LEVEL.ADMIN && v.Status == 3 && (
                    <button
                      className="button is-light is-hidden-mobile"
                      onClick={() => handleCheckPost(v.ID, 'status=4')}
                      data-tooltip="审核通过"
                    >
                      <span className="icon">
                        <i className="fa-solid fa-circle-check"></i>
                      </span>
                    </button>
                  )}

                  {user && user?.Level <= USER_LEVEL.ADMIN && v.IsRecommend != 2 && (
                    <button
                      className="button is-light is-hidden-mobile"
                      onClick={() => handleCheckPost(v.ID, 'is_recommend=2')}
                      data-tooltip="上推荐"
                    >
                      <span className="icon">
                        <i className="fa-solid fa-thumbs-up"></i>
                      </span>
                    </button>
                  )}

                  <button className="button is-light is-hidden-mobile">
                    <a href={`${HOST}/${tabIndex == 0 ? 'v' : 'p'}/${v.ID}`} target="_blank">
                      <span className="icon">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </button>

                  <Link
                    href={tabIndex == 0 ? `/video/upload?id=${v.ID}` : `/post/upload?id=${v.ID}`}
                  >
                    <button className="button is-light is-hidden-mobile">
                      <span className="icon">
                        <i className="fa-solid fa-square-pen"></i>
                      </span>
                    </button>
                  </Link>

                  <button
                    className="button is-light is-hidden-mobile"
                    onClick={() => handleDelPost(v.ID)}
                  >
                    <span className="icon">
                      <i className="fa-solid fa-circle-xmark"></i>
                    </span>
                  </button>

                  {/* <button className="button is-light">
                <span className="icon">
                  <i className="fas fa-ellipsis-v"></i>
                </span>
              </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination is-small" role="navigation" aria-label="pagination">
          <a
            className={classNames('pagination-previous', {
              'is-disabled': page <= 1
            })}
            onClick={() => setPage((p) => p - 1)}
          >
            Previous
          </a>
          <ul className="pagination-list">
            <li>
              <a
                className="pagination-link is-current"
                aria-label={`Page ${page}`}
                aria-current="page"
              >
                {page}
              </a>
            </li>
          </ul>
          <a
            className={classNames('pagination-next', { 'is-disabled': posts.length < pageSize })}
            onClick={() => setPage((p) => p + 1)}
          >
            Next page
          </a>
        </div>
      </div>
    </div>
  )
}
