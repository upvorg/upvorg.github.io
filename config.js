const isEnvProduction = process.env.NODE_ENV === 'production'

const _HOST = 'xn--7ov117aclgs4c.life'

const HOST = isEnvProduction ? `https://${_HOST}` : 'http://localhost:3001'
const LOCAL_SERVER_HOST = 'http://localhost:8080'
const LOCAL_API_HOST = LOCAL_SERVER_HOST + '/api' // local server
const API_HOST = isEnvProduction ? `https://api.${_HOST}/api` : `/api` // /api is the proxy path
const ADMIN_HOST = isEnvProduction ? `https://admin.${_HOST}` : `http://localhost:8888`
const STORAGE_HOST = isEnvProduction ? `https://storge.${_HOST}` : `${LOCAL_SERVER_HOST}`

module.exports = {
  isEnvProduction,
  LOCAL_API_HOST,
  API_HOST,
  STORAGE_HOST,
  ADMIN_HOST,
  HOST
}
