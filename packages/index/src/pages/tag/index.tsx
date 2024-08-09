import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import ListSection from '../../components/list-section'
import { cliclisAdapter } from '../../enime.adp'
import { useLocation, useSearch } from 'wouter'
import queryString from 'query-string'
import { corsAxios } from '@web/shared/constants'

const cache: Record<string, any> = {}

//@ts-ignore
const store = require.context('../../mock/post/', true, /\.*\.json$/)

export default function SearchPage() {
  const [posts, setPosts] = useState<R.Post[] | null>()
  const { title, type, page = 1, tag } = queryString.parse(useSearch()) as Record<string, string>
  const [, setLocation] = useLocation()

  const pageHandler = (page: number) => {
    const qs = Object.assign({}, queryString.parse(window.location.search), { page })
    setLocation(`/pv/tag?${queryString.stringify(qs)}`)
    //@ts-ignore
    ;(root as HTMLDivElement).scrollTop = 0
  }

  useEffect(() => {
    if (tag || tag == 'all') {
      setPosts(null)
      corsAxios
        .get(`https://www.clicli.cc/posts?status=public&sort=&tag=${tag}&uid=&page=${page}&pageSize=24`)
        .then((it) => {
          setPosts(cliclisAdapter(it.posts))
        })
    } else {
      store
        .keys()
        .filter((it) => !it.startsWith('./-'))
        .forEach((key: string) => (cache[key] = store(key).data))

      const local = Object.values(cache).splice(20 * (+page - 1), 20)
      setPosts(local)
    }
  }, [page])

  return (
    <>
      <Helmet>
        <title>{`${title} - UPV - free animes no ads`}</title>
      </Helmet>

      <div className="search">
        <div className="search-header"></div>
        <div className="search-body">
          <ListSection title={title} videos={posts} />
          {type != 'recommends' && (
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
                  disabled={!posts || (posts && posts.length < 1) || posts.length < 12}
                  onClick={() => pageHandler(+page + 1)}
                >
                  <span className="is-primary">Older</span>
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
