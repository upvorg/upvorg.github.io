import { useCallback, useMemo, useState } from 'react'

const LOCAL_STORAGE_KEY_LAST_PLAYED_INFO = '@player/'

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
      : JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_LAST_PLAYED_INFO + id) || 'null') || defaultLastPlayedInfo
  }, [])

  const [lastEpisode, setLastEpisode] = useState(lastPlayedInfo.episode)

  const set = useCallback((info: LastPlayedInfo) => {
    localStorage.setItem(LOCAL_STORAGE_KEY_LAST_PLAYED_INFO + id, JSON.stringify(info))
  }, [])

  const update = useCallback(
    (id: any, episode: number, duration: number) => {
      const same = episode == lastEpisode
      set({ id, episode, duration, time: Date.now() })
      if (!same) setLastEpisode(episode)
    },
    [lastEpisode]
  )

  return [lastEpisode, lastPlayedInfo.duration, update] as const
}
