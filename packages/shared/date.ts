export function getTimeDistance(_date: string | Date) {
  const now = new Date()
  const date = typeof _date == 'string' ? new Date(_date.replaceAll('-', '/')) : new Date(_date)
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
