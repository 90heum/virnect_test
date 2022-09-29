<template>
  <section class="products-section">
    <sub-visual-section
      :image="require(`~/assets/images/pages/solution/img-products-main.png`)"
      :category="visualText.category"
      :title="$t('solutionText.visualText.title')"
      :contents="$t('solutionText.visualText.contents')"
    ></sub-visual-section>

    <sub-menu class="sticky" />
    <!-- <snb-section :snbArr="$t('gnb[0].array')"></snb-section> -->
    <transition name="app-fade" mode="out-in">
      <energy-component />
    </transition>
    <!-- <tail-section
      :bg="tailText.bg"
      :mention="$t('solutionText.tailText')"
      :blueBtn="tailText.blue"
      :blueRouter="tailText.blueRouter"
      :greyBtn="tailText.grey"
      :greyRouter="tailText.greyRouter"
    ></tail-section> -->
    <CtaModule />
  </section>
</template>

<script>
import subVisualSection from "../../layouts/common/SubVisual.vue";
import snbSection from "../../components/modules/Snb.vue";
import tailSection from "../../layouts/common/Tail.vue";
import energyComponent from "../../components/solutions/pages/Energy.vue";
import SubMenu from "../../components/solutions/partials/subMenu.vue";
import CtaModule from "~/components/main/ctaModule.vue";

export default {
  components: {
    subVisualSection,
    snbSection,
    tailSection,
    energyComponent,
    SubMenu,
    CtaModule,
  },
  methods: {},
  data() {
    return {
      visualText: {
        image: " ",
        category: "Value",
      },
      tailText: {
        // 막줄 꼬리 텍스트
        bg: "../images/pages/products/img-products-banner",
        blue: "Pricing",
        blueRouter: "pricing_remote",
        grey: "Contact",
        greyRouter: "inquiry",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 75px;
  z-index: 500;
}
</style>
