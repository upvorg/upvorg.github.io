const isEnvProduction = process.env.NODE_ENV === 'production'

const HOST = isEnvProduction ? 'https://upv.life' : 'http://localhost:3001'
const LOCAL_SERVER_HOST = 'http://localhost:8080'
const LOCAL_API_HOST = LOCAL_SERVER_HOST + '/api' // local server
const API_HOST = isEnvProduction ? 'https://api.upv.life/api' : `/api` // /api is the proxy path
const ADMIN_HOST = isEnvProduction ? 'https://admin.upv.life' : `http://localhost:8888`
const STORAGE_HOST = isEnvProduction ? 'https://storge.upv.life' : `${LOCAL_SERVER_HOST}`

module.exports = {
  isEnvProduction,
  LOCAL_API_HOST,
  API_HOST,
  STORAGE_HOST,
  ADMIN_HOST,
  HOST
}
