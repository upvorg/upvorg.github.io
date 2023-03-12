import React from 'react'
import { Markdown } from '@web/shared/components/markdown'
import { Helmet } from 'react-helmet'

const content = `
## About

Free animes no ads.

[Discord](https://discord.gg/Ue3p4CnRDP) |
[GitHub](https://github.com/upvorg) |
[APP Download](https://github.com/upvorg/cdn/releases) |
[QQ Group](https://jq.qq.com/?_wv=1027&k=5lfSD1B)

| ![](https://i.ibb.co/8PQ2P1Z/Screenshot-20230303-203520.jpg) | ![](https://i.ibb.co/yfcxbyZ/Screenshot-20230227-212716.jpg) | ![image](https://i.ibb.co/kKpLTs6/Screenshot-20230303-204742.jpg) |
|---|---|-------------------------------------------------------------------|


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
