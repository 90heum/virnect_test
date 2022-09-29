<template>
  <div>
    <main-banner class="mainBanner" />

    <banner-module />

    <product-component />

    <use-case />

    <company-component :contentList="contentList" :irData="irData" />

    <support-component />

    <!-- 신모듈 -->
    <supportModule />

    <cta-module />
  </div>
</template>

<script>
import MainBanner from "~/components/main/mainBanner.vue";
/* import BannerModule from "~/components/main/bannerModule.vue"; */
import UseCase from "~/components/main/useCase.vue";
import CompanyComponent from "~/components/main/company.vue";
import SupportComponent from "~/components/products/partials/SupportPart.vue";
import CtaModule from "~/components/main/ctaModule.vue";
import ProductComponent from "~/components/main/products.vue";
import supportModule from "~/components/modules/SupportModule.vue";
export default {
  head() {
    return {
      title: "Virnect",
      meta: [
        {
          content: "증강현실 Virnect",
        },
      ],
    };
  },
  async asyncData({ $axios }) {
    try {
      const data = Promise.all([
        $axios.get(`admin/news?page=1&size=${20}`),
        $axios.get(`admin/ir?page=1&size=20`),
      ]);
      const dataJson = await data;
      return {
        contentList: dataJson[0].data.data.newsBoardResponseList,
        irData: dataJson[1].data.data.irResponseList,
      };
    } catch (e) {
      console.error(e);
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },
  },
  components: {
    MainBanner,
    /*  BannerModule, */
    UseCase,
    CompanyComponent,
    SupportComponent,
    CtaModule,
    ProductComponent,
    supportModule,
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/reset.scss";

.mainBanner {
  margin: 0 auto;
  margin-top: 79px;
}
</style>
