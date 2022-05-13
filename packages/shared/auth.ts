import {
  COOKIE_ACCESS_TOKEN_KEY,
  HOST,
  LOCAL_STORAGE_ACCESS_TOKEN_KEY,
  LOCAL_STORAGE_USER_INFO_KEY
} from './constants'
import { Cookie } from './cookie'

export namespace Auth {
  export function logout(href?: string) {
    Cookie.del(COOKIE_ACCESS_TOKEN_KEY, '/', HOST)
    localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY)
    localStorage.removeItem(LOCAL_STORAGE_USER_INFO_KEY)
    location.href = href || location.href
  }

  export function getAccessToken() {
    return Cookie.get(COOKIE_ACCESS_TOKEN_KEY)
  }

  export function login(userInfo: Object) {
    localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY, Cookie.get(COOKIE_ACCESS_TOKEN_KEY)!)
    localStorage.setItem(LOCAL_STORAGE_USER_INFO_KEY, JSON.stringify(userInfo))
  }
}
