//@ts-nocheck
import EXIF from 'exif-js'
import isEqual from 'lodash/isEqual'
import watermark from 'watermarkjs'
import { v4 as uuidv4 } from 'uuid'

export const handleImg = (opts) =>
  new Promise((resolve) => {
    const options = {
      base64Img,
      file: null,
      type: null,
      compress: 1, // 压缩范围（0-1）
      maxHeight: window.innerHeight, // 压缩后的最大高度
      maxWidth: window.innerWidth, // 压缩后的最大宽度
    }

    if (typeof opts !== 'object') {
      return
    }
    for (const i in opts) {
      options[i] = opts[i]
    }

    const event = options.event,
      base64Img = options.base64Img,
      file = options.file,
      type = options.type,
      maxHeight = options.maxHeight,
      maxWidth = options.maxWidth

    // TODO 图片处理的逻辑需要拆解
    const image = new window.Image()
    image.setAttribute('crossOrigin', 'anonymous')

    // 处理图片尺寸
    image.onload = function () {
      if (image.height > maxHeight && image.width > maxWidth) {
        if (image.height > image.width) {
          image.height *= maxWidth / image.width
          image.width = maxWidth
        } else {
          image.width *= maxHeight / image.height
          image.height = maxHeight
        }
      } else if (image.height > maxHeight) {
        image.width *= maxHeight / image.height
        image.height = maxHeight
      } else if (image.width > maxWidth) {
        image.height *= maxWidth / image.width
        image.width = maxWidth
      }
      let canvas = document.querySelector('.expressCanvas')
      if (!canvas) {
        canvas = document.createElement('canvas')
        canvas.classList.add('expressCanvas')
        canvas.style.display = 'none'
        document.body.appendChild(canvas)
      }

      // 修正 iOS 下图片旋转问题
      EXIF.getData(file, function () {
        const orientation = EXIF.getTag(this, 'Orientation')
        if (navigator.userAgent.match(/iphone/i)) {
          switch (orientation) {
            case 6: // 需要顺时针旋转 90 度
              rotateAndDrawImg(image, 1, canvas)
              break
            case 8: // 需要顺时针旋转 270 度
              rotateAndDrawImg(image, 3, canvas)
              break
            case 3: // 需要旋转 180 度
              rotateAndDrawImg(image, 2, canvas)
              break
            default:
              rotateAndDrawImg(image, 0, canvas)
              break
          }
        } else {
          rotateAndDrawImg(image, 0, canvas)
        }

        // 图片质量。取值范围为 0 到 1 。默认为 image/png可以指定图片格式为 image/jpeg 或 image/webp。
        // 如果超出取值范围，将会使用默认值 0.92。其他参数会被忽略。
        const imageEncode64 = canvas.toDataURL(type, options.compress)
        resolve(imageEncode64)
      })
    }

    image.src = base64Img
    /* eslint-enable */
  })

export const base64File = (file) =>
  new Promise((resolve) => {
    const fileReader = new window.FileReader()
    fileReader.onload = function (event) {
      const base64FileResult = event.target.result
      resolve(base64FileResult)
    }
    fileReader.readAsDataURL(file)
  })

export const dataURItoBlob = (base64, format) => {
  const code = window.atob(base64.split(',')[1])
  const aBuffer = new window.ArrayBuffer(code.length)
  const uBuffer = new window.Uint8Array(aBuffer)
  for (let i = 0; i < code.length; i++) {
    uBuffer[i] = code.charCodeAt(i)
  }
  const Builder = window.WebKitBlobBuilder || window.MozBlobBuilder
  if (Builder) {
    const builder = new Builder()
    builder.append(uBuffer)
    return builder.getBlob(format)
  }
  return new window.Blob([uBuffer], {
    type: format,
  })
}

export const getObjectURL = (file) => {
  const URL = window.URL || window.webkitURL
  const blob = URL.createObjectURL(file)
  return blob
}

// FIXME 不要对时长和抽帧做预加载视频优化, safari 下会有问题, 时长和抽帧都分别本地加载一次
export const preLoadVideo = (file) => {
  const video = document.createElement('video')
  video.setAttribute('crossOrigin', 'anonymous')
  video.preload = 'metadata'
  const URL = window.URL || window.webkitURL
  video.src = URL.createObjectURL(file)
  return video
}

export const getVideoDuration = (file) =>
  new Promise((resolve) => {
    const video = preLoadVideo(file)
    video.addEventListener('loadedmetadata', () => {
      URL.revokeObjectURL(video.src)
      const duration = video.duration
      resolve(duration)
    })
  })

export const extract1stFrame = (file) =>
  new Promise((resolve) => {
    const video = preLoadVideo(file)

    const timer = setTimeout(() => {
      video.pause()
      const canvas = document.createElement('canvas')
      const width = video.videoWidth
      const height = video.videoHeight
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d')
      ctx.drawImage(video, 0, 0, width, height)
      const dataURL = canvas.toDataURL('image/jpeg')
      clearTimeout(timer)
      resolve(dataURL)
    }, 300)

    video.play()
  })

export const msToTime = (duration) => {
  let seconds = Math.floor((duration / 1000) % 60)
  let minutes = Math.floor((duration / (1000 * 60)) % 60)
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = hours < 10 ? `0${hours}` : hours
  minutes = minutes < 10 ? `0${minutes}` : minutes
  seconds = seconds < 10 ? `0${seconds}` : seconds

  const time = `${minutes}:${seconds}`
  if (hours !== '00') {
    return `${hours}:${time}`
  }
  return time
}

const optWatermark = {
  init(img) {
    // eslint-disable-next-line no-param-reassign
    img.crossOrigin = 'anonymous'
  },
}

export const getWatermarkImg = (img, brand) =>
  new Promise((resolve, reject) => {
    watermark([img], optWatermark)
      .image(watermark.text.lowerLeft(`${brand}`, '65px Josefin Slab', '#fff', 1.0))
      .then((image) => {
        resolve(image.src)
      })
      .catch((error) => {
        reject(error)
      })
  })

export function checkCdnWhiteList(cdnUrl) {
  return (
    !cdnUrl ||
    /^(http:\/\/|https:\/\/s\.)beta\.gtimg\.com/.test(cdnUrl) ||
    /^(http:\/\/|https:\/\/s\.)feedbackcenter\.cdn\.qq\.com/.test(cdnUrl)
  )
}

export function parseFloatWithDigits(numStr, digits) {
  const fix = 10 ** digits
  return Math.round(parseFloat(numStr) * fix) / fix
}

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 */

function escapeHtml(string) {
  /* eslint-disable */
  var str = '' + string
  var match = /["'&<>]/.exec(str)

  if (!match) {
    return str
  }

  var escape
  var html = ''
  var index = 0
  var lastIndex = 0

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;'
        break
      case 38:
        // &
        escape = '&amp;'
        break
      case 39:
        // '
        escape = '&#x27;' // modified from escape-html; used to be '&#39'
        break
      case 60:
        // <
        escape = '&lt;'
        break
      case 62:
        // >
        escape = '&gt;'
        break
      default:
        continue
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index)
    }

    lastIndex = index + 1
    html += escape
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html
  /* eslint-enable */
}
// end code copied and modified from escape-html

/**
 * un-escape special characters in the given string of html.
 *
 * @param  {String} html
 * @return {String}
 */
function unescapeHtml(html) {
  return String(html)
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x3A;/g, ':')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
}
// end code copied and modified from unescape-html

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */
export function escapeTextContentForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return `${text}`
  }
  return escapeHtml(text)
}

/**
 * Unescapes text to present origin text value.
 *
 * @param {*} text Text value to unescape.
 * @return {string} An unescaped origin string.
 */
export function unescapeTextContentForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return `${text}`
  }
  return unescapeHtml(text)
}

/**
 * 顺时针旋转图片后画入画布
 *
 * @param {Image} img 图片对象.
 * @param {Number} num 旋转次数，一次旋转90度.
 * @param {Canvas} canvas Canvas 对象.
 */
function rotateAndDrawImg(img, num, canvas) {
  /* eslint-disable */
  if (img == null) return
  const height = img.height
  const width = img.width
  if ((num % 4) % 2 === 0) {
    canvas.width = width
    canvas.height = height
  } else {
    canvas.width = height
    canvas.height = width
  }

  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height) // 清除画布

  ctx.fillStyle = '#fff' // 如果传的是png透明图片则以白色背景填充，否则透明区域会变成黑色
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // 旋转角度以弧度值为参数
  const radian = (num * 90 * Math.PI) / 180
  switch (num % 4) {
    case 0:
      ctx.drawImage(img, 0, 0, width, height)
      break
    case 1:
      ctx.rotate(radian)
      ctx.drawImage(img, 0, -height, width, height)
      break
    case 2:
      ctx.rotate(radian)
      ctx.drawImage(img, -width, -height, width, height)
      break
    case 3:
      ctx.rotate(radian)
      ctx.drawImage(img, -width, 0, width, height)
      break
    default:
      break
  }
  /* eslint-enable */
}

export const setCookie = (name, value, days) => {
  let expires = ''
  if (days) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = `; expires=${date.toUTCString()}`
  }
  document.cookie = `${name}=${value || ''}${expires}; path=/`
}

export const setAuthInfoInCookie = (appId, pid, data, locale) => {
  setCookie('appId', appId, 7)
  setCookie('pid', pid, 7)
  setCookie('encrypt-data', data, 7)
  setCookie('locale', locale, 7)
}

export const getCookieByKey = (name) => {
  const pattern = RegExp(`${name}=.[^;]*`)
  const matched = document.cookie.match(pattern)
  if (matched) {
    const cookie = matched[0].split('=')
    return cookie[1]
  }
  return false
}

export const getAppId = (routeParam) => {
  const appId = routeParam.appId || getCookieByKey('appId')
  return appId
}

export const getParameterByName = (name) => {
  const paramName = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]')
  const regex = new RegExp(`[\\?&]${paramName}=([^&#]*)`)
  const results = regex.exec(window.location.search)
  return results == null ? '' : decodeURIComponent(results[1])
}

export const getInitURLParams = () => {
  const paramsFromURL = {
    appId: getParameterByName('appId') || getParameterByName('appid'),
    pid: getParameterByName('pid'),
    data: getParameterByName('data').replace(/ /g, '+'),
    serviceId: getParameterByName('serviceId'), // 分类专区 ID
    widget: getParameterByName('widget'), // 控制 H5 FAQ 列表页是否开启小工具
    color: getParameterByName('color'), // 提交反馈按钮颜色
    mode: getParameterByName('mode'), // H5 使用模式 0 完全使用, 1 单独使用反馈页, 2 单独使用反馈页（简化版，仅支持一级分类）, 3 众测场景使用的试验模式，4 单独使用 FAQ 相关能力（反馈入口屏蔽）。默认0
    custom: getParameterByName('custom'), // 提交反馈自定义字段
    locale: getParameterByName('locale'), // 本地化设置
    scale: getParameterByName('scale'), // 缩放比例
    submitCallBack: getParameterByName('submitCallBack'), // 控制提交反馈后调用 schemaurl(aisee://feedback/info)
  }
  if (!window.localStorage) {
    return paramsFromURL
  }
  const STORAGE_KEY = 'init_url_params'
  let latest = {}
  try {
    latest = JSON.parse(localStorage.getItem(STORAGE_KEY))
  } catch (e) {
    console.error('Invalid init_url_params in localStorage')
  }
  if (!paramsFromURL.appId || !paramsFromURL.pid || !paramsFromURL.data) {
    return latest === null ? {} : latest
  }
  const newParams = { ...latest, ...paramsFromURL }

  // 将`认证相关信息`存至 cookie，用于入口页面频率控制时校验使用（入口页面请求可能不带参数且此时还无法控制 js）
  // 由于 cookie 会过期，故每次携带参数访问时都进行重新写入
  // TODO: 考虑将前端整个参数缓存从 localStorage 切换到 cookie
  setAuthInfoInCookie(newParams.appId, newParams.pid, newParams.data, newParams.locale)

  if (isEqual(latest, newParams)) {
    return latest
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newParams))
  return newParams
}

export const findInArray = (arr, findItem) => {
  let result = null
  if (arr && arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (findItem(arr[i])) {
        result = arr[i]
        break
      }
    }
  }
  return result
}

export const mapLevelIdFromLevelTree = (levelIds, levelTree, field) => {
  const levels = [levelTree]
  return levelIds.reduce((names, id, idx) => {
    const matched = findInArray(levels[idx], (level) => level.levelId === id)
    levels.push(matched.children || [])
    return [...names, field ? matched[field] : matched]
  }, [])
}

export const shadeBlend = (p, c0, c1) => {
  /* eslint-disable */
  var n = p < 0 ? p * -1 : p,
    u = Math.round,
    w = parseInt
  if (c0.length > 7) {
    var f = c0.split(','),
      t = (c1 ? c1 : p < 0 ? 'rgb(0,0,0)' : 'rgb(255,255,255)').split(','),
      R = w(f[0].slice(4)),
      G = w(f[1]),
      B = w(f[2])
    return (
      'rgb(' +
      (u((w(t[0].slice(4)) - R) * n) + R) +
      ',' +
      (u((w(t[1]) - G) * n) + G) +
      ',' +
      (u((w(t[2]) - B) * n) + B) +
      ')'
    )
  } else {
    var f = w(c0.slice(1), 16),
      t = w((c1 ? c1 : p < 0 ? '#000000' : '#FFFFFF').slice(1), 16),
      R1 = f >> 16,
      G1 = (f >> 8) & 0x00ff,
      B1 = f & 0x0000ff
    return (
      '#' +
      (
        0x1000000 +
        (u(((t >> 16) - R1) * n) + R1) * 0x10000 +
        (u((((t >> 8) & 0x00ff) - G1) * n) + G1) * 0x100 +
        (u(((t & 0x0000ff) - B1) * n) + B1)
      )
        .toString(16)
        .slice(1)
    )
  }
  /* eslint-enable */
}

export const insertCustomButtonClass = (bgColor) => {
  const css = `
    .custom-button, .custom-button:active {
      background-color: ${bgColor};
      border-color: ${bgColor};
    }
    .custom-button:hover, .custom-button:focus {
      background-color: ${shadeBlend(0.2, bgColor)};
      border-color: ${shadeBlend(0.2, bgColor)};
    }
  `
  const style = document.createElement('style')
  if (style.styleSheet) {
    style.styleSheet.cssText = css
  } else {
    style.appendChild(document.createTextNode(css))
  }
  document.getElementsByTagName('head')[0].appendChild(style)
}

export const isIphoneX = () =>
  /iphone/gi.test(window.navigator.userAgent) && window.screen.height === 812 && window.screen.width === 375

export const isAndroid = () => /(android)/i.test(window.navigator.userAgent)

export const updateI18nLocale = (i18n, locale) => {
  /* eslint-disable no-param-reassign */
  i18n.locale = locale
  /* eslint-enable no-param-reassign */
}

export const checkQQMusicUIWebView = () => /UIWebView/.test(window.navigator.userAgent)

export const uiWebViewRenderHack = (classname, subClassname) => {
  if (!checkQQMusicUIWebView() || !classname) {
    return
  }
  setTimeout(() => {
    const $list = document.getElementsByClassName(classname)
    for (let i = 0; i < $list.length; i++) {
      $list[i].style.width = '99%'
      if (subClassname) {
        const $sub = $list[i].getElementsByClassName(subClassname)[0]
        $sub && ($sub.style.width = '99%')
      }
    }
  }, 50)
}

export const getMessage = (path, vue) => {
  if (vue.$t) {
    return vue.$t(path)
  }
  const backupMessages = {
    'feedbackPage.expandFaq': '展示完整内容',
    'feedbackPage.foldFaq': '收起完整内容',
    'feedbackPage.roleMyself': '我',
    'feedbackPage.admin': '管理员',
    'feedbackPage.system': '管理员',
  }
  return backupMessages[path]
}

// 缩放页面
export const scalePage = (scale) => {
  if (!scale || scale === 1) return

  const newWidth = window.screen.width / scale
  const newContent = `width=${newWidth}, initial-scale=${scale}, maximum-scale=${scale}, user-scalable=no, minimal-ui, viewport-fit=cover`
  const viewport = document.querySelector('meta[name=viewport]')
  viewport.setAttribute('content', newContent)
}

// 接收来自父级的消息
export const listenParentPageMessage = () => {
  window.addEventListener('message', (event) => {
    if (event.data === 'back') {
      window.history.back()
    }
  })
}

// 在微信中使用时禁用分享功能
export const disableWechatShare = () => {
  document.addEventListener('WeixinJSBridgeReady', () => {
    console.log('WeixinJSBridgeReady!!!')
    window.WeixinJSBridge.call('hideOptionMenu')
  })
}

export const exposeFnToNative = (fnName, fn) => {
  window[fnName] = fn
}

export const callBackNative = (path, data = {}, cmd) => {
  if (!path || path.length === 0) return

  let url = `aisee://${path}?data=${JSON.stringify(data)}`
  if (cmd) {
    const cmdStr = JSON.stringify(cmd)
    url += `&cmd=${cmdStr}`
  }
  console.log('function::callBackNative', url)

  const a = document.createElement('a')
  a.style.position = 'absolute'
  a.style.left = '-9999px'
  a.href = url
  document.body.appendChild(a)
  a.click()
  setTimeout(() => {
    a.remove()
  }, 100)
}

export const resumeHangingPage = () => {
  if (isAndroid()) {
    return
  }
  const currentPosition = document.documentElement.scrollTop || document.body.scrollTop
  window.scrollTo(0, currentPosition - 1)
  window.scrollTo(0, currentPosition + 1)
}

export const getUuid = () => uuidv4()

// 返回一个不受限制的路径
export const getImage = (url) => {
  if (!url) return
  return url.replace(/^(http)[s]*(\:\/\/)/, 'https://')
}
