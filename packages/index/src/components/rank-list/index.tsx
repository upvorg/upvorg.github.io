import './index.scss'

export default function RankList({ list }: { list: R.Post[] | null }) {
  return (
    <div className="rank-video-list">
      {list ? (
        list.length > 0 ? (
          <ul className="rank-video-list__list">
            {list.map((item, i) => (
              <a
                href={item.Type == 'video' ? `/v/${item.ID}` : `/post/${item.ID}`}
                key={i}
                target="_blank"
              >
                <li className="rank-video-list__item">
                  <span className="rank-video-list__item--index" data-index={i}>
                    {i + 1}
                  </span>
                  <h3>{item.Title}</h3>
                </li>
              </a>
            ))}
          </ul>
        ) : (
          <div className="empty">暂无数据</div>
        )
      ) : (
        <div className="loading empty">加载中···</div>
      )}
    </div>
  )
}
