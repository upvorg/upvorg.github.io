import type { Player, PlayerEvent, PlayerOptions } from '@oplayer/core'
import { isMobile } from '@oplayer/core'
import hls from '@oplayer/hls'
import ReactPlayer from '@oplayer/react'
import ui from '@oplayer/ui'
import React, { useImperativeHandle, useRef } from 'react'

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
    controlBar: { back: 'fullscreen' },
    subtitle: { background: true, shadow: 'none' },
    icons: {
      loadingIndicator: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" data-spinner="true" class="spinner">
      <circle data-spinner-trace="true" cx="24" cy="24" r="22" stroke="white"></circle>
      <circle data-spinner-circle="true" cx="24" cy="24" r="22" stroke="white"></circle>
      </svg>`,
    },
  }),
  hls({ forceHLS: true }),
]

const OPlayer = React.forwardRef(({ playerIsPlaying, duration, onEvent, autoplay, ...rest }: OPlayerProps, ref) => {
  const _ref = useRef<Player | null>(null)

  useImperativeHandle(ref, () => _ref.current)

  return (
    <ReactPlayer
      ref={_ref}
      {...rest}
      plugins={plugins}
      onEvent={onEvent}
      autoplay={autoplay}
      duration={duration}
      playing={playerIsPlaying}
    />
  )
})

export default OPlayer
