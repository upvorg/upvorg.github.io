import React from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeAttr from 'rehype-attr'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'

import './index.scss'

const processor = unified()
  .use(remarkParse)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeAttr, { properties: 'attr' })
  .use(rehypeSanitize, {
    ...defaultSchema,
    attributes: {
      ...defaultSchema.attributes,
      img: [...(defaultSchema?.attributes?.img || []), ['style']]
    }
  })
  .use(rehypeStringify)

const Markdown: React.FC<Props> = (props) => {
  const { value = '', type, onChange, customClassName = '' } = props

  let view = { menu: false, md: false, html: true }
  let classname = 'markdown'

  if (type === 'render') {
    classname += ` markdown_render`
  }

  if (type === 'editor') {
    view = { menu: true, md: true, html: false }
    classname += ` markdown_editor`
  }

  if (customClassName) {
    classname += ` ${customClassName}`
  }

  return (
    <MdEditor
      className={classname}
      readOnly={type === 'render'}
      view={view}
      value={value}
      renderHTML={async (text) => {
        const content: any = await processor.process(text)
        return content.value
      }}
      onChange={(data) => onChange?.(data.text)}
    />
  )
}

export default Markdown

interface Props {
  type: 'editor' | 'render'
  value?: string
  customClassName?: ''
  onChange?: (text: string) => void
}
