import { PRIMARY_COLOR } from '@web/shared'
import { Suspense, lazy } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Router, Switch } from 'wouter'
import { Layout } from './components/layout'

export const App: React.FC = () => {
  return (
    <Layout>
      <Router>
        <Suspense fallback={null}>
          <Switch>
            <Route path="/" component={lazy(() => import('./pages/home'))} />
            <Route path="/video/upload" component={lazy(() => import('./pages/uploader/video'))} />
            <Route path="/post/upload" component={lazy(() => import('./pages/uploader/post'))} />
            <Route
              path="/upload-manager"
              component={lazy(() => import('./pages/upload-manager'))}
            />
            <Route
              path="/comment/manager"
              component={lazy(() => import('./pages/comment-manager'))}
            />
            <Route path="/user/manager" component={lazy(() => import('./pages/user-manager'))} />
          </Switch>
        </Suspense>
      </Router>
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
    </Layout>
  )
}

export default App
