import { useEffect, useState } from 'react'
import ListSection from '../../components/list-section'
import RankList from '../../components/rank-list'
import { axios } from '@web/shared'

export default function IndexPage() {
  const st = ['推荐', '文章', '最新', '原创']
  const tag = [
    '/posts/recommends',
    '/posts?type=post',
    '/posts?type=video',
    '/posts?type=video&genre=原创'
  ]
  const [state, setState] = useState<R.Post[][] | null[]>([null, null, null])
  const [rankList, setRankList] = useState<[] | null>(null)

  useEffect(() => {
    Promise.allSettled([
      axios.get('/posts/recommends'),
      axios.get('/posts?type=post&page=1&pageSize=6'),
      axios.get('/posts?type=video&page=1&pageSize=12'),
      axios.get('/posts?type=video&genre=原创&page=1&pageSize=12'),
      axios.get(`/post/ranking`)
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
            moreUrl={`/post/tag?t=${st[index]}&q=${tag[index]}`}
          />
        )
      })}
    </>
  )
}
