import React, { useState, useEffect, Component } from 'react'
import Player, { MessageContext } from 'griffith'
import { ACTIONS, EVENTS } from 'griffith-message'

interface UPlayerProps {
  src: string
  playerIsPlaying?: boolean
}

export default React.memo(
  function UPlayer({ src, playerIsPlaying = true }: UPlayerProps) {
    const [error, setError] = useState<any>(null)

    useEffect(() => {
      if (src) {
        document.querySelector('video')?.setAttribute('controlslist', 'nodownload')
      }
      setError(null)
    }, [src])

    const sources = { hd: { play_url: src } }

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
          {src ? (
            <Player
              autoplay
              id="upv-player"
              error={error}
              sources={sources}
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
          ) : (
            <span className="empty" style={{ lineHeight: `${(9 / 16) * 100}%` }}>
              暂无视频
            </span>
          )}
        </div>
      </div>
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
