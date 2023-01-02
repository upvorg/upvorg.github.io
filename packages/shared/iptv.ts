// https://github.com/youshandefeiyang/IPTV/blob/main/main/IPTV.m3u
// 'https://raw.githubusercontent.com/youshandefeiyang/IPTV/main/main/IPTV.m3u'

export const iptv = () =>
  fetch('https://raw.githubusercontent.com/youshandefeiyang/IPTV/main/main/IPTV.m3u')
    .then((_) => _.text())
    .then((_) => {
      const arr = _.split('\n').slice(1)

      let group = []
      for (let i = 0; i < arr.length; ) {
        group.push(arr.slice(i, (i += 2)))
      }

      const episodes = group.map((it, i) => {
        return {
          ID: i,
          Episode: i,
          Cover: /tvg-logo="(.+?)"/.exec(it[0])?.[1],
          TitleJapanese: '',
          TitleRomanji: '',
          Synopsis: '',
          Uid: 1,
          Pid: '2',
          CreatedAt: '2022-05-12T16:04:45+08:00',
          UpdatedAt: '2022-05-12T16:04:45+08:00',
          Title: /tvg-name="(.+?)"/.exec(it[0])?.[1] || /roup-title="(.+?)"/.exec(it[0])?.[1],
          VideoUrl: it[1]
        }
      })

      console.log(JSON.stringify(episodes))
    })

// const store = require.context('../../../../../public/m3u8/', true, /\.*\.m3u8$/)

// console.log(
//   JSON.stringify({
//     data: store.keys().map((it, i) => ({
//       ID: i,
//       Episode: i,
//       Cover: '',
//       Title: '',
//       TitleJapanese: '',
//       TitleRomanji: '',
//       VideoUrl: `/m3u8/${it.slice(2)}`,
//       Synopsis: '',
//       Uid: -1,
//       Pid: '-1',
//       CreatedAt: '2022-05-12T16:04:57+08:00',
//       UpdatedAt: '2022-05-12T16:07:04+08:00'
//     }))
//   })
// )
