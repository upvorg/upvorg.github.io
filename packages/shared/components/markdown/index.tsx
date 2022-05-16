import React from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import rehypeAttr from 'rehype-attr'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'

import './index.scss'

const CONFIG_MAP = {
  render: {
    view: {
      menu: false,
      md: false,
      html: true
    },
    classname: 'markdown_render'
  },
  editor: {
    view: {
      menu: true,
      md: true,
      html: false
    },
    classname: 'markdown_editor'
  }
}

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
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

export const Markdown: React.FC<Props> = (props) => {
  const { value = '', type, onChange, customClassName = '', placeholder = '' } = props
  const { view, classname: defaultClassName } = CONFIG_MAP[type]

  let classname = `markdown ${defaultClassName}`

  if (customClassName) {
    classname += ` ${customClassName}`
  }

  return (
    <MdEditor
      className={classname}
      readOnly={type === 'render'}
      view={view}
      value={value}
      htmlClass="markdown-body"
      renderHTML={async (text) => {
        const content = await processor.process(text)
        return content.toString()
      }}
      onChange={(data) => onChange?.(data.text)}
      placeholder={placeholder}
    />
  )
}

interface Props {
  type: 'editor' | 'render'
  customClassName?: string
  placeholder?: string
  value?: string
  onChange?: (text: string) => void
}
