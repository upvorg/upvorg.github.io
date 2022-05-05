import { axios } from '@web/shared'
import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import ListSection from '../../components/list-section'
import { useQueryState } from '../../hooks/useQueryState'
import './index.scss'

export default function SearchPage() {
  const inputKeyword = useRef('')
  const [posts, setPosts] = useState([])
  const [{ page, k }, setQuery] = useQueryState({ page: 1, k: '' })

  const pageHandler = (page: number) => {
    setQuery({ page: page < 1 ? 1 : page })
    //@ts-ignore
    ;(root as HTMLDivElement).scrollTop = 0
  }

  useEffect(() => {
    if (k) {
      axios.get(`/posts?keyword=${k}&page=${page}&page_size=12`).then((res) => {
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
              setQuery({ k: inputKeyword.current })
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
              <button className="button is-primary">搜索</button>
            </div>
          </form>
        </div>
        <div className="search-body">
          <ListSection title="搜索结果" videos={posts} />
          <div
            className="paginate-container field has-addons"
            style={{ justifyContent: 'center', paddingBottom: '28px' }}
          >
            <p className="control">
              <button
                className="button"
                onClick={() => pageHandler(+page - 1)}
                disabled={+page <= 1}
              >
                <span>Newer</span>
              </button>
            </p>
            <p className="control">
              <button
                className="button is-outlined"
                disabled={posts.length < 1 || posts.length < 12}
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
