import disableDevtool from 'disable-devtool'
import { createRoot } from 'react-dom/client'
import App from './App'

if (!__DEV__) {
  disableDevtool({
    url: 'https://baidu.com/',
    disableMenu: false,
    detectors: [0, 1, 2, 3, 4],
    clearIntervalWhenDevOpenTrigger: true,
    clearLog: false
  })
}

createRoot(document.getElementById('root')!).render(<App />)
