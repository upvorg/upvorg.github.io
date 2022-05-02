const SMMS_USERNAME = 'upv'
const SMMS_PASSWORD = 'upv.life'
const SMMS_LOCALSTORAGE_KEY = 'smms_auth_token'

let SMMS_AUTH_TOKEN = ''

export namespace SMMS {
  export const auth = () => {
    return fetch(`https://sm.ms/api/v2/token?username=${SMMS_USERNAME}&password=${SMMS_PASSWORD}`, {
      method: 'post',
      mode: 'no-cors'
    })
      .then((_) => _.json())
      .then((_) => {
        if (_.code === 'success') {
          SMMS_AUTH_TOKEN = _.data.token
          localStorage.setItem(SMMS_LOCALSTORAGE_KEY, SMMS_AUTH_TOKEN)
        }
      })
  }

  export const upload = (file: File): Promise<Response> => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('type', file.type)
    formData.append('size', file.size.toFixed(0))

    return fetch(`https://sm.ms/api/v2/upload`, {
      mode: 'no-cors',
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: SMMS_AUTH_TOKEN
      },
      body: formData
    })
      .then((_) => _.json())
      .then((_) => {
        if (_.code === 'success') {
          return _.data
        }
      })
  }

  export interface Response {
    file_id: number
    width: number
    height: number
    filename: string
    storename: string
    size: number
    path: string
    hash: string
    url: string
    delete: string
    page: string
  }
}
