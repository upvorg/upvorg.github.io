import { Link } from 'wouter'
import './index.scss'
import { useEffect, useState } from 'react'
import { corsAxios } from '@web/shared/constants'
import classNames from 'classnames'
import { clicliAdapter } from '../../enime.adp'

export default function RankList() {
  const [day, setDay] = useState(30)
  const [list, setList] = useState<R.Post[]>()

  useEffect(() => {
    corsAxios.get(`https://www.clicli.cc/rank?day=${day}`).then((rsp) => {
      setList(clicliAdapter(rsp.posts))
    })
  }, [day])

  return (
    <div className="rank-video-list">
      <div className="tags" style={{ marginBottom: '6px' }}>
        {[7, 30, 120, 365].map((n) => (
          <span
            className={classNames('tag is-hoverable', {
              'is-primary': day == n,
            })}
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
