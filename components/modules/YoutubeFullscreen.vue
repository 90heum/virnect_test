<template>
  <div class="youtube-fullscreen-wrapper">
    <div class="youtube-fullscreen-player"></div>
  </div>
</template>

<script>
import YTPlayer from 'yt-player'
// import mixin from 'mixins/mixin'

export default {
  // mixins: [mixin],
  methods: {
    play(src) {
      // if (this.checkMobile()) {
      //   window.open('https://m.youtube.com/watch?v=' + src)
      //   return false
      // }

      this.player.load(src)
      this.player.setVolume(100)
      this.player.play()
      const iframe = this.$el.querySelector('.youtube-fullscreen-player')
      const requestFullscreen =
        iframe.requestFullscreen ||
        iframe.mozRequestFullscreen ||
        iframe.webkitRequestFullscreen
      if (requestFullscreen) {
        requestFullscreen.bind(iframe)()
      }
    },
  },

  mounted() {
    this.player = new YTPlayer(
      this.$el.querySelector('.youtube-fullscreen-player'),
    )
    this.player.load('')
    setTimeout(() => {
      const iframe = this.$el.querySelector('.youtube-fullscreen-player')
      iframe.addEventListener(
        'fullscreenchange',
        () => {
          if (!document.fullscreenElement) {
            this.player.setVolume(0)
            this.player.pause()
          }
        },
        false,
      )
    }, 1000)
  },
}
</script>

<style lang="scss" scoped>
.youtube-fullscreen-wrapper {
  width: 0;
  height: 0;
  overflow: hidden;
}
</style>
