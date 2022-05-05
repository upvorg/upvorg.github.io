import React from 'react'
import Markdown from '../../components/markdown'

const content = `
## 关于

这个人很懒什么都没有写
`

const AboutPage: React.FC = () => {
  return (
    <div className="container">
      <Markdown type="render" value={content} />
    </div>
  )
}

export default AboutPage
