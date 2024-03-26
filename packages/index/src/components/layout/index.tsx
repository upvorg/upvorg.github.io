import { useEffect, PropsWithChildren, Suspense } from 'react'
import { Route, RouteProps } from 'wouter'
import Header from '../header'
import './index.scss'

const $root = document.getElementById('root')!

const IndexLayout: React.FC<PropsWithChildren<any>> = (props) => {
  useEffect(() => {
    const header = document.querySelector('.upv-header__bar')!

    const scrollHandler = (_: Event) => {
      const scrollTop = $root.scrollTop

      if (scrollTop >= 222) {
        header.classList.add('fixed-header')
      } else {
        header.classList.remove('fixed-header')
      }
    }

    $root.addEventListener('scroll', scrollHandler)
    return () => {
      $root.removeEventListener('scroll', scrollHandler)
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

const DefaultLayout: React.FC<PropsWithChildren<any>> = (props) => {
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

type LayoutRouteProps = RouteProps & { layout: React.FC<any>; component?: React.FC<any> }

const LayoutRoute = ({ component: Component, layout: Layout, children, ...rest }: LayoutRouteProps) => {
  useEffect(() => {
    //@ts-expect-error
    root.scrollTo({ top: 0, left: 0 })
  }, [])
  return (
    <Route
      {...rest}
      component={({ params }) => {
        return (
          <Layout>
            <Suspense fallback={<Loading />}>
              {Component ? <Component {...params} /> : typeof children === 'function' ? children(params) : children}
            </Suspense>
          </Layout>
        )
      }}
    />
  )
}

const IndexRoute = ({ ...rest }: Omit<LayoutRouteProps, 'layout'>) => <LayoutRoute {...rest} layout={IndexLayout} />

const DefaultRoute = ({ ...rest }: Omit<LayoutRouteProps, 'layout'>) => <LayoutRoute {...rest} layout={DefaultLayout} />

function Loading() {
  return (
    <div style={{ height: '80vh', lineHeight: '80vh', textAlign: 'center', fontSize: '32px' }}>
      <h2 className="__loading__">🌀 Loading...</h2>
      <style>{`.__loading__{ animation: loading 5s infinite ease-in-out; }`}</style>
    </div>
  )
}

export { IndexLayout, DefaultLayout, IndexRoute, DefaultRoute }
