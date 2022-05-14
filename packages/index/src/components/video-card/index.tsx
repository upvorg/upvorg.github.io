import { GetSimplifyDate } from '@web/shared/utils/date'
import './index.scss'

export default function VideoCard({ info }: { info: R.Post }) {
  const target = info.Type === 'video' ? `/v/${info.ID}` : `/p/${info.ID}`

  return (
    <div className="upv-video-card">
      <div className="upv-video-card__wrap">
        <a href={target} target="_blank">
          <div className="upv-video-card__image">
            <div className="upv-video-card__image--wrap">
              <picture>
                <source srcSet={info.Cover} title={info.Title} />
                <img src="https://s2.loli.net/2022/04/15/m8MDhjliOSHtXnR.jpg" alt={info.Title} />
              </picture>
            </div>
          </div>
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
