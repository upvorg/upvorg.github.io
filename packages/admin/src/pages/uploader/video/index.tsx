import { axios } from '@web/shared'
import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import qs from 'query-string'
import { useUploader } from '../use-uploader'
import './index.scss'

const GENRE = ['番剧', '动画电影', '电影', '电视剧', '其他']
const REGIONS = ['中国', '日本', '韩国', '美国', '其他']

export default function VideoUploader() {
  const [post, setPost] = useState<R.Post>({
    Cover: '',
    Title: '',
    Content: '',
    Type: 'video',
    IsOriginal: 1,
    Meta: {
      Genre: '其他',
      Region: '其他',
      Episodes: 0,
      IsEnd: 0,
      PublishDate: '',
      UpdatedDate: ''
    } as R.Meta
  } as R.Post)
  const [serverTags, setServerTags] = useState<R.Tag[]>([])
  const [tags, setTags] = useState<string[]>([])
  const { id } = qs.parse(window.location.search)
  const hasChanged = useRef(false)

  useEffect(() => {
    axios.get('/tags').then((res) => {
      setServerTags(res.data)
    })
    if (id) {
      axios.get(`/post/${id}`).then((res) => {
        if (!res.err) {
          setPost(() => ({ ...res.data }))
          res.data.Tags && setTags(res.data.Tags.split(' '))
        }
      })
    }
  }, [])

  const handlePost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!hasChanged.current && id) {
      //@ts-ignore
      if (e.nativeEvent.submitter.name == 'next') {
        window.history.pushState(null, '', `/video/${id}/upload`)
      } else {
        window.history.pushState(null, '', '/upload-manager')
      }
      return
    }

    if (tags.length < 1) {
      toast.error('请至少选择一个标签')
      return
    }

    post.Tags = tags.join(' ')

    if (+post.IsOriginal == 2) {
      delete post.Meta
    } else {
      post!.Meta!.UpdatedDate = post.Meta?.UpdatedDate
        ? new Date(post.Meta!.UpdatedDate).toISOString()
        : null
      post.Meta!.PublishDate = post.Meta?.PublishDate
        ? new Date(post.Meta!.PublishDate).toISOString()
        : null
    }

    ;(id ? axios.put(`/post/${id}`, { data: post }) : axios.post('/post', { data: post })).then(
      (res) => {
        if (!res.err) {
          toast.success('发布成功')

          setTimeout(() => {
            //@ts-ignore
            if (e.nativeEvent.submitter.name == 'next') {
              window.history.pushState(null, '', `/video/${res.data.ID}/upload`)
            } else {
              window.history.pushState(null, '', '/upload-manager')
            }
          }, 1500)
        }
      }
    )
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const parsedValue = type === 'number' || type === 'checkbox' ? +value : value

    hasChanged.current = true

    if (name.includes('Meta.')) {
      setPost({
        ...post,
        Meta: {
          ...post.Meta,
          [name.split('.')[1]]: parsedValue
        } as R.Meta
      })
    } else {
      setPost({ ...post, [name]: parsedValue })
    }
  }

  const [coverUploader, coverUp] = useUploader({
    type: 'image',
    onError(_) {
      document.querySelector<HTMLInputElement>('.cover-file-input')!.value = ''
    }
  })

  const isOriginal = post.IsOriginal == 2
  const isEnd = post.Meta?.IsEnd == 2
  const publishDate = new Date(post.Meta?.PublishDate || Date.now())
  const updatedDate = new Date(post.Meta?.UpdatedDate || Date.now())
  const publishDateStr =
    publishDate.getFullYear() +
    '-' +
    (publishDate.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    publishDate.getDate()
  const updatedDateStr =
    updatedDate.getFullYear() +
    '-' +
    (updatedDate.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    updatedDate.getDate()

  return (
    <div className="box VideoUploader">
      <header className="card-header">
        <p className="card-header-title">发布视频</p>
      </header>

      <div className="card-content">
        <form className="form" onSubmit={handlePost}>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">
                封面
                <span>*</span>
              </label>
            </div>
            <div className="field-body">
              <div className="field" style={{ display: 'flex', alignItems: 'end' }}>
                <p className="control">
                  <div
                    className={classNames('file', {
                      'is-primary': coverUploader.status == 'success',
                      'is-danger': coverUploader.status == 'error'
                    })}
                  >
                    <label className="file-label">
                      <input
                        className="file-input cover-file-input"
                        accept="image/*"
                        type="file"
                        onChange={(e) => coverUp(e.target!.files![0])}
                      />
                      <span className="file-cta" style={{ paddingRight: 0, borderRight: 0 }}>
                        <span className="file-icon">
                          <i className="fas fa-cloud-upload-alt"></i>
                        </span>
                        <span className="file-label">
                          <div
                            className={classNames('button', {
                              'is-loading': coverUploader.loading,
                              'is-primary': coverUploader.status == 'success',
                              'is-danger': coverUploader.status == 'error'
                            })}
                          >
                            {coverUploader.status == 'pending'
                              ? 'Choose a file…'
                              : coverUploader.status == 'success'
                              ? coverUploader.file!.name
                              : 'Upload failed'}
                          </div>
                        </span>
                      </span>
                    </label>
                  </div>
                </p>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="url"
                  required
                  disabled={!!coverUploader.file}
                  className="input"
                  name="Cover"
                  onChange={handleChange}
                  placeholder="请输入封面图片链接"
                  value={post.Cover}
                />
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label">
              <label className="label">
                标题<span>*</span>
              </label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control has-icons-right">
                  <input
                    className="input"
                    type="text"
                    required
                    name="Title"
                    onChange={handleChange}
                    placeholder="请输入标题"
                    value={post.Title}
                  />
                  <span className="input-max-tip icon is-small is-right">0/60 </span>
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal" style={{ alignItems: 'center' }}>
            <div className="field-label">
              <label className="label">
                原创<span>*</span>
              </label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control has-icons-right">
                  <input
                    id="is-original"
                    type="checkbox"
                    name="IsOriginal"
                    className="switch"
                    value={isOriginal ? 1 : 2}
                    onChange={handleChange}
                    checked={isOriginal}
                    disabled={!!id}
                  />
                  <label htmlFor="is-original" className="label"></label>
                </p>
              </div>
            </div>
          </div>

          {!isOriginal && (
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">
                  类型<span>*</span>
                </label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    {GENRE.map((item, index) => {
                      return (
                        <label className="radio" key={index}>
                          <input
                            type="radio"
                            required
                            value={item}
                            name="Meta.Genre"
                            onChange={handleChange}
                            checked={post.Meta?.Genre === item}
                          />
                          {item}
                        </label>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {!isOriginal && (
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">
                  地区<span>*</span>
                </label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <div className="select is-fullwidth">
                      <select
                        required
                        name="Meta.Region"
                        onChange={handleChange}
                        value={post.Meta?.Region}
                      >
                        {REGIONS.map((item, index) => {
                          return <option key={index}>{item}</option>
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!isOriginal && (
            <div className="field is-horizontal" style={{ alignItems: 'center' }}>
              <div className="field-label">
                <label className="label">
                  是否完结<span>*</span>
                </label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <input
                      id="IsEnd"
                      type="checkbox"
                      name="Meta.IsEnd"
                      className="switch"
                      value={isEnd ? 1 : 2}
                      onChange={handleChange}
                      checked={isEnd}
                    />
                    <label htmlFor="IsEnd" className="label"></label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!isOriginal && (
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">预计集数</label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <input
                      className="input is-small"
                      type="number"
                      name="Meta.Episodes"
                      onChange={handleChange}
                      style={{ width: '10ch' }}
                      value={post.Meta?.Episodes}
                      min={1}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {!isOriginal && (
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">发布时间</label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <input
                      className="input is-small"
                      type="date"
                      name="Meta.PublishDate"
                      onChange={handleChange}
                      value={post.Meta?.PublishDate ? publishDateStr : ''}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {!isOriginal && (
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">更新时间</label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <input
                      className="input is-small"
                      type="date"
                      name="Meta.UpdatedDate"
                      onChange={handleChange}
                      value={post.Meta?.UpdatedDate ? updatedDateStr : ''}
                    />
                  </div>
                  <p className="help">每周几更新：只判断所选日期为周几</p>
                </div>
              </div>
            </div>
          )}

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">
                标签<span>*</span>
              </label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <div className="tags">
                    {serverTags.length > 0 ? (
                      serverTags.map((item, index) => {
                        return (
                          <a
                            className={classNames('tag', {
                              'is-primary': tags.includes(item.Name)
                            })}
                            key={index}
                            onClick={() => {
                              setTags((t) => {
                                const exists = tags.includes(item.Name)
                                if (exists) {
                                  return t.filter((t) => t !== item.Name)
                                } else {
                                  if (t.length < 4) {
                                    return [...t, item.Name]
                                  }
                                  return t
                                }
                              })
                            }}
                          >
                            {item.Name}
                          </a>
                        )
                      })
                    ) : (
                      <a className={classNames('tag')}>
                        <span className="icon">
                          <i className="fas fa-spinner fa-spin"></i>
                        </span>
                        &nbsp; 暂无标签
                      </a>
                    )}
                  </div>
                </div>
                <p className="help">最多可添加4个</p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">简介</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <textarea
                    className="textarea"
                    name="Content"
                    onChange={handleChange}
                    value={post.Content}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label"></div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <div className="buttons">
                    <button className="button is-primary" type="submit" name="next">
                      下一步
                    </button>
                    <button className="button" type="submit" name="add">
                      立即投稿
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
