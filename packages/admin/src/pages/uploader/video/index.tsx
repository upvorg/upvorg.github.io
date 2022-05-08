import { axios } from '@web/shared'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import './index.scss'

const GENRE = ['番剧', '动画电影', '电影', '电视剧', '原创', '其他']
const REGIONS = ['中国', '日本', '韩国', '美国', '其他']

export default function VideoUploader() {
  const [post, setPost] = useState<R.Post>({
    Cover: '',
    Title: '',
    Content: '',
    Type: 'video',
    Meta: {
      Genre: '其他',
      Region: '其他',
      Episodes: 0,
      IsEnd: 0,
      PublishDate: null,
      UpdatedDate: null
    } as R.Meta
  } as R.Post)
  const [serverTags, setServerTags] = useState<string>('')
  const [tags, setTags] = useState<string[]>([])
  const [coverFile, setCoverFile] = useState<File>()
  const [coverUploader, setCoverUploader] = useState<{
    loading: boolean
    url: string
    status: 'pending' | 'success' | 'error'
  }>({
    loading: false,
    url: '',
    status: 'pending'
  })

  useEffect(() => {
    axios.get('/tags').then((res) => {
      setServerTags(res.data)
    })
  }, [])

  const handlePost = () => {
    if (tags.length < 1) {
      toast.error('请至少选择一个标签')
      return
    }
    if (post.Meta.Genre == '原创') {
      tags.unshift('原创')
    }
    post.Tags = tags.join(' ')
    axios.post('/post', { data: post }).then((res) => {
      if (!res.err) {
        toast.success('发布成功')
        window.history.pushState(null, '', '/upload-manager')
      }
    })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    console.log(name)
    if (name.includes('Meta.')) {
      setPost({ ...post, Meta: { ...post.Meta, [name.split('.')[1]]: value } })
    } else {
      setPost({ ...post, [name]: value })
    }
  }

  const handleCoverUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const file = e.target.files[0]
    setCoverFile(file)
    setCoverUploader({ loading: true, url: '', status: 'pending' })
    const formData = new FormData()
    formData.append('file', file)

    axios
      .post('/upload/image', { data: formData })
      .then((res) => {
        console.log(res)
        setCoverUploader({ loading: false, url: res.data.url, status: 'success' })
      })
      .catch(() => {
        setCoverFile(undefined)
        setCoverUploader({ loading: false, url: '', status: 'error' })
        document.querySelector<HTMLInputElement>('.cover-file-input')!.value = ''
      })
  }

  const isUgc = post.Meta.Genre === '原创'

  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">发布视频</p>
      </header>

      <div className="card-content">
        <form className="form" onSubmit={(e) => (e.stopPropagation(), e.preventDefault())}>
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
                        onChange={handleCoverUpload}
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
                              ? coverFile!.name
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
                  disabled={!!coverFile}
                  className="input"
                  name="Cover"
                  onChange={handleChange}
                  placeholder="请输入封面图片链接"
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
                  />
                  <span className="input-max-tip icon is-small is-right">0/60 </span>
                </p>
              </div>
            </div>
          </div>

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
                        />
                        {item}
                      </label>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {!isUgc && (
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
                      <select required name="Meta.Region" onChange={handleChange}>
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

          {!isUgc && (
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">
                  是否完结<span>*</span>
                </label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <label className="radio">
                      <input type="radio" required name="Meta.IsEnd" onChange={handleChange} />是
                    </label>
                    <label className="radio">
                      <input type="radio" required name="Meta.IsEnd" onChange={handleChange} />否
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!isUgc && (
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
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {!isUgc && (
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
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {!isUgc && (
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
                    {!!serverTags ? (
                      serverTags?.split(' ').map((item, index) => {
                        return (
                          <a
                            className={classNames('tag', {
                              'is-primary': tags.includes(item)
                            })}
                            key={index}
                            onClick={() => {
                              setTags((t) => {
                                const exists = tags.includes(item)
                                if (exists) {
                                  return t.filter((t) => t !== item)
                                } else {
                                  if (t.length < 4) {
                                    return [...t, item]
                                  }
                                  return t
                                }
                              })
                            }}
                          >
                            {item}
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
                  <textarea className="textarea" name="Content" onChange={handleChange}></textarea>
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
                    <button className="button is-primary" type="submit" onClick={handlePost}>
                      添加视频
                    </button>
                    <button className="button" type="submit" onClick={handlePost}>
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
