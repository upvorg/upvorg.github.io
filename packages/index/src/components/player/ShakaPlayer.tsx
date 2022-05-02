import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
// @ts-ignore
import shaka from 'shaka-player/dist/shaka-player.ui'
import 'shaka-player/dist/controls.css'

interface ShakaPlayerProps {
  src: string
  config?: shaka.extern.PlayerConfiguration
  autoPlay?: boolean
  width?: number
  height?: number
  ref?: any
  chromeless?: boolean
}

function ShakaPlayer({ src, config, chromeless, ...rest }: ShakaPlayerProps, ref: any) {
  const uiContainerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const [player, setPlayer] = useState<any>()
  const [ui, setUi] = useState(null)

  useEffect(() => {
    shaka.polyfill.installAll()
    shaka.media.ManifestParser.registerParserByExtension('m3u8', shaka.hls.HlsParser)
    shaka.media.ManifestParser.registerParserByMime(
      'Application/vnd.apple.mpegurl',
      shaka.hls.HlsParser
    )
    shaka.media.ManifestParser.registerParserByMime('application/x-mpegURL', shaka.hls.HlsParser)

    const player = new shaka.Player(videoRef.current)
    setPlayer(player)

    let ui: any
    if (!chromeless) {
      const ui = new shaka.ui.Overlay(player, uiContainerRef.current, videoRef.current)
      setUi(ui)
    }

    return () => {
      player.destroy()
      ui?.destroy()
    }
  }, [])

  useEffect(() => {
    if (player && config) {
      player.configure(config)
    }
  }, [player, config])

  useEffect(() => {
    if (player && src) {
      player.load(src).catch(console.log)
    }
  }, [player, src])

  useImperativeHandle(
    ref,
    () => ({
      get player() {
        return player
      },
      get ui() {
        return ui
      },
      get videoElement() {
        return videoRef.current
      }
    }),
    [player, ui]
  )

  return (
    <div
      style={{
        width: '100%',
        paddingTop: `${(9 / 16) * 100}%`,
        backgroundColor: '#f4f4f4',
        position: 'relative'
      }}
    >
      <div
        ref={uiContainerRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      >
        <video ref={videoRef} {...rest} />
      </div>
    </div>
  )
}

export default forwardRef(ShakaPlayer)
