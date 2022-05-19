import React, { useState, useEffect, Component, useRef } from 'react'
import Player, { MessageContext, PlaySourceMap } from 'griffith'
import { ACTIONS, EVENTS } from 'griffith-message'
import AspectRatio from '../AspectRatio'

export { EVENTS }

export interface GriffithPlayerProps {
  src: string
  playerIsPlaying?: boolean
  duration?: number
  auto?: boolean
  onEvent?: (event: EVENTS, payload?: any) => void
}

export const GriffithPlayer = React.memo(
  ({ src, playerIsPlaying = true, duration = 0, auto = true, onEvent }: GriffithPlayerProps) => {
    const [error, setError] = useState<any>(null)
    const [canPlay, setCanplay] = useState<boolean>(false)
    const dispatchPlayRef = useRef<HTMLButtonElement | null>(null)

    useEffect(() => {
      setError(null)
      canPlay && src?.endsWith('.m3u8') && setCanplay((c) => !c)
      src && document.querySelector('video')?.setAttribute('controlslist', 'nodownload')
    }, [src])

    useEffect(() => {
      setTimeout(() => {
        src?.endsWith('.m3u8') && dispatchPlayRef.current?.click()
      }, 0)
    }, [() => dispatchPlayRef.current, src])

    //'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_sd.mp4'
    //'https://svp.cdn.qq.com/0b53muajsaaakmafje2sk5rjazodtfsqbgia.f0.mp4?dis_k=5321f1f6c51f0bfccd8feffa4fa72184&dis_t=1649593655'
    //'https://s2.monidai.com/ppvod/DADA21B4B4C28DFE8F6E69F90D490E59.m3u8'
    // https://s2.monidai.com/ppvod/E86CABD04478859BA65F6761D9AF58C9.m3u8
    // https://s2.monidai.com/ppvod/A372FB309F981A8CD0C94DF717410203.m3u8
    // https://s2.monidai.com/ppvod/FCD7885D5BE89FDA071A063380B93C25.m3u8
    // https://s2.monidai.com/ppvod/700A4258AEF616893FF08919E86A13C5.m3u8
    const sources: PlaySourceMap = { hd: { play_url: src } }
    if (src?.endsWith('.m3u8')) {
      sources.hd!.format = 'm3u8'
      auto = false
    }

    const showPlayer = auto ? src : src && canPlay
    const showControl = !auto && !!src

    return (
      <AspectRatio ratio={16 / 9}>
        {showPlayer ? (
          <Player
            autoplay
            id="upv-player"
            error={error}
            sources={sources}
            defaultQuality="hd"
            onEvent={(event: EVENTS, data?: any) => {
              onEvent?.(event, data)
              if (event === EVENTS.PLAY_FAILED || event === EVENTS.ERROR) {
                setError({ message: 'PLAY FAILED' })
              }
            }}
          >
            <MessageContext.Consumer>
              {({ dispatchAction }) => (
                <ActionRegister
                  src={src}
                  duration={duration}
                  dispatchAction={dispatchAction}
                  playerIsPlaying={!!!error && playerIsPlaying}
                />
              )}
            </MessageContext.Consumer>
          </Player>
        ) : showControl ? (
          <button
            className="button is-large is-primary is-light"
            aria-haspopup="true"
            style={{ fontSize: '2em' }}
            onClick={() => setCanplay(true)}
            ref={dispatchPlayRef}
          >
            <span className="icon">
              <i className="fa-solid fa-circle-play"></i>
            </span>
          </button>
        ) : (
          <span style={{ color: 'var(--caption-color)', backgroundColor: '#f4f4f4' }}>
            {src == undefined ? 'Loading ···' : '暂无视频'}
          </span>
        )}
      </AspectRatio>
    )
  },
  (prevProps, nextProps) =>
    prevProps.src === nextProps.src &&
    prevProps.playerIsPlaying === nextProps.playerIsPlaying &&
    prevProps.onEvent === nextProps.onEvent &&
    prevProps.duration === nextProps.duration
)

class ActionRegister extends Component<{
  dispatchAction: (action: ACTIONS, payload?: any) => void
  playerIsPlaying: boolean
  src: string
  duration: number
}> {
  componentDidUpdate() {
    this.init()
  }

  componentDidMount() {
    this.init()
  }

  init() {
    const { dispatchAction, duration, playerIsPlaying } = this.props
    setTimeout(() => {
      dispatchAction(ACTIONS.TIME_UPDATE, {
        currentTime: duration
      })
      dispatchAction(playerIsPlaying ? ACTIONS.PLAY : ACTIONS.PAUSE)
    }, 0)
  }

  render = () => null
}
