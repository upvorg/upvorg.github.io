import '@web/shared/f12'
import { Router, Switch } from 'wouter'
import { lazy, Suspense, useEffect, useState } from 'react'
import { DefaultRoute, IndexRoute } from './components/layout'
import toast, { Toaster } from 'react-hot-toast'
import {
  axios,
  Cookie,
  COOKIE_ACCESS_TOKEN_KEY,
  HOST,
  LOCAL_STORAGE_ACCESS_TOKEN_KEY,
  LOCAL_STORAGE_USER_INFO_KEY,
  PRIMARY_COLOR
} from '@web/shared'
import { UserContext } from './store/user'

import './index.scss'

axios.interceptors.request.use((config) => {
  const ck = Cookie.get(COOKIE_ACCESS_TOKEN_KEY)
  return {
    ...config,
    Authorization: ck || ''
  }
})

const App = () => {
  const [user, setUser] = useState<R.User | null>(null)

  useEffect(() => {
    axios.interceptors.response.use(
      (data) => data,
      (res) => {
        res.err && toast.error(res.err)
        if (res.status === 401) {
          setUser(null)
          Cookie.del(COOKIE_ACCESS_TOKEN_KEY, '/', HOST)
          localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY)
          localStorage.removeItem(LOCAL_STORAGE_USER_INFO_KEY)
        }
        return res
      }
    )
    const cookie = Cookie.get(COOKIE_ACCESS_TOKEN_KEY)
    !!cookie && localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY, cookie)
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
    <Router>
      <Suspense fallback={null}>
        <UserContext.Provider value={user}>
          <Switch>
            <IndexRoute path="/" component={lazy(() => import('./pages/index'))} />
            <DefaultRoute path="/post/tag" component={lazy(() => import('./pages/tag'))} />
            <DefaultRoute path="/post/:id" component={lazy(() => import('./pages/post'))} />
            <DefaultRoute
              path="/bangumi/play/:id"
              component={lazy(() => import('./pages/player'))}
            />
            <DefaultRoute path="/search" component={lazy(() => import('./pages/search'))} />
            <DefaultRoute path="/about" component={lazy(() => import('./pages/about'))} />
            <DefaultRoute path="/:rest*" component={lazy(() => import('./pages/404'))} />
          </Switch>
        </UserContext.Provider>

        <footer className="footer">
          <div className="bd-footer-support">
            <h4 className="bd-footer-title">
              <strong>Support</strong> <span className="font-family-logo">UPV</span>
            </h4>
          </div>
          <div className="content" style={{ textAlign: 'center' }}>
            <p>
              <strong className="font-family-logo">UPV</strong>
              {'  '}The <a href="https://github.com/upvorg">source code</a> is licensed{' '}
              <a href="https://opensource.org/licenses/GPL-3.0">GPL-3.0</a>. The website content is
              licensed{' '}
              <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
            </p>
          </div>
        </footer>

        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              iconTheme: {
                primary: PRIMARY_COLOR,
                secondary: '#fff'
              }
            }
          }}
          containerStyle={{ top: 70, right: 20 }}
        />
      </Suspense>
    </Router>
  )
}

export default App
