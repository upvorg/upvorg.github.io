import { HTMLAttributeAnchorTarget } from 'react'
import './index.scss'

type Props = {
  title: string
  href: string
  target?: HTMLAttributeAnchorTarget
}

export const Tag: React.FC<Props> = ({ title, href }) => {
  return !!title ? (
    <a className="upv-tag" href={href} target="_blank">
      {title}
    </a>
  ) : null
}
