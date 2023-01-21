import React from 'react'
import { Markdown } from '@web/shared/components/markdown'
import { Helmet } from 'react-helmet'

const content = `
## 关于

free animes no ads.

[APP 下载](https://app.upv.life/) |
[QQ 交流群](https://jq.qq.com/?_wv=1027&k=5lfSD1B) |
[![Discord](https://img.shields.io/discord/1017615537234264185.svg?label=&logo=discord&logoColor=fff&color=7389D8&labelColor=6A7EC2&style=flat-square)](https://discord.gg/hzjxYyPbKh)
`

const AboutPage: React.FC = () => {
  return (
    <div className="container">
      <Helmet>
        <title>关于 - UPV - free animes no ads</title>
      </Helmet>
      <Markdown type="render" value={content} />
    </div>
  )
}

export default AboutPage
