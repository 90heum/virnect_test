<template>
  <section id="NewsPolicy" class="policy-container">
    <div class="policy-area">
      <div id="dim" @click="close(false)"></div>
      <div class="policy-wrap">
        <button class="policy-close-btn" @click="close(false)">
          <img src="~assets/images/common/popup-close-btn.png" />
        </button>
        <div class="policy-body">
          <p class="heading">{{ $t('contactText.policyText.title') }}</p>
          <div class="policy-body-text">
            <p class="bold">{{ $t('contactText.policyText.agreeText') }}</p>
            <p class="sub">
              {{ contactText.agree }}
            </p>
            <p class="bold">{{ $t('contactText.policyText.purposeText') }}</p>
            <ul>
              <li v-for="(text, idx) of contactText.purpose" :key="idx">
                {{ text }}
              </li>
            </ul>
            <p class="bold">{{ $t('contactText.policyText.collectText') }}</p>
            <p class="sub">{{ contactText.forms }}</p>
            <p class="bold">{{ $t('contactText.policyText.periodText') }}</p>
            <p class="sub">
              {{ contactText.period.text }}
            </p>
            <ul v-if="contactText.period.array">
              <li v-for="(text, idx) of contactText.period.array" :key="idx">
                {{ text }}
              </li>
            </ul>
          </div>
        </div>
        <button @click="close(true)" class="policy-ok-btn">
          {{ $t('global.agree') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    contactText() {
      let text
      if (this.$route.name == 'pr') {
        text = this.$t('contactText.policyText.subscribe')
      } else {
        text = this.$t('contactText.policyText.purpose')
      }
      return text
    },
  },
  props: {
    success: Boolean,
  },
  methods: {
    close(agree) {
      this.$emit('viewPopup', agree)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/global/popup.scss';
</style>
