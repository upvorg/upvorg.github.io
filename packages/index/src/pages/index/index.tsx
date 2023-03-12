import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import RankList from '../../components/rank-list'
import ListSection from '../../components/list-section'

import rank from '../../mock/rank.json'
import recommends from '../../mock/recommends.json'
import { enimesAdapter } from '../../enime.adp'

const indexConfig = [
  {
    title: 'Recommends',
    query: 'type=recommends&title=推荐',
    icon: require('../../assets/recommend.svg').default
  },
  {
    title: 'Latest',
    query: 'type=enime&title=Enime'
  }
]

export default function IndexPage() {
  const [state, setState] = useState<R.Post[][] | null[]>([null, null])
  const [rankList, setRankList] = useState<R.Post[] | null>(null)

  useEffect(() => {
    Promise.allSettled([
      recommends,
      fetch('https://api.enime.moe/recent?perPage=18&language=JP').then((it) => it.json()),
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
            asideTitle={(index == 0 && 'Ranks') as any}
          />
        )
      })}
    </>
  )
}
