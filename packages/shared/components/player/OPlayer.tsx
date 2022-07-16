import { PlayerEvent } from '@oplayer/core'
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

export type { PlayerEvent }

const plugins = [ui(), hls()]

export default function OPlayer({ playerIsPlaying, src, poster, duration, onEvent }: OPlayerProps) {
  return (
    <Player
      playing={playerIsPlaying}
      plugins={plugins}
      source={{ src, poster }}
      duration={duration}
      onEvent={onEvent}
    />
  )
}
