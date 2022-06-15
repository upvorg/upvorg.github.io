if (!__DEV__ && new URLSearchParams(window.location.search).get('debug') == null) {
  import('devtools-detector').then(function name(devtoolsDetector) {
    devtoolsDetector.addListener(function (isOpen: boolean) {
      if (isOpen) {
        window.close()
        window.location.href = 'https://www.baidu.com/s?wd=ip'
      }
    })
    devtoolsDetector.launch()
  })
}

export { }
