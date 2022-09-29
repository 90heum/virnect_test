<template>
  <section id="Popup" class="popup-container">
    <div class="popup-area">
      <div id="dim" @click="close"></div>
      <div class="popup-wrap">
        <button class="popup-close-btn" @click="close">
          <img src="~assets/images/common/popup-close-btn.png" />
        </button>
        <div class="popup-body">
          <p class="heading">{{ LetterText.title }}</p>
          <p v-html="LetterText.text"></p>
        </div>
        <button @click="close" class="popup-ok-btn">OK</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      check: {
        title: 'Thank you!',
        text: this.$t('pricingText.roiDone'),
      },
    }
  },
  props: {},
  computed: {
    LetterText() {
      return this.check
    },
  },
  methods: {
    close() {
      this.$emit('viewPopup')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/global/popup.scss';
</style>
