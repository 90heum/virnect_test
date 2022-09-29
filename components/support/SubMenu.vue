<template>
  <!-- 탭메뉴 -->
  <div class="contactTabMenu" id="goTop">
    <ul>
      <li
        data-tab="1"
        :class="`${isActive === 'notice' ? 'contactTabActive' : ''}`"
      >
        <p><nuxt-link to="notice">NOTICE</nuxt-link></p>
      </li>
      <li
        data-tab="2"
        :class="`${isActive === 'faq' ? 'contactTabActive' : ''}`"
      >
        <p><nuxt-link to="faq">FAQ</nuxt-link></p>
      </li>
      <li
        data-tab="3"
        :class="`${isActive === 'learning-center' ? 'contactTabActive' : ''}`"
      >
        <p>
          <nuxt-link to="learning-center">{{
            $t("supportText.subMenuText.learn")
          }}</nuxt-link>
        </p>
      </li>
      <li
        data-tab="4"
        :class="`${isActive === 'inquiry' ? 'contactTabActive' : ''}`"
      >
        <p>
          <nuxt-link to="inquiry">{{
            $t("supportText.subMenuText.Inquiries")
          }}</nuxt-link>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    isActive: String,
  },
};
</script>

<style lang="scss" scoped>

.contactTabMenu {
  background-color: #e6e8eb;
  ul {
    max-width: 1200px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    // 탭메뉴 리스트
    li {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 600px;
      width: 100%;
      height: 64px;
      margin: 0 auto;
      p {
        width: 100%;
        height: 100%;
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.6;
        letter-spacing: -0.2px;
        text-align: center;
        white-space: nowrap;
        a {
          text-decoration: none;
          color: #9a9da3;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      &:first-child {
        p {
          border-left: solid 1px #c5c8cf;
          border-right: solid 1px #c5c8cf;
        }
      }
      &:nth-child(2) {
        p {
          border-right: solid 1px #c5c8cf;
        }
      }
      &:last-child {
        p {
          border-left: solid 1px #c5c8cf;
          border-right: solid 1px #c5c8cf;
        }
      }
      // 엑티브 효과
      &:hover,
      &.contactTabActive {
        background-color: #fff;
        position: relative;
        z-index: 9999;
        p a {
          color: #0a51b7;
        }
      }
    }
  }
}
</style>