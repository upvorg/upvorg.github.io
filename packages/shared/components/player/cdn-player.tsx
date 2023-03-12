import type { Player, PlayerEvent, PlayerOptions, Source } from '@oplayer/core'
import { useEffect, useImperativeHandle, useRef, useState } from 'react'
import React from 'react'

declare global {
  interface Window {
    OPlayer: any
    OHls: any
  }
}

interface OPlayerProps extends PlayerOptions {
  playerIsPlaying?: boolean
  duration?: number
  autoplay?: boolean
  onEvent?: (event: PlayerEvent) => void
}

const useScripts = (urls: string[], async = true) => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    if (window.OPlayer) return

    Promise.all(
      urls.map((url) => {
        return new Promise((resolve) => {
          const script = document.createElement('script')
          script.src = url
          script.async = async
          document.body.appendChild(script)
          script.onload = resolve
        })
      })
    ).then(() => setLoaded(true))
  }, [])

  return loaded
}

export type { PlayerEvent, Player }

const OPlayer = React.forwardRef(
  ({ playerIsPlaying, duration, onEvent, autoplay, source, ...rest }: OPlayerProps, ref) => {
    const player = useRef<Player | null>(null)
    const loaded = useScripts([
      'https://cdn.jsdelivr.net/npm/@oplayer/core@latest/dist/index.ui.js',
      'https://cdn.jsdelivr.net/npm/@oplayer/hls@latest/dist/index.hls.js'
    ])

    useImperativeHandle(ref, () => player.current)

    useEffect(() => {
      if (!player.current && loaded) {
        player.current = window.OPlayer.make('#cdn-player', { source, ...rest })
          .use([
            window.OPlayer.ui({
              screenshot: true,
              slideToSeek: 'always',
              pictureInPicture: true,
              keyboard: { global: true },
              subtitle: { fontSize: 20 }
            }),
            window.OHls({
              matcher: (_: Player, source: Source) =>
                source.format === 'm3u8' ||
                ((source.format === 'auto' || typeof source.format === 'undefined') && /m3u8(#|\?|$)/i.test(source.src))
            })
          ])
          .create()
        if (onEvent) player.current!.on(onEvent)
        if (duration) player.current?.seek(duration / 1000)
      }
    }, [loaded])

    useEffect(() => {
      if (source) player.current?.changeSource(source)
    }, [source])

    useEffect(() => {
      if (duration) player.current?.seek(duration / 1000)
    }, [duration])

    return <div id="cdn-player" />
  }
)

export default OPlayer
