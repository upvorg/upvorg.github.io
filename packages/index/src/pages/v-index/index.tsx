import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { axios, DAY_NAME } from '@web/shared/constants'
import VideoCard from '../../components/video-card'
import { Helmet } from 'react-helmet'
import './index.scss'

function VideoIndexPage() {
  const [index, setIndex] = useState(new Date().getDay())
  const [data, setData] = useState<R.Post[][]>([])

  useEffect(() => {
    axios.get('/post/week').then((res) => {
      !res.err && setData(res.data)
    })
  }, [])

  return (
    <div className="v-index">
      <Helmet>
        <title>新番时间表 - UPV - free animes no ads</title>
      </Helmet>
      <div className="index-header">
        <div className="index-header-left">
          <h1 className="title">每周更新</h1>
          <ul className="tags are-medium">
            {DAY_NAME.map((item, key) => {
              return (
                <li
                  key={key}
                  className={classNames('tag is-rounded', {
                    'is-primary': key === index
                  })}
                  onClick={() => setIndex(key)}
                >
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <ul className="video-list">
        {data[index]?.map((item, key) => (
          <li key={key}>{item && <VideoCard info={item} />}</li>
        ))}
      </ul>
    </div>
  )
}

export default VideoIndexPage
