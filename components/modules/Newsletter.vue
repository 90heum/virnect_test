<template>
  <section id="newsletterSection" class="newsletter-section">
    <div class="text-wrap">
      <h3 class="title">
        <p><i>VIRNECT</i> Newsletter</p>
      </h3>
      <p
        class="contents"
        v-html="$t('companyText.newsletterText.contents')"
      ></p>
    </div>
    <form class="subscribe-contents">
      <fieldset>
        <legend class="section-heading">
          {{ $t('global.subscribeText') }}
        </legend>
        <div class="subscribe-feedback">
          <input
            type="email"
            :placeholder="$t('global.emailInput')"
            v-model="email"
          />
          <button @click="checkEmail" type="button">
            {{ $t('global.subscribeText') }}
          </button>
        </div>
        <div class="checkbox-container" @click="policyAgree">
          <input
            type="checkbox"
            id="agree"
            v-model="policy"
            :disabled="policy ? 'disabled' : 'none'"
          />
          <label for="agree" class="checkbox"></label>
          <label for="agree" v-html="$t('global.subscribeFormText')"></label>
        </div>
      </fieldset>
    </form>
    <transition name="app-fade" mode="out-in">
      <popup-section
        v-if="popupPolicy"
        v-on:viewPopup="viewPolicy"
      ></popup-section>
    </transition>

    <transition name="app-fade" mode="out-in">
      <agree-popup
        v-if="popup"
        v-on:viewPopup="viewPopup"
        v-bind:success="success"
      ></agree-popup>
    </transition>
  </section>
</template>

<script>
import popupSection from '../modules/Popup'
import agreePopup from '../modules/PopupConfirm'
export default {
  components: {
    popupSection,
    agreePopup,
  },
  props: {},
  data() {
    return {
      popup: false,
      popupPolicy: false,
      success: false,
      policy: false,
      email: '',
    }
  },
  computed: {
    subscribe() {
      return this.$store.getters.postSubscribeResponse
    },
  },
  watch: {
    subscribe(response) {
      // console.log(response)
      if (response.code === 200) {
        this.success = true
        this.popup = true
      } else {
        alert('저장에 실패했습니다. 관리자에게 문의하세요.')
      }
    },
  },
  methods: {
    postSubscribe(params) {
      this.$store.dispatch('SUBSCRIBE_RESPONSE', params)
    },
    checkEmail() {
      let checkEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/
      if (!checkEmail.test(this.email) || !this.policy) {
        this.success = false
        this.popup = true
        return
      }
      this.postSubscribe({
        email: this.email,
      })
      this.$ga('send', 'event', 'subscribe', 'click', 'virnect')
    },
    policyAgree() {
      // if (this.$i18n.locale === 'eng') {
      //   this.policy = true
      //   return
      // }
      this.policy ? (this.policy = false) : (this.popupPolicy = true)
    },
    viewPopup(clear) {
      if (clear) {
        this.email = ''
        this.policy = false
      }
      this.popup = false
      this.success = false
    },
    viewPolicy(agree) {
      if (agree) {
        this.policy = true
      }
      this.popupPolicy = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/mixin.scss';
.newsletter-section {
  margin-top: 80px;
  margin-bottom: 90px;
  padding: 40px;
  background: #f8f9fb;
  @include default-text(#0d2a58, 28px);
  .title {
    margin-bottom: 12px;
    font-weight: 600;
    font-family: $poppins;
    line-height: 1.14;
  }
  @include clearfix();
}

.text-wrap {
  float: left;
}
.subscribe-contents {
  float: right;
  width: 40%;
}

.subscribe-feedback {
  position: relative;
  button {
    position: absolute;
    top: 0;
    right: 0;
    width: 102px;
    height: 48px;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    background: $point;
  }
}
@media (max-width: $tablet) {
  .newsletter-section {
    margin-top: 60px;
    margin-bottom: 72px;
    padding: 0 24px;
    background: none;
    i {
      font-weight: 300;
    }
  }
  .text-wrap {
    float: none;
  }
  .subscribe-contents {
    float: none;
    width: 100%;
  }
  .subscribe-feedback {
    margin-top: 20px;
  }
}
.checkbox-container {
  display: flex;
  @include checkbox(14px);
}
input[type='email'] {
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  margin-bottom: 16px;
  padding: 0 18px;
  font-weight: 300;
  // margin-top: 56px;
  font-size: 14px;
  font-family: $noto;
  line-height: 48px;
  border: 0;
  border: 1px solid #d4d9e1;
  &::placeholder {
    color: #8b96a8;
    font-size: 14px;
  }
  &:active {
    border: 1px solid $point;
    outline: none;
    -webkit-appearance: none;
  }
  &:focus {
    border: 1px solid $point;
    outline: none;
    -webkit-appearance: none;
  }
}
</style>
