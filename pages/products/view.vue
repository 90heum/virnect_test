<template>
  <section class="products-section">
    <subMenuView />
    <sub-banner-view class="bb" />
    <!-- <sub-visual-section
      :image="visualText.image"
      :category="visualText.category"
      :title="$t('productsText.visualText.title')"
      :contents="$t('productsText.visualText.contents')"
    ></sub-visual-section> -->
    <!-- <snb-section :snbArr="$t('gnb[1].array')"></snb-section> -->
    <transition name="app-fade" mode="out-in">
      <view-component />
    </transition>
    <!-- <tail-section
      :bg="tailText.bg"
      :mention="$t('productsText.tailText')"
      :blueBtn="tailText.blue"
      :blueRouter="tailText.blueRouter"
      :greyBtn="tailText.grey"
      :greyRouter="tailText.greyRouter"
    ></tail-section> -->
    <!-- <tailSection class="aa" /> -->
    <CtaModule />
  </section>
</template>

<script>
import subVisualSection from "../../layouts/common/SubVisual.vue";
import snbSection from "../../layouts/modules/Snb.vue";
import tailSection from "../../layouts/common/Tail.vue";
import viewComponent from "../../components/products/pages/View.vue";
import SubBannerView from "~/components/products/partials/subBannerView.vue";
import subMenuView from "~/components/products/partials/subMenuView.vue";
import CtaModule from "~/components/main/ctaModule.vue";
export default {
  head: {
    title: 'VIRNECT View - 디지털 정보 시각화 XR 솔루션',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'VIRNECT View는 VIRNECT Make로 제작한 XR 콘텐츠를 시각화하여 업무 속도와 정확도를 향상시킬 수 있는 솔루션입니다.'
      }
    ],
  },
  components: {
    subVisualSection,
    snbSection,
    tailSection,
    viewComponent,
    SubBannerView,
    subMenuView,
    CtaModule,
  },
  data() {
    return {
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
};
</script>

<style lang="scss" scoped>
@import "~assets/css/pages/products.scss";
.aa {
  //margin-top: 100px;
}
.bb {
  margin: 0 auto;
}
</style>
