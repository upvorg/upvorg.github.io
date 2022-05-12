import queryString from 'query-string'
import { useCallback } from 'react'

export function useQueryState<T = Record<string, any>>(defaultValue?: Partial<T>) {
  //@ts-ignore
  const _query: T = Object.assign({}, defaultValue, queryString.parse(window.location.search))

  return [
    _query,
    useCallback((query: Partial<T>) => {
      window.history.pushState(
        null,
        '',
        `?${queryString.stringify(Object.assign({}, _query, query))}`
      )
    }, [])
  ] as const
}
