import { axios } from '@web/shared/constants'
import { useCallback, useState } from 'react'

export const useUploader = (options: {
  type: 'image' | 'file'
  onError?: (e: any) => void
  onSuccess?: (url: string) => void
}) => {
  const [state, setState] = useState<{
    loading: boolean
    url: string
    status: 'pending' | 'success' | 'error'
    file: File | null
  }>({
    loading: false,
    url: '',
    status: 'pending',
    file: null
  })

  return [
    state,
    useCallback((file: File) => {
      const formData = new FormData()
      formData.append('file', file)
      setState((state) => ({ ...state, loading: true, file }))

      axios
        .post(options.type == 'image' ? '/upload/image' : '/upload', { data: formData })
        .then((res) => {
          setState((state) => ({ ...state, loading: false, url: res.data, status: 'success' }))
          options.onSuccess?.(res.data)
        })
        .catch((e) => {
          setState((_) => ({ loading: false, url: '', status: 'error', file: null }))
          options.onError?.(e)
        })
    }, [])
  ] as const
}
