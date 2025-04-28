import { Player, PlayerPlugin, isMobile } from '@oplayer/core'
// import * as anime4k from 'anime4k.js'

const fps = 30

export default class Anime4kPlugin implements PlayerPlugin {
  name = 'anime4k.js'
  player!: Player

  anime4kUpscaler: any // anime4k.VideoUpscaler | undefined

  anime4k?: any

  apply(player: Player) {
    if (isMobile) return

    const { context, $video, $root } = (this.player = player)
    let on: string | null = localStorage.getItem('anime4k')

    const onChange = async (key: any, value: boolean) => {
      if (!this.anime4k) {
        this.anime4k = await import('anime4k.js')
      }

      if (this.anime4kUpscaler) {
        //@ts-ignore
        this.anime4kUpscaler.canvas?.remove()
        this.anime4kUpscaler.detachVideo()
      }

      if (value) {
        const { width } = $root.getBoundingClientRect()
        const { videoHeight, videoWidth } = $video
        const ratio = videoWidth / videoHeight
        const pixHeight = width / ratio
        const canvas = document.createElement('canvas')
        canvas.style.cssText = `width:100%;height:${pixHeight};position:absolute;inset:0;margin:auto;`
        $root.insertBefore(canvas, context.ui.$root)

        //@ts-ignore
        this.anime4kUpscaler = new this.anime4k.VideoUpscaler(fps, this.anime4k[key])
        this.anime4kUpscaler.attachVideo(this.player.$video, canvas)
        this.anime4kUpscaler.start()
        localStorage.setItem('anime4k', key)
      } else {
        localStorage.removeItem('anime4k')
      }
    }

    context.ui.setting.register({
      name: 'Anime4k',
      key: 'anime4k',
      type: 'selector',
      icon: '<span style="margin: 0 .7em 0 .2em;">4K</span>',
      children: [
        ['NONE', null],
        ['LOWEREND_MODE_C', 'ANIME4K_LOWEREND_MODE_C'],
        ['SIMPLE_S_2X', 'ANIME4KJS_SIMPLE_S_2X'],
        ['SIMPLE_UL_2X', 'ANIME4KJS_SIMPLE_UL_2X'],
        ['HIGHEREND_MODE_C', 'ANIME4K_HIGHEREND_MODE_C']
      ].map(([name, value]) => ({
        name: name,
        value: value,
        default: value == on
      })),
      onChange: ({ value }: any) => {
        onChange(value, Boolean(value))
      }
    })

    if (on) {
      $video.addEventListener(
        'loadeddata',
        () => {
          onChange(on, Boolean(on))
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
