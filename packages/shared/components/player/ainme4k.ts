import { Player, PlayerPlugin, isMobile } from '@oplayer/core'
import * as anime4k from 'anime4k.js'

const fps = 30

export default class Anime4kPlugin implements PlayerPlugin {
  name = 'anime4k.js'
  anime4kUpscaler: anime4k.VideoUpscaler | null | undefined
  player!: Player

  apply(player: Player) {
    if (isMobile) return

    this.player = player
    const onChange = (value: boolean) => {
      if (!this.anime4kUpscaler && value) this.init()
      localStorage.setItem('anime4k', Number(value).toString())

      if (value) {
        this.anime4kUpscaler!.start()
      } else {
        this.anime4kUpscaler?.stop()
      }
    }
    const on = Boolean(+(localStorage.getItem('anime4k') || 0))

    player.context.ui.setting.register({
      name: 'Anime4k',
      type: 'switcher',
      key: 'anime4k',
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
      default: on,
      onChange,
    })

    if (on) {
      onChange(true)
    }
  }

  init() {
    const canvas = document.createElement('canvas')
    canvas.style.position = 'absolute'
    canvas.style.width = canvas.style.height = '100%'
    canvas.style.top = canvas.style.left = '0'
    this.player.$video.parentNode?.appendChild(canvas)
    this.anime4kUpscaler = new anime4k.VideoUpscaler(fps, anime4k.ANIME4KJS_SIMPLE_M_2X)
    this.anime4kUpscaler.attachVideo(this.player.$video, canvas)

    this.player.$video.addEventListener(
      'loadeddata',
      () => {
        this.anime4kUpscaler = new anime4k.VideoUpscaler(fps, anime4k.ANIME4KJS_SIMPLE_M_2X)
        this.anime4kUpscaler.attachVideo(this.player.$video, canvas)
      },
      { once: true }
    )
  }

  destroy() {
    this.anime4kUpscaler?.stop()
    this.anime4kUpscaler?.detachVideo()
    this.anime4kUpscaler = null
  }
}
