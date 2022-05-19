import qs from 'query-string'
import { Link } from 'wouter'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { axios, HOST, POST_STATUS, POST_STATUS_MAP, USER_LEVEL } from '@web/shared/constants'
import { formatDate } from '@web/shared/utils/date'
import { useUserStore } from '@web/shared/UserContext'
import './index.scss'

const DEFAULT_TAB = POST_STATUS.PUBLISHED

export default function UploadManager() {
  const user = useUserStore()
  const [page, setPage] = useState(1)
  const { t } = qs.parse(window.location.search)
  const [tabIndex, setTabIndex] = useState(t ? +t : 0)
  const [posts, setPosts] = useState<R.Post[]>([])
  const [status, setStatus] = useState<string | number>(DEFAULT_TAB)
  const [k, setK] = useState('')
  const pageSize = 10

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

  useEffect(() => {
    setPosts([])
    setPage(1)
    setStatus(DEFAULT_TAB)
  }, [tabIndex])

  function handleDelPost(id: number) {
    if (window.confirm('Do you really want to delete?')) {
      axios.delete(`/post/${id}`).then((res) => {
        if (!res.err) {
          setPosts(posts.filter((p) => p.ID !== id))
        }
      })
    }
  }

  function handleCheckPost(id: number, query: string, rest?: Partial<R.Post>) {
    axios.post(`/post/${id}/review?${query}`).then((res) => {
      if (!res.err) {
        setPosts(posts.map((p) => (p.ID === id ? { ...p, ...rest } : p)))
      }
    })
  }

  return (
    <div className="UploadManager">
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
          {Object.entries(POST_STATUS_MAP)
            .sort((a, b) => +(+b[0] - +a[0]))
            .map(([v, t], i) => (
              <a
                key={i}
                className={classNames('tag', { 'is-primary': status == v })}
                onClick={() => setStatus(v)}
              >
                {t}
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
                <div className="list-item-description">
                  <span className="tag mr-2 is-primary is-light">
                    {POST_STATUS_MAP[v.Status as keyof typeof POST_STATUS_MAP]}
                  </span>
                  <span>{formatDate(v.CreatedAt, true)}</span>
                </div>
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
                      className="button is-light"
                      onClick={() => handleCheckPost(v.ID, 'status=4', { Status: 4 })}
                      data-tooltip="审核通过"
                    >
                      <span className="icon">
                        <i className="fa-solid fa-circle-check"></i>
                      </span>
                    </button>
                  )}

                  {user && user?.Level <= USER_LEVEL.ADMIN && v.Status == 4 && (
                    <button
                      className="button is-light"
                      onClick={() => handleCheckPost(v.ID, 'status=2', { Status: 2 })}
                      data-tooltip="下架"
                    >
                      <span className="icon">
                        <i className="fa-solid fa-x-ray"></i>
                      </span>
                    </button>
                  )}

                  {user && user?.Level <= USER_LEVEL.ADMIN && v.Status == 2 && (
                    <button
                      className="button is-light"
                      onClick={() => handleCheckPost(v.ID, 'status=4', { Status: 4 })}
                      data-tooltip="上架"
                    >
                      <span className="icon">
                        <i className="fa-brands fa-autoprefixer"></i>
                      </span>
                    </button>
                  )}

                  {user && user?.Level <= USER_LEVEL.ADMIN && v.IsRecommend != 2 && v.Status == 4 && (
                    <button
                      className="button is-light"
                      onClick={() => handleCheckPost(v.ID, 'is_recommend=2', { IsRecommend: 2 })}
                      data-tooltip="上推荐"
                    >
                      <span className="icon">
                        <i className="fa-solid fa-thumbs-up"></i>
                      </span>
                    </button>
                  )}

                  {user && user?.Level <= USER_LEVEL.ADMIN && v.IsRecommend == 2 && v.Status == 4 && (
                    <button
                      className="button is-light"
                      onClick={() => handleCheckPost(v.ID, 'is_recommend=1', { IsRecommend: 1 })}
                      data-tooltip="不再推荐"
                    >
                      <span className="icon">
                        <i className="fa-solid fa-thumbs-down"></i>
                      </span>
                    </button>
                  )}

                  {v.Status == 4 && (
                    <button className="button is-light">
                      <a href={`${HOST}/${tabIndex == 0 ? 'v' : 'p'}/${v.ID}`} target="_blank">
                        <span className="icon">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </button>
                  )}

                  <button className="button is-light" onClick={() => handleDelPost(v.ID)}>
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
            onClick={() => page > 1 && setPage((p) => p - 1)}
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
            onClick={() => posts.length >= pageSize && setPage((p) => p + 1)}
          >
            Next page
          </a>
        </div>
      </div>
    </div>
  )
}
