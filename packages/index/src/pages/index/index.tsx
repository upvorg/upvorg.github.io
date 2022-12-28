import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
// import { axios } from '@web/shared/constants'
import RankList from '../../components/rank-list'
import ListSection from '../../components/list-section'

import rank from '../../mock/rank.json'
import recommends from '../../mock/recommends.json'
import posts from '../../mock/posts.json'
import videos from '../../mock/videos.json'
import { enimesAdapter } from '../../enime.adp'

const indexConfig = [
  {
    title: '推荐',
    query: 'type=recommends&title=推荐',
    icon: require('../../assets/recommend.svg').default
  },
  {
    title: 'Enime',
    query: 'type=enime'
    // query: 'type=video&is_original=2&title=原创'
  },
  {
    title: '文章',
    query: 'type=post&title=文章',
    icon: require('../../assets/post.svg').default
  },
  {
    title: '最新',
    query: 'type=video&title=最新'
  }
]

export default function IndexPage() {
  const [state, setState] = useState<R.Post[][] | null[]>([null, null, null])
  const [rankList, setRankList] = useState<R.Post[] | null>(null)

  useEffect(() => {
    Promise.allSettled([
      // axios.get('/posts/recommends?page_size=12'),
      // axios.get('/posts?type=post&page_size=6'),
      // axios.get('/posts?type=video&page_size=12'),
      // axios.get('/posts?type=video&is_original=2&page_size=12'),
      // axios.get(`/post/ranking?&page_size=10`)
      recommends,
      fetch('https://api.enime.moe/recent?perPage=20').then((it) => it.json()),
      posts,
      videos,
      rank
    ] as any).then((_resp) => {
      const resp = _resp.map((itemPromise: any, i) => {
        if (i == 1) return enimesAdapter(itemPromise.value?.data)
        return (itemPromise as any)?.value?.data || []
      })

      setRankList(resp.pop()!)
      setState(resp)
    })
  }, [])

  return (
    <>
      <Helmet>
        <title>UPV - free animes no ads</title>
      </Helmet>
      {state.map((item, index) => {
        return (
          <ListSection
            key={index}
            videos={item}
            icon={indexConfig[index].icon}
            title={indexConfig[index].title}
            moreUrl={`/pv/tag?${indexConfig[index].query}`}
            aside={index == 0 && <RankList list={rankList} />}
            asideTitle={(index == 0 && '排行榜') as any}
          />
        )
      })}
    </>
  )
}
