import { Link } from 'wouter'
import './index.scss'

export default function RankList({ list }: { list: R.Post[] | null }) {
  return (
    <div className="rank-video-list">
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
