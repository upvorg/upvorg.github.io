import { axios } from '@web/shared'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import ListSection from '../../components/list-section'

export default function SearchPage() {
  const urlSearchParams = new URLSearchParams(window.location.search)
  const queryParams = Object.fromEntries(urlSearchParams.entries())
  const [posts, setPosts] = useState([])
  const { tag = '', sort = '', type = 'video' } = queryParams

  useEffect(() => {
    axios.get(`/posts?status=3&tag=${tag}&sort=${sort}&type=${type}`).then((res) => {
      setPosts(res.data)
    })
  }, [])

  const title = type === 'post' ? '文章' : tag || sort

  return (
    <>
      <Helmet>
        <title>{title ? `${title} - 标签` : '标签'}</title>
      </Helmet>

      <div className="search">
        <div className="search-header"></div>
        <div className="search-body">
          <ListSection title={title} videos={posts} />
        </div>
      </div>
    </>
  )
}
