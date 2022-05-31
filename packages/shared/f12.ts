if (!__DEV__ && new URLSearchParams(window.location.search).get('debug') == null) {
  require('disable-devtool')({
    url: 'https://baidu.com/',
    disableMenu: false,
    detectors: [0, 1, 2, 3, 4],
    clearIntervalWhenDevOpenTrigger: true,
    clearLog: false
  })
  //Fallback
  ;(() => {
    setInterval(() => {
      debugger
    })
  })()
}

export {}
