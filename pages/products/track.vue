<template>
  <section class="products-section">
    <subMenuTrack />
    <SubBannerTrack class="bb" />
    <!-- <sub-visual-section
      :image="visualText.image"
      :category="visualText.category"
      :title="$t('productsText.visualText.title')"
      :contents="$t('productsText.visualText.contents')"
    ></sub-visual-section> -->
    <!-- <snb-section :snbArr="$t('gnb[1].array')"></snb-section> -->
    <transition name="app-fade" mode="out-in">
      <track-component />
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
import trackComponent from "../../components/products/pages/Track.vue";
import SubBannerTrack from "~/components/products/partials/subBannerTrack.vue";
import subMenuTrack from "~/components/products/partials/subMenuTrack.vue";
import CtaModule from "~/components/main/ctaModule.vue";

export default {
  head: {
    title: 'VIRNECT Track - 버넥트 XR 소프트웨어 개발 키트',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'VIRNECT Track은 버넥트의 최첨단 컴퓨터 비전 기술을 활용하여 직접 XR 소프트웨어를 개발할 수 있는 SDK입니다.'
      }
    ],
  },
  components: {
    subVisualSection,
    snbSection,
    tailSection,
    trackComponent,
    SubBannerTrack,
    subMenuTrack,
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
