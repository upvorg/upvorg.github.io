import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import RankList from '../../components/rank-list'
import ListSection from '../../components/list-section'

import recommends from '../../mock/recommends.json'
import { enimesAdapter } from '../../enime.adp'

const indexConfig = [
  {
    title: 'Latest Releases',
    query: 'type=enime&title=Latest Releases',
  },
  {
    title: `What We're Watching Right Now`,
    query: `type=enime&title=What We're Watching Right Now`,
  },
  {
    title: 'Recommends',
    query: 'type=recommends&title=recommends',
    icon: require('../../assets/recommend.svg').default,
  },
]

export default function IndexPage() {
  const [state, setState] = useState<R.Post[][] | null[]>([null, null])

  useEffect(() => {
    Promise.allSettled([
      fetch('https://api.enime.moe/recent?perPage=16&language=JP').then((it) => it.json()),
      fetch('https://api.enime.moe/popular?perPage=18&language=JP').then((it) => it.json()),
      recommends,
    ] as any).then((_resp) => {
      const resp = _resp.map((itemPromise: any, i) => {
        if (i == 0 || i == 1) return enimesAdapter(itemPromise.value?.data)
        return (itemPromise as any)?.value?.data || []
      })

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
            aside={index == 0 && <RankList list={state[1]} />}
            asideTitle={(index == 0 && 'Ranks') as any}
          />
        )
      })}
    </>
  )
}
