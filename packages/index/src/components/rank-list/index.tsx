import { Link } from 'wouter'
import './index.scss'
import { useEffect, useState } from 'react'
import { corsAxios } from '@web/shared/constants'
import classNames from 'classnames'
import { cliclisAdapter } from '../../enime.adp'

export default function RankList() {
  const [day, setDay] = useState(3)
  const [list, setList] = useState<R.Post[]>()

  useEffect(() => {
    corsAxios.get(`/rank?day=${day}`).then((rsp) => {
      setList(cliclisAdapter(rsp.posts))
    })
  }, [day])

  return (
    <div className="rank-video-list">
      <div className="tags" style={{ marginBottom: '6px' }}>
        {[3, 7, 30, 90, 365].map((n) => (
          <a
            className={classNames('tag is-hoverable', {
              'is-primary': day == n,
            })}
            key={n}
            onClick={() => {
              setDay(n)
            }}
          >
            {n} DAY
          </a>
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
