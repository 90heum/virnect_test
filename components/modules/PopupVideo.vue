<template>
  <section id="mainVideoPopup" class="popup-video-area popup-container">
    <div id="dim" @click="$emit('popupToggle')"></div>
    <button class="popup-close-btn" @click="$emit('popupToggle')">
      <img src="~assets/images/common/popup-close-btn.png" />
    </button>
    <div class="popup-wrap">
      <figure class="tutorial-video">
        <div class="tutorials-video-contents">
          <iframe
            class="youtube-video"
            :src="`https://player.vimeo.com/video/${this.url}?autoplay=1&loop=1&autopause=0?음소거=1`"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
        </div>
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    url: String,
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/global/popup.scss';

.tutorial-video {
  position: relative;
  width: 100%;
  background-color: #2c2655;

  .tutorials-video-contents {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
  }

  &:after {
    z-index: 1;
    display: block;
    width: 100%;
    padding-bottom: 56.25%;
    content: '';
  }

  .youtube-video {
    width: 100%;
    height: 100%;
  }
}
</style>
