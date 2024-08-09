import { Link } from 'wouter'
import './index.scss'
import { useEffect, useState } from 'react'
import { corsAxios } from '@web/shared/constants'

export default function RankList() {
  const [day, setDay] = useState(30)
  const [list, setList] = useState<R.Post[]>()

  useEffect(() => {
    corsAxios.get(`https://www.clicli.cc/rank?day=${day}`).then((rsp) => {
      setList(rsp.posts)
    })
  }, [day])

  return (
    <div className="rank-video-list">
      <div style={{ marginBottom: '6px' }}>
        {[7, 30, 120, 365].map((n) => (
          <span
            className={'tag is-hoverable' + (day == n && ' is-primary')}
            onClick={() => {
              setDay(n)
            }}
          >
            {n} DAY
          </span>
        ))}
      </div>
      {list ? (
        list.length > 0 ? (
          <ul className="rank-video-list__list">
            {list.map((item, i) => (
              <Link href={item.Type == 'video' ? `/v/${item.ID}` : `/p/${item.ID}`} key={i} target="_blank">
                <li className="rank-video-list__item">
                  <span className="rank-video-list__item--index" data-index={i}>
                    {i + 1}
                  </span>
                  <h3>{item.Title}</h3>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <div className="empty">No Data</div>
        )
      ) : (
        <div className="loading empty">loading···</div>
      )}
    </div>
  )
}
