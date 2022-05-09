const isEnvProduction = process.env.NODE_ENV === 'production'

const HOST = 'https://upv.life'
const LOCAL_API_HOST = 'http://localhost:8080/api' // local server
const API_HOST = isEnvProduction ? 'https://api.upv.life/api' : `/api` // /api is the proxy path
const ADMIN_HOST = isEnvProduction ? 'https://admin.upv.life' : `http://localhost:8888`
const STORAGE_HOST = isEnvProduction ? 'https://storge.upv.life' : `${ADMIN_HOST}/upload`

module.exports = {
  isEnvProduction,
  LOCAL_API_HOST,
  API_HOST,
  STORAGE_HOST,
  ADMIN_HOST,
  HOST
}
