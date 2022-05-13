type Tag = {
  title: string
  href: string
}

export const Tags: React.FC<{ tags: Tag[] }> = ({ tags }) => {
  return tags.length ? (
    <div className="tags are-medium">
      {tags.map(({ href, title }, i) => (
        <a
          key={i}
          className="tag is-primary is-light"
          href={href}
          target="_blank"
          style={{ fontSize: '0.9rem' }}
        >
          {title}
        </a>
      ))}
    </div>
  ) : null
}
