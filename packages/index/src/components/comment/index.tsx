import { FocusEventHandler, useState } from 'react'
import toast from 'react-hot-toast'
import classNames from 'classnames'
import { getTimeDistance } from '@web/shared/utils/date'
import { oaii } from '@web/shared/constants'
import { CommentSkeleton } from '../../skeleton/CommentSkeleton'
import './index.scss'
import { Player } from '@web/shared/components/player/OPlayer'

interface CommentProps {
  postId: string
  onFocus?: FocusEventHandler<HTMLTextAreaElement>
  onBlur?: FocusEventHandler<HTMLTextAreaElement>
  comments?: any[]
  player?: { current: Player }
  setMetaInfo: any
}

const Comment = ({ comments, onFocus, onBlur, postId, player, setMetaInfo }: CommentProps) => {
  const [comment, setComment] = useState<string>('')
  const [isLoading, setLoading] = useState<boolean>(false)
  const doComment = () => {
    if (!comment) {
      toast.error('写点什么吧')
      return
    }
    setLoading(true)
    oaii
      .post(`/biu`, {
        data: { content: comment, post_id: `${postId}`, video_time: player?.current.currentTime || 0 }
      })
      .then((_) => {
        setLoading(false)
        setMetaInfo((prev) => ({ ...prev, comment: [_].concat(prev.comment) }))
        setComment('')
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
        {/* <img className="video-comment-edit__avatar" src={'/ic_launcher_round.png'} alt="" /> */}
        <textarea
          className="video-comment-edit__input"
          placeholder="留下评论..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={ctrlEnter}
          onFocus={(e) => onFocus?.(e)}
          onBlur={(e) => onBlur?.(e)}
        ></textarea>
      </div>
      <button
        disabled={!comment || isLoading}
        className="comment-biu button is-primary video-comment-edit__button"
        onClick={doComment}
      >
        评论
      </button>
      <div className="comment-list">
        {comments ? (
          comments.length > 0 ? (
            <ul>
              {comments.map((item, i) => (
                <li key={item.ID} className={classNames('comment-item')}>
                  <div className="comment-item__head">
                    <img className="comment-item__avatar" src={'/ic_launcher_round.png'} alt="" />
                    <div>
                      <span className="comment-item__name">#{comments.length - i}</span>
                      <p className="comment-item__time">{getTimeDistance(item.createdAt)}</p>
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
