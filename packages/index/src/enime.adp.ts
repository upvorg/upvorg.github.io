export function getSuo(content) {
  if (!content) return 'https://ae01.alicdn.com/kf/U6751d35799cc4d06965aa7b1879e0fc6i.jpg'
  let m = content.match(/suo(.+?)\)/i)
  return m ? m[1].slice(2) : 'https://cdn-us.imgs.moe/2023/02/27/63fcb180cbb30.jpg'
}

const getVideos = (s: string) => {
  return s
    .split('\n')
    .filter(Boolean)
    .map((v, i) => {
      const [chunkString, src] = v.split('$')
      const [Episode, Title] = chunkString.split(' ')
      return {
        Episode: i,
        Title: Title || Episode,
        VideoUrl: src,
        title: Title || Episode,
        src,
        poster: 'https://www.loliapi.com/acg/pc/'
      }
    })
}

export const clicliAdapter = (item: any) => {
  const Episodes = getVideos(item.videos)

  return {
    ...item,
    adp: true,
    clicli: true,
    ID: item.id,
    Cover: getSuo(item.content),
    Title: item.title,
    Content: item.content,
    Tags: item.tag,
    Type: 'video',
    CreatedAt: item.time,
    UpdatedAt: item.time,
    Meta: {
      TitleJapanese: '',
      TitleRomanji: '',
      Genre: item.sort,
      Region: 'clicli',
      Episodes: item.content.split('\n').length,
      IsEnd: 2,
      PublishDate: item.time,
      UpdatedDate: null
    },
    Creator: {
      ID: 1,
      Name: 'YUESE',
      Nickname: 'YUESE',
      Avatar: 'https://q1.qlogo.cn/g?b=qq&nk=7619376472&s=640',
      Bio: '这个人很酷，什么都没有留下'
    },
    Episodes
  }
}

const blackList = [3421, 31, 786, 3880, 2617, 4087, 4086, 620, 3062]

export const cliclisAdapter = (data: any[] | null) =>
  data?.filter((it) => !blackList.includes(it.id) && it.videos).map(clicliAdapter) || []
