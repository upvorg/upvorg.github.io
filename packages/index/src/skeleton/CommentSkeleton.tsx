import ContentLoader, { IContentLoaderProps } from 'react-content-loader'

const CommentSkeleton = (props: IContentLoaderProps) => {
  return (
    <ContentLoader viewBox="0 0 462 160" {...props}>
      <rect x="70" y="16" rx="5" ry="5" width="100" height="12" />
      <rect x="70" y="39" rx="5" ry="5" width="321" height="20" />

      <circle cx="26" cy="40" r="26" />
    </ContentLoader>
  )
}

const Postkeleton = (props: IContentLoaderProps) => {
  return (
    <ContentLoader viewBox="0 0 500 200" {...props} style={{ padding: '0.5em' }}>
      <rect x="60" y="25" rx="5" ry="5" width="50" height="10" />
      <rect x="60" y="45" rx="5" ry="5" width="60" height="10" />
      <rect x="0" y="80" rx="5" ry="5" width="46%" height="20" />
      <rect x="0" y="110" rx="5" ry="5" width="100%" height="20" />
      <rect x="0" y="140" rx="5" ry="5" width="70%" height="20" />
      <rect x="0" y="170" rx="5" ry="5" width="60%" height="20" />

      <circle cx="26" cy="40" r="26" />
    </ContentLoader>
  )
}

const VideoMetaSkeleton = (props: IContentLoaderProps) => {
  return (
    <ContentLoader viewBox="0 0 462 160" {...props}>
      <rect x="70" y="16" rx="5" ry="5" width="100" height="12" />
      <rect x="70" y="39" rx="5" ry="5" width="321" height="20" />

      <circle cx="26" cy="40" r="26" />
    </ContentLoader>
  )
}

CommentSkeleton.metadata = {
  name: 'comment', // My name
  github: 'comment', // Github username
  description: 'comment', // Little tagline
  filename: 'CommentSkeleton' // filename of your loader
}

export { CommentSkeleton, Postkeleton, VideoMetaSkeleton }
