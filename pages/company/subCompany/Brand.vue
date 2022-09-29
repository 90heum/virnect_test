<template>
  <section class="company-section">
    <sub-visual-section
      class="sm"
      :image="'https://velog.velcdn.com/images/kyj0206/post/826e3755-e1d4-4466-bf63-273cc3b52c9c/image.png'"
      :category="visualText.category"
      :title="
        $route.name === 'company-subCompany-Brand'
          ? $t('companyText.brandText.headingTitle.title')
          : $t('companyText.brandText.headingTitle.title')
      "
      :contents="
        $route.name === 'company-subCompany-Brand'
          ? $t('companyText.brandText.headingTitle.contents')
          : $t('companyText.brandText.headingTitle.contents')
      "
    ></sub-visual-section>

    <SubMenu />
    <transition name="app-fade" mode="out-in">
      <brand-component />
    </transition>
    <!-- <snb-section
      v-if="$route.name === 'company-about'"
      :snbArr="
        $t('gnb[4].array[0].depth').filter((d) => d.page !== 'company-about')
      "
    ></snb-section> -->
    <transition name="app-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <tail-section
      :bg="tailText.bg"
      :mention="$t('companyText.tailText')"
      :blueBtn="tailText.blue"
      :blueRouter="tailText.blueRouter"
      :greyBtn="tailText.grey"
      :greyRouter="tailText.greyRouter"
    ></tail-section>
  </section>
</template>

<script>
import subVisualSection from "~/layouts/common/SubVisual.vue";
import snbSection from "~/components/modules/Snb";
import tailSection from "~/layouts/common/Tail";
import SubMenu from "../../../components/company/partials/subMenuBrand.vue";
import brandComponent from "../../../components/company/pages/brand.vue";
export default {
  components: {
    subVisualSection,
    snbSection,
    tailSection,
    brandComponent,
    SubMenu,
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