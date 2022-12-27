export const enimeAdapter = (item: any) => ({
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
  }
})

export const enimesAdapter = (data: any) => data.map(enimeAdapter)

export const enimeSourceAdpter = ({ sources }: any) => ({
  ID: sources.id,
  Episode: sources.priority,
  Cover: '',
  Title: '',
  TitleJapanese: '',
  TitleRomanji: '',
  VideoUrl: 'https://v.kdcdn.net/20210928/eoB5uhLE/index.m3u8',
  Synopsis: '',
  Uid: 1,
  Pid: '7',
  CreatedAt: '2022-05-18T15:23:02+08:00',
  UpdatedAt: '2022-05-18T15:23:02+08:00'
})
