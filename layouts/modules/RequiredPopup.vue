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
        title: 'Please fill out all required entries.',
        text: '필수 입력 항목을 모두 기입 해주세요.',
      },
      email: {
        title: 'This email is not in the correct format.',
        text: '올바른 형식의 이메일이 아닙니다.',
      },
    }
  },
  props: {
    emailRequired: Boolean,
  },
  computed: {
    newsLetterText() {
      if (this.emailRequired) {
        return this.email
      } else {
        return this.check
      }
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
