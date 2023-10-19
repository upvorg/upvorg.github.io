import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import RankList from '../../components/rank-list'
import ListSection from '../../components/list-section'

import recommends from '../../mock/recommends.json'
import { cliclisAdapter } from '../../enime.adp'

const indexConfig = [
  {
    title: 'Lives',
    query: 'type=recommends&title=recommends',
    icon: require('../../assets/live.svg').default,
  },
  {
    title: 'Recommends',
    query: 'type=recommends&title=recommends',
    icon: require('../../assets/recommend.svg').default,
  },
  {
    title: `What We're Watching Right Now`,
    query: `type=popular&title=What We're Watching Right Now`,
  },
  {
    title: 'Latest Releases',
    query: 'type=recent&title=Latest Releases',
  },
]

export default function IndexPage() {
  const [state, setState] = useState<R.Post[][] | null[]>([null, null])

  // https://cors.moopa.my.id/?url=
  // https://techz-cors-bypass.herokuapp.com/${res.url}
  useEffect(() => {
    Promise.allSettled([
      fetch(
        `https://ottocors.vercel.app/cors?url=${encodeURIComponent(
          'https://www.clicli.cc/users?level=4&page=1&pageSize=9'
        )}`
      ).then((it) => it.json()),
      recommends,
      fetch(
        `https://ottocors.vercel.app/cors?url=${encodeURIComponent(
          'https://www.clicli.cc/posts?status=public&sort=&tag=%E6%8E%A8%E8%8D%90&uid=&page=1&pageSize=12'
        )}`
      ).then((it) => it.json()),
      fetch(
        `https://ottocors.vercel.app/cors?url=${encodeURIComponent(
          'https://www.clicli.cc/posts?status=public&sort=%E6%96%B0%E7%95%AA&tag=&uid=&page=1&pageSize=25'
        )}`
      ).then((it) => it.json()),
      fetch('https://ottocors.vercel.app/cors?url=https://www.clicli.cc/rank?day=300').then((it) =>
        it.json()
      ),
    ] as any).then((_resp) => {
      const resp = _resp.map((itemPromise: any, i) => {
        if (i == 0) return (itemPromise as any)?.value?.users || []
        if (i == 1) return (itemPromise as any)?.value?.data || []
        return cliclisAdapter(itemPromise.value?.posts)
      })

      setState(resp)
    })
  }, [])

  return (
    <>
      <Helmet>
        <title>UPV - free animes no ads</title>
      </Helmet>
      {indexConfig.map((_, index) => {
        return (
          <ListSection
            key={index}
            videos={state[index]}
            isLive={index == 0}
            icon={indexConfig[index].icon}
            title={indexConfig[index].title}
            moreUrl={`/pv/tag?${indexConfig[index].query}`}
            aside={index == 1 && <RankList list={state[-1]} />}
            asideTitle={(index == 1 && 'Ranks') as any}
          />
        )
      })}
    </>
  )
}
