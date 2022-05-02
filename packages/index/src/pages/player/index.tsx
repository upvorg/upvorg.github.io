import { useEffect, useState } from 'react'
import { axios, getTimeDistance } from '@web/shared'
import toast from 'react-hot-toast'
import Comment from '../../components/comment'
import GriffithPlayer from '../../components/player'
import { VideoMetaSkeleton } from '../../skeleton/CommentSkeleton'
import { Helmet } from 'react-helmet'
import './index.scss'

export default function PlayerPage({ id }: any) {
  const [state, setState] = useState<R.Post>({} as R.Post)
  const [video, setVideo] = useState<R.Video[]>([
    // {
    //   content:
    //     'https://svp.cdn.qq.com/0b53muajsaaakmafje2sk5rjazodtfsqbgia.f0.mp4?dis_k=5321f1f6c51f0bfccd8feffa4fa72184&dis_t=1649593655'
    // }
    // {
    //   id: 1,
    //   content: 'https://s2.monidai.com/ppvod/DADA21B4B4C28DFE8F6E69F90D490E59.m3u8'
    // },
    // {
    //   id: 2,
    //   content: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_sd.mp4'
    // }
  ])
  const urlSearchParams = new URLSearchParams(window.location.search)
  const queryParams = Object.fromEntries(urlSearchParams.entries())
  const [currentIndex, setCurrentIndex] = useState(() => +queryParams.v - 1 || 0)

  useEffect(() => {
    Promise.all([axios.get(`/post/${id}`), axios.get(`/post/${id}/videos`)]).then(([a, b]) => {
      if (!a.data) {
        toast.error('视频不见了', {
          duration: 90000,
          position: 'top-center'
        })
        return
      }
      a.data && setState(a.data)
      b.data.sort((a: { oid: number }, b: { oid: number }) => a.oid - b.oid)
      b.data && setVideo(b.data)
    })
    axios.get(`/post/${id}/pv`)
  }, [])

  const { Title, Creator, Tags, Meta, Hits, CommentCount } = state

  return (
    <>
      <Helmet>
        <title>{`${Title || '少女祈祷中···'} ${
          Creator?.Nickname ? ` - ${Creator.Nickname}` : ''
        }`}</title>
      </Helmet>
      <div className="player-header">
        <div className="player-header__player">
          <GriffithPlayer src={video[currentIndex]?.VideoUrl} />
        </div>
        <div className="player-header__r">
          <div className="video-author">
            <img
              src={state.Creator?.Avatar || 'https://upv.life/ic_launcher_round.png'}
              alt={state.Creator?.Nickname}
            />
            <div className="video-author__info">
              <div className="video-author__info__name">{state.Creator?.Nickname}</div>
              <div className="video-author__info__bio">{state.Creator?.Bio}</div>
            </div>
          </div>
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
                        className={'list-item ' + (i === currentIndex ? 'cursor' : '')}
                        onClick={() => setCurrentIndex(i)}
                        title={item.Title}
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
      {state.ID ? (
        <div className="video-info">
          <div>
            <h3 className="video-info__title">{state.Title || '少女祈祷中···'}</h3>
            <div className="video-meta">
              {/* <span>{state.creator_nickname || '-'}</span> */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.67735 4.2798C5.98983 4.1725 7.85812 4.0625 10 4.0625C12.1421 4.0625 14.0105 4.17252 15.323 4.27983C16.2216 4.3533 16.9184 5.04049 16.9989 5.9318C17.0962 7.00837 17.1875 8.43614 17.1875 10C17.1875 11.5639 17.0962 12.9916 16.9989 14.0682C16.9184 14.9595 16.2216 15.6467 15.323 15.7202C14.0105 15.8275 12.1421 15.9375 10 15.9375C7.85812 15.9375 5.98983 15.8275 4.67735 15.7202C3.77861 15.6467 3.08174 14.9593 3.00119 14.0678C2.90388 12.9908 2.8125 11.5627 2.8125 10C2.8125 8.43727 2.90388 7.00924 3.00119 5.93221C3.08174 5.04067 3.77861 4.35327 4.67735 4.2798ZM10 2.8125C7.81674 2.8125 5.9136 2.92456 4.5755 3.03395C3.07738 3.15643 1.8921 4.31616 1.75626 5.81973C1.65651 6.92379 1.5625 8.39058 1.5625 10C1.5625 11.6094 1.65651 13.0762 1.75626 14.1803C1.8921 15.6838 3.07738 16.8436 4.5755 16.966C5.9136 17.0754 7.81674 17.1875 10 17.1875C12.1835 17.1875 14.0868 17.0754 15.4249 16.966C16.9228 16.8436 18.108 15.6841 18.2438 14.1807C18.3435 13.077 18.4375 11.6105 18.4375 10C18.4375 8.38948 18.3435 6.92296 18.2438 5.81931C18.108 4.31588 16.9228 3.15645 15.4249 3.03398C14.0868 2.92458 12.1835 2.8125 10 2.8125ZM12.1876 10.722C12.7431 10.4013 12.7431 9.59941 12.1876 9.27866L9.06133 7.47373C8.50577 7.15298 7.81133 7.55392 7.81133 8.19542V11.8053C7.81133 12.4468 8.50577 12.8477 9.06133 12.527L12.1876 10.722Z"
                  fill="var(--text3)"
                ></path>
              </svg>
              <span>{Hits || '-'}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 4.0625C7.85812 4.0625 5.98983 4.1725 4.67735 4.2798C3.77861 4.35327 3.08174 5.04067 3.00119 5.93221C2.90388 7.00924 2.8125 8.43727 2.8125 10C2.8125 11.5627 2.90388 12.9908 3.00119 14.0678C3.08174 14.9593 3.77861 15.6467 4.67735 15.7202C5.98983 15.8275 7.85812 15.9375 10 15.9375C12.1421 15.9375 14.0105 15.8275 15.323 15.7202C16.2216 15.6467 16.9184 14.9595 16.9989 14.0682C17.0962 12.9916 17.1875 11.5639 17.1875 10C17.1875 8.43614 17.0962 7.00837 16.9989 5.9318C16.9184 5.04049 16.2216 4.3533 15.323 4.27983C14.0105 4.17252 12.1421 4.0625 10 4.0625ZM4.5755 3.03395C5.9136 2.92456 7.81674 2.8125 10 2.8125C12.1835 2.8125 14.0868 2.92458 15.4249 3.03398C16.9228 3.15645 18.108 4.31588 18.2438 5.81931C18.3435 6.92296 18.4375 8.38948 18.4375 10C18.4375 11.6105 18.3435 13.077 18.2438 14.1807C18.108 15.6841 16.9228 16.8436 15.4249 16.966C14.0868 17.0754 12.1835 17.1875 10 17.1875C7.81674 17.1875 5.9136 17.0754 4.5755 16.966C3.07738 16.8436 1.8921 15.6838 1.75626 14.1803C1.65651 13.0762 1.5625 11.6094 1.5625 10C1.5625 8.39058 1.65651 6.92379 1.75626 5.81973C1.8921 4.31616 3.07738 3.15643 4.5755 3.03395ZM5 8.4375C5 8.09232 5.27982 7.8125 5.625 7.8125H5.9375C6.28268 7.8125 6.5625 8.09232 6.5625 8.4375C6.5625 8.78268 6.28268 9.0625 5.9375 9.0625H5.625C5.27982 9.0625 5 8.78268 5 8.4375ZM7.5 8.4375C7.5 8.09232 7.77982 7.8125 8.125 7.8125H13.125C13.4702 7.8125 13.75 8.09232 13.75 8.4375C13.75 8.78268 13.4702 9.0625 13.125 9.0625H8.125C7.77982 9.0625 7.5 8.78268 7.5 8.4375ZM6.875 10.9375C6.52982 10.9375 6.25 11.2173 6.25 11.5625C6.25 11.9077 6.52982 12.1875 6.875 12.1875H7.1875C7.53268 12.1875 7.8125 11.9077 7.8125 11.5625C7.8125 11.2173 7.53268 10.9375 7.1875 10.9375H6.875ZM9.375 10.9375C9.02982 10.9375 8.75 11.2173 8.75 11.5625C8.75 11.9077 9.02982 12.1875 9.375 12.1875H14.375C14.7202 12.1875 15 11.9077 15 11.5625C15 11.2173 14.7202 10.9375 14.375 10.9375H9.375Z"
                  fill="var(--text3)"
                ></path>
              </svg>
              <span>{CommentCount || '-'}</span>
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
            <a className="video-info__tag" href={`/post/tag?sort=${Meta?.Genre}`} target="_blank">
              {Meta?.Genre}
            </a>
            {Tags &&
              Tags.trim()
                .split(' ')
                .map((tag: any, i: number) => (
                  <a
                    className="video-info__tag"
                    key={i}
                    style={{ marginRight: '.5em' }}
                    href={`/post/tag?tag=${tag}`}
                    target="_blank"
                  >
                    {tag}
                  </a>
                ))}
          </div>
        </div>
      ) : (
        <VideoMetaSkeleton className="video-info__skeleton" height={'200px'} />
      )}

      <Comment id={id} />
    </>
  )
}
