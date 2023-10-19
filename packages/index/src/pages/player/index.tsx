import { useCallback, useEffect, useRef, useState } from 'react'
import { getTimeDistance } from '@web/shared/utils/date'
import ReactPlayer, { PlayerEvent, Player, isMobile } from '@web/shared/components/player/OPlayer'
import { axios, corsAxios } from '@web/shared/constants'
import toast from 'react-hot-toast'
import classNames from 'classnames'
import { Helmet } from 'react-helmet'
import useLastPlayed from '../../hooks/use-last-played'
import Comment from '../../components/comment'
import { VideoMetaSkeleton } from '../../skeleton/CommentSkeleton'
import { Tags } from '../../components/tag/Tag'
import PlayerInfo from './info'
import { clicliAdapter } from '../../enime.adp'

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

  const player = useRef<Player>(null)
  const [isAdp, setIsAdp] = useState(false)
  const [source, setSource] = useState<any>({ poster: 'https://api.imlazy.ink/img', title: 'LOADING ...' })
  const [displayEpBar, setDisplayEpBar] = useState(true)

  useEffect(() => {
    // axios.get(`/post/${id}`)
    import(`../../mock/post/${id}.json`)
      .catch(() => {
        setIsAdp(true)
        throw new Error('')
      })
      .then((_) => {
        if (!_.data || _.data.Type !== 'video') {
          toast.error('视频不见了', {
            duration: 90000,
          })
          return
        }

        if (!_.err) {
          _.data && setState(_.data)
          _.data.IsLiked == 2 && setIsLiked(true)
          _.data.IsCollected == 2 && setIsCollected(true)

          // axios.get(`/post/${id}/videos`)

          if (_.data.videos) {
            setVideo(_.data.videos)
            return
          }

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
        poster: 'https://api.imlazy.ink/img',
      })
  }, [lastEpisode, video])

  useEffect(() => {
    if (document.location.search.includes('live')) {
      setVideo([
        { Episode: 1, Title: 'live', VideoUrl: `https://www.tm0.net/live/uu${id}.m3u8?hls_ctx=85097108` } as any,
      ])
      return
    }
    if (!isAdp) return
    player.current?.context.ui?.menu.unregister('Source')
    corsAxios.get(`https://www.clicli.cc/post/${id}`)
      .then((it) => it.json())
      .then((it) => clicliAdapter(it.result))
      .then((it) => {
        setState(it)
        setVideo(
          it.videos
            .split('\n')
            .filter(Boolean)
            .map((v, i) => {
              const [chunkString, src] = v.split('$')
              const [Episode, Title] = chunkString.split(' ')
              return { Episode: Title ? Episode : i, Title: Title || Episode, VideoUrl: src }
            })
        )
      })
  }, [isAdp])

  useEffect(() => {
    if (isMobile) return
    player.current?.context.ui.menu.register({
      name: 'Toggle Ep-Bar',
      position: 'top',
      icon: `<svg style="transform: scale(1.2);" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M288 416v320h448V416H288z m0-64h448V288H288v64zM256 224h512a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H256a32 32 0 0 1-32-32V256a32 32 0 0 1 32-32z m384 224a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0v-192a32 32 0 0 1 32-32z"></path></svg>`,
      onClick(svg: SVGAElement) {
        setDisplayEpBar((it) => {
          if (it) {
            svg.style.opacity = '0.4'
          } else {
            svg.style.opacity = '1'
          }
          return !it
        })
      },
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

  const onEvent = ({ type, payload }: PlayerEvent) => {
    const time = payload?.target?.currentTime
    if (type == 'timeupdate') {
      if (!(time < 1)) {
        update(id, lastEpisode, time * 1000)
      }
    } else if (type == 'ended') {
      update(id, lastEpisode + 1, 0)
    } else if (type == 'next') {
      if (video[lastEpisode + 1]) {
        update(id, lastEpisode + 1, 0)
      } else {
        player.current!.emit('notice', { text: 'No next ep' })
      }
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
    Cover,
  } = state

  return (
    <div className={classNames('player', { 'no-side': !displayEpBar })}>
      <Helmet>
        <title>{`${Title || ''} - UPV - free animes no ads`}</title>
        <meta name="description" content={Content?.substring(0, 200)} />
        {/* <meta name="referrer" content="no-referrer-when-downgrade" /> */}
        <meta name="keywords" content={`${Title},${Meta?.Genre},${tags?.split(' ')}`} />
        <meta name="author" content={Creator?.Nickname} />

        <meta property="og:title" content={`${Title} - UPV - free animes no ads`} />
        <meta property="og:type" content="video" />
        <meta property="og:image" content={Cover} />
        <meta property="og:url" content={location.origin + location.pathname} />
      </Helmet>
      <div className="player-header">
        <div className="player-header__player">
          <ReactPlayer
            ref={player}
            autoplay={true}
            source={source}
            onEvent={onEvent}
            duration={lastDuration}
            isLive={id == 'iptv' || document.location.search.includes('live')}
          />
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
                          cursor: i === lastEpisode,
                        })}
                        onClick={() => update(id, i, 0)}
                        title={item.Title}
                        {...(item.Title && { 'data-tooltip': item.Title })}
                      >
                        <span> {item.Episode || i + 1}</span>
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
                      href: `/pv/tag?type=video&title=${tag}`,
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
      <PlayerInfo post={state} show={modal} onChange={setModal} />
    </div>
  )
}
