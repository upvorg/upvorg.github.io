import GriffithPlayer from '@web/index/src/components/player'
import { axios, STORGE_HOST } from '@web/shared'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import { useUploader } from '../use-uploader'
import './index.scss'

export default function RealVideoUploader({ params }: any) {
  const id = +params.id
  const [modal, setModal] = useState(false)
  const [videoPlayerUrl, setVideoPlayerUrl] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const [videos, setVideos] = useState<R.Video[]>([])
  const [submitLoading, setSubmitLoading] = useState(false)
  const [video, setVideo] = useState<R.Video>({
    Episode: 1,
    Cover: '',
    Title: '',
    VideoUrl: '',
    Synopsis: '',
    Pid: id
  } as R.Video)

  useEffect(() => {
    if (id) {
      axios.get(`/post/${id}/videos`).then((r) => {
        if (!r.err) {
          setVideos(r.data)
          setVideo((v) => ({ ...v, Episode: r.data.length + 1 }))
        }
      })
    }
  }, [])

  const [coverUploader, coverUp] = useUploader({
    type: 'image',
    onError(_) {
      document.querySelector<HTMLInputElement>('.cover-file-input')!.value = ''
    },
    onSuccess(url) {
      setVideo((v) => ({ ...v, Cover: url }))
    }
  })

  const [videoUploader, videoUp] = useUploader({
    type: 'file',
    onError(_) {
      document.querySelector<HTMLInputElement>('.video-file-input')!.value = ''
    },
    onSuccess(url) {
      setVideo((v) => ({ ...v, VideoUrl: STORGE_HOST + url }))
    }
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const parsedValue = type === 'number' ? +value : value

    setVideo((v) => ({ ...v, [name]: parsedValue }))
  }

  const resetVideo = () => {
    setVideo({
      Episode: videos.length + 1,
      Cover: '',
      Title: '',
      VideoUrl: '',
      Synopsis: '',
      Pid: id
    } as R.Video)
    document.querySelector<HTMLInputElement>('.cover-file-input')!.value = ''
    document.querySelector<HTMLInputElement>('.cover-file-input')!.value = ''
  }

  const handleEdit = (video: R.Video) => {
    setVideo(() => ({ ...video }))
    setIsEdit(true)
  }

  //TODO: select image from video player
  const captureThumbnail = () => {
    const canvas = document.createElement('canvas')
    const video = document.getElementsByTagName('video')[0]
    canvas.width = 1146
    canvas.height = 717
    canvas.getContext('2d')?.drawImage(video, 0, 0, 1146, 717)

    fetch(canvas.toDataURL('image/jpeg'))
      .then((res) => res.blob())
      .then((blob) => {
        const NewFile = new File([blob], 'video_thumbnail', {
          type: 'image/png'
        })
        console.log(NewFile)
      })
  }

  const handleDelVideo = (id: number) => {
    axios.delete(`/video/${id}`).then((r) => {
      if (!r.err) {
        setVideos(videos.filter((v) => v.ID !== id))
      }
    })
  }

  const handlePlay = (video: R.Video) => {
    setModal(true)
    setVideoPlayerUrl(video.VideoUrl)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitLoading(true)
    if (isEdit) {
      axios.put(`/video/${video.ID}`, { data: video }).then((r) => {
        resetVideo()
        if (!r.err) {
          setVideos(videos.map((v) => (v.ID === video.ID ? video : v)))
          setIsEdit(false)
          resetVideo()
          setSubmitLoading(false)
        }
      })
    } else {
      axios.post(`/post/${id}/video`, { data: video }).then((r) => {
        if (!r.err) {
          setVideos([r.data, ...videos])
          resetVideo()
          setSubmitLoading(false)
        }
      })
    }
  }

  return (
    <div className="video-editor">
      <form onSubmit={handleSubmit}>
        <div className="box">
          <p className="title is-5">{isEdit ? '修改' : '添加'}视频</p>
          <article className="media">
            <div className="media-left">
              <figure className="image is-4by3">
                <img
                  src={
                    coverUploader.url ||
                    video.Cover ||
                    'https://bulma.io/images/placeholders/640x480.png'
                  }
                  alt="Image"
                />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <div className="field is-horizontal">
                  <input
                    className="input"
                    type="number"
                    placeholder="第几集"
                    style={{ width: '10ch' }}
                    required
                    name="Episode"
                    onChange={handleChange}
                    value={video.Episode}
                  />
                  <input
                    className="input"
                    type="text"
                    placeholder="视频标题（可选）"
                    max="60"
                    min="2"
                    name="Title"
                    onChange={handleChange}
                    value={video.Title}
                  />
                </div>
                <div className="field is-horizontal">
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
                                ? 'Choose a image…'
                                : coverUploader.status == 'success'
                                ? coverUploader.file!.name
                                : 'Upload failed'}
                            </div>
                          </span>
                        </span>
                      </label>
                    </div>
                  </p>
                  <input
                    className="input"
                    type="url"
                    placeholder="视频封面（可选）"
                    max="200"
                    name="Cover"
                    onChange={handleChange}
                    disabled={!!coverUploader.file}
                    value={video.Cover}
                  />
                </div>
                <div className="field is-horizontal">
                  <p className="control">
                    <div
                      className={classNames('file', {
                        'is-primary': videoUploader.status == 'success',
                        'is-danger': videoUploader.status == 'error'
                      })}
                    >
                      <label className="file-label">
                        <input
                          className="file-input cover-file-input"
                          type="file"
                          onChange={(e) => videoUp(e.target!.files![0])}
                        />
                        <span className="file-cta" style={{ paddingRight: 0, borderRight: 0 }}>
                          <span className="file-icon">
                            <i className="fas fa-cloud-upload-alt"></i>
                          </span>
                          <span className="file-label">
                            <div
                              className={classNames('button', {
                                'is-loading': videoUploader.loading,
                                'is-primary': videoUploader.status == 'success',
                                'is-danger': videoUploader.status == 'error'
                              })}
                            >
                              {videoUploader.status == 'pending'
                                ? 'Choose a video…'
                                : videoUploader.status == 'success'
                                ? videoUploader.file?.name
                                : 'Upload failed'}
                            </div>
                          </span>
                        </span>
                      </label>
                    </div>
                  </p>
                  <input
                    disabled={!!videoUploader.file}
                    className="input"
                    type="url"
                    placeholder="Play Url"
                    required
                    name="VideoUrl"
                    value={video.VideoUrl}
                    onChange={handleChange}
                  />
                  <button
                    className={classNames('button is-primary', { 'is-loading': submitLoading })}
                    type="submit"
                  >
                    {isEdit ? '修改' : '添加'}
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </form>
      <div id="notifications">
        <h1 className="title is-5">视频列表</h1>
        <div className="buttons">
          <Link href="/upload-manager">
            <button className="button is-primary">
              <span className="icon is-small">
                <i className="fas fa-check" aria-hidden="true"></i>
              </span>
              <span>完成</span>
            </button>
          </Link>
          <div className="dropdown is-hoverable is-right">
            <div className="dropdown-trigger">
              <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                {/* <span>MORE</span> */}
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu3" role="menu">
              <div className="dropdown-content">
                <a href="#" className="dropdown-item">
                  Overview
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="list has-overflow-ellipsis has-visible-pointer-controls has-hoverable-list-items">
        {videos.map((v) => (
          <div className="list-item" key={v.ID}>
            <div className="list-item-image">
              <figure className="image" style={{ backgroundColor: '#f6f7f8' }}>
                {v.Cover && <img src={v.Cover} alt={v.Title} />}
              </figure>
            </div>

            <div className="list-item-content">
              <div className="list-item-title">
                {v.Title
                  ? `${v.Episode.toString().padStart(2, '0')} ${v.Title}`
                  : `第 ${v.Episode} 集`}
              </div>
              <div className="list-item-description">
                UpdatedAt: {v.UpdatedAt} {v.Synopsis}
              </div>
              <div className="list-item-description">{v.Synopsis}</div>
            </div>

            <div className="list-item-controls">
              <div className="buttons">
                <button className="button is-light is-hidden-mobile" onClick={() => handlePlay(v)}>
                  <span className="icon">
                    <i className="fas fa-play"></i>
                  </span>
                </button>
                <button className="button is-light is-hidden-mobile" onClick={() => handleEdit(v)}>
                  <span className="icon">
                    <i className="fa-solid fa-square-pen"></i>
                  </span>
                </button>
                <button
                  className="button is-light is-hidden-mobile"
                  onClick={() => handleDelVideo(v.ID)}
                >
                  <span className="icon">
                    <i className="fa-solid fa-circle-xmark"></i>
                  </span>
                </button>

                {/* <button className="button is-light">
                <span className="icon">
                  <i className="fas fa-ellipsis-v"></i>
                </span>
              </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={classNames('modal', { 'is-active': modal })}>
        <div className="modal-background" onClick={() => setModal(false)}></div>
        <div className="modal-content">
          <GriffithPlayer src={videoPlayerUrl} playerIsPlaying={modal} />
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setModal(false)}
        ></button>
      </div>
    </div>
  )
}
