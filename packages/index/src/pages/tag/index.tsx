import { axios } from '@web/shared/constants'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import ListSection from '../../components/list-section'
import { useQueryState } from '../../hooks/useQueryState'

export default function SearchPage() {
  const [posts, setPosts] = useState<R.Post[]>([])
  const [{ title, type, tag, genre, page, is_original }, setQuery] = useQueryState({
    page: 1,
    k: '',
    title: '',
    type: '',
    tag: '',
    genre: '',
    is_original: 0
  })

  let query = `/posts?type=${type}&tag=${tag}&genre=${genre}&is_original=${is_original}&page=${page}&page_size=12`
  if (type == 'recommends') {
    query = '/posts/recommends'
  } else if (type == 'lastest') {
    query = '/posts?type=video'
  }

  const pageHandler = (page: number) => {
    setQuery({ page: page < 1 ? 1 : page })
    //@ts-ignore
    ;(root as HTMLDivElement).scrollTop = 0
  }

  useEffect(() => {
    axios.get(query).then((res) => {
      setPosts(res.data)
    })
  }, [])

  return (
    <>
      <Helmet>
        <title>{title}</title>
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
          )}
        </div>
      </div>
    </>
  )
}
