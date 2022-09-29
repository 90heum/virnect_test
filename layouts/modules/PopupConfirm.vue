<template>
  <section id="NewsPopup" class="popup-container">
    <div class="popup-area">
      <div id="dim" @click="close"></div>
      <div class="popup-wrap">
        <button class="popup-close-btn" @click="close">
          <img src="~assets/images/common/popup-close-btn.png" />
        </button>
        <div class="popup-body">
          <p class="heading">{{ newsLetterText.title }}</p>
          <p v-html="newsLetterText.text"></p>
        </div>
        <button @click="close" class="popup-ok-btn" :class="{ fail: !success }">
          {{ success ? 'OK' : 'Check' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      check: {
        title: "We're Always Waiting For Your Contact",
        text: this.$t('contactText.popupText.error'), // 기본정보를 모두 기입하고, 개인정보보호정책에 동의해주세요.
      },
      thank: {
        title: 'Thank you!',
        text: 'VIRNECT의 뉴스레터를 구독해주셔서 감사합니다.',
      },
    }
  },
  props: {
    success: Boolean,
  },
  computed: {
    newsLetterText() {
      if (this.success) {
        if (this.$route.name == 'pr') {
          this.thank.text = this.$t('contactText.thanksText.subscribe')
        } else {
          this.thank.text = this.$t('contactText.thanksText.inquiry')
        }
        return this.thank
      } else {
        return this.check
      }
    },
  },
  methods: {
    close() {
      if (this.success) this.$emit('viewPopup', true)
      else this.$emit('viewPopup')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/global/popup.scss';
</style>
