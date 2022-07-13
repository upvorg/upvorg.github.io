import { useEffect, useRef } from 'react'
import type { PlayerEvent, Player as IPlayer } from '@oplayer/core'
import ui from '@oplayer/ui'
import hls from '@oplayer/hls'
import Player from '@oplayer/react'

interface OPlayerProps {
  src: string
  poster?: string
  playerIsPlaying?: boolean
  duration?: number
  onEvent?: (event: PlayerEvent) => void
}

const plugins = [ui(), hls()]

export default function OPlayer({ playerIsPlaying, src, poster, duration, onEvent }: OPlayerProps) {
  const player = useRef<IPlayer>()

  useEffect(() => {
    if (playerIsPlaying) {
      player.current?.play()
    } else {
      player.current?.pause()
    }
  }, [playerIsPlaying])

  return (
    <Player
      plugins={plugins}
      ref={player}
      source={{ src, poster }}
      duration={duration}
      onEvent={onEvent}
    />
  )
}
