import './index.scss'

const AspectRatio = (
  props: React.PropsWithChildren<{
    ratio: number
    mw?: string | number
  }>
) => {
  const { children, ratio, mw } = props
  return (
    <div className="aspect-ratio" style={{ maxWidth: typeof mw === 'string' ? mw : `${mw}px` }}>
      <div className="aspect-ratio__fill" style={{ paddingTop: `${(1 / ratio) * 100}%` }}>
        {children}
      </div>
    </div>
  )
}

export default AspectRatio
