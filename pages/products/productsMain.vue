<template>
  <section>
    <productsMainBanner />
    <Pmain />
    <companyValue />
    <!-- <bannerRemote /> -->
    <ctaModule />
  </section>
</template>
<script>
import productsMainBanner from "~/components/products/partials/ProductsMainBanner";
import Pmain from "~/components/products/pages/Pmain";
import companyValue from "~/components/company/pages/companyValue";
import bannerRemote from "~/components/products/partials/bottomBannerRemote.vue";
import ctaModule from "~/components/main/ctaModule.vue";

export default {
  components: {
    productsMainBanner,
    Pmain,
    companyValue,
    bannerRemote,
    ctaModule,
  },
};
</script>
<style  scoped>
</style>
