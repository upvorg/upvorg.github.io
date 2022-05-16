import { axios } from '@web/shared'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import VideoCard from '../../components/video-card'
import './index.scss'

const DAY_NAME = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

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
