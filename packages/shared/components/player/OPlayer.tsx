import type { Player, PlayerEvent, PlayerOptions } from '@oplayer/core'
import { isMobile } from '@oplayer/core'
import hls from '@oplayer/hls'
import ReactPlayer from '@oplayer/react'
import ui from '@oplayer/ui'
import React, { useImperativeHandle, useRef } from 'react'
import Anime4kPlugin from './ainme4k'

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
    keyboard: { global: true },
    controlBar: { back: 'fullscreen' },
    subtitle: { background: true, shadow: 'none' },
    icons: {
      loadingIndicator: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" data-spinner="true" class="spinner">
      <circle data-spinner-trace="true" cx="24" cy="24" r="22" stroke="white"></circle>
      <circle data-spinner-circle="true" cx="24" cy="24" r="22" stroke="white"></circle>
      </svg>`,
      next: `<svg style="transform: scale(0.7);" viewBox="0 0 1024 1024"><path d="M743.36 427.52L173.76 119.04A96 96 0 0 0 32 203.52v616.96a96 96 0 0 0 141.76 84.48l569.6-308.48a96 96 0 0 0 0-168.96zM960 96a32 32 0 0 0-32 32v768a32 32 0 0 0 64 0V128a32 32 0 0 0-32-32z"></path></svg>`,
    },
  }),
  hls({ forceHLS: true }),
  new Anime4kPlugin(),
]

const OPlayer = React.forwardRef(
  ({ playerIsPlaying, duration, onEvent, autoplay, ...rest }: OPlayerProps, ref) => {
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
  }
)

export default OPlayer
