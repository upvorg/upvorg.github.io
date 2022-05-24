const isEnvProduction = process.env.NODE_ENV === 'production'

const DOMAIN = isEnvProduction ? 'xn--7ov117aclgs4c.life' : 'localhost'

const LOCAL_SERVER_HOST = 'http://localhost:8080'
const LOCAL_API_HOST = LOCAL_SERVER_HOST + '/api' // local server

const HOST = isEnvProduction ? `https://${DOMAIN}` : `http://${DOMAIN}:3001`

const API_HOST = isEnvProduction ? `https://api.${DOMAIN}/api` : `/api` // /api is the proxy path
const ADMIN_HOST = isEnvProduction ? `https://admin.${DOMAIN}` : `http://localhost:8888`
const STORAGE_HOST = isEnvProduction ? `https://storge.${DOMAIN}` : `${LOCAL_SERVER_HOST}`

const s = (s) => JSON.stringify(s)

module.exports = {
  __DEV__: !isEnvProduction,
  __DOMAIN__: s(DOMAIN),
  __HOST__: s(HOST),
  __API_HOST__: s(API_HOST),
  __STORAGE_HOST__: s(STORAGE_HOST),
  __ADMIN_HOST__: s(ADMIN_HOST),
  isEnvProduction,
  LOCAL_API_HOST
}
