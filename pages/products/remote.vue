<template>
  <section class="products-section">
    <sub-menu-product />
    <!-- <sub-visual-section
      :image="visualText.image"
      :category="visualText.category"
      :title="$t('productsText.visualText.title')"
      :contents="$t('productsText.visualText.contents')"
    ></sub-visual-section> -->
    <!-- <snb-section :snbArr="$t('gnb[1].array')"></snb-section> -->
    <sub-banner class="aa" />

    <!-- 제품개요 -->
    <xr-solution />

    <!-- 제품특징 -->
    <product-property />
    <!-- 데이터 모듈 -->
    <dataModule />
    <!-- 기능소개 -->

    <remote-component />
    <!-- <tail-section
      :bg="tailText.bg"
      :mention="$t('productsText.tailText')"
      :blueBtn="tailText.blue"
      :blueRouter="tailText.blueRouter"
      :greyBtn="tailText.grey"
      :greyRouter="tailText.greyRouter"
    ></tail-section>
     -->
    <!-- <bottom-banner-remote /> -->
    <!-- <tailSection class="bb" /> -->
    <CtaModule />
  </section>
</template>

<script>
import subVisualSection from "../../layouts/common/SubVisual.vue";
import snbSection from "../../layouts/modules/Snb.vue";
import tailSection from "../../layouts/common/Tail.vue";
import remoteComponent from "../../components/products/pages/Remote.vue";
import SubBanner from "~/components/products/partials/subBanner.vue";
import XrSolution from "~/components/products/partials/XRSolution.vue";
// import XRSolution from "~/components/products/partials/XRSolution.vue";
import ProductProperty from "~/components/products/partials/productProperty.vue";
import BottomBannerRemote from "~/components/products/partials/bottomBannerRemote.vue";
import CtaModule from "~/components/main/ctaModule.vue";
import SubMenuProduct from "~/components/products/partials/subMenuProduct.vue";

export default {
  head: {
    title: 'VIRNECT Remote - 원격 현장관리 XR 솔루션',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'VIRNECT Remote는 실시간 무선 영상과 AR로 원격에서 효율적으로 지원, 감독, 기록 할 수 있는 솔루션입니다.'
      }
    ],
  },
  components: {
    subVisualSection,
    snbSection,
    tailSection,
    remoteComponent,
    SubBanner,
    XrSolution,
    // XRSolution,
    ProductProperty,
    BottomBannerRemote,
    CtaModule,
    SubMenuProduct,
  },
  data() {
    return {
      visualText: {
        // 상단 비주얼 텍스트
        image:
          "https://image.virnect.com/images/pages/solution/img-products-main.png",
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
  margin: 0 auto;
  //padding-top: 60px;
}
.bb {
  //margin-top: 100px;
}
</style>
