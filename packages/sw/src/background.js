chrome.app.runtime.onLaunched.addListener(function (launchData) {
  var isWindows = navigator?.userAgentData?.platform?.toLocaleLowerCase() === 'windows'

  chrome.app.window.create('/index.html', {
    id: 'upv',
    innerBounds: {
      width: 1024,
      height: 700
    },
    minWidth: 1024,
    minHeight: 700,
    frame: isWindows ? { color: '#6668ab' } : 'chrome'
  })
})
