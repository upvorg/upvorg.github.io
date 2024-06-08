export const enimeAdapter = (item: any) => {
  if (!item.anime) item.anime = item
  return {
    ...item,
    enime: true,
    adp: true,
    ID: item.anime?.slug,
    Cover: item.anime?.coverImage || '',
    Title: item.anime?.title.native || '',
    Content: item.description || '',
    Tags: '其他',
    Type: 'video',
    CreatedAt: item.createdAt,
    UpdatedAt: item.updatedAt,
    Meta: {
      TitleJapanese: '',
      TitleRomanji: '',
      Genre: item.genre?.toString(),
      Region: 'enime',
      Episodes: 13,
      IsEnd: 2,
      PublishDate: '2015-01-01T08:00:00+08:00',
      UpdatedDate: null,
    },
    Creator: {
      ID: 1,
      Name: 'enime.moe',
      Nickname: 'enime',
      Avatar: 'https://q1.qlogo.cn/g?b=qq&nk=7619376472&s=640',
      Bio: '这个人很酷，什么都没有留下',
    },
    episodes: item.anime?.episodes?.map((ep: any) => ({
      ID: ep.id,
      Episode: ep.number,
      Cover: ep.image,
      Title: ep.title,
      TitleJapanese: '',
      TitleRomanji: '',
      VideoUrl: '',
      Synopsis: '',
      Uid: 1,
      Pid: item.anime?.slug,
      CreatedAt: ep.airedAt || ep.createdAt,
      UpdatedAt: ep.updatedAt,
    })),
  }
}

export const enimesAdapter = (data: any[] = []) => data.map(enimeAdapter)

export const enimeSearchAdapter = (data: any[] = []) => {
  return data.map((item) => ({
    ...item,
    enime: true,
    ID: item?.slug,
    Cover: item?.coverImage || '',
    Title: item?.title.native || '',
    Content: item.description || '',
    Tags: '其他',
    Type: 'video',
    CreatedAt: item.createdAt,
    UpdatedAt: item.updatedAt,
    Meta: {
      TitleJapanese: '',
      TitleRomanji: '',
      Genre: item.genre?.toString(),
      Region: 'enime',
      Episodes: 13,
      IsEnd: 2,
      PublishDate: '2015-01-01T08:00:00+08:00',
      UpdatedDate: null,
    },
    Creator: {
      ID: 1,
      Name: 'enime.moe',
      Nickname: 'enime',
      Avatar: 'https://q1.qlogo.cn/g?b=qq&nk=7619376472&s=640',
      Bio: '这个人很酷，什么都没有留下',
    },
  }))
}

export function getSuo(content) {
  if (!content) return 'https://ae01.alicdn.com/kf/U6751d35799cc4d06965aa7b1879e0fc6i.jpg'
  let m = content.match(/suo(.+?)\)/i)
  return m ? m[1].slice(2) : 'https://cdn-us.imgs.moe/2023/02/27/63fcb180cbb30.jpg'
}

export const clicliAdapter = (item: any) => {
  if (!item) return {}
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
      UpdatedDate: null,
    },
    Creator: {
      ID: 1,
      Name: 'YUESE',
      Nickname: 'YUESE',
      Avatar: 'https://q1.qlogo.cn/g?b=qq&nk=7619376472&s=640',
      Bio: '这个人很酷，什么都没有留下',
    },
    episodes: item.content.split('\n').map((ep: any) => ({
      ID: ep.split('$')[0],
      Episode: ep.split('$')[0],
      Cover: getSuo(item.content),
      Title: ep.split('$')[0],
      TitleJapanese: '',
      TitleRomanji: '',
      VideoUrl: '',
      Synopsis: '',
      Uid: 1,
      Pid: item.id,
      CreatedAt: item.time,
      UpdatedAt: item.time,
    })),
  }
}

const blackList = [3421, 31, 786, 3880, 2617, 4087]

export const cliclisAdapter = (data: any[] = []) => data.filter((it) => !blackList.includes(it.id)).map(clicliAdapter)
