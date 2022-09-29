<template>
  <div>
    <!-- 헤더 -->
    <inquiry-banner />

    <!-- 콘텍트 콘텐츠 -->
    <section class="contactTab">
      <sub-menu :isActive="'inquiry'" />
      <div class="demoSuccess">
        <span class="demoSucIcon">
          <i>
            <img class="normalDemo" src="~/assets/images/pages/support/Succes@2x.png" alt="성공메세지아이콘">
            <img class="mbDemo" src="~/assets/images/pages/support/demoSucMb@2x.png" alt="성공메세지모바일아이콘">
          </i>
        </span>
        <span class="demoSucTit">
          귀하의 메세지에 감사드립니다.
          <p>정상적으로 제출되었습니다. 감사합니다.</p>
        </span>
      </div>
    </section>
    <support-tail
      :bg="tailText.bg"
      :mention="$t('productsText.tailText')"
      :blueBtn="tailText.blue"
      :blueRouter="tailText.blueRouter"
      :greyBtn="tailText.grey"
      :greyRouter="tailText.greyRouter"
    />
  </div>
</template>

<script>
import SubMenu from "~/components/support/SubMenu.vue";
import GoogleMap from "~/components/support/faq/GoogleMap.vue";
import InquiryBanner from "../../components/support/inquiryBanner.vue";
import SupportTail from "~/layouts/common/Tail.vue";

export default {
  head: {
    title: '문의하기 - VIRNECT',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '버넥트의 준비된 기술 컨설턴트가 직접 도움을 드립니다. 항상 고객 중심으로 생각하며, 고객과 함께 성장해 나가겠습니다.'
      }
    ],
  },
  components: {
    SubMenu,
    GoogleMap,
    InquiryBanner,
    SupportTail,
  },
  data() {
    return {
      chosenMenu: true,
      isTab: 2,
      visualText: {
        // 상단 비주얼 텍스트
        image:
          "https://image.virnect.com/images/pages/products/img-products-main.png",
        category: "Products",
      },
      tailText: {
        // 막줄 꼬리 텍스트
        bg: "assets/images/pages/products/img-products-banner.png",
        blue: "SOLUTIONS",
        blueRouter: "infra_energy",
        grey: "Contact",
        greyRouter: "inquiry",
      },
    };
  },
  methods: {
    chooseMenu(e) {
      this.chosenMenu = e;
    },
    chooseTab(e) {
      this.isTab = e;
    },
  },
};
</script>

<style lang="scss" scoped>
// 공통 서브메뉴
.contactTab {
  width: 100%;
  background-color: #fff;
  li,
  ul,
  a {
    list-style: none;
    text-decoration: none;
  }
  ul {
    padding-left: 0px;
  }
}

  .demoSuccess{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
    .demoSucIcon{
      width: 100%;
      display: block;
      margin-top: 200px;
      margin-bottom: 50px;
      i{
        display: block;
        img{
          max-width: 1200px;
          width: 100%;
          &.normalDemo{
            display: block;
          }
          &.mbDemo{
            display: none;
          }
        }
      }
    }
    .demoSucTit{
      margin: 0 auto;
      text-align: center;
      margin-bottom: 220px;
      font-size: 26px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #121212;
      p{
        margin-top: 30px;
        font-size: 26px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #121212;
      }
    }
  }

.formWrap {
  min-height: 1700px;
  position: relative;
  display: block;
  padding: 49px 0 100%;
  border-top: solid 2px #999;
  margin-bottom: 150px;
}
.formTab {
  width: 100%;
  ul {
    display: flex;
    li {
      width: 33%;
      padding: 30px 10px;
      font-size: 14px;
      font-weight: bold;
      line-height: 1;
      letter-spacing: normal;
      text-align: center;
      color: #9a9da3;
      &.active,
      &:hover {
        color: #0a51b7;
      }
    }
  }
}

.erroTIt{
  font-size: 14px;
  color: #181818;
}

@media screen and (max-width: 768px) {
  span.contactContTab
    .contContMenu
    > span:last-child
    span:last-child
    div.mapList
    > ul {
    flex-direction: column;
    gap: 0;
  }
}

@media screen and(max-width: 425px) {

  section .demoSuccess .demoSucIcon{
    margin-top: 80px;
  }
  section .demoSuccess .demoSucTit{
    margin: 40px 0 80px;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #121212;
    p{
    margin-top: 10px;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #121212;
    }
  }

  section .demoSuccess .demoSucIcon i img{
    &.normalDemo{
      display: none;
    }
    &.mbDemo{
      display: block;
    }
  }
}
</style>
