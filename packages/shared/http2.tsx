import React from 'react'
import { Provider, IncomingOptions } from 'use-http'
import { apiPerfix } from './constants'

export const options: IncomingOptions = {
  persist: true,
  responseType: 'json',
  suspense: true,
  interceptors: {
    request: async ({ options, url, path, route }) => {
      return options
    },
    response: async ({ response, request }) => {
      return response
    }
  }
}

export const HttpProvider: React.FC<React.PropsWithChildren<any>> = ({ children }) => {
  return (
    <Provider url={apiPerfix} options={options}>
      {children}
    </Provider>
  )
}
