<template>
  <section class="introduce-part">
    <img class="logo-img" :src="`${logo}`" />
    <a
      :href="introSource.intoBtn"
      v-if="introSource.intoBtn && !introSource.site"
      class="visit-btn"
      target="blank"
      >{{ introSource.btnText }}</a
    >
    <div v-if="introSource.site" class="btn-multi">
      <a :href="introSource.site" class="visit-btn" target="blank">{{
        $t('global.productsInto')
      }}</a>
      <a :href="introSource.intoBtn" class="visit-btn" target="blank">{{
        $t('global.downloadIntoBtn')
      }}</a>
    </div>

    <div v-if="introSource.youtubeLink" class="youtube-wrap">
      <div id="youtubePlayer"></div>
    </div>
    <div
      v-else
      class="intro-img"
      :class="{ 'video-in': introSource.videoLink }"
      :style="
        `${introSource.videoLink}`
          ? `background-image: url(${isMobile}.png)`
          : `background-image: none`
      "
    >
      <video
        preload="auto"
        autoplay
        loop="loop"
        muted="muted"
        volume="0"
        playsinline
        v-if="introSource.videoLink"
      >
        <source :src="introSource.videoLink" type="video/mp4" />
      </video>
    </div>
  </section>
</template>

<script>
import YTPlayer from 'yt-player'

// import mixin from '~/mixins/mixin'
export default {
  // mixins: [mixin],
  props: {
    introSource: Object,
  },
  computed: {
    logo() {
      if (/\/.*\..*$/.test(this.introSource.logo)) return this.introSource.logo
      else return this.introSource.logo + '.svg'
    },
    isMobile() {
      // if (!this.checkMobile()) return this.introSource.img
      // else return `${this.introSource.img}-m@2x`
    },
  },
  mounted() {
    // 랜딩 유튜브 자동재생
    const { youtubeLink } = this.introSource
    if (youtubeLink) {
      const youtube = new YTPlayer('#youtubePlayer', {
        controls: false,
        fullscreen: false,
        modestBranding: true,
        autoPlay: true
      })
      youtube.load(youtubeLink)
      youtube.mute()
      youtube.play()
      youtube.on('ended', youtube.play)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/mixin.scss';
.introduce-part {
  padding-top: 160px;
  text-align: center;
}

.intro-img {
  position: relative;
  height: 560px;
  margin-top: 60px;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  @include area-flex(1200px);
  &.video-in {
    height: auto;
    &:after {
      display: block;
      width: 100%;
      padding-top: 56.25%;
      content: '';
    }
  }
}
video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  background-color: #ccc;
  transform: translate(-50%, -50%);
}
.youtube-wrap /deep/ {
  position: relative;
  height: 560px;
  margin-top: 60px;
  overflow: hidden;
  @include area-flex(1200px);

  & > iframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
}

.btn-multi {
  display: flex;
  justify-content: center;
  .visit-btn {
    margin: 32px 12px 0;
  }
}
@media (max-width: $mobile) {
  .introduce-part {
    padding-top: 72px;
  }
  .logo-img {
    width: 190px;
  }
  .intro-img,
  .youtube-wrap {
    width: auto;
    height: 180px;
    margin-top: 40px;
    margin-right: 24px;
    margin-left: 24px;
    padding: 0;
    &.video-in {
      height: auto;
    }
  }
  .youtube-wrap {
    padding-top: 46.67%;
  }
}
</style>
