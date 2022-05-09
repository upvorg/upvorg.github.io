import { Cookie } from './cookie'
import http from './http'

// webpack proxy
export const HOST = __HOST__
export const API_HOST = __API_HOST__
export const STORGE_HOST = __STORAGE_HOST__
export const ADMIN_HOST = __ADMIN_HOST__

export const LOCAL_STORAGE_USER_INFO_KEY = 'USER_INFO'
export const LOCAL_STORAGE_ACCESS_TOKEN_KEY = 'ACCESS_TOKEN'
export const COOKIE_ACCESS_TOKEN_KEY = 'access_token'

export const PRIMARY_COLOR = '#6668ab'

const axios = http.create<R.Response<any>>(API_HOST, {
  config: {
    credentials: 'include'
  }
})

axios.interceptors.request.use((config) => {
  const ck = Cookie.get(COOKIE_ACCESS_TOKEN_KEY)
  return {
    ...config,
    Authorization: ck ? `Bearer ${ck}` : ''
  }
})

export { axios }
