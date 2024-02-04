import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import ListSection from '../../components/list-section'
import { cliclisAdapter } from '../../enime.adp'
import queryString from 'query-string'
import useLocation, { useSearch } from 'wouter/use-location'

import './index.scss'
import { corsAxios } from '@web/shared/constants'

export default function SearchPage() {
  const inputKeyword = useRef('')
  const [posts, setPosts] = useState<any[] | null>()
  const [, setLocation] = useLocation()
  const { page, k } = queryString.parse(useSearch()) as Record<string, string>

  const pageHandler = (page: number) => {
    const qs = Object.assign({}, queryString.parse(window.location.search), { page })
    setLocation(`/search?${queryString.stringify(qs)}`)
    //@ts-ignore
    ;(root as HTMLDivElement).scrollTop = 0
  }

  useEffect(() => {
    if (k) {
      setPosts(null)
      inputKeyword.current = k as string
      // axios.get(`/posts?keyword=${k}&page=${page}&page_size=12`).then((res) => {
      //   setPosts(res.data)
      // })
      corsAxios
        .get(`https://www.clicli.cc/search/posts?key=${encodeURIComponent(k)}`)
        .then((it) => setPosts(cliclisAdapter(it.posts || null) as any))
        .catch((err) => {
          setPosts([])
          console.log(err)
        })
    }
  }, [k, page])

  return (
    <>
      <Helmet>
        <title>{k ? `${k} - 搜索 - UPV - free animes no ads` : '搜索 - UPV - free animes no ads'}</title>
      </Helmet>

      <div className="search">
        <div className="search-header">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const qs = Object.assign({}, queryString.parse(window.location.search), {
                k: inputKeyword.current,
                page: 1,
              })
              setLocation(`/search?${queryString.stringify(qs)}`)
              // setQuery({ k: inputKeyword.current, v: Date.now() } as any)
            }}
          >
            <div className="search-wrap">
              {/* <span className="search-logo"></span> */}
              <div className="search-action">
                <div className="control">
                  <input
                    id="search-input"
                    className="input"
                    maxLength={100}
                    autoComplete="off"
                    defaultValue={k}
                    onChange={(e) => (inputKeyword.current = e.target.value)}
                    type="text"
                    placeholder="Type to search"
                  />
                </div>
              </div>
              <button className="button is-primary">search</button>
            </div>
          </form>
        </div>
        <div className="search-body">
          <ListSection title="Result" videos={posts} />
          <div
            className="paginate-container field has-addons"
            style={{ justifyContent: 'center', paddingBottom: '28px' }}
          >
            <p className="control">
              <button className="button" onClick={() => pageHandler(+page - 1)} disabled={+page <= 1}>
                <span>Newer</span>
              </button>
            </p>
            <p className="control">
              <button
                className="button is-outlined"
                disabled={!posts || (posts && (posts?.length < 1 || posts?.length < 12))}
                onClick={() => pageHandler(+page + 1)}
              >
                <span className="is-primary">Older</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
