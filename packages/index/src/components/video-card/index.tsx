import { useCallback, useRef } from 'react'
import { GetSimplifyDate } from '@web/shared/utils/date'
import AspectRatio from '@web/shared/components/AspectRatio'
import './index.scss'

export default function VideoCard({ info }: { info: R.Post }) {
  const target = info.Type === 'video' ? `/v/${info.ID}` : `/p/${info.ID}`
  const observer = useRef<IntersectionObserver | null>()

  const ref = useCallback((element: HTMLImageElement) => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          observer.current?.unobserve(img)
          const { src, dataset } = img
          img.src = dataset.src!
          img.onerror = () => {
            img.src = src
          }
        }
      },
      { threshold: [0.15] }
    )

    observer.current!.observe(element)
  }, [])

  return (
    <div className="upv-video-card">
      <div className="upv-video-card__wrap">
        <a href={target} target="_blank">
          <AspectRatio ratio={3 / 4}>
            <img
              ref={ref}
              className="upv-video-card__image"
              alt={info.Title}
              title={info.Title}
              data-src={info.Cover}
              src="https://s2.loli.net/2022/04/15/m8MDhjliOSHtXnR.jpg"
            />
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
    </div>
  )
}
