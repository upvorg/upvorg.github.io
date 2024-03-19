import './index.scss'

import { COOKIE_ACCESS_TOKEN_KEY, HOST, LOCAL_STORAGE_USER_INFO_KEY, PRIMARY_COLOR, axios } from '@web/shared/constants'
import { DefaultRoute, IndexRoute } from './components/layout'
import { Router, Switch } from 'wouter'
import React, { Suspense, lazy, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import { Auth } from '@web/shared/auth'
import { Cookie } from '@web/shared/utils/cookie'
import { UserContext } from '@web/shared/UserContext'

const App = () => {
  const [user, setUser] = useState<R.User | null>(null)

  useEffect(() => {
    axios.interceptors.response.use(
      (data) => data,
      (res) => {
        res.err && toast.error(res.err)
        if (res.status === 401) {
          setUser(null)
          Auth.logout(`${HOST}/login?from=${location.href}`)
        }
        return res
      }
    )
    const cookie = Cookie.get(COOKIE_ACCESS_TOKEN_KEY)
    const userInfo = localStorage.getItem(LOCAL_STORAGE_USER_INFO_KEY)

    if (userInfo && !!cookie) {
      setUser(JSON.parse(userInfo))
    } else {
      !!cookie &&
        axios.get('/user').then((_) => {
          if (_.data) {
            setUser(_.data)
            localStorage.setItem(LOCAL_STORAGE_USER_INFO_KEY, JSON.stringify(_.data))
          }
        })
    }
  }, [])

  return (
    <React.Fragment>
      <Router>
        <UserContext.Provider value={user}>
          <Switch>
            <IndexRoute path="/" component={lazy(() => import('./pages/index'))} />
            <IndexRoute path="/login" component={lazy(() => import('./pages/login'))} />
            <DefaultRoute path="/p/:id" component={lazy(() => import('./pages/post'))} />
            <DefaultRoute path="/v/:id" component={lazy(() => import('./pages/player'))} />
            <DefaultRoute path="/pv/tag" component={lazy(() => import('./pages/tag'))} />
            <DefaultRoute path="/search" component={lazy(() => import('./pages/search'))} />
            <DefaultRoute path="/about" component={lazy(() => import('./pages/about'))} />
            <DefaultRoute path="/feedback" component={lazy(() => import('./pages/feedback'))} />
            <DefaultRoute path="/anime/index" component={lazy(() => import('./pages/v-index'))} />
            <DefaultRoute path="/:rest*" component={lazy(() => import('./pages/404'))} />
          </Switch>
        </UserContext.Provider>
      </Router>
      <footer className="footer">
        <div className="bd-footer-support">
          <h4 className="bd-footer-title">
            <strong>Support</strong> <span className="font-family-logo">UPV</span>
          </h4>
        </div>
        <div className="content">
          <p className="links">
            <a className="link" href="/feedback" target="_blank">
              留言
            </a>{' '}
            |{' '}
            <a className="link" href="/feedback" target="_blank">
              反馈
            </a>{' '}
            |{' '}
            <a className="link" href="/about" target="_blank">
              关于
            </a>
            {/* <strong className="font-family-logo">UPV</strong>
              {'  '}The <a href="https://github.com/upvorg">source code</a> is licensed{' '}
              <a href="https://opensource.org/licenses/GPL-3.0">GPL-3.0</a>. The website content is
              licensed{' '}
              <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>. */}
          </p>
          <p>
            Copyright © 2022{' '}
            <a href="/" className="font-family-logo">
              UPV
            </a>
          </p>
        </div>
      </footer>

      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            iconTheme: {
              primary: PRIMARY_COLOR,
              secondary: '#fff',
            },
          },
        }}
        containerStyle={{ top: 70, right: 20 }}
      />
    </React.Fragment>
  )
}

export default App
