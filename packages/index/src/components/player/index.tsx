import { useState, useEffect, Component } from 'react'
import Player, { MessageContext } from 'griffith'
import { ACTIONS, EVENTS } from 'griffith-message'

interface UPlayerProps {
  src: string
  playerIsPlaying?: boolean
}
export default function UPlayer({ src, playerIsPlaying = false }: UPlayerProps) {
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    setError(null)
  }, [src])

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
            error={error}
            onEvent={(event: EVENTS) => {
              if (event === EVENTS.PLAY_FAILED || event === EVENTS.ERROR) {
                setError({ message: 'PLAY FAILED' })
              }
            }}
            autoplay
            // 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4'
            sources={{ hd: { play_url: src } }}
            id={src}
          >
            <MessageContext.Consumer>
              {({ dispatchAction }) => (
                <ActionRegister dispatchAction={dispatchAction} playerIsPlaying={playerIsPlaying} />
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
}

class ActionRegister extends Component<{
  dispatchAction: (action: ACTIONS) => void
  playerIsPlaying: boolean
}> {
  componentDidUpdate() {
    const { dispatchAction, playerIsPlaying } = this.props
    if (playerIsPlaying) {
      dispatchAction(ACTIONS.PLAY)
    } else {
      dispatchAction(ACTIONS.PAUSE)
    }
  }
  render = () => null
}
