import { axios, formatDate, HOST } from '@web/shared'
import { useEffect, useState } from 'react'
import './index.scss'

type UserStat = {
  CollectionCount: number
  CommentCount: number
  LikesCount: number
  Pits: number
  Vits: number
}

type UserPostActivity = {
  CreatedAt: string
  Pid: number
  PostTitle: string
  Type: 'collection' | 'comment' | 'like'
  PostType: 'post' | 'video'
  Uid: number
  UserName: string
  UserNickname: string
  UserAvatar: string
  Comment?: string
}

const ACTION_CN = {
  like: '点赞',
  comment: '评论',
  collection: '收藏'
}

export default function Home() {
  const [stat, setStat] = useState<UserStat>({
    CollectionCount: 0,
    CommentCount: 0,
    LikesCount: 0,
    Pits: 0,
    Vits: 0
  })
  const [activities, setActivities] = useState<UserPostActivity[]>([])

  useEffect(() => {
    Promise.all([axios.get('/user/stat'), axios.get('/user/post/activity')]).then(
      ([stat, activities]) => {
        !stat.err && setStat(stat.data)
        !activities.err && setActivities(activities.data || [])
      }
    )
  }, [])

  return (
    <div className="home">
      <div className="block box">
        <h1 className="title is-5 mb-2">统计</h1>
        <div className="is-flex is-flex-wrap-wrap	stats">
          <div className="stat-wrap">
            <div className="stat">
              <div className="icon-text">
                <span className="icon">
                  <i className="fa-brands fa-youtube"></i>
                </span>
                <span className="text">播放量</span>
              </div>
              <h3 className="title is-5">{stat.Vits}</h3>
              <p className="sub">
                今日 <span>--</span>
              </p>
            </div>
          </div>
          <div className="stat-wrap">
            <div className="stat">
              <div className="icon-text">
                <span className="icon">
                  <i className="fa-solid fa-eye"></i>
                </span>
                <span className="text">阅读量</span>
              </div>
              <h3 className="title is-5">{stat.Pits}</h3>
              <p className="sub">
                今日 <span>--</span>
              </p>
            </div>
          </div>
          <div className="stat-wrap">
            <div className="stat">
              <div className="icon-text">
                <span className="icon">
                  <i className="fa-solid fa-heart"></i>
                </span>
                <span className="text">点赞</span>
              </div>
              <h3 className="title is-5">{stat.LikesCount}</h3>
              <p className="sub">
                今日 <span>--</span>
              </p>
            </div>
          </div>
          <div className="stat-wrap">
            <div className="stat">
              <div className="icon-text">
                <span className="icon">
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="text">收藏</span>
              </div>
              <h3 className="title is-5">{stat.CollectionCount}</h3>
              <p className="sub">
                今日 <span>--</span>
              </p>
            </div>
          </div>
          <div className="stat-wrap">
            <div className="stat">
              <div className="icon-text">
                <span className="icon">
                  <i className="fa-solid fa-message"></i>
                </span>
                <span className="text">评论</span>
              </div>
              <h3 className="title is-5">{stat.CommentCount}</h3>
              <p className="sub">
                今日 <span>--</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="block box" id="activity">
        <h1 className="title is-5 mb-0">互动</h1>
        <div className="list has-hoverable-list-items has-overflow-ellipsis">
          {activities.length > 0 ? (
            activities.map((a, i) => (
              <div className="list-item" key={i}>
                <div className="list-item-image">
                  <figure className="image is-48x48">
                    <img className="is-rounded" src={a.UserAvatar} alt={a.UserNickname} />
                  </figure>
                </div>

                <div className="list-item-content">
                  <div className="list-item-title is-flex is-justify-content-space-between">
                    <p>
                      <span>{a.UserNickname}</span>
                      <span className="action">
                        {!!a.Comment && (
                          <>
                            &nbsp;评论了&nbsp;
                            <a
                              href={`${HOST}/${a.PostType == 'video' ? 'v' : 'p'}/${a.Pid}`}
                              target="_blank"
                            >
                              {a.PostTitle}
                            </a>
                          </>
                        )}
                      </span>
                    </p>
                    <span className="has-text-weight-normal has-text-grey">
                      {formatDate(a.CreatedAt, true)}
                    </span>
                  </div>
                  <div className="list-item-description">
                    <span>
                      {a.Comment || (
                        <>
                          {`${ACTION_CN[a.Type]}了`}{' '}
                          <a
                            href={`${HOST}/${a.PostType == 'video' ? 'v' : 'p'}/${a.Pid}`}
                            target="_blank"
                          >
                            {a.PostTitle}
                          </a>
                        </>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="mt-2">无</p>
          )}
        </div>
      </div>
      <div className="block box">
        <h1 className="title is-5 mb-2">教程</h1>
        <p>你得先这样，然后再这样，然后再这样，最后再这样，非常简单。</p>
      </div>
    </div>
  )
}
