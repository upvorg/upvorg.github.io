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

export default class Http<T = any> {
  private baseUrl: string
  private headers: HeadersInit
  private config: Options['config']

  public interceptors: {
    request: Interceptor<HeadersInit, T>
    response: Interceptor<T, T>
  }

  constructor(options: Options) {
    this.baseUrl = options.baseUrl ?? ''
    this.headers = options.headers ?? {}
    this.config = options.config ?? {}

    this.interceptors = {
      request: new Interceptor<HeadersInit, T>(),
      response: new Interceptor<T, T>()
    }
  }

  static create<T = any>(
    url?: string,
    options?: { header?: HeadersInit; config?: Options['config'] }
  ) {
    return new Http<T>({
      baseUrl: url,
      headers: options?.header,
      config: options?.config
    })
  }

  get<T>(url: string, { headers, data }: ReqConfig = {}) {
    return this._send<T>(url, 'GET', headers, data)
  }

  post<T>(url: string, { headers, data }: ReqConfig = {}) {
    return this._send<T>(url, 'POST', headers, data)
  }

  private _send<T>(
    url: string,
    method: string,
    headers: HeadersInit = {},
    data: any = {}
  ): Promise<T> {
    const config = this.interceptors.request.resolve?.({
      'Content-type': 'application/json; charset=UTF-8',
      ...this.headers,
      ...headers
    })
    if (__DEV__) console.log(`${method} ${url} data: `, method.toUpperCase(), data)
    let rawResponse: Response
    return fetch(`${this.baseUrl}${url}`, {
      method,
      headers: config,
      ...this.config,
      ...(!['GET', 'HEAD'].includes(method.toUpperCase()) && {
        body: JSON.stringify(data)
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
          console.log('request error' + reson)
          throw this.interceptors.request.reject?.(reson)
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
        if (__DEV__) console.log(`${method} ${url} response: `, response)
        return this.interceptors.response.resolve?.(response) ?? response
      })
  }
}
