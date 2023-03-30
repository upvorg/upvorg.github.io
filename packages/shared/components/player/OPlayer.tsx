import type { Player, PlayerEvent, PlayerOptions } from '@oplayer/core'
import { isMobile } from '@oplayer/core'
import hls from '@oplayer/hls'
import ReactPlayer from '@oplayer/react'
import ui from '@oplayer/ui'
import React, { useImperativeHandle, useMemo, useRef } from 'react'

interface OPlayerProps extends PlayerOptions {
  playerIsPlaying?: boolean
  duration?: number
  autoplay?: boolean
  onEvent?: (event: PlayerEvent) => void
}

export type { PlayerEvent, Player }

export { isMobile }

const plugins = [
  ui({
    screenshot: true,
    topSetting: isMobile,
    slideToSeek: 'always',
    pictureInPicture: true,
    keyboard: { global: true },
    controlBar: { back: 'fullscreen' }
  }),
  hls({
    matcher: (_, source) =>
      source.format === 'm3u8' ||
      ((source.format === 'auto' || typeof source.format === 'undefined') && /m3u8(#|\?|$)/i.test(source.src))
  })
]

const OPlayer = React.forwardRef(({ playerIsPlaying, duration, onEvent, autoplay, ...rest }: OPlayerProps, ref) => {
  const _ref = useRef<Player | null>(null)

  useImperativeHandle(ref, () => _ref.current)

  return (
    <ReactPlayer
      ref={_ref}
      {...rest}
      plugins={useMemo(() => plugins, [])}
      onEvent={onEvent}
      autoplay={autoplay}
      duration={duration}
      playing={playerIsPlaying}
    />
  )
})

export default OPlayer
