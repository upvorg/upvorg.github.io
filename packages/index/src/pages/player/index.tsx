import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { getTimeDistance } from '@web/shared/utils/date'
import ReactPlayer, { PlayerEvent, Player } from '@web/shared/components/player/OPlayer'
import { axios } from '@web/shared/constants'
import toast from 'react-hot-toast'
import classNames from 'classnames'
import { Helmet } from 'react-helmet'
import useLastPlayed from '../../hooks/use-last-played'
import Comment from '../../components/comment'
import { VideoMetaSkeleton } from '../../skeleton/CommentSkeleton'
import { Tags } from '../../components/tag/Tag'
import PlayerInfo from './info'
import { enimeAdapter } from '../../enime.adp'

import { ReactComponent as FaEye } from '../../assets/icon/fa-eye.svg'
import { ReactComponent as FaHeart } from '../../assets/icon/fa-heart.svg'
import { ReactComponent as FaInfo } from '../../assets/icon/fa-info-circle.svg'
import { ReactComponent as FaMessage } from '../../assets/icon/fa-message.svg'
import { ReactComponent as FaStar } from '../../assets/icon/fa-star.svg'

import './index.scss'

export default function PlayerPage({ id }: any) {
  const [modal, setModal] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isCollected, setIsCollected] = useState(false)
  const [lastEpisode, lastDuration, update] = useLastPlayed(id)

  const [state, setState] = useState<R.Post | any>({} as R.Post)
  const [video, setVideo] = useState<R.Video[]>([])

  const player = useRef<typeof Player>(null)
  const [isEnime, setIsEnime] = useState(false)
  const [source, setSource] = useState<any>({ poster: 'https://i.gifer.com/BxQY.gif', title: '少女祈祷中 ...' })

  useEffect(() => {
    // axios.get(`/post/${id}`)
    import(`../../mock/post/${id}.json`)
      .catch(() => {
        setIsEnime(true)
        throw new Error('')
      })
      .then((_) => {
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

          // axios.get(`/post/${id}/videos`)
          import(`../../mock/video/${id}.json`).then((res) => {
            ;(res.data as R.Video[]).sort((a, b) => a.Episode - b.Episode)
            res.data && setVideo(res.data)
            if (res.data.length <= lastEpisode) {
              update(id, 0, 0)
            }
          })
        }
        // axios.get(`/post/${id}/pv`)
      })
  }, [])

  useEffect(() => {
    if (video[lastEpisode]?.VideoUrl)
      setSource({
        title: video[lastEpisode].Title || state.Title,
        src: video[lastEpisode].VideoUrl,
        format: id == 'iptv' ? 'm3u8' : 'auto',
        poster: 'https://i.gifer.com/BxQY.gif'
      })
  }, [state, lastEpisode, video])

  useEffect(() => {
    if (!isEnime) return
    //@ts-ignore
    player.current?.plugins.ui?.menu.unregister('Source')
    const source = fetch(`https://api.enime.moe/view/${id}/${lastEpisode + 1}`)
      .then((it) => it.json())
      .then(enimeAdapter)
      .then((it) => {
        setState(it)
        setVideo(it.episodes)

        function sourcePromise(id: any) {
          return fetch(`https://api.enime.moe/source/${id}`)
            .then((res) => res.json())
            .then((res) => {
              if (res.subtitle) {
                //@ts-ignore
                player.current.on(
                  'loadedmetadata',
                  () => {
                    //@ts-ignore
                    player.current?.plugins.ui.subtitle.updateSource([
                      {
                        default: true,
                        src: res.subtitle,
                        name: 'English'
                      }
                    ])
                  },
                  { once: true }
                )
              }

              return {
                ...res,
                title: it.title ? (it.title.length >= 15 ? it.title.substring(0, 15) + '...' : it.title) : it.Title,
                poster: state.image || state.anime?.coverImage,
                src: (it.sources[1] || it.sources[0]).url.includes('zoro')
                  ? `https://cors.proxy.consumet.org/${res.url}`
                  : res.url
              }
            })
        }

        if (it.sources.length > 1) {
          //@ts-ignore
          player.current?.plugins.ui?.menu.register({
            name: 'Source',
            position: 'top',
            icon: `<svg viewBox="0 0 1024 1024" style="transform: scale(0.9);"><path d="M554.666667 597.333333c-143.36 0-190.293333 57.6-205.653334 95.573334C394.666667 712.533333 426.666667 757.76 426.666667 810.666667a128 128 0 0 1-128 128 128 128 0 0 1-128-128c0-55.893333 35.413333-103.253333 85.333333-120.746667V334.08A127.573333 127.573333 0 0 1 170.666667 213.333333a128 128 0 0 1 128-128 128 128 0 0 1 128 128c0 55.893333-35.413333 103.253333-85.333334 120.746667v225.706667c37.546667-27.733333 92.16-47.786667 170.666667-47.786667 113.92 0 151.893333-57.173333 164.266667-95.146667A128.256 128.256 0 0 1 597.333333 298.666667a128 128 0 0 1 128-128 128 128 0 0 1 128 128c0 57.173333-37.546667 106.666667-89.173333 122.026666C753.066667 481.706667 711.68 597.333333 554.666667 597.333333m-256 170.666667a42.666667 42.666667 0 0 0-42.666667 42.666667 42.666667 42.666667 0 0 0 42.666667 42.666666 42.666667 42.666667 0 0 0 42.666666-42.666666 42.666667 42.666667 0 0 0-42.666666-42.666667M298.666667 170.666667a42.666667 42.666667 0 0 0-42.666667 42.666666 42.666667 42.666667 0 0 0 42.666667 42.666667 42.666667 42.666667 0 0 0 42.666666-42.666667 42.666667 42.666667 0 0 0-42.666666-42.666666m426.666666 85.333333a42.666667 42.666667 0 0 0-42.666666 42.666667 42.666667 42.666667 0 0 0 42.666666 42.666666 42.666667 42.666667 0 0 0 42.666667-42.666666 42.666667 42.666667 0 0 0-42.666667-42.666667z" fill="#ffffff" p-id="7015"></path></svg>`,
            children: it.sources.map((it, i) => ({
              name: it.url.includes('zoro') ? 'ZORO' : 'GOGO',
              default: i == 1,
              value: i
            })),
            onChange({ value }) {
              //@ts-ignore
              player.current?.changeSource(sourcePromise(it.sources[value].id))
            }
          })
        }
        return sourcePromise((it.sources[1] || it.sources[0]).id)
      })

    setSource(source)
  }, [isEnime, lastEpisode])

  const likeHandler = useCallback(() => {
    const c = isLiked ? -1 : 1
    const LikesCount = state.LikesCount || 0

    setIsLiked((isLiked) => !isLiked)
    setState((state) => ({ ...state, LikesCount: LikesCount + c }))
    ;(isLiked ? axios.delete(`/like/post/${id}`) : axios.post(`/like/post/${id}`))
      .then((_) => {
        if (_.err) {
          setIsLiked((isLiked) => !isLiked)
          setState((state) => ({ ...state, LikesCount: state.LikesCount - c }))
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
          setState((state) => ({ ...state, LikesCount: state.LikesCount - c }))
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

  const ep = useRef(lastEpisode)
  ep.current = lastEpisode

  const onEvent = ({ type, payload }: PlayerEvent) => {
    const time = payload?.target?.currentTime
    if (type == 'timeupdate') {
      if (!(time < 1)) {
        update(id, ep.current, time * 1000)
      }
    } else if (type == 'ended') {
      update(id, ep.current + 1, 0)
    }
  }

  const {
    Title,
    Creator,
    Tags: tags,
    IsOriginal,
    Hits,
    CommentCount,
    LikesCount,
    CollectionCount,
    Content,
    Meta,
    Cover
  } = state

  return (
    <div className="player">
      <Helmet>
        <title>{`${Title || ''} - UPV - free animes no ads`}</title>
        <meta name="description" content={Content?.substring(0, 200)} />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="keywords" content={`${Title},${Meta?.Genre},${tags?.split(' ')}`} />
        <meta name="author" content={Creator?.Nickname} />

        <meta property="og:title" content={`${Title} - UPV - free animes no ads`} />
        <meta property="og:type" content="video" />
        <meta property="og:image" content={Cover} />
        <meta property="og:url" content={location.origin + location.pathname} />
      </Helmet>
      <div className="player-header">
        <div className="player-header__player">
          {useMemo(() => {
            return (
              <ReactPlayer
                ref={player}
                autoplay={true}
                source={source}
                onEvent={onEvent}
                duration={lastDuration}
                isLive={id == 'iptv'}
              />
            )
          }, [source])}
        </div>
        <div className="player-header__r">
          <div className="eplist_module">
            <div className="list-title">
              <h4>播放列表</h4>
              <span className="ep-list-progress">
                {video.length > 0 ? lastEpisode + 1 : 0}/{video.length}
              </span>
            </div>
            <div className="list-wrapper">
              {video.length > 0 ? (
                <ul>
                  {video.map((item, i) => (
                    <a key={i}>
                      <li
                        className={classNames('list-item has-tooltip-bottom', {
                          cursor: i === lastEpisode
                        })}
                        onClick={() => update(id, i, 0)}
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
            <FaEye />
          </span>
          <span className="text">{Hits || '-'}</span>
        </div>
        <div className="icon-text">
          <span className="icon">
            <FaMessage />
          </span>
          <span className="text">{CommentCount || '-'}</span>
        </div>
        <div className={classNames('icon-text', { '--active': isLiked })} onClick={likeHandler}>
          <span className="icon">
            <FaHeart />
          </span>
          <span className="text">{LikesCount || '-'}</span>
        </div>
        <div className={classNames('icon-text', { '--active': isCollected })} onClick={collectHandler}>
          <span className="icon">
            <FaStar />
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
                  <FaInfo />
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
                      IsOriginal == 2 ? { title: '原创', href: `/pv/tag?type=video&is_original=2&title=原创` } : []
                    )
                : []
            }
          />
        </div>
      ) : (
        <VideoMetaSkeleton className="video-info__skeleton" height={'200px'} />
      )}

      <Comment id={id} />
      <PlayerInfo post={state} show={modal} onChange={setModal} />
    </div>
  )
}
