import { Player, PlayerPlugin, isMobile } from '@oplayer/core'
import * as anime4k from 'anime4k.js'

const fps = 30

export default class Anime4kPlugin implements PlayerPlugin {
  name = 'anime4k.js'
  player!: Player

  anime4kUpscaler: anime4k.VideoUpscaler | undefined

  apply(player: Player) {
    if (isMobile) return

    const { context, $video, $root } = (this.player = player)
    const on = Boolean(+(localStorage.getItem('anime4k') || 0))

    const onChange = (value: boolean) => {
      if (!this.anime4kUpscaler && value) {
        const canvas = document.createElement('canvas')
        canvas.style.cssText = `width:100%;height:100%;position:absolute;left:0;top:0;`
        $root.insertBefore(canvas, context.ui.$root)
        this.anime4kUpscaler = new anime4k.VideoUpscaler(fps, anime4k.ANIME4KJS_SIMPLE_M_2X)
        this.anime4kUpscaler.attachVideo(this.player.$video, canvas)
      }
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
          onChange(true)
        },
        { once: true }
      )
    }
  }

  destroy() {
    this.anime4kUpscaler?.stop()
    this.anime4kUpscaler?.detachVideo()
    this.player = this.anime4kUpscaler = undefined as any
  }
}
