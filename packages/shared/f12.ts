if (!__DEV__ && new URLSearchParams(window.location.search).get('debug') == null) {
  require('disable-devtool')({
    url: 'https://baidu.com/',
    disableMenu: false,
    detectors: [0, 1, 2, 3, 4],
    clearIntervalWhenDevOpenTrigger: true,
    clearLog: false
  })

  // listen browser width
  require('devtools-detect')
  window.addEventListener('devtoolschange', (event) => {
    //@ts-ignore
    if (event.detail.open) {
      window.location.href = 'https://www.baidu.com'
      window.close()
    }
  })

  require('detect-devtools-via-debugger-heartstop/index')
  // @ts-ignore
  globalThis.devtoolsDetector.config.onDetectOpen = () => {
    window.location.href = 'https://www.baidu.com'
    window.close()
  }

  //feedback
  setInterval(() => {
    debugger
  })
}

export {}
