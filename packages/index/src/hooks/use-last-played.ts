import { useCallback, useState } from 'react'

const LOCAL_STORAGE_KEY_LAST_PLAYED_INFO = '@player/last-played'

type LastPlayedInfo = {
  id: string
  duration: number
  episode: number
  time: number
}

export default function useLastPlayed(id: string) {
  const sp = new URLSearchParams(window.location.search)
  const defaultLastPlayedInfo: LastPlayedInfo = {
    id,
    duration: 0,
    episode: sp.has('v') ? +sp.get('v')! - 1 : 0,
    time: 0
  }
  const lastPlayedInfo: LastPlayedInfo = sp.has('v')
    ? defaultLastPlayedInfo
    : JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEY_LAST_PLAYED_INFO + '-' + id) ||
          JSON.stringify(defaultLastPlayedInfo)
      )
  const [last, setLast] = useState(lastPlayedInfo.episode)

  return [
    last,
    useCallback(
      (index: number) => {
        if (index == last) return
        setLast(index)
        localStorage.setItem(
          LOCAL_STORAGE_KEY_LAST_PLAYED_INFO + '-' + id,
          JSON.stringify({
            ...lastPlayedInfo,
            time: Date.now(),
            episode: index
          })
        )
      },
      [last]
    )
  ] as const
}
