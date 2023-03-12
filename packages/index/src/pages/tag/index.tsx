import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import ListSection from '../../components/list-section'
import { enimesAdapter } from '../../enime.adp'
import useLocation, { useSearch } from 'wouter/use-location'
import queryString from 'query-string'

const cache: Record<string, any> = {}

//@ts-ignore
const store = require.context('../../mock/post/', true, /\.*\.json$/)

export default function SearchPage() {
  const [posts, setPosts] = useState<R.Post[] | null>()
  const { title, type, page = 1 } = queryString.parse(useSearch()) as Record<string, string>
  const [, setLocation] = useLocation()

  const pageHandler = (page: number) => {
    const qs = Object.assign({}, queryString.parse(window.location.search), { page })
    setLocation(`/pv/tag?${queryString.stringify(qs)}`)
    //@ts-ignore
    ;(root as HTMLDivElement).scrollTop = 0
  }

  useEffect(() => {
    if (type == 'enime') {
      setPosts(null)
      fetch(`https://api.enime.moe/recent?perPage=${24}&page=${page}&language=JP`)
        .then((it) => it.json())
        .then((it) => {
          setPosts(enimesAdapter(it.data))
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
