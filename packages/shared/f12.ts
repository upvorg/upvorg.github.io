import disableDevtool from 'disable-devtool'

if (!__DEV__) {
  disableDevtool({
    url: 'https://baidu.com/',
    disableMenu: false,
    detectors: [0, 1, 2, 3, 4],
    clearIntervalWhenDevOpenTrigger: true,
    clearLog: false
  })
}
