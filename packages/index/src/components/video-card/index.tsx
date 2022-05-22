import { useEffect, useRef } from 'react'
import { GetSimplifyDate } from '@web/shared/utils/date'
import AspectRatio from '@web/shared/components/AspectRatio'
import './index.scss'

const _IntersectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const container = entry.target as HTMLAnchorElement
        _IntersectionObserver.unobserve(container)
        const img = container.querySelector('img')!
        if (!img.dataset.src) {
          container
            .querySelector('.upv-video-card__nocover')!
            .classList.add('upv-video-card__nocover--show')
          return
        }

        img.src = img.dataset.src!
        img.onload = () => {
          container
            .querySelector('.upv-video-card__loading')!
            .classList.add('upv-video-card__loading--hidden')
        }
        img.onerror = () => {
          container
            .querySelector('.upv-video-card__error')!
            .classList.add('upv-video-card__error--show')
        }
      }
    })
  },
  { threshold: [0.15] }
)

export default function VideoCard({ info }: { info: R.Post }) {
  const target = info.Type === 'video' ? `/v/${info.ID}` : `/p/${info.ID}`
  const $el = useRef<HTMLAnchorElement | null>(null)

  useEffect(() => {
    $el.current && _IntersectionObserver.observe($el.current)
    return () => {
      if ($el.current) {
        _IntersectionObserver.unobserve($el.current)
        $el.current
          .querySelector('.upv-video-card__loading')!
          .classList.remove('upv-video-card__loading--hidden')
        $el.current
          .querySelector('.upv-video-card__error')!
          .classList.remove('upv-video-card__error--show')
        $el.current
          .querySelector('.upv-video-card__nocover')!
          .classList.remove('upv-video-card__nocover--show')
      }
    }
  }, [$el, info])

  return (
    <div className="upv-video-card">
      <a href={target} target="_blank" ref={$el}>
        <AspectRatio ratio={3 / 4}>
          <img
            className="upv-video-card__image"
            alt={info.Title}
            title={info.Title}
            data-src={info.Cover}
          />
          <div className="upv-video-card__loading">LOADING ···</div>
          <div className="upv-video-card__error">ERROR</div>
          <div className="upv-video-card__nocover">NO COVER</div>
        </AspectRatio>
      </a>
      <div className="upv-video-card__content">
        <div className="upv-video-card__content__title">{info.Title}</div>
        <div className="upv-video-card__content__subtitle">
          <span>{info.Creator?.Nickname || '-'}</span>
          {' · '}
          <span>{GetSimplifyDate(info.CreatedAt)}</span>
        </div>
      </div>
    </div>
  )
}
