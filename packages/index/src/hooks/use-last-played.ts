import { useCallback, useMemo, useState } from 'react'

const LOCAL_STORAGE_KEY_LAST_PLAYED_INFO = '@player/last-played'

type LastPlayedInfo = {
  id: string
  duration: number
  episode: number
  time: number
}

export default function useLastPlayed(id: string) {
  const lastPlayedInfo = useMemo<LastPlayedInfo>(() => {
    const sp = new URLSearchParams(window.location.search)
    const defaultLastPlayedInfo: LastPlayedInfo = {
      id,
      duration: 0,
      episode: sp.has('v') ? +sp.get('v')! - 1 : 0,
      time: 0
    }

    return sp.has('v')
      ? defaultLastPlayedInfo
      : JSON.parse(
          localStorage.getItem(LOCAL_STORAGE_KEY_LAST_PLAYED_INFO + '-' + id) ||
            JSON.stringify(defaultLastPlayedInfo)
        )
  }, [])

  const [lastEpisode, setLastEpisode] = useState(lastPlayedInfo.episode)
  const [lastDuration, setLastDuration] = useState(lastPlayedInfo.duration)

  const _setLastEpisode = useCallback((duration: number) => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_LAST_PLAYED_INFO + '-' + id,
      JSON.stringify({
        ...lastPlayedInfo,
        time: Date.now(),
        duration
      })
    )
  }, [])

  return [
    {
      lastEpisode,
      setLastEpisode: useCallback(
        (index: number) => {
          if (index == lastEpisode) return
          setLastDuration(0)
          _setLastEpisode(0)
          localStorage.setItem(
            LOCAL_STORAGE_KEY_LAST_PLAYED_INFO + '-' + id,
            JSON.stringify({
              ...lastPlayedInfo,
              time: Date.now(),
              episode: index
            })
          )
          setLastEpisode(index)
        },
        [lastEpisode]
      )
    },
    {
      lastDuration: lastDuration,
      setLastDuration: _setLastEpisode
    }
  ] as const
}
