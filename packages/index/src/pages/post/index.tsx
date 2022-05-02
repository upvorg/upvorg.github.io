import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import classNames from 'classnames'
import { Helmet } from 'react-helmet'
import copyTextToClipboard from 'copy-text-to-clipboard'
import { axios, getCoverFormMd, getTimeDistance, removeImagesFormMd } from '@web/shared'
import Comment from '../../components/comment'
import Markdown from '../../components/markdown'
import { Postkeleton } from '../..//skeleton/CommentSkeleton'

import './index.scss'

const PostPage: React.FC = ({ id }: any) => {
  const [state, setState] = useState<any>({})
  const [pv, setPv] = useState<number>(0)
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const [commentCount, setCommentCount] = useState<number>(0)

  const cover = useRef<ReturnType<typeof getCoverFormMd>>()
  const hasCover = cover.current && !cover.current._df
  const isMobile = useMemo(() => window.innerWidth < 991, [])

  useEffect(() => {
    Promise.all([axios.get(`/post/${id}`), axios.get(`/pv/${id}`)]).then(([a, p]) => {
      if (a.data?.type != 'post' && !__DEV__) {
        toast.error('文章不见了', {
          duration: 90000,
          position: 'top-center'
        })
        return
      }
      a.data && setState(a.data)
      a.data.liked && setIsLiked(true)
      p.data && setPv(p.data.pv)
      const { title, creator_nickname } = a.data
      document.title = `${title || '少女祈祷中···'} ${
        creator_nickname ? ` - ${creator_nickname}` : ''
      }`
      cover.current = getCoverFormMd(a.data.content, { strict: true })
    })
  }, [])

  useEffect(() => {
    if (!hasCover || isMobile) return
    const scrollHandler = () => {
      if ($cover!.getBoundingClientRect().top <= -200) {
        $side.classList.remove('post-side--hide')
      } else {
        $side.classList.add('post-side--hide')
      }
    }

    const $side = document.querySelector('.post-side')!
    const $cover = document.querySelector('.post-container__cover')
    document.getElementById('root')!.addEventListener('scroll', scrollHandler)

    return () => {
      $cover && document.getElementById('root')!.removeEventListener('scroll', scrollHandler)
    }
  }, [state])

  const shareHandler = () => {
    if (
      copyTextToClipboard(`${state.title} - ${state.creator_nickname} \r\n${window.location.href}`)
    ) {
      toast.success('copied!')
    } else {
      toast.error('write to clipboard failed')
    }
  }

  const likeHandler = useCallback(() => {
    const c = isLiked ? -1 : 1
    setIsLiked((isLiked) => !isLiked)
    setState((state: any) => ({ ...state, liked_count: state.liked_count + c }))
    axios
      .post(isLiked ? `/post/unlike/${id}` : `/post/like/${id}`)
      .then((_) => {
        if (_.code != 200) {
          setIsLiked((isLiked) => !isLiked)
          setState((state: any) => ({ ...state, liked_count: state.liked_count - c }))
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
          setState((state: any) => ({ ...state, liked_count: state.liked_count - 1 }))
        }, 300)
      })
  }, [state, isLiked])

  const { title, creator_nickname } = state

  return (
    <>
      <Helmet>
        <title>{`${title || '少女祈祷中···'} ${
          creator_nickname ? ` - ${creator_nickname}` : ''
        }`}</title>
      </Helmet>
      {hasCover && (
        <div
          className="post-container__cover"
          style={{
            background: `url(${cover.current!.url}) no-repeat top/cover #f4f5f7`
          }}
        />
      )}

      <div className={classNames('post-container', { '--no-cover': !hasCover })}>
        <div
          className={classNames('post-side', {
            'post-side--hide': hasCover && !isMobile,
            '--o': isMobile && isFocus
          })}
        >
          <div
            className={classNames('post-side-action', { '--l': isLiked })}
            role="button"
            onClick={likeHandler}
          >
            <div className="side-action-icon">
              <svg
                className="side-action__icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="8638"
                width="200"
                height="200"
              >
                <path
                  d="M64.67 512c2.03-148.27 27.78-271.04 103.07-344.26C240.96 92.45 363.73 66.7 512 64.67c148.27 2.03 271.04 27.78 344.26 103.07C931.55 240.96 957.3 363.73 959.33 512c-2.03 148.27-27.78 271.04-103.07 344.26C783.04 931.55 660.27 957.3 512 959.33c-148.27-2.03-271.04-27.78-344.26-103.07C92.45 783.04 66.7 660.27 64.67 512z"
                  p-id="8639"
                  data-spm-anchor-id="a313x.7781069.0.i2"
                  // fill="#6668ab"
                ></path>
                <path
                  d="M344.25 391.82c-4.3 0-8.62-1.32-12.32-4.07-9.21-6.81-11.16-19.8-4.35-29.01a133.117 133.117 0 0 0 24.14-56.43c1.94-11.29 12.59-18.98 23.97-16.9 11.29 1.94 18.86 12.68 16.9 23.97-2.39 13.87-6.47 27.4-12.09 40.24a174.495 174.495 0 0 1-19.57 33.78c-4.05 5.52-10.33 8.42-16.68 8.42z"
                  fill={isLiked ? '#fff' : '#6668ab'}
                  p-id="8640"
                ></path>
                <path
                  d="M479.65 371.62H369.82c-11.45 0-20.75-9.29-20.75-20.75s9.29-20.75 20.75-20.75h109.83c11.45 0 20.75 9.29 20.75 20.75s-9.3 20.75-20.75 20.75zM492.04 438.38H334.28c-11.45 0-20.75-9.29-20.75-20.75s9.29-20.75 20.75-20.75h157.76c11.45 0 20.75 9.29 20.75 20.75s-9.3 20.75-20.75 20.75z"
                  fill={isLiked ? '#fff' : '#6668ab'}
                  p-id="8641"
                ></path>
                <path
                  d="M434.46 438.11c-11.45 0-20.75-9.29-20.75-20.75v-101.7c0-11.45 9.29-20.75 20.75-20.75s20.75 9.29 20.75 20.75v101.7c-0.01 11.46-9.3 20.75-20.75 20.75zM533.12 391.82c-4.3 0-8.62-1.32-12.32-4.07-9.21-6.81-11.16-19.8-4.35-29.01a133.117 133.117 0 0 0 24.14-56.43c1.94-11.29 12.64-18.98 23.97-16.9 11.29 1.94 18.85 12.68 16.9 23.97-2.39 13.87-6.47 27.4-12.09 40.24a174.495 174.495 0 0 1-19.57 33.78c-4.05 5.52-10.33 8.42-16.68 8.42z"
                  fill={isLiked ? '#fff' : '#6668ab'}
                  p-id="8642"
                ></path>
                <path
                  d="M687.54 371.16H563.35c-11.45 0-20.75-9.29-20.75-20.75s9.29-20.75 20.75-20.75h124.19c11.45 0 20.75 9.29 20.75 20.75s-9.29 20.75-20.75 20.75zM702.21 438.38H544.46c-11.45 0-20.75-9.29-20.75-20.75s9.29-20.75 20.75-20.75h157.76c11.45 0 20.75 9.29 20.75 20.75s-9.31 20.75-20.76 20.75z"
                  fill={isLiked ? '#fff' : '#6668ab'}
                  p-id="8643"
                ></path>
                <path
                  d="M615.93 438.11c-11.45 0-20.75-9.29-20.75-20.75v-101.7c0-11.45 9.29-20.75 20.75-20.75 11.45 0 20.75 9.29 20.75 20.75v101.7c0 11.46-9.3 20.75-20.75 20.75zM334.29 541.84c-6.79 0-13.47-3.34-17.44-9.48-6.21-9.63-3.46-22.46 6.16-28.69 9.35-6.04 22.58-16.91 32.59-34.37 10.68-18.65 13.1-36.79 13.25-48.73 0.14-11.37 9.4-20.49 20.75-20.49h0.26c11.45 0.15 20.62 9.55 20.49 21-0.2 16.84-3.63 42.46-18.73 68.84-14.15 24.69-32.86 40.06-46.07 48.6a20.695 20.695 0 0 1-11.26 3.32zM456.16 511.15c-4.36 0-8.67-1.38-12.28-4.02a20.775 20.775 0 0 1-8.47-16.72v-62.24c0-11.45 9.29-20.75 20.75-20.75s20.75 9.29 20.75 20.75v34l8.93-2.8c10.94-3.46 22.57 2.66 26 13.6 3.42 10.93-2.66 22.57-13.6 26l-35.87 11.24c-2.03 0.63-4.13 0.94-6.21 0.94z"
                  fill={isLiked ? '#fff' : '#6668ab'}
                  p-id="8644"
                ></path>
                <path
                  d="M536.7 527.61c-5.78 0-11.52-2.39-15.63-7.08-7.55-8.63-6.67-21.73 1.94-29.28 8.7-7.6 15.82-16.56 21.15-26.58 9.49-17.86 11.21-35.21 10.97-46.61-0.23-11.47 8.86-20.93 20.31-21.18 11.63-0.31 20.93 8.86 21.18 20.31 0.34 16.34-2.15 41.22-15.83 66.95-7.71 14.49-17.95 27.39-30.44 38.33-3.94 3.46-8.8 5.14-13.65 5.14zM686.98 523.41c-3.9 0-7.5-0.23-10.59-0.42-13.1-0.8-32.87-2.01-47.66-18.53-13.32-14.86-14.42-32.83-13.91-42.22l-0.03-41.13c0-11.45 9.29-20.75 20.75-20.75 11.45 0 20.75 9.29 20.75 20.75v42.28c-0.16 3.55-0.11 9.54 3.35 13.38 3.09 3.46 8.51 4.15 19.29 4.81 6.47 0.38 15.32 0.95 17.84-1.7 1.03-1.07 1.73-3.05 1.99-5.59 1.13-11.4 11.22-19.92 22.7-18.57 11.4 1.13 19.72 11.3 18.57 22.7-1.19 11.83-5.74 22.22-13.18 30.04-12.07 12.7-27.49 14.95-39.87 14.95zM643.03 653.64c-11.45 0-20.75-9.29-20.75-20.75v-55.9H410.35v55.9c0 11.45-9.29 20.75-20.75 20.75s-20.75-9.29-20.75-20.75v-76.65c0-11.45 9.29-20.75 20.75-20.75h253.42c11.45 0 20.75 9.29 20.75 20.75v76.65c0 11.46-9.29 20.75-20.74 20.75z"
                  fill={isLiked ? '#fff' : '#6668ab'}
                  p-id="8645"
                ></path>
                <path
                  d="M358.89 732.59c-6.42 0-11.87-0.3-16.13-0.65-11.41-0.97-19.89-11.01-18.94-22.42 0.97-11.43 11.2-19.68 22.42-18.94 18.63 1.63 66.56 1.7 108.93-30.9 25.45-19.6 39.44-43.69 46.68-60.44 4.55-10.51 16.73-15.37 27.28-10.81 10.52 4.55 15.36 16.76 10.81 27.28-13.18 30.47-33.74 57.04-59.46 76.84-44.1 33.96-92.59 40.04-121.59 40.04z"
                  fill={isLiked ? '#fff' : '#6668ab'}
                  p-id="8646"
                ></path>
                <path
                  d="M685.65 738.92c-3.93 0-7.9-1.11-11.43-3.43a525.948 525.948 0 0 0-70.95-39.36 526.58 526.58 0 0 0-94.26-32.71c-11.13-2.7-17.95-13.93-15.24-25.07 2.71-11.13 13.82-17.95 25.07-15.24a570.02 570.02 0 0 1 101.69 35.28 570.902 570.902 0 0 1 76.57 42.46c9.55 6.32 12.18 19.19 5.88 28.76-4 6.04-10.6 9.31-17.33 9.31z"
                  fill={isLiked ? '#fff' : '#6668ab'}
                  p-id="8647"
                ></path>
              </svg>
            </div>
            <div className="side-action__text">
              {state.liked_count ? `获赞 ${state.liked_count}` : '点赞'}
            </div>
          </div>
          <div className="post-side-action share" role="button" onClick={shareHandler}>
            <div className="side-action-icon">
              <svg
                className="side-action__icon share"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="30471"
                width="200"
                height="200"
              >
                <path
                  d="M860.41 192.73L730.5 825.4a39.87 39.87 0 0 1-60.19 25.78l-139.24-87.06a11.18 11.18 0 0 0-13.82 1.58l-90.82 90.82c-16.16 16.15-43.78 4.71-43.78-18.14 0 0 0.4-121.39 0.86-162.09a33.29 33.29 0 0 1 9.11-22.5l318.5-338.49-13.83-6.91S420.78 558.83 348.68 624.2a30.41 30.41 0 0 1-36.68 3.18l-130.3-81.51c-26.48-16.56-24.5-55.76 3.52-69.56l636.43-313.52c20.35-10.02 43.35 7.73 38.76 29.94z"
                  p-id="30472"
                  data-spm-anchor-id="a313x.7781069.0.i12"
                  fill="#6668ab"
                ></path>
              </svg>
            </div>
            <div className="side-action__text">分享</div>
          </div>
        </div>
        {state.id ? (
          <>
            <h2 className="video-info__title post-title">{state.title}</h2>
            <div className="video-info ">
              <div className="video-author">
                <img
                  src={state.creator_avatar || 'https://upv.life/ic_launcher_round.png'}
                  alt={state.creator_nickname}
                />
              </div>
              <div>
                <h3 className="video-info__title">{state.creator_nickname || '少女祈祷中···'}</h3>
                <div className="video-meta">
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
                  <span>{state.create_time ? getTimeDistance(state.create_time) : '-'}</span>
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
                  <span>{pv || '-'}</span>
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
                  <span>{commentCount || '-'}</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Postkeleton />
        )}
        <Markdown type="render" value={removeImagesFormMd(state.content)} />
        <Comment
          id={id}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onLoad={(c) => setCommentCount(c.length)}
        />
      </div>
    </>
  )
}

export default PostPage
