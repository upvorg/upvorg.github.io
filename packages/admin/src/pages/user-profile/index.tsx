import { axios, USER_LEVEL, USER_LEVEL_MAP } from '@web/shared/constants'
import { useUserStore } from '@web/shared/UserContext'
import classNames from 'classnames'
import qs from 'query-string'
import React, { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useUploader } from '../uploader/use-uploader'
import './index.scss'

export default function UserProfile() {
  const userName = qs.parse(window.location.search).name
  const ctxUser = useUserStore()
  const [user, setUser] = useState<R.User>({
    Name: '',
    Nickname: '',
    Level: 4,
    Avatar: '',
    Bio: '',
    Email: ''
  } as R.User)

  const fetch = useCallback(() => {
    if (userName) {
      axios.get(`/user/${userName}`).then((res) => {
        if (!res.err) {
          setUser(res.data)
        }
      })
    }
  }, [])

  useEffect(fetch, [])

  const [uploader, up] = useUploader({
    type: 'image',
    onError(_) {
      document.querySelector<HTMLInputElement>('.cover-file-input')!.value = ''
    }
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const parsedValue =
      type == 'number' || type == 'checkbox' || type == 'select-one' ? +value : value

    setUser({ ...user, [name]: parsedValue })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    axios.put(`/user/${userName}`, { data: user }).then((res) => {
      if (!res.err) {
        toast.success('update success')
        fetch()
      }
    })
  }

  const isNotAdmin = (ctxUser?.Level || 4) > USER_LEVEL.ADMIN

  return (
    <div className="user-profile">
      <div className="block box">
        <h1 className="title is-5 mb-3">个人信息</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="field is-horizontal avatar">
            <img className="image is-64x64 avatar" src={user.Avatar} />

            <div className="field">
              <div className="field-body"></div>
              <p className="control">
                <div
                  className={classNames('file', {
                    'is-primary': uploader.status == 'success',
                    'is-danger': uploader.status == 'error'
                  })}
                >
                  <label className="file-label">
                    <input
                      className="file-input cover-file-input"
                      accept="image/*"
                      type="file"
                      onChange={(e) => up(e.target!.files![0])}
                    />
                    <span className="file-cta" style={{ paddingRight: 0, borderRight: 0 }}>
                      <span className="file-icon">
                        <i className="fas fa-cloud-upload-alt"></i>
                      </span>
                      <span className="file-label">
                        <div
                          className={classNames('button', {
                            'is-loading': uploader.loading,
                            'is-primary': uploader.status == 'success',
                            'is-danger': uploader.status == 'error'
                          })}
                        >
                          {uploader.status == 'pending'
                            ? 'Choose a file…'
                            : uploader.status == 'success'
                            ? uploader.file!.name
                            : 'Upload failed'}
                        </div>
                      </span>
                    </span>
                  </label>
                </div>
              </p>
              <input
                disabled={!!uploader.file}
                className="input"
                type="url"
                required
                name="Avatar"
                onChange={handleChange}
                placeholder="头像链接"
                value={user.Avatar}
              />
            </div>
          </div>

          <div className="field ">
            <div className="field">
              <label className="label">Nickname</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={user.Nickname}
                  name="Nickname"
                  max={16}
                  min={4}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field ">
              <div className="field Nickname">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input" type="text" disabled value={user.Name} name="Name" />
                </div>
              </div>

              <div className="field">
                <label className="label">Role</label>
                <div className="control">
                  <div className="select">
                    <select
                      name="Level"
                      onChange={handleChange}
                      value={user.Level}
                      disabled={isNotAdmin || user.ID == ctxUser?.ID}
                    >
                      {Object.entries(USER_LEVEL_MAP).map(([v, t]) => (
                        <option value={v} key={v}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="field" style={{ flex: 1 }}>
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    value={user.Email}
                    name="Email"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="field" style={{ flex: 1 }}>
              <label className="label">Bio</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={user.Bio}
                  max={100}
                  name="Bio"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <button className="button is-primary" type="submit">
            提交
          </button>
        </form>
      </div>
    </div>
  )
}
