import { getCoverFormMd } from '@web/shared'

import './index.scss'

const ImageType = {
  webp: 'image/webp',
  jpg: 'image/jpeg',
  png: 'image/png',
  gif: 'image/gif',
  jpeg: 'image/jpeg',
  svg: 'image/svg+xml'
}

export default function VideoCard({ info }: { info: R.Post }) {
  const { url, type } = getCoverFormMd(info.Content)
  const target = info.Type === 'video' ? `/bangumi/play/${info.ID}` : `/post/${info.ID}`

  return (
    <div className="upv-video-card">
      <div className="upv-video-card__wrap">
        <a href={target} target="_blank">
          <div className="upv-video-card__image">
            <div className="upv-video-card__image--wrap">
              <picture
                onError={(e: any) => {
                  e.target.src = 'https://s2.loli.net/2022/04/15/m8MDhjliOSHtXnR.jpg'
                }}
              >
                <source
                  srcSet={url}
                  type={ImageType[type! as keyof typeof ImageType]}
                  title={info.Title}
                />
                <img src="https://s2.loli.net/2022/04/15/m8MDhjliOSHtXnR.jpg" alt={info.Title} />
              </picture>
            </div>
          </div>
        </a>
        <div className="upv-video-card__content">
          <div className="upv-video-card__content__title">{info.Title}</div>
          <div className="upv-video-card__content__subtitle">{info.Creator.Nickname}</div>
        </div>
      </div>
    </div>
  )
}
