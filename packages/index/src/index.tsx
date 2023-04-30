import { createRoot } from 'react-dom/client'
import App from './App'
require('@web/shared/f12')

createRoot(document.getElementById('root')!).render(<App />)
