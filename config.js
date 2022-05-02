const isEnvProduction = process.env.NODE_ENV === 'production'

const LOCAL_API_HOST = 'http://127.0.0.1:8080/api' // local server
const API_HOST = isEnvProduction ? 'https://api.upv.life/api' : `/api` // /api is the proxy path
const ADMIN_HOST = isEnvProduction ? 'https://admin.upv.life' : `http://127.0.0.1:8888`
const STORAGE_HOST = isEnvProduction ? 'https://storge.upv.life' : `${ADMIN_HOST}/upload`

module.exports = {
  isEnvProduction,
  LOCAL_API_HOST,
  API_HOST,
  STORAGE_HOST,
  ADMIN_HOST
}
