import './index.scss'

import { useEffect, useRef } from 'react'

import AspectRatio from '@web/shared/components/AspectRatio'
import { getTimeDistance } from '@web/shared/utils/date'
import classNames from 'classnames'

const TEXT_COVER_LENGTH = 6

let _IntersectionObserver: IntersectionObserver

const nativeLazySupported = 'loading' in HTMLImageElement.prototype

if (!nativeLazySupported) {
  _IntersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const container = entry.target as HTMLAnchorElement
          _IntersectionObserver.unobserve(container)
          const img = container.querySelector('img')!
          img.src = img.dataset.src!
          img.onload = () => {
            container.querySelector('.upv-video-card__loading')!.classList.add('upv-video-card__loading--hidden')
          }
          img.onerror = () => {
            container.querySelector('.upv-video-card__error')!.classList.add('upv-video-card__error--show')
          }
        }
      })
    },
    { threshold: [0.15] }
  )
}

export default function VideoCard({ info }: { info: R.Post }) {
  const target = info.Type === 'video' ? `/v/${info.ID}` : `/p/${info.ID}`
  const $el = useRef<HTMLAnchorElement | null>(null)

  useEffect(() => {
    if (_IntersectionObserver && $el.current?.dataset.cover) {
      _IntersectionObserver.observe($el.current)
      return () => {
        if ($el.current) {
          _IntersectionObserver.unobserve($el.current)
          $el.current.querySelector('.upv-video-card__loading')!.classList.remove('upv-video-card__loading--hidden')
          $el.current.querySelector('.upv-video-card__error')!.classList.remove('upv-video-card__error--show')
        }
      }
    }
  }, [$el, info])

  return (
    <div className="upv-video-card">
      <a href={target} ref={$el} data-cover={info.Cover} title={info.Title}>
        <AspectRatio ratio={3 / 4}>
          {info.Cover && (
            <>
              <img
                loading="lazy"
                className="upv-video-card__image"
                alt={info.Title}
                title={info.Title}
                data-src={info.Cover}
                src={nativeLazySupported ? info.Cover : undefined}
              />
              {!nativeLazySupported && [
                <div className="upv-video-card__loading">LOADING</div>,
                <div className="upv-video-card__error">ERROR</div>
              ]}
            </>
          )}

          <div
            className={classNames('upv-video-card__nocover', {
              'upv-video-card__nocover--show': !info.Cover
            })}
          >
            <span className={classNames({ large: info.Title.length <= 4 })}>
              {info.Title.slice(0, TEXT_COVER_LENGTH)}
            </span>
          </div>
        </AspectRatio>
      </a>
      <div className="upv-video-card__content">
        <div className="upv-video-card__content__title">{info.Title}</div>
        <div className="upv-video-card__content__author">
          <span>{info.Creator?.Nickname || '-'}</span>
          {' · '}
          <span>{getTimeDistance(info.CreatedAt)}</span>
        </div>
      </div>
    </div>
  )
}
