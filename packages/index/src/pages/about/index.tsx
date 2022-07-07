import React from 'react'
import { Markdown } from '@web/shared/components/markdown'
import { Helmet } from 'react-helmet'

const content = `
## 关于

free animes no ads.

[APP 下载](https://app.upv.life/) |
[QQ 交流群](https://jq.qq.com/?_wv=1027&k=5lfSD1B)
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
