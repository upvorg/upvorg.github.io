import { axios } from '@web/shared/constants'
import { formatDate } from '@web/shared/utils/date'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import './index.scss'

export default function UserManager() {
  const [page, setPage] = useState(1)
  const [users, setUsers] = useState<R.User[]>([])
  const [level, setLevel] = useState('')
  const [k, setK] = useState('')
  const pageSize = 10

  useEffect(() => {
    axios
      .get(`/users?&page=${page}&page_size=${pageSize}&level=${level}&keyword=${k}`)
      .then((res) => {
        if (!res.err) {
          setUsers(res.data)
        }
      })
  }, [page, level, k])

  return (
    <div className="UserManager">
      <div className="box">
        <div className="tabs">
          <ul>
            <li className="is-active">
              <a>用户管理</a>
            </li>
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
            { v: '4', t: '普通用户' },
            { v: '3', t: '创作者' },
            { v: '2', t: '管理员' }
          ].map((s, i) => (
            <a
              key={i}
              className={classNames('tag', { 'is-primary': level == s.v })}
              onClick={() => setLevel(s.v)}
            >
              {s.t}
            </a>
          ))}
        </div>

        <div className="list has-hoverable-list-items has-overflow-ellipsis">
          {users.map((u, i) => (
            <div className="list-item" key={i}>
              <div className="list-item-image">
                <figure className="image is-48x48">
                  <img className="is-rounded" src={u.Avatar} alt={u.Nickname} />
                </figure>
              </div>

              <div className="list-item-content">
                <div className="list-item-title is-flex is-justify-content-space-between">
                  <Link href={`/user/profile?name=${u.Name}`}>
                    <p>
                      <span className="is-clickable">{u.Nickname}</span>
                    </p>
                  </Link>
                  <span className="has-text-weight-normal has-text-grey">
                    {formatDate(u.CreatedAt, true)}
                  </span>
                </div>
                <div className="list-item-description mt-2">
                  {/* @ts-ignore */}
                  <span className="tag is-primary is-light mr-2">{USER_LEVEL_MAP[u.Level]}</span>
                  <span>{u.Bio}</span>
                </div>
              </div>

              <div className="list-item-controls is-hidden-mobile">
                {u.Level == 4 && (
                  <div className="buttons">
                    <button className="button" data-tooltip="成为创作者">
                      <span className="icon">
                        <i className="fa-solid fa-heart"></i>
                      </span>
                    </button>
                  </div>
                )}
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
            className={classNames('pagination-next', { 'is-disabled': users.length < pageSize })}
            onClick={() => setPage((p) => p + 1)}
          >
            Next page
          </a>
        </div>
      </div>
    </div>
  )
}
