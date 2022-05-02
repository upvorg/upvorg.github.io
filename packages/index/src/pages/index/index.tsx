import { useEffect, useState } from 'react'
import ListSection from '../../components/list-section'
import RankList from '../../components/rank-list'
import { axios } from '@web/shared'

export default function IndexPage() {
  const st = ['推荐', '文章', '最新', '原创']
  const tag = ['tag=推荐', 'type=post', 'sort=bgm', 'sort=原创']
  const [state, setState] = useState<R.Post[][]|null[]>([null, null, null])
  const [rankList, setRankList] = useState<[] | null>(null)

  useEffect(() => {
    Promise.allSettled([
      axios.get('/posts?status=3&tag=推荐&page=1&pageSize=8&type=video'),
      axios.get('/posts?status=3&page=1&pageSize=6&type=post'),
      axios.get('/posts?status=3&sort=bgm&page=1&pageSize=12&type=video'),
      axios.get('/posts?status=3&sort=原创&page=1&pageSize=12&type=video'),
      axios.get(`/rank`)
    ]).then((_resp) => {
      const resp = _resp.map(
        (item) => (item as PromiseFulfilledResult<R.Response<any>>)?.value?.data ?? []
      )
      setRankList(resp.pop())
      setState(resp)
    })
  }, [])

  return (
    <>
      {state.map((item, index) => {
        if (index == 0) {
          return (
            <ListSection
              moreUrl={`/post/tag?${tag[index]}`}
              key={index}
              title={st[index]}
              videos={item}
              aside={<RankList list={rankList} />}
              asideTitle="排行榜"
            />
          )
        }
        return (
          <ListSection
            key={index}
            title={st[index]}
            videos={item}
            moreUrl={`/post/tag?${tag[index]}`}
          />
        )
      })}
    </>
  )
}
