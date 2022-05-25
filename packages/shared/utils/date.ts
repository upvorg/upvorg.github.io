export function getTimeDistance(_date: string | Date) {
  const now = new Date()
  const date = typeof _date == 'string' ? new Date(_date) : new Date(_date)
  const diff = (now.getTime() - date.getTime()) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  } else if (diff < 3600 * 24 * 31) {
    return Math.ceil(diff / 3600 / 24) + '天前'
  }
  if (now.getFullYear() === date.getFullYear()) {
    return `${date.getMonth() + 1}月${date.getDate()}日`
  }
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
}

export function GetSimplifyDate(_date: string | Date) {
  const now = new Date()
  const date = typeof _date == 'string' ? new Date(_date) : new Date(_date)
  const diff = (now.getTime() - date.getTime()) / 1000

  if (diff < 3600 * 24) {
    return '今天'
  } else if (diff < 3600 * 24 * 2) {
    return '昨天'
  } else if (diff < 3600 * 24 * 31) {
    return Math.ceil(diff / 3600 / 24) + '天前'
  }

  if (now.getFullYear() === date.getFullYear()) {
    return `${date.getMonth() + 1}月${date.getDate()}日`
  }
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
}

export function formatDate(_date: string | Date, withTIme = false) {
  const date = typeof _date == 'string' ? new Date(_date) : new Date(_date)

  if (new Date().getFullYear() === date.getFullYear()) {
    return `${date.getMonth() + 1}月${date.getDate()}日 ${
      withTIme ? ` ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}` : ''
    }`
  }
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${
    withTIme ? ` ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}` : ''
  }`
}

export const YYYY_MM_DD = 1
export const MM_DD_HH_SS = 2
export const YYYY_MM_DD_HH_MM = 3 // default
export const YYYY_MM_DD_HH_MM_SS = 4

export function dateFormat(timestamp: string | Date, mode = 3) {
  if (!timestamp) {
    return ''
  }
  const d = new Date(timestamp)
  const year = d.getFullYear()
  const month = `${`0${d.getMonth() + 1}`.slice(-2)}`
  const day = `${`0${d.getDate()}`.slice(-2)}`
  const hour = `${`0${d.getHours()}`.slice(-2)}`
  const minute = `${`0${d.getMinutes()}`.slice(-2)}`
  const second = `${`0${d.getSeconds()}`.slice(-2)}`
  switch (mode) {
    case YYYY_MM_DD:
      return `${year}-${month}-${day}`
    case MM_DD_HH_SS:
      return `${month}-${day} ${hour}:${minute}`
    case YYYY_MM_DD_HH_MM_SS:
      return `${year}-${month}-${day} ${hour}:${minute}:${second}`
    case YYYY_MM_DD_HH_MM:
      return `${year}-${month}-${day} ${hour}:${minute}`
    default:
      return `${year}-${month}-${day} ${hour}:${minute}`
  }
}
