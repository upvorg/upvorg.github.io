import { Link, useLocation } from 'wouter'
import cls from 'classnames'
import './index.scss'

const menu = [
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
    title: '评论',
    icon: 'fa-regular fa-comments',
    link: '/comment/manager'
  },
  {
    title: '用户',
    icon: 'fa-solid fa-user-gear',
    link: '/user/manager'
  }
]

export const Aside = () => {
  const [location] = useLocation()

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
          <div className="dropdown-menu" id="dropdown-menu4" role="menu">
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

                <Link href="/video/upload">
                  <a className="dropdown-item">
                    <i className="fa-solid fa-icons" />
                    <span> &nbsp;&nbsp;动态投稿</span>
                  </a>
                </Link>
              </div>
            </label>
          </div>
        </div>
      </div>

      <ul className="menu-list">
        {menu.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.link}>
                <a className={cls({ active: item.link === location })}>
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
