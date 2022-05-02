import { FocusEventHandler, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import classNames from 'classnames'
import { axios, getTimeDistance } from '@web/shared'
import { CommentSkeleton } from '../../skeleton/CommentSkeleton'
import { useUserStore } from '../../store/user'
import './index.scss'

interface CommentProps {
  id: string
  uid?: string
  onFocus?: FocusEventHandler<HTMLTextAreaElement>
  onBlur?: FocusEventHandler<HTMLTextAreaElement>
  onLoad?: (c: any[]) => void
}

const Comment = ({ id, onFocus, onBlur, onLoad }: CommentProps) => {
  const [comments, setComments] = useState<any[] | null>(null)
  const [comment, setComment] = useState<string>('')
  const user = useUserStore()

  useEffect(() => {
    axios.get(`/post/${id}/comments`).then((c) => {
      setComments(c?.data || [])
      onLoad?.(c?.data || [])
    })
  }, [])

  const doComment = () => {
    if (!comment) {
      toast.error('写点什么吧')
      return
    }

    axios.post(`/post/comment/${id}`, { data: { content: comment } }).then((_) => {
      const newComment = {
        id: Date.now(),
        uid: user!.id,
        create_time: getTimeDistance(Date()),
        content: comment,
        creator_avatar: user!.avatar,
        creator_nickname: user!.nickname
      }
      setComment('')
      setComments([newComment, ...comments!])
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
          src={user?.avatar || 'https://upv.life/ic_launcher_round.png'}
          alt=""
        />
        <textarea
          className="video-comment-edit__input"
          placeholder={user ? '...' : 'Login to comment'}
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
              {comments.map((item: any) => (
                <li
                  key={item.id}
                  className={classNames('comment-item', { '--o': user?.id == item.uid })}
                >
                  <div className="comment-item__head">
                    <img className="comment-item__avatar" src={item.creator_avatar} alt="" />
                    <div>
                      <span className="comment-item__name">{item.creator_nickname}</span>
                      <p className="comment-item__time">{item.create_time}</p>
                    </div>
                  </div>
                  <div className="comment-item__content">
                    <p>{item.content}</p>
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
