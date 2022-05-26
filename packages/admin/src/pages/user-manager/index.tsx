import { axios, USER_LEVEL_MAP } from '@web/shared/constants'
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
          {Object.entries(USER_LEVEL_MAP)
            .sort((a, b) => {
              return typeof a[0] == 'string' ? -1 : +a[0] - +b[0]
            })
            .map(([k, v], i) => (
              <a
                key={i}
                className={classNames('tag', { 'is-primary': level == k })}
                onClick={() => setLevel(k)}
              >
                {v}
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
            className={classNames('pagination-next', { 'is-disabled': users.length < pageSize })}
            onClick={() => users.length >= pageSize && setPage((p) => p + 1)}
          >
            Next page
          </a>
        </div>
      </div>
    </div>
  )
}
