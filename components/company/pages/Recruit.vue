<template>
  <section class="recruit-section">
    <sub-visual-section
      class="sm"
      :image="'https://virnect.com/images/pages/company/img-people-top-m@2x.png'"
      :title="$t('companyText.recruitText.visualText.title')"
      :contents="$t('companyText.recruitText.visualText.contents')"
    ></sub-visual-section>
    <transition name="app-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <tail-section
      :bg="tailText.bg"
      :mention="$t('companyText.mediaText.mention')"
      :blueBtn="tailText.blue"
      :blueRouter="tailText.blueRouter"
      :greyBtn="tailText.grey"
      :greyRouter="tailText.greyRouter"
    ></tail-section>
  </section>
</template>

<script>
import subVisualSection from "~/layouts/common/SubVisual";
import tailSection from "~/layouts/common/Tail";
export default {
  components: {
    subVisualSection,
    tailSection,
  },
  data() {
    return {
      visualImage: "../images/pages/company/img-people-top",
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

<style lang="scss" scoped></style>
