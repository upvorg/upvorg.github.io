function addCallback(callback: Function, tagter: any) {
  tagter.onload = tagter.onerror = tagter.onbeforeload = callback
  document.getElementsByTagName('head')[0].appendChild(tagter)
}

export const loadJs = (url: string, data: Object, callback: Function) => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  Object.entries(data).forEach(([key, value]) => {
    script.setAttribute(key, value)
  })
  addCallback(callback, script)
}
