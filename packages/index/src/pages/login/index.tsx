import { useUserStore } from '@web/shared/UserContext'
import { axios } from '@web/shared/constants'
import { Auth } from '@web/shared/auth'
import classNames from 'classnames'
import { useState } from 'react'
import queryString from 'query-string'
import './index.scss'

export default function Login() {
  const [isLogin, setIsLogin] = useState(true)
  const { from } = queryString.parse(window.location.search)
  const [form, setForm] = useState({ Name: '', Pwd: '', Emial: '' })
  const user = useUserStore()

  if (user) {
    window.location.href = (from as string) || '/'
    return null
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    ;(isLogin
      ? axios.post('/login', { data: { Name: form.Name, Pwd: form.Pwd } })
      : axios.post('/register', { data: { Name: form.Name, Pwd: form.Pwd } })
    ).then((res) => {
      if (!res.err) {
        Auth.login(res.data.user)
        window.location.href = (from as string) || '/'
      }
    })
  }

  return (
    <div className="login card">
      <div className="tabs">
        <ul>
          <li className={classNames({ 'is-active': isLogin })} onClick={() => setIsLogin(true)}>
            <a>登录</a>
          </li>
          {/* <li className={classNames({ 'is-active': !isLogin })} onClick={() => setIsLogin(false)}>
            <a>注册</a>
          </li> */}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="card-body">
          <div className="l">
            {!isLogin && (
              <div className="field">
                <label className="label">邮箱</label>
                <p className="control">
                  <input
                    className="input"
                    type="email"
                    placeholder="Email"
                    name="Emial"
                    onChange={handleOnChange}
                    required
                  />
                </p>
              </div>
            )}

            {!isLogin && (
              <div className="field is-grouped">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                    placeholder="Code"
                    name="Code"
                    onChange={handleOnChange}
                    required
                  />
                </p>
                <p className="control is-exdivanded">
                  <button className="button is-primary" type="button">
                    获取验证码
                  </button>
                </p>
              </div>
            )}

            <div className="field">
              <label className="label">用户名</label>
              <p className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Username"
                  name="Name"
                  onChange={handleOnChange}
                  required
                />
              </p>
            </div>

            <div className="field">
              <p className="control">
                <label className="label">密码</label>
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  name="Pwd"
                  onChange={handleOnChange}
                  required
                />
                <p style={{ textAlign: 'right', marginTop: '.5em', fontSize: '12px' }}>
                  <span style={{ float: 'left', color: 'gray' }}>未注册将自动注册</span>
                  <a href="#">forget password?</a>
                </p>
              </p>
            </div>

            <div className="field">
              <p className="control">
                <button className="button is-primary is-fullwidth" type="submit">
                  {isLogin ? '登录' : '注册'}
                </button>
              </p>
            </div>
          </div>
          <div className="r">
            <p className="field">社交平台登录</p>
            <div className="field">
              <button className="button" type="button">
                <span className="icon qq">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M433.754 420.445c-11.526 1.393-44.86-52.741-44.86-52.741 0 31.345-16.136 72.247-51.051 101.786 16.842 5.192 54.843 19.167 45.803 34.421-7.316 12.343-125.51 7.881-159.632 4.037-34.122 3.844-152.316 8.306-159.632-4.037-9.045-15.25 28.918-29.214 45.783-34.415-34.92-29.539-51.059-70.445-51.059-101.792 0 0-33.334 54.134-44.859 52.741-5.37-.65-12.424-29.644 9.347-99.704 10.261-33.024 21.995-60.478 40.144-105.779C60.683 98.063 108.982.006 224 0c113.737.006 163.156 96.133 160.264 214.963 18.118 45.223 29.912 72.85 40.144 105.778 21.768 70.06 14.716 99.053 9.346 99.704z" />
                  </svg>
                </span>
                <span>QQ</span>
              </button>
            </div>

            <div className="field">
              <button className="button" type="button">
                <span className="icon github">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512">
                    <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z" />
                  </svg>
                </span>
                <span>GitHub</span>
              </button>
            </div>

            <div className="field">
              <button className="button" type="button">
                <span className="icon google">
                  <svg
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2280"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M960.032 521.92c0-36.8-3.04-63.68-9.632-91.552H521.184v166.24h251.936c-5.088 41.312-32.512 103.552-93.44 145.344l-0.864 5.568 135.68 103.04 9.408 0.928c86.368-78.176 136.128-193.152 136.128-329.536z"
                      fill="#4285F4"
                      p-id="2281"
                    ></path>
                    <path
                      d="M521.152 960c123.424 0 227.04-39.808 302.72-108.512l-144.224-109.536c-38.624 26.4-90.432 44.8-158.496 44.8A274.688 274.688 0 0 1 261.12 600.64l-5.344 0.448-141.12 107.008-1.856 5.024C187.968 859.456 342.4 960 521.152 960z"
                      fill="#34A853"
                      p-id="2282"
                    ></path>
                    <path
                      d="M261.12 600.608a270.816 270.816 0 0 1-15.232-88.64c0-30.848 5.568-60.704 14.72-88.576l-0.256-5.92-142.88-108.768-4.672 2.176A441.12 441.12 0 0 0 64.032 512c0 72.192 17.792 140.384 48.768 201.088L261.12 600.64z"
                      fill="#FBBC05"
                      p-id="2283"
                    ></path>
                    <path
                      d="M521.152 237.216c85.856 0 143.744 36.352 176.768 66.72l129.024-123.456C747.712 108.288 644.576 64 521.152 64 342.4 64 187.968 164.544 112.768 310.88l147.84 112.512c37.056-108 139.68-186.176 260.544-186.176z"
                      fill="#EB4335"
                      p-id="2284"
                    ></path>
                  </svg>
                </span>
                <span>Google</span>
              </button>
            </div>

            <div className="field">
              <button className="button" type="button">
                <span className="icon">
                  <svg
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="7592"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M546.986667 1024H56.490667A56.533333 56.533333 0 0 1 0 967.466667V56.533333C0 25.301333 25.301333 0 56.533333 0h910.933334C998.698667 0 1024 25.301333 1024 56.533333v910.933334c0 31.232-25.301333 56.533333-56.533333 56.533333H706.56v-396.544h133.12l19.882667-154.538667H706.56V374.186667c0-44.714667 12.373333-75.221333 76.586667-75.221334h81.834666v-138.24c-14.165333-1.92-62.72-6.101333-119.253333-6.101333-118.016 0-198.784 72.021333-198.784 204.288v113.92H413.525333v154.581333h133.418667V1024z"
                      fill="#3B5998"
                      p-id="7593"
                    ></path>
                  </svg>
                </span>
                <span>Facebook</span>
              </button>
            </div>
            <div className="field">
              <div className="agreement">
                登录即表示您同意
                <a href="">《用户协议》</a>和<a href="">《隐私政策》</a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
