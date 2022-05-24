import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import qs from 'query-string'
import { useUploader } from '../use-uploader'
import { axios } from '@web/shared/constants'
import { Markdown } from '@web/shared/components/markdown'
import './index.scss'

export default function PostUploader() {
  const [post, setPost] = useState<R.Post>({
    Cover: '',
    Title: '',
    Content: '',
    Type: 'post',
    IsOriginal: 1
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
          setPost(res.data)
          res.data.Tags && setTags(res.data.Tags.split(' '))
        }
      })
    }
  }, [])

  const handlePost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!hasChanged.current && id) {
      window.history.pushState(null, '', '/upload-manager?t=1')
      return
    }
    post.Tags = tags.join(' ')
    ;(id ? axios.put(`/post/${id}`, { data: post }) : axios.post('/post', { data: post })).then(
      (res) => {
        if (!res.err) {
          toast.success('发布成功')
          setTimeout(() => {
            window.history.pushState(null, '', '/upload-manager?t=1')
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

    setPost({ ...post, [name]: parsedValue })
  }

  const [uploader, up] = useUploader({
    type: 'image',
    onError(_) {
      document.querySelector<HTMLInputElement>('.cover-file-input')!.value = ''
    }
  })

  return (
    <div className="box PostUploader">
      <header className="card-header">
        <p className="card-header-title">发布文章</p>
      </header>

      <div className="card-content">
        <form className="form" onSubmit={handlePost}>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">封面</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <div
                    className={classNames('file', {
                      'is-primary': uploader.status == 'success',
                      'is-danger': uploader.status == 'error'
                    })}
                  >
                    <label className="file-label">
                      <input
                        className="file-input cover-file-input"
                        accept="image/*"
                        type="file"
                        onChange={(e) => e.target.files?.[0] && up(e.target.files[0])}
                      />
                      <span className="file-cta" style={{ paddingRight: 0, borderRight: 0 }}>
                        <span className="file-icon">
                          <i className="fas fa-cloud-upload-alt"></i>
                        </span>
                        <span className="file-label">
                          <div
                            className={classNames('button', {
                              'is-loading': uploader.loading,
                              'is-primary': uploader.status == 'success',
                              'is-danger': uploader.status == 'error'
                            })}
                          >
                            {uploader.status == 'pending'
                              ? 'Choose a file…'
                              : uploader.status == 'success'
                              ? uploader.file!.name
                              : 'Upload failed'}
                          </div>
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
                &nbsp;&nbsp;&nbsp;
                <input
                  disabled={!!uploader.file}
                  className="input"
                  type="url"
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
                    value={post.Title}
                    onChange={handleChange}
                  />
                  <span className="input-max-tip icon is-small is-right">0/60 </span>
                </p>
              </div>
            </div>
          </div>

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
              <label className="label">
                简介 <span>*</span>
              </label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <Markdown
                    type="editor"
                    value={post.Content}
                    onChange={(e) => {
                      hasChanged.current = true
                      setPost((p) => ({ ...p, Content: e }))
                    }}
                  />
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
                    <button className="button is-primary" type="submit">
                      {id ? '修改' : '立即投稿'}
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
