import { Player, PlayerPlugin, isMobile } from '@oplayer/core'
import * as anime4k from 'anime4k.js'

const fps = 45

export default class Anime4kPlugin implements PlayerPlugin {
  name = 'anime4k.js'
  player!: Player

  anime4kUpscaler: anime4k.VideoUpscaler | undefined

  apply(player: Player) {
    if (isMobile) return

    const { context, $video } = (this.player = player)
    const on = Boolean(+(localStorage.getItem('anime4k') || 0))
    const onChange = (value: boolean) => {
      if (!this.anime4kUpscaler && value) this.initAnime4k()
      localStorage.setItem('anime4k', Number(value).toString())

      if (value) {
        this.anime4kUpscaler!.start()
      } else {
        this.anime4kUpscaler?.stop()
      }
    }

    context.ui.setting.register({
      name: 'Anime4k',
      type: 'switcher',
      key: 'anime4k',
      icon: '<span style="margin: 0 .7em 0 .2em;">4K</span>',
      default: on,
      onChange,
    })

    if (on) {
      $video.addEventListener(
        'loadeddata',
        () => {
          this.initAnime4k()
          this.anime4kUpscaler!.start()
        },
        { once: true }
      )
    }
  }

  initAnime4k() {
    const canvas = document.createElement('canvas')
    canvas.style.position = 'absolute'
    canvas.style.width = canvas.style.height = '100%'
    canvas.style.top = canvas.style.left = '0'
    this.player.$video.parentNode?.appendChild(canvas)
    this.anime4kUpscaler = new anime4k.VideoUpscaler(fps, anime4k.ANIME4KJS_SIMPLE_M_2X)
    this.anime4kUpscaler.attachVideo(this.player.$video, canvas)
  }

  destroy() {
    this.anime4kUpscaler?.stop()
    this.anime4kUpscaler?.detachVideo()
    this.anime4kUpscaler = undefined
  }
}
