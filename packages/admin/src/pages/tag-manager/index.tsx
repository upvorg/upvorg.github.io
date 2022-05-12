import { axios } from '@web/shared'
import React, { useEffect, useState } from 'react'
import './index.scss'

export default function tagManager() {
  const [tags, setTags] = useState<R.Tag[]>([])
  const [tag, setTag] = useState<R.Tag>({ Name: '' } as R.Tag)

  useEffect(() => {
    axios.get('/tags').then((res) => {
      if (!res.err) {
        setTags(res.data)
      }
    })
  }, [])

  const handleNewTag = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    tag.Name = tag.Name.trim()
    if (tag.Name) {
      axios.post('/tag', { data: tag }).then((res) => {
        if (!res.err) {
          setTags([...tags, res.data])
          setTag({ Name: '' } as R.Tag)
        }
      })
    }
  }

  const handleDelTag = (id: number) => {
    axios.delete(`/tag/${id}`).then((res) => {
      if (!res.err) {
        setTags(tags.filter((tag) => tag.ID !== id))
      }
    })
  }

  return (
    <div className="tag-manager">
      <div className="block">
        <div className="tag-header is-flex is-justify-content-space-between is-align-items-center">
          <h1 className="title is-5 mb-0">标签</h1>
          <form onSubmit={handleNewTag}>
            <div className="is-flex">
              <input
                type="text"
                className="input mr-3"
                placeholder="输入标签名"
                value={tag.Name}
                onChange={(e) => setTag((t) => ({ ...t, Name: e.target.value }))}
                required
              />
              <button className="button is-primary" type="submit">
                添加
              </button>
            </div>
          </form>
        </div>
        <div className="tag-body">
          <div className="field is-grouped is-grouped-multiline">
            {tags?.map((tag, index) => (
              <div className="control" key={index}>
                <div className="tags has-addons">
                  <a className="tag is-primary">{tag.Name}</a>
                  <a className="tag is-delete" onClick={() => handleDelTag(tag.ID)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="block">
        <div className="tag-header is-flex is-justify-content-space-between is-align-items-center">
          <h1 className="title is-5 mt-1">分类</h1>
        </div>
        <div className="tag-body">
          <p className="has-text-danger subtitle">Forbidden</p>
        </div>
      </div>
    </div>
  )
}
