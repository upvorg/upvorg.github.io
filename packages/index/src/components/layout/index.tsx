import { useEffect } from 'react'
import { Route, RouteProps } from 'wouter'
import Header from '../header'
import './index.scss'

const IndexLayout: React.FC<any> = (props) => {
  useEffect(() => {
    const header = document.querySelector('.upv-header__bar')!

    const scrollHandler = (_: Event) => {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      if (scrollTop >= 222) {
        header.classList.add('fixed-header')
      } else {
        header.classList.remove('fixed-header')
      }
    }
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <>
      <div className="upv-header">
        <div className="upv-header__bar">
          <Header />
        </div>
        <div className="upv-header__banner">
          <div className="taper-line"></div>
        </div>
      </div>
      <main className="container">{props.children}</main>
    </>
  )
}

const DefaultLayout: React.FC = (props) => {
  return (
    <>
      <div className="upv-header">
        <div className="upv-header__bar fixed-header">
          <Header />
        </div>
      </div>
      <main className="container">{props.children}</main>
    </>
  )
}

type LayoutRouteProps = RouteProps & { layout: React.FC; component?: React.FC<any> }

const LayoutRoute = ({ component: Component, layout: Layout, children, ...rest }: LayoutRouteProps) => {
  return (
    <Route
      {...rest}
      component={({ params }) => {
        return (
          <Layout>
            {Component ? (
              <Component {...params} />
            ) : typeof children === 'function' ? (
              children(params)
            ) : (
              children
            )}
          </Layout>
        )
      }}
    />
  )
}

const IndexRoute = ({ ...rest }: Omit<LayoutRouteProps, 'layout'>) => (
  <LayoutRoute {...rest} layout={IndexLayout} />
)

const DefaultRoute = ({ ...rest }: Omit<LayoutRouteProps, 'layout'>) => (
  <LayoutRoute {...rest} layout={DefaultLayout} />
)

export { IndexRoute, DefaultRoute }
