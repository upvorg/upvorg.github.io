import type { PlayerEvent, Player, PlayerOptions } from '@oplayer/core'
import ui from '@oplayer/ui'
import hls from '@oplayer/hls'
import ReactPlayer from '@oplayer/react'
import { useImperativeHandle, useMemo, useRef } from 'react'
import React from 'react'

interface OPlayerProps extends PlayerOptions {
  src: string
  poster?: string
  playerIsPlaying?: boolean
  duration?: number
  autoplay?: boolean
  format?: string
  onEvent?: (event: PlayerEvent) => void
}

export type { PlayerEvent, Player }

const plugins = [
  ui({
    pictureInPicture: true,
    slideToSeek: 'always'
  }),
  hls({
    matcher: (_, source) =>
      source.format === 'm3u8' ||
      ((source.format === 'auto' || typeof source.format === 'undefined') && /m3u8(#|\?|$)/i.test(source.src))
  })
]

const OPlayer = React.forwardRef(
  ({ playerIsPlaying, src, poster, format, duration, onEvent, autoplay, ...rest }: OPlayerProps, ref) => {
    const _ref = useRef<Player>(null)

    useImperativeHandle(ref, () => _ref.current)

    return (
      <ReactPlayer
        ref={_ref}
        {...rest}
        plugins={plugins}
        onEvent={onEvent}
        autoplay={autoplay}
        duration={duration}
        source={{ src, poster, format }}
        playing={playerIsPlaying}
      />
    )
  }
)

export default OPlayer
