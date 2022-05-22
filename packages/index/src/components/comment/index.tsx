import { FocusEventHandler, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import classNames from 'classnames'
import { getTimeDistance } from '@web/shared/utils/date'
import { useUserStore } from '@web/shared/UserContext'
import { axios } from '@web/shared/constants'
import { CommentSkeleton } from '../../skeleton/CommentSkeleton'
import './index.scss'

interface CommentProps {
  id: string
  uid?: string
  onFocus?: FocusEventHandler<HTMLTextAreaElement>
  onBlur?: FocusEventHandler<HTMLTextAreaElement>
}

const Comment = ({ id, onFocus, onBlur }: CommentProps) => {
  const [comments, setComments] = useState<R.Comment[] | null>(null)
  const [comment, setComment] = useState<string>('')
  const user = useUserStore()

  useEffect(() => {
    axios.get(`/post/${id}/comments`).then((c) => {
      setComments(c?.data || [])
    })
  }, [])

  const doComment = () => {
    if (!comment) {
      toast.error('写点什么吧')
      return
    }

    axios.post(`/post/${id}/comment`, { data: { content: comment } }).then((_) => {
      if (!_.err) {
        setComment('')
        setComments([_.data, ...comments!])
      }
    })
  }

  const ctrlEnter = (e: any) => {
    if (e.ctrlKey && e.keyCode === 13) {
      doComment()
    }
  }

  return (
    <div className="video-comment">
      <div className="video-comment__title">
        <h4>评论</h4>
      </div>
      <div className="video-comment-edit">
        <img
          className="video-comment-edit__avatar"
          src={user?.Avatar || '/ic_launcher_round.png'}
          alt=""
        />
        <textarea
          className="video-comment-edit__input"
          placeholder="留下评论..."
          disabled={!user}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={ctrlEnter}
          onFocus={(e) => onFocus?.(e)}
          onBlur={(e) => onBlur?.(e)}
        ></textarea>
        <button
          disabled={!user || !!!comment}
          className="button is-primary video-comment-edit__button"
          onClick={doComment}
        >
          评论
        </button>
      </div>
      <div className="comment-list">
        {comments ? (
          comments.length > 0 ? (
            <ul>
              {comments.map((item) => (
                <li
                  key={item.ID}
                  className={classNames('comment-item', { '--o': user?.ID == item.Uid })}
                >
                  <div className="comment-item__head">
                    <img className="comment-item__avatar" src={item.Creator?.Avatar} alt="" />
                    <div>
                      <span className="comment-item__name">{item.Creator?.Nickname}</span>
                      <p className="comment-item__time">{getTimeDistance(item.CreatedAt)}</p>
                    </div>
                  </div>
                  <div className="comment-item__content">
                    <p>{item.Content}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="empty">暂无评论</p>
          )
        ) : (
          <CommentSkeleton />
        )}
      </div>
    </div>
  )
}

export default Comment
