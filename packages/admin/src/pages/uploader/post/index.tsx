import { axios } from '@web/shared'
import Markdown from '@web/index/src/components/markdown'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import '../video/index.scss'

export default function PostUploader() {
  const [post, setPost] = useState<R.Post>({
    Cover: '',
    Title: '',
    Content: '',
    Type: 'post'
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

  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">发布视频</p>
      </header>

      <div className="card-content">
        <form
          className="form"
          onSubmit={(e) => (e.stopPropagation(), e.preventDefault(), handlePost)}
        >
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
                  disabled={!!coverFile}
                  className="input"
                  type="url"
                  required
                  name="Cover"
                  onChange={handleChange}
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
                      setPost((p) => {
                        return { ...p, Content: e }
                      })
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
