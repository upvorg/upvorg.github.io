import { axios } from '@web/shared'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import ListSection from '../../components/list-section'

export default function SearchPage() {
  const urlSearchParams = new URLSearchParams(window.location.search)
  const queryParams = Object.fromEntries(urlSearchParams.entries())
  const [posts, setPosts] = useState<R.Post[]>([])

  useEffect(() => {
    axios.get(queryParams.q).then((res) => {
      setPosts(res.data)
    })
  }, [])

  return (
    <>
      <Helmet>
        <title>{queryParams.t}</title>
      </Helmet>

      <div className="search">
        <div className="search-header"></div>
        <div className="search-body">
          <ListSection title={queryParams.t} videos={posts} />
        </div>
      </div>
    </>
  )
}
