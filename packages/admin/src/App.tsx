import { PRIMARY_COLOR, Auth, LOCAL_STORAGE_USER_INFO_KEY, axios } from '@web/shared'
import React, { Suspense, lazy, useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Route, Router, Switch, useRoute } from 'wouter'
import { Layout } from './components/layout'
import { UserContext } from '@web/index/src/store/user'

axios.interceptors.response.use(
  (response) => (response.err && toast.error(response.err), response),
  (response) => {
    response.err && toast.error(response.err)
    if (response.status === 401) {
      Auth.logout()
    }
    return response
  }
)

export const App: React.FC = () => {
  const [user, setUser] = useState<R.User | null>(null)
  const [[i], [u]] = [useRoute('/signin'), useRoute('/signup')]

  useEffect(() => {
    if (!(i || u)) {
      axios.get('/user').then((_) => {
        if (!_.err) {
          setUser(_.data.user)
          localStorage.setItem(LOCAL_STORAGE_USER_INFO_KEY, JSON.stringify(_.data.user))
        }
      })
    }
  }, [])

  return (
    <>
      <UserContext.Provider value={user}>
        <Router>
          <Switch>
            <Layout>
              <Suspense fallback={null}>
                <Route path="/" component={lazy(() => import('./pages/home'))} />
                <Route
                  path="/video/upload"
                  component={lazy(() => import('./pages/uploader/video'))}
                />
                <Route
                  path="/video/:id/upload"
                  component={lazy(() => import('./pages/uploader/real-video'))}
                />
                <Route
                  path="/post/upload"
                  component={lazy(() => import('./pages/uploader/post'))}
                />
                <Route
                  path="/upload-manager"
                  component={lazy(() => import('./pages/upload-manager'))}
                />
                <Route path="/tag/manager" component={lazy(() => import('./pages/tag-manager'))} />
                <Route
                  path="/comment/manager"
                  component={lazy(() => import('./pages/comment-manager'))}
                />
                <Route
                  path="/user/manager"
                  component={lazy(() => import('./pages/user-manager'))}
                />
                <Route
                  path="/user/profile"
                  component={lazy(() => import('./pages/user-profile'))}
                />
              </Suspense>
            </Layout>
            <Route path="/:rest*" component={(() => '404') as unknown as React.FC} />
          </Switch>
        </Router>
      </UserContext.Provider>
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            iconTheme: {
              primary: PRIMARY_COLOR,
              secondary: '#fff'
            }
          }
        }}
        containerStyle={{ top: 70 }}
      />
    </>
  )
}

export default App
