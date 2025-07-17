import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import ListSection from '../../components/list-section'

import recommends from '../../mock/recommends.json'
import { cliclisAdapter } from '../../enime.adp'
import { corsAxios } from '@web/shared/constants'
import RankList from '../../components/rank-list'
import classNames from 'classnames'

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
  }
  // {
  //   title: `🔥`,
  //   remote: `/posts?status=&sort=&tag=推荐&page=1&pageSize=24`,
  //   query: `tag=推荐&title=❤️‍🔥`
  // },
  // {
  //   title: `❤️‍🔥 Love`,
  //   remote: `/posts?status=&sort=&tag=恋爱&page=1&pageSize=24`,
  //   query: `tag=恋爱&title=❤️‍🔥`
  // }
  // {
  //   title: '✨Latest Releases',
  //   remote: `/posts?status=&sort=&tag=&uid=&page=1&pageSize=24`,
  //   query: 'tag=all&title=Latest Releases'
  // }
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
      const resp = _resp.map(({ value }: any, i) => {
        if (i != 0) {
          return cliclisAdapter(value.data)
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
      <TagAnime />
    </>
  )
}

const TagAnime = () => {
  const [tag, setTag] = useState('tag=推荐&sort=新番')
  const [state, setState] = useState<R.Post[]>([])

  useEffect(() => {
    corsAxios.get(`/posts?status=&page=${1}&pageSize=24&${tag}`).then((it) => {
      setState(cliclisAdapter(it.data))
    })
  }, [tag])

  return (
    <div>
      <ListSection
        isFeed={true}
        videos={state}
        moreUrl={!(tag == 'tag=推荐&sort=新番') && `/pv/tag?${tag || 'all'}`}
        title={
          <div className="tags are-medium" style={{ marginBottom: '6px' }}>
            {[
              ['🔥 Hot', 'tag=推荐&sort=新番'],
              ['✨ Latest', 'tag='],
              ['2025/04', 'tag=2025年4月'],
              ['❤️‍🔥 Love', 'tag=恋爱'],
              ['🤣 Funny', 'tag=搞笑'],
              ['🔞', 'tag=r15']
            ].map(([title, type]) => (
              <a
                className={classNames('tag is-hoverable is-medium', {
                  'is-primary': tag == type
                })}
                key={type}
                onClick={() => {
                  if (type == 'tag=r15') return
                  setTag(type)
                }}
                onDoubleClick={() => {
                  if (type != 'tag=r15') return
                  setTag(type)
                }}
              >
                {title}
              </a>
            ))}
          </div>
        }
      />
    </div>
  )
}
