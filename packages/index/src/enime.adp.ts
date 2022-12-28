export const enimeAdapter = (item: any) => {
  return {
    ...item,
    enime: true,
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
      UpdatedDate: null
    },
    Creator: {
      ID: 1,
      Name: 'enime.moe',
      Nickname: 'enime',
      Avatar: 'https://q1.qlogo.cn/g?b=qq&nk=7619376472&s=640',
      Bio: '这个人很酷，什么都没有留下'
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
      UpdatedAt: ep.updatedAt
    }))
  }
}

export const enimesAdapter = (data: any) => data.map(enimeAdapter)

export const enimeSearchAdapter = (data: any[]) => {
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
      UpdatedDate: null
    },
    Creator: {
      ID: 1,
      Name: 'enime.moe',
      Nickname: 'enime',
      Avatar: 'https://q1.qlogo.cn/g?b=qq&nk=7619376472&s=640',
      Bio: '这个人很酷，什么都没有留下'
    }
  }))
}
