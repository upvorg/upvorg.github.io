import { useCallback, useEffect, useMemo, useState } from 'react'
import { getTimeDistance } from '@web/shared/utils/date'
import { Markdown } from '@web/shared/components/markdown'
import { GriffithPlayer, EVENTS } from '@web/shared/components/player'
import { axios } from '@web/shared/constants'
import toast from 'react-hot-toast'
import classNames from 'classnames'
import { Helmet } from 'react-helmet'
import { throttle } from '@web/shared/utils/schedulers'
import useLastPlayed from '../../hooks/use-last-played'
import Comment from '../../components/comment'
import { VideoMetaSkeleton } from '../../skeleton/CommentSkeleton'
import { Tags } from '../../components/tag/Tag'
import './index.scss'

export default function PlayerPage({ id }: any) {
  const [modal, setModal] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isCollected, setIsCollected] = useState(false)
  const [
    { lastEpisode: currentIndex, setLastEpisode: setCurrentIndex },
    { lastDuration, setLastDuration }
  ] = useLastPlayed(id)

  const [state, setState] = useState<R.Post>({} as R.Post)
  const [video, setVideo] = useState<R.Video[]>([])

  useEffect(() => {
    axios.get(`/post/${id}`).then((_) => {
      if (!_.data || _.data.Type !== 'video') {
        toast.error('视频不见了', {
          duration: 90000
        })
        return
      }
      if (!_.err) {
        _.data && setState(_.data)
        _.data.IsLiked == 2 && setIsLiked(true)
        _.data.IsCollected == 2 && setIsCollected(true)

        axios.get(`/post/${id}/videos`).then((res) => {
          ;(res.data as R.Video[]).sort((a, b) => a.Episode - b.Episode)
          res.data && setVideo(res.data)
          if (res.data.length <= currentIndex) {
            setCurrentIndex(0)
          }
        })
      }
      axios.get(`/post/${id}/pv`)
    })
  }, [])

  const likeHandler = useCallback(() => {
    const c = isLiked ? -1 : 1
    const LikesCount = state.LikesCount || 0

    setIsLiked((isLiked) => !isLiked)
    setState((state) => ({ ...state, LikesCount: LikesCount + c }))
    ;(isLiked ? axios.delete(`/like/post/${id}`) : axios.post(`/like/post/${id}`))
      .then((_) => {
        if (_.err) {
          setIsLiked((isLiked) => !isLiked)
          setState((state) => ({ ...state, LikesCount: LikesCount - c }))
        } else {
          if (isLiked) {
            toast.error('你所热爱的，就是你的生活。\r\n 				--------?')
          } else {
            toast.success('nice!')
          }
        }
      })
      .catch(() => {
        setTimeout(() => {
          setIsLiked((isLiked) => !isLiked)
          setState((state) => ({ ...state, LikesCount: LikesCount - c }))
        }, 300)
      })
  }, [state, isLiked])

  const collectHandler = useCallback(() => {
    const c = isCollected ? -1 : 1

    setIsCollected((isCollected) => !isCollected)
    setState((state) => ({ ...state, CollectionCount: state.CollectionCount + c }))
    ;(isCollected ? axios.delete(`/collect/post/${id}`) : axios.post(`/collect/post/${id}`))
      .then((_) => {
        if (_.err) {
          setIsCollected((isCollected) => !isCollected)
          setState((state) => ({ ...state, CollectionCount: state.CollectionCount - c }))
        } else {
          if (isCollected) {
          } else {
            toast.success('nice!')
          }
        }
      })
      .catch(() => {
        setTimeout(() => {
          setIsCollected((isCollected) => !isCollected)
          setState((state) => ({ ...state, CollectionCount: state.CollectionCount - 1 }))
        }, 300)
      })
  }, [state, isCollected])

  const onEvent = useMemo(
    () =>
      throttle((e: EVENTS, payload: any) => {
        if (e === EVENTS.TIMEUPDATE) {
          setLastDuration(payload.currentTime)
        }
      }, 1000),
    []
  )

  const {
    Title,
    Creator,
    Tags: tags,
    IsOriginal,
    Hits,
    CommentCount,
    LikesCount,
    CollectionCount,
    Content
  } = state

  return (
    <div className="player">
      <Helmet>
        <title>{`${Title || '-'} ${Creator?.Nickname ? ` - ${Creator.Nickname}` : ''}`}</title>
      </Helmet>
      <div className="player-header">
        <div className="player-header__player">
          <GriffithPlayer
            src={video[currentIndex]?.VideoUrl}
            onEvent={onEvent}
            duration={lastDuration}
          />
        </div>
        <div className="player-header__r">
          <div className="eplist_module">
            <div className="list-title">
              <h4>播放列表</h4>
              <span className="ep-list-progress">
                {video.length > 0 ? currentIndex + 1 : 0}/{video.length}
              </span>
            </div>
            <div className="list-wrapper">
              {video.length > 0 ? (
                <ul>
                  {video.map((item, i) => (
                    <a key={i}>
                      <li
                        className={classNames('list-item has-tooltip-bottom', {
                          cursor: i === currentIndex
                        })}
                        onClick={() => setCurrentIndex(i)}
                        title={item.Title}
                        {...(item.Title && { 'data-tooltip': item.Title })}
                      >
                        <span> {item.Episode}</span>
                      </li>
                    </a>
                  ))}
                </ul>
              ) : (
                <span className="empty">暂无视频</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="video-actions">
        <div className="icon-text">
          <span className="icon">
            <i className="fa-solid fa-eye"></i>
          </span>
          <span className="text">{Hits || '-'}</span>
        </div>
        <div className="icon-text">
          <span className="icon">
            <i className="fa-solid fa-message"></i>
          </span>
          <span className="text">{CommentCount || '-'}</span>
        </div>
        <div className={classNames('icon-text', { '--active': isLiked })} onClick={likeHandler}>
          <span className="icon">
            <i className="fa-solid fa-heart"></i>
          </span>
          <span className="text">{LikesCount || '-'}</span>
        </div>
        <div
          className={classNames('icon-text', { '--active': isCollected })}
          onClick={collectHandler}
        >
          <span className="icon">
            <i className="fa-solid fa-star"></i>
          </span>
          <span className="text">{CollectionCount || '-'}</span>
        </div>
      </div>
      {state.ID ? (
        <div className="video-info-wrapper">
          <div className="video-info">
            <img
              className="video-info__avatar"
              src={state.Creator?.Avatar || 'https://uplife/ic_launcher_round.png'}
              alt={state.Creator?.Nickname}
            />
            <div>
              <h3 className="video-info__title" onClick={() => setModal(true)}>
                {state.Title || '-'}
                <span className="icon has-text-info">
                  <i className="fas fa-info-circle"></i>
                </span>
              </h3>
              <div className="video-meta">
                <span>{Creator?.Nickname || '-'}</span>
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="6827"
                  width="200"
                  height="200"
                >
                  <defs></defs>
                  <path
                    d="M167.024 512a344.976 344.976 0 1 1 689.952 0 344.976 344.976 0 0 1-690 0zM512 106.976a405.024 405.024 0 1 0 0 810.048 405.024 405.024 0 0 0 0-810z m30 235.008a30 30 0 1 0-60 0V512c0 7.968 3.168 15.6 8.784 21.216l120 120a30 30 0 1 0 42.432-42.432L542 499.52V341.984z"
                    fill="#9499A0"
                    p-id="6828"
                  ></path>
                </svg>
                <span>{state.CreatedAt ? getTimeDistance(state.CreatedAt) : '-'}</span>
              </div>
            </div>
          </div>
          <Tags
            tags={
              !!tags
                ? tags
                    .trim()
                    .split(' ')
                    .map((tag) => ({
                      title: tag,
                      href: `/pv/tag?type=video&title=${tag}`
                    }))
                    .concat(
                      IsOriginal == 2
                        ? { title: '原创', href: `/pv/tag?type=video&is_original=2&title=原创` }
                        : []
                    )
                : []
            }
          />
        </div>
      ) : (
        <VideoMetaSkeleton className="video-info__skeleton" height={'200px'} />
      )}

      <Comment id={id} />

      <div className={classNames('modal', { 'is-active': modal })}>
        <div className="modal-background" onClick={() => setModal(false)}></div>

        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{Title}</p>
            <button className="delete" aria-label="close" onClick={() => setModal(false)}></button>
          </header>
          <section className="modal-card-body">
            <Markdown type="render" value={Content || '#### 暂无详情'} />
          </section>
        </div>
      </div>
    </div>
  )
}
