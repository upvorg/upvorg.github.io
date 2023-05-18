import { Auth } from '@web/shared/auth'
import { ADMIN_HOST } from '@web/shared/constants'
import { useUserStore } from '@web/shared/UserContext'

import { useEffect, useRef, useState } from 'react'
import { Link, useRoute } from 'wouter'
import { ReactComponent as FaUpload } from '../../assets/icon/fa-arrow-up-from-bracket.svg'
import './index.scss'
import { useDarkModeInternal } from '../../hooks/useDarkMode'

export default function Header() {
  const searchValue = useRef('')
  const [isSearchPage] = useRoute('/search')
  const [searchPlaceholder, setSearchPlaceholder] = useState('Search')
  const user = useUserStore()
  const { value, toggle } = useDarkModeInternal()

  useEffect(() => {
    if (!__DEV__) {
      fetch('//v1.hitokoto.cn?c=a')
        .then((res) => res.json())
        .then((data) => {
          setSearchPlaceholder(data.hitokoto)
        })
    }

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
        <Link href="/">
          <a className="navbar-item">
            <h1 className="logo">UPV</h1>
          </a>
        </Link>
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="upv-nav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="upv-nav" className="navbar-menu">
        <div className="navbar-start">
          <Link href="/">
            <a className="navbar-item">Home</a>
          </Link>
          <a className="navbar-item" href="/anime/index" target="_blank">
            Schedule
          </a>
          <a
            className="navbar-item"
            href="https://cdn.jsdelivr.net/gh/upvorg/cdn@master/apk/app-arm64-v8a-release.apk"
            target="_blank"
          >
            App
          </a>
          {/* <a className="navbar-item" href="https://jq.qq.com/?_wv=1027&k=VUKNMvGC" target="_blank">
            Join-Us
          </a> */}
          <a className="navbar-item" href="/about" target="_blank">
            About
          </a>
        </div>

        {!isSearchPage && (
          <div className="navbar-item center-search">
            <form
              className="nav-search-form"
              onSubmit={(e) => {
                e.preventDefault()
                window.open(`/search?k=${searchValue.current}`)
              }}
            >
              <div className="nav-search-content">
                <input
                  className="nav-search-input"
                  type="text"
                  autoComplete="off"
                  accessKey="s"
                  maxLength={100}
                  x-webkit-speech=""
                  x-webkit-grammar="builtin:translate"
                  placeholder={searchPlaceholder}
                  title={searchPlaceholder}
                  onChange={(e) => {
                    searchValue.current = e.target.value
                  }}
                />
                <div className="nav-search-clean">
                  <button className="delete is-small" type="reset"></button>
                </div>
              </div>
              <button className="nav-search-btn icon">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="svg-inline--fa fa-search fa-w-16 fa-fw"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        )}

        <div className="navbar-end">
          <div className="navbar-item theme" onClick={toggle}>
            <button className="button is-light" aria-haspopup="true" aria-controls="dropdown-menu4">
              {value ? (
                <svg viewBox="0 0 1024 1024">
                  <path
                    d="M185.335 178.178l-2.742-2.384c-13.39-11.534-14.895-31.74-3.36-45.13a32 32 0 0 1 4.324-4.158C249.354 74.17 337.575 48 448.22 48 704.358 48 912 255.74 912 512l-0.062 7.673C907.842 772.394 701.797 976 448.22 976c-110.645 0-198.866-26.169-264.663-78.506a32 32 0 0 1-4.325-4.159c-11.419-13.256-10.058-33.192 2.962-44.78l0.399-0.35 2.742-2.383c89.13-78.201 134.016-188.043 134.66-329.525L320 512c0.253-143.557-44.635-254.831-134.665-333.822z"
                    fill="#FFC445"
                  ></path>
                </svg>
              ) : (
                <svg viewBox="0 0 1028 1024">
                  <path d="M514.133333 509.866667m-256 0a256 256 0 1 0 512 0 256 256 0 1 0-512 0Z" fill="#FFC445"></path>
                  <path
                    d="M514.133333 170.666667c-19.2 0-32-14.933333-32-32V29.866667c0-17.066667 12.8-29.866667 29.866667-29.866667h2.133333c17.066667 0 32 14.933333 32 32v108.8c0 14.933333-14.933333 29.866667-32 29.866667zM514.133333 1024c-19.2 0-32-14.933333-32-32v-108.8c0-17.066667 14.933333-32 32-32h2.133334c17.066667 0 32 14.933333 32 32v108.8c-2.133333 17.066667-17.066667 32-34.133334 32zM853.333333 509.866667c0-19.2 14.933333-32 32-32h108.8c17.066667 0 32 14.933333 32 32v2.133333c0 17.066667-14.933333 32-32 32h-108.8c-17.066667-2.133333-32-17.066667-32-34.133333zM0 509.866667c0-19.2 14.933333-32 32-32h108.8c17.066667 0 32 14.933333 32 32v2.133333c0 17.066667-14.933333 32-32 32H32c-17.066667-2.133333-32-17.066667-32-34.133333zM742.4 247.466667c-12.8-12.8-12.8-32-2.133333-44.8l76.8-76.8c12.8-12.8 32-12.8 44.8 0V128c12.8 12.8 12.8 32 0 44.8l-76.8 76.8c-10.666667 10.666667-32 10.666667-42.666667-2.133333zM138.666667 851.2c-12.8-12.8-12.8-34.133333-2.133334-44.8l76.8-76.8c12.8-12.8 32-12.8 44.8 0l2.133334 2.133333c12.8 12.8 12.8 32 0 44.8L183.466667 853.333333c-12.8 10.666667-32 10.666667-44.8-2.133333zM740.266667 727.466667c12.8-12.8 34.133333-12.8 44.8-2.133334l76.8 76.8c12.8 12.8 12.8 32 0 44.8l-2.133334 2.133334c-12.8 12.8-32 12.8-44.8 0l-76.8-76.8c-10.666667-12.8-10.666667-32 2.133334-44.8zM136.533333 123.733333c12.8-12.8 34.133333-12.8 44.8-2.133333l76.8 76.8c12.8 12.8 12.8 32 0 44.8l-2.133333 2.133333c-12.8 12.8-32 12.8-44.8 0L136.533333 168.533333c-10.666667-12.8-10.666667-32 0-44.8z"
                    fill="#FFC445"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <div className="navbar-item upload">
            <a href={ADMIN_HOST} target="_blank">
              <button className="button is-primary" aria-haspopup="true" aria-controls="dropdown-menu4">
                <FaUpload />
                &nbsp;&nbsp;
                <strong>Upload</strong>
              </button>
            </a>
          </div>
          {user ? (
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link is-arrowless">
                <figure className="image avatar">
                  <img className="is-rounded" src={user.Avatar} />
                </figure>
              </div>
              <div className="navbar-dropdown is-right">
                <a className="navbar-item" href={ADMIN_HOST + `/user/profile?name=${user.Name}`} target="_blank">
                  我的资料
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" onClick={() => Auth.logout()}>
                  退出登录
                </a>
              </div>
            </div>
          ) : (
            <div className="navbar-item">
              <div className="buttons">
                {/* <a href="/login" className="button is-primary">
                  <strong>Sign up</strong>
                </a> */}
                <a href="/login" className="button is-light">
                  Log in
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
