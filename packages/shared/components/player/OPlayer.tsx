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

const plugins = [
  ui(),
  hls({
    matcher: (_, source) =>
      source.format === 'm3u8' ||
      ((source.format === 'auto' || typeof source.format === 'undefined') && /m3u8(#|\?|$)/i.test(source.src))
  })
]

export default function OPlayer({ playerIsPlaying, src, poster, duration, onEvent }: OPlayerProps) {
  return (
    <Player
      playbackRate={1}
      playing={playerIsPlaying}
      plugins={plugins}
      source={{ src, poster }}
      duration={duration}
      onEvent={onEvent}
    />
  )
}
