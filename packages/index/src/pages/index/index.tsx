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
    title: 'enime.moe',
    query: 'type=video&is_original=2&title=原创'
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
      // fetch('https://api.enime.moe/recent?perPage=20').then((it) => it.json()),
      [
        {
          id: 'clc5l02tj3vtrpk01lxcxcodn',
          animeId: 'cl90n2z4r002t01pkhhxxhk5g',
          number: 54,
          title: null,
          image: null,
          introStart: null,
          introEnd: null,
          filler: null,
          createdAt: '2022-12-27T02:00:40.518Z',
          updatedAt: '2022-12-27T02:00:40.518Z',
          airedAt: '2022-12-27T02:00:00.000Z',
          titleVariations: null,
          description: null,
          anime: {
            id: 'cl90n2z4r002t01pkhhxxhk5g',
            slug: 'xian-mu',
            anilistId: 148334,
            coverImage: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx148334-2AjBjjrYUN3f.png',
            bannerImage: null,
            status: 'RELEASING',
            season: 'UNKNOWN',
            title: {
              native: '仙墓',
              romaji: 'Xian Mu',
              english: null,
              userPreferred: 'Xian Mu'
            },
            mappings: {
              mal: 51492,
              anilist: 148334,
              anisearch: 17423
            },
            currentEpisode: 54,
            next: '2022-12-31T02:00:00.000Z',
            synonyms: ['Immortal Tomb'],
            lastEpisodeUpdate: '2022-12-27T05:21:42.935Z',
            seasonInt: null,
            description: null,
            duration: 12,
            averageScore: null,
            popularity: 120,
            color: '#3593bb',
            year: null,
            createdAt: '2022-10-09T01:00:57.060Z',
            updatedAt: '2022-12-27T12:06:14.746Z',
            format: 'ONA',
            lastChecks: {
              cl6k4ltr40058z4lub9nchbna: 1672141399870
            },
            genre: ['Adventure']
          },
          sources: [
            {
              id: 'clc5s6m8a0001jfpk26lfghfb',
              website: 'Gogoanime',
              url: 'https://gogoanime.ar',
              priority: 1,
              subtitle: false
            }
          ]
        }
      ],
      posts,
      videos,
      rank
    ] as any).then((_resp) => {
      const resp = _resp.map((itemPromise: any, i) => {
        if (i == 1) return enimesAdapter(itemPromise.value)
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
