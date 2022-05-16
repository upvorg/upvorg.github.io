import React, { useState, useEffect, Component } from 'react'
import Player, { MessageContext, PlaySourceMap } from 'griffith'
import { ACTIONS, EVENTS } from 'griffith-message'

interface GriffithPlayerProps {
  src: string
  playerIsPlaying?: boolean
  auto?: boolean
}

export const GriffithPlayer = React.memo(
  ({ src, playerIsPlaying = true, auto = true }: GriffithPlayerProps) => {
    const [error, setError] = useState<any>(null)
    const [canPlay, setCanplay] = useState<boolean>(false)

    useEffect(() => {
      if (src) {
        document.querySelector('video')?.setAttribute('controlslist', 'nodownload')
      }
      setError(null)
    }, [src])

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
    const showControl = !auto && src

    return (
      <Player16By9Wrapper>
        {showPlayer ? (
          <Player
            autoplay
            id="upv-player"
            error={error}
            sources={sources}
            defaultQuality="hd"
            onEvent={(event: EVENTS) => {
              if (event === EVENTS.PLAY_FAILED || event === EVENTS.ERROR) {
                setError({ message: 'PLAY FAILED' })
              }
            }}
          >
            <MessageContext.Consumer>
              {({ dispatchAction }) => (
                <ActionRegister
                  src={src}
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
            aria-controls="dropdown-menu3"
            style={{ fontSize: '2em' }}
            onClick={() => setCanplay(true)}
          >
            <span className="icon">
              <i className="fa-solid fa-circle-play"></i>
            </span>
          </button>
        ) : (
          <span className="empty">暂无视频</span>
        )}
      </Player16By9Wrapper>
    )
  },
  (prevProps, nextProps) =>
    prevProps.src === nextProps.src && prevProps.playerIsPlaying === nextProps.playerIsPlaying
)

class ActionRegister extends Component<{
  dispatchAction: (action: ACTIONS) => void
  playerIsPlaying: boolean
  src: string
}> {
  componentDidUpdate(prevProps: any) {
    const { dispatchAction, playerIsPlaying, src } = this.props

    if (prevProps.src !== src) {
    }
    if (playerIsPlaying) {
      dispatchAction(ACTIONS.PLAY)
    } else {
      dispatchAction(ACTIONS.PAUSE)
    }
  }
  render = () => null
}

// 需要自行设置宽
const Player16By9Wrapper = ({ children }: any) => {
  return (
    <div
      className="upv-player"
      style={{
        width: '100%',
        paddingTop: `${(9 / 16) * 100}%`,
        backgroundColor: '#f4f4f4',
        position: 'relative'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {children}
      </div>
    </div>
  )
}
