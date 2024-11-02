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
    remote: recommends
  },
  {
    title: `❤️‍🔥MISS U`,
    remote: `/posts?status=&sort=&tag=恋爱&page=1&pageSize=24`,
    query: `tag=恋爱&title=❤️‍🔥`
  },
  {
    title: '✨Latest Releases',
    remote: `/posts?status=&sort=&tag=&uid=&page=1&pageSize=24`,
    query: 'tag=all&title=Latest Releases'
  }
]

export default function IndexPage() {
  const [state, setState] = useState<R.Post[][] | null[]>(
    Array.from({ length: indexConfig.length }, () => null)
  )

  // https://cors.moopa.my.id/?url=
  // https://techz-cors-bypass.herokuapp.com/${res.url}
  useEffect(() => {
    Promise.allSettled(
      indexConfig.map(({ remote: remote }) => (typeof remote == 'string' ? corsAxios.get(remote) : remote))
    ).then((_resp) => {
      const resp = _resp.map(({ value }: any) => {
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
      {indexConfig.map((config, index) => {
        return (
          <ListSection
            isFeed={true}
            key={index}
            videos={state[index]}
            isLive={index == -1}
            icon={config.icon}
            title={config.title}
            moreUrl={`/pv/tag?${config.query}`}
            aside={index == 0 && <RankList />}
            asideTitle={(index == 0 && 'Ranks') as any}
          />
        )
      })}
    </>
  )
}
