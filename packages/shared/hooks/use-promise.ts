import { DependencyList, useCallback, useEffect, useReducer } from 'react'

enum SUATUS {
  PENDING = 'pending',
  RESOLVED = 'resolved',
  REJECTED = 'rejected'
}

type State<T = any> = {
  error: any | undefined
  result: T | undefined
  status: SUATUS
}

type Action = {
  type: SUATUS
  payload?: any
}

const defaultState: State = {
  error: undefined,
  result: undefined,
  status: SUATUS.PENDING
}

export default function usePromise<P extends Promise<any> | ((...arg: any[]) => Promise<any>)>(
  promise: P,
  deps: DependencyList = [],
  immediate: boolean = true
): State<
  P extends Promise<infer R> ? R : P extends (...arg: any[]) => Promise<infer R> ? R : never
> & {
  run: (...arg: Parameters<P extends (...arg: any[]) => any ? P : any>) => void
} {
  const [{ status, result, error }, dispatch] = useReducer(reducer, defaultState)

  const run = useCallback(
    (...arg: Parameters<P extends (...arg: any[]) => any ? P : any>) => {
      if (!promise) throw new Error('usePromise: promise should be a Promise or a function')

      let canceled = false

      dispatch({ type: SUATUS.PENDING })

      if (immediate) {
        ;(isPromise(promise) ? promise : promise(...arg)).then(
          (result) => !canceled && dispatch({ payload: result, type: SUATUS.RESOLVED }),
          (error) => !canceled && dispatch({ payload: error, type: SUATUS.REJECTED })
        )
      }

      return () => {
        canceled = true
      }
    },
    [promise, immediate]
  )

  useEffect(run, deps)

  return { status, result, error, run }
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case SUATUS.PENDING:
      return defaultState
    case SUATUS.RESOLVED:
      return {
        error: undefined,
        result: action.payload,
        status: SUATUS.RESOLVED
      }
    case SUATUS.REJECTED:
      return {
        error: action.payload,
        result: undefined,
        status: SUATUS.REJECTED
      }
    default:
      return state
  }
}

const isPromise = (value: any): value is Promise<any> => value && typeof value.then === 'function'
