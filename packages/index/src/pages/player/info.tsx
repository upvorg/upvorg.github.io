import AspectRatio from '@web/shared/components/AspectRatio'
import { Markdown } from '@web/shared/components/markdown'
import { DAY_NAME } from '@web/shared/constants'
import classNames from 'classnames'
import './info.scss'

export default function PlayerInfo({
  post,
  show,
  onChange,
}: {
  show: boolean
  onChange: (f: boolean) => void
  post: R.Post
}) {
  const { Title, Content, IsOriginal, Tags } = post
  const { Region, Genre, IsEnd, UpdatedDate, PublishDate } = post.Meta! || {}
  return (
    <div className={classNames('PlayerInfo modal', { 'is-active': show })}>
      <div className="modal-background" onClick={() => onChange(false)}></div>
      <div className="modal-card">
        <button className="delete" aria-label="close" onClick={() => onChange(false)}></button>

        <section className="modal-card-body">
          <div className="post-head">
            <div>
              <AspectRatio ratio={3 / 4} mw="200px">
                <img src={post.Cover} alt={post.Title} />
              </AspectRatio>
            </div>
            <div className="post-info">
              <h3 className="title">{Title}</h3>
              <div className="post-info-item is-h">
                <div className="post-info-item">
                  <label className="name">地区</label>
                  <div className="body">{Region || '-'}</div>
                </div>
                <div className="post-info-item">
                  <label className="name">类型</label>
                  <div className="body">{Genre}</div>
                </div>
              </div>
              <div className="post-info-item is-h">
                <div className="post-info-item">
                  <label className="name">年份</label>
                  <div className="body">{(PublishDate && new Date(PublishDate).getFullYear() + ' 年') || '-'}</div>
                </div>
                <div className="post-info-item">
                  <label className="name">完结</label>
                  <div className="body">{IsEnd == 2 ? '是' : '否'}</div>
                </div>
              </div>
              <div className="post-info-item">
                <label className="name">更新</label>
                <div className="body">
                  {(UpdatedDate &&
                    `每${DAY_NAME[new Date(UpdatedDate).getDay()]} ${new Date(UpdatedDate).getHours()} 点更新`) ||
                    '-'}
                </div>
              </div>
              <div className="post-info-item tags">
                {IsOriginal == 2 && <div className="body tag is-primary is-light">原创</div>}
                {Tags &&
                  Tags.split(' ').map((tag) => (
                    <div className="body tag is-primary is-light" key={tag}>
                      {tag}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <Markdown
            type="render"
            value={
              Content?.replace(/\!\[suo\](.+)/, '')
                .replace(/播放出错.+\n/, '')
                .replace(/CliCli官方.+\d+/, '') || '#### 暂无详情'
            }
          />
        </section>
      </div>
    </div>
  )
}
