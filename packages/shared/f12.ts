let _isOpen = false

if (document.location.search.includes('debug')) {
  localStorage.setItem('debug', '1')
}

if (!__DEV__ &&  localStorage.getItem('debug') != '1') {
  const 打断施法 = async (devtoolsDetector: any) => {
    if (devtoolsDetector.isSafari) {
      document.body.innerHTML = '<h1 style="font-size:2em;font-weight:bold">👾打断施法!</h1>'
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
    window.close()
    window.location.href = 'https://www.baidu.com/s?wd=ip'
  }

  import('devtools-detector').then(function (devtoolsDetector) {
    devtoolsDetector.addListener(function (isOpen) {
      _isOpen = isOpen
      if (isOpen) 打断施法(devtoolsDetector)
    })
    devtoolsDetector.launch()

    // fix: safari previous page & next page
    window.addEventListener(
      'pageshow',
      (e) => {
        if ((e.persisted || window.performance?.navigation?.type == 2) && _isOpen) {
          打断施法(devtoolsDetector)
        }
      },
      false
    )
  })
}

export { }
