import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import RankList from '../../components/rank-list'
import ListSection from '../../components/list-section'

import recommends from '../../mock/recommends.json'
import { cliclisAdapter } from '../../enime.adp'
import { corsAxios } from '@web/shared/constants'

const indexConfig = [
  // {
  //   title: 'Lives',
  //   query: 'type=recommends&title=recommends',
  //   icon: require('../../assets/live.svg').default,
  // },
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
      // corsAxios.get(`https://www.clicli.cc/users?level=4&page=1&pageSize=9`),
      recommends,
      corsAxios.get(
        'https://www.clicli.cc/posts?status=public&sort=&tag=%E6%8E%A8%E8%8D%90&uid=&page=1&pageSize=12'
      ),
      corsAxios.get(
        'https://www.clicli.cc/posts?status=public&sort=&tag=&uid=&page=1&pageSize=24'
      ),
      corsAxios.get('https://www.clicli.cc/rank?day=60'),
    ] as any).then((_resp) => {
      const resp = _resp.map(({ value }: any, i) => {
        if (value.posts) {
          return cliclisAdapter(value.posts)
        }

        return value.data
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
            isLive={index == -1}
            icon={indexConfig[index].icon}
            title={indexConfig[index].title}
            moreUrl={`/pv/tag?${indexConfig[index].query}`}
            aside={index == 0 && <RankList list={state.at(-1)!} />}
            asideTitle={(index == 0 && 'Ranks') as any}
          />
        )
      })}
    </>
  )
}
