import { useCallback } from 'react'
import { GetSimplifyDate } from '@web/shared/utils/date'
import AspectRatio from '@web/shared/components/AspectRatio'
import './index.scss'

const _IntersectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const container = entry.target as HTMLAnchorElement
        const img = container.querySelector('img')!
        _IntersectionObserver.unobserve(img)

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

  const ref = useCallback((element: HTMLAnchorElement) => {
    element && _IntersectionObserver.observe(element)
  }, [])

  return (
    <div className="upv-video-card">
      <a href={target} target="_blank" ref={ref}>
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
