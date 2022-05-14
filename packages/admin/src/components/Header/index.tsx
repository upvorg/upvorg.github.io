import { Auth, HOST } from '@web/shared'
import { Link } from 'wouter'
import { useUserStore } from '@web/shared'
import { useEffect } from 'react'
import './index.scss'

export const Header: React.FC = () => {
  const user = useUserStore()

  useEffect(() => {
    const $navbarBurger: HTMLElement = document.querySelector('.navbar-burger')!
    const handler: EventListener = () => {
      const $target = document.getElementById($navbarBurger.dataset.target!)
      $navbarBurger.classList.toggle('is-active')
      $target!.classList.toggle('is-active')
    }

    $navbarBurger.addEventListener('click', handler, false)

    return () => {
      $navbarBurger.removeEventListener('click', handler, false)
    }
  }, [])

  return (
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <label htmlFor="aside-menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="1" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <Link href="/">
          <a className="navbar-item ml-1">
            <h1 className="logo">UPV</h1>
            <span>创作中心</span>
          </a>
        </Link>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasic"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasic" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item home" href={`${HOST}`} target="_blank">
            <i className="fa-regular fa-chess-king"></i>
            <span style={{ marginTop: '2px' }}>&nbsp;主站</span>
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable mr-4">
            <div className="navbar-link is-arrowless">
              <figure className="image is-32x32">
                <img className="is-rounded" src={user?.Avatar} />
              </figure>
            </div>

            <div className="navbar-dropdown is-right">
              <a
                className="navbar-item"
                onClick={() => {
                  Auth.logout('/')
                }}
              >
                退出
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
