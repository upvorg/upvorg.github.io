import { useState, useEffect } from 'react'
import classNames from 'classnames'
import { axios, HOST } from '@web/shared/constants'
import { formatDate } from '@web/shared/utils/date'
import './index.scss'

export default function CommentManager() {
  const [comments, setComments] = useState<R.Comment[]>([])
  const [page, setPage] = useState(1)
  const pageSize = 10

  useEffect(() => {
    axios.get(`/comments?page=${page}&page_size=${pageSize}`).then((res) => {
      if (!res.err) {
        setComments(res.data)
      }
    })
  }, [])

  return (
    <div className="comment-manager">
      <div className="block box">
        <h1 className="title is-5 mb-2">评论</h1>
        <div className="list has-hoverable-list-items has-overflow-ellipsis">
          {comments.map((a, i) => (
            <div className="list-item" key={i}>
              <div className="list-item-image">
                <figure className="image is-48x48">
                  <img className="is-rounded" src={a.Creator?.Avatar} alt={a.Creator?.Avatar} />
                </figure>
              </div>

              <div className="list-item-content">
                <div className="list-item-title is-flex is-justify-content-space-between">
                  <p>
                    <span>{a.Creator?.Nickname}</span>
                    <span className="action">
                      &nbsp;评论了&nbsp;
                      <a
                        href={`${HOST}/${a.Post?.Type == 'video' ? 'v' : 'p'}/${a.Pid}`}
                        target="_blank"
                      >
                        {a.Post?.Title}
                      </a>
                    </span>
                  </p>
                  <span className="has-text-weight-normal has-text-grey">
                    {formatDate(a.CreatedAt, true)}
                  </span>
                </div>
                <div className="list-item-description">
                  <p>{a.Content}</p>
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
            className={classNames('pagination-next', { 'is-disabled': comments.length < pageSize })}
            onClick={() => comments.length >= pageSize && setPage((p) => p + 1)}
          >
            Next page
          </a>
        </div>
      </div>
    </div>
  )
}
