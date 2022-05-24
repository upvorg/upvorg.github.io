interface HeadersInit {
  'Content-Type'?: string
  [key: string]: any
}

type Options = {
  headers?: HeadersInit
  baseUrl?: string
  config?: Omit<RequestInit, 'body' | 'headers' | 'method'>
}

type ReqConfig = {
  data?: any
  headers?: HeadersInit
}

type InterceptorResolve<T> = (v: T) => T
type InterceptorReject<T> = (v: T & Response) => T & Response

class Interceptor<S = any, F = any> {
  public resolve: InterceptorResolve<S> = (v) => v
  public reject: InterceptorReject<F> = (v) => v

  use(resolve: InterceptorResolve<S>, reject?: InterceptorReject<F>) {
    this.resolve = resolve
    reject && (this.reject = reject)
  }
}

export default class Http<R = any> {
  private baseUrl: string
  private headers: HeadersInit
  private config: Options['config']

  public interceptors: {
    request: Interceptor<HeadersInit, R>
    response: Interceptor<R, R>
  }

  constructor(options: Options) {
    this.baseUrl = options.baseUrl ?? ''
    this.headers = options.headers ?? {}
    this.config = options.config ?? {}

    this.interceptors = {
      request: new Interceptor<HeadersInit, R>(),
      response: new Interceptor<R, R>()
    }
  }

  static create<R = any>(
    url?: string,
    options?: { header?: HeadersInit; config?: Options['config'] }
  ) {
    return new Http<R>({
      baseUrl: url,
      headers: options?.header,
      config: options?.config
    })
  }

  get<T = any>(url: string, { headers, data }: ReqConfig = {}) {
    return this._send<T>(url, 'GET', headers, data)
  }

  post<T = any>(url: string, { headers, data }: ReqConfig = {}) {
    return this._send<T>(url, 'POST', headers, data)
  }

  put<T = any>(url: string, { headers, data }: ReqConfig = {}) {
    return this._send<T>(url, 'PUT', headers, data)
  }

  delete<T = any>(url: string, { headers, data }: ReqConfig = {}) {
    return this._send<T>(url, 'DELETE', headers, data)
  }

  //TODO: Return Promise<R<T>>
  private _send<T>(
    url: string,
    method: string,
    headers: HeadersInit = {},
    data: any = {}
  ): Promise<T> {
    const config: any = this.interceptors.request.resolve?.({
      ...this.headers,
      ...headers
    })

    if (!(data instanceof FormData) && this.headers['Content-type']) {
      config['Content-type'] = 'application/json; charset=UTF-8'
    }

    if (__DEV__) console.log(`-> REQUEST: ${method} ${url} data: `, method.toUpperCase(), data)
    let rawResponse: Response
    return fetch(`${this.baseUrl}${url}`, {
      method,
      headers: config,
      ...this.config,
      ...(!['GET', 'HEAD'].includes(method.toUpperCase()) && {
        body: data instanceof FormData ? data : JSON.stringify(data)
      })
    })
      .then(
        (res: Response) => {
          rawResponse = res
          try {
            return res.json()
          } catch (error) {
            throw error
          }
        },
        (reson: any) => {
          console.error('<--- request error' + reson)
          return this.interceptors.request.reject?.(reson)
        }
      )
      .then((response) => {
        if (!rawResponse.ok) {
          throw this.interceptors.response.reject?.({
            status: rawResponse.status,
            statusText: rawResponse.statusText,
            ...response
          })
        }
        if (__DEV__) console.log(`<--- RESPONSE: ${method} ${url} response: `, response)
        return this.interceptors.response.resolve?.(response) ?? response
      })
  }
}
