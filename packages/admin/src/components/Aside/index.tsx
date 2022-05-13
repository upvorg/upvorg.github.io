import { Link, useLocation } from 'wouter'
import cls from 'classnames'
import './index.scss'
import { useUserStore } from '@web/index/src/store/user'
import { useEffect, useState } from 'react'

export const Aside = () => {
  const [location] = useLocation()
  const user = useUserStore()
  const [menu, setMenu] = useState([
    {
      title: '首页',
      icon: 'fa-solid fa-infinity',
      link: '/'
    },
    {
      title: ' 稿件',
      icon: 'fa-solid fa-icons',
      link: '/upload-manager'
    },
    {
      title: ' 标签',
      icon: 'fa-solid fa-hashtag',
      link: '/tag/manager'
    },
    {
      title: ' 个人',
      icon: 'fa-solid fa-user',
      link: (user: R.User | null) => '/user/profile?name=' + user?.Name
    }
  ])

  useEffect(() => {
    if (user?.Level || 4 <= 2) {
      setMenu((menu) =>
        menu.concat(
          {
            title: '评论',
            icon: 'fa-solid fa-comments',
            link: '/comment/manager'
          },
          {
            title: '用户',
            icon: 'fa-solid fa-user-gear',
            link: '/user/manager'
          }
        )
      )
    }
  }, [user])

  return (
    <div className="menu">
      <div className="up">
        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button
              className="button is-primary"
              aria-haspopup="true"
              aria-controls="dropdown-menu4"
            >
              <i className="fa-solid fa-arrow-up-from-bracket" />
              &nbsp;&nbsp;投稿
            </button>
          </div>
          <div className="dropdown-menu" role="menu">
            <label htmlFor="aside-menu">
              <div className="dropdown-content">
                <Link href="/video/upload">
                  <a className="dropdown-item">
                    <i className="fa-solid fa-film"></i>
                    <span>&nbsp;&nbsp;视频投稿</span>
                  </a>
                </Link>

                <Link href="/post/upload">
                  <a className="dropdown-item">
                    <i className="fa-regular fa-pen-to-square"></i>
                    <span> &nbsp;&nbsp;文章投稿</span>
                  </a>
                </Link>

                {/* <Link href="/video/upload">
                  <a className="dropdown-item">
                    <i className="fa-solid fa-icons" />
                    <span> &nbsp;&nbsp;动态投稿</span>
                  </a>
                </Link> */}
              </div>
            </label>
          </div>
        </div>
      </div>

      <ul className="menu-list">
        {menu.map((item, index) => {
          const link = typeof item.link == 'function' ? item.link(user) : item.link
          const active = link.split('?')[0] === location
          return (
            <li key={index}>
              <Link href={link}>
                <a className={cls({ active: active })}>
                  <i className={item.icon} />
                  <span>&nbsp;&nbsp;&nbsp;{item.title}</span>
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
