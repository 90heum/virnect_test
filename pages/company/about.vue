<template>
  <section class="company-section">
    <sub-visual-section
      class="sm"
      :image="require('~/assets/images/pages/epc/company_bg_img.jpg')"
      :category="visualText.category"
      :title="
        $route.name === 'company-about'
          ? $t('companyText.visualText.title')
          : $t('companyText.visualText.title')
      "
      :contents="
        $route.name === 'company-about'
          ? $t('companyText.visualText.contents')
          : $t('companyText.visualText.contents')
      "
    ></sub-visual-section>
    <!-- 테스트 -->
    <!-- dasfsdafa -->
    <SubMenu />
    <AboutSub />
    <!-- <transition name="app-fade" mode="out-in">
      <indroduce-component />
    </transition> -->
    <!-- <snb-section
      v-if="$route.name === 'company-about'"
      :snbArr="
        $t('gnb[4].array[0].depth').filter((d) => d.page !== 'company-about')
      "
    ></snb-section> -->
    <transition name="app-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- <tail-section
      :bg="tailText.bg"
      :mention="$t('companyText.tailText')"
      :blueBtn="tailText.blue"
      :blueRouter="tailText.blueRouter"
      :greyBtn="tailText.grey"
      :greyRouter="tailText.greyRouter"
    ></tail-section> -->
    <ctxModule />
  </section>
</template>

<script>
import subVisualSection from "~/layouts/common/SubVisual.vue";
import snbSection from "~/components/modules/Snb";
import tailSection from "~/layouts/common/Tail";
import SubMenu from "../../components/company/partials/subMenu.vue";
import AboutSub from "./aboutSub.vue";
import ctxModule from "~/components/main/ctaModule.vue";

export default {
  head: {
    title: "업무현장의 운영 및 관리를 위한 XR 솔루션 공급기업 - VIRNECT",
    htmlAttrs: {
      lang: "ko",
    },
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "버넥트는 Smart future, Safe future, Low-Carbon future라는 세 가지 관점으로 확장현실(XR) 기술을 활용한 산업현장의 디지털 트랜스포메이션을 이끌고 있습니다. 자체 개발한 컴퓨터 비전 기반의 증강현실 원천기술을 바탕으로 메타버스 기술 트렌드를 선도하는 XR 솔루션 전문 기업입니다.",
      },
    ],
  },
  components: {
    subVisualSection,
    snbSection,
    tailSection,
    SubMenu,
    AboutSub,
    ctxModule,
  },
  data() {
    return {
      visualText: {
        image: "../images/pages/company/img-company-top",
        category: "Company",
      },
      tailText: {
        // 막줄 꼬리 텍스트
        bg: "../images/pages/products/img-products-banner",
        blue: "SOLUTIONS",
        blueRouter: "infra_energy",
        grey: "Contact",
        greyRouter: "inquiry",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.tabWrap {
  display: flex;
  justify-content: center;
}
.tabWrap ul {
  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 300px;
  align-items: center;
}
.tabWrap ul li {
  padding: 30px;
  text-decoration: none;
  border: 1px solid #000;
}
</style>
