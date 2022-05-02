import http from './http'

// webpack proxy
export const apiPerfix = __API_HOST__
export const storgePrefix = __STORAGE_HOST__

export const HOST = 'upv.life'

export const LOCAL_STORAGE_USER_INFO_KEY = 'USER_INFO'
export const LOCAL_STORAGE_ACCESS_TOKEN_KEY = 'ACCESS_TOKEN'
export const COOKIE_ACCESS_TOKEN_KEY = 'access_token'

export const axios = http.create<R.Response<any>>(apiPerfix, {
  config: {
    credentials: 'include'
  }
})

export const PRIMARY_COLOR = '#6668ab'
