import { PropsWithChildren } from 'react'
import { Aside } from '../Aside'
import Header from '../Header'
import './index.scss'

export const Layout: React.FC<PropsWithChildren<any>> = (props) => {
  return (
    <>
      <input id="aside-menu" type="checkbox" className="aside-toggle" />
      <header className="header">
        <Header />
      </header>

      <aside className="aside">
        <Aside />
      </aside>

      <main className="body">
        <div className="content container">{props.children}</div>
      </main>
    </>
  )
}
