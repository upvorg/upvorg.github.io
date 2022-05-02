import { axios } from '@web/shared'
import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import ListSection from '../../components/list-section'
import './index.scss'

export default function SearchPage() {
  const urlSearchParams = new URLSearchParams(window.location.search)
  const queryParams = Object.fromEntries(urlSearchParams.entries())
  const inputKeyword = useRef('')
  const [posts, setPosts] = useState([])
  const k = inputKeyword.current || queryParams.k

  useEffect(() => {
    if (k) {
      axios.get(`/search/posts?key=${k}`).then((res) => {
        setPosts(res.data)
      })
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>{k ? `${k} - 搜索` : '搜索'}</title>
      </Helmet>

      <div className="search">
        <div className="search-header">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              window.history.replaceState(null, '', `?k=${inputKeyword.current}`)
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
                    defaultValue={queryParams.k}
                    onChange={(e) => (inputKeyword.current = e.target.value)}
                    type="text"
                    placeholder="Type to search"
                  />
                </div>
              </div>
              <button className="button is-primary">搜索</button>
            </div>
          </form>
        </div>
        <div className="search-body">
          <ListSection title="搜索结果" videos={posts} />
        </div>
      </div>
    </>
  )
}
