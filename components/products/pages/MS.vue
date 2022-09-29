<template>
  <section class="ms-section">
    <intro-part :introSource="msIntro"></intro-part>
    <heading-module
      :category="$t('productsText.msText.introText.category')"
      :title="$t('productsText.msText.introText.title')"
      :contents="$t('productsText.msText.introText.contents')"
    ></heading-module>
    <benefit-part
      :benefitArr="$t('productsText.msText.benefitLists')"
    ></benefit-part>

    <!-- <div class="example-wrap">
      <section class="divide-section">
        <div class="example-style">
          <heading-module
            :align="exampleAlign"
            :category="$t('productsText.exampleTitle.category')"
            :title="$t('productsText.exampleTitle.title')"
            :contents="$t('productsText.msText.exampleContents')"
          ></heading-module>

          <div class="divide-contents-section example">
            <example-part
              :exampleArr="$t('productsText.msText.exampleList')"
            ></example-part>
          </div>
        </div>
      </section>
    </div> -->

    <bg-slide-part
      :bgExampleArr="$t('productsText.msText.bgExampleList')"
    ></bg-slide-part>
    <!-- 나중에 -->
    <!-- <new-bg-slide
      :bannerData="moduleData.view"
      :title="`Remote가`"
    ></new-bg-slide> -->
  </section>
</template>

<script>
import introPart from "../partials/IntroducePart.vue";
import benefitPart from "../partials/BenefitPart";
import examplePart from "../partials/ExamplePart";
import bgSlidePart from "../partials/BgSlidePart.vue";
import newbgslide from "~/components/products/partials/NewBgSlide.vue";

import headingModule from "../../modules/Heading";
export default {
  components: {
    introPart,
    benefitPart,
    examplePart,
    bgSlidePart,
    headingModule,
    newbgslide,
  },
  data() {
    return {
      msIntro: {
        logo: "../images/pages/products/logo-products-virnectxms",
        youtubeLink: "eqFqtAJMtYE",
      },
      exampleAlign: "left",
    };
  },
};
</script>
<style lang="scss" scoped>
@import "~assets/css/pages/products.scss";

.ms-section .introduce-part /deep/ {
  .logo-img {
    max-width: 500px;
  }
  @media screen and (max-width: $mobile) {
    .logo-img {
      width: 100%;
      padding: 0 24px;
    }
  }
}
.ms-section .benefit-part /deep/ {
  margin-top: 28px;
  dl:nth-child(6) {
    height: 0;
    padding: 0;
    border: none;
  }
  @media screen and (min-width: $mobile) {
    dl:nth-child(3) {
      border-bottom: none;
    }
    dl:nth-child(4) {
      border-bottom: none;
    }
    dl:nth-child(5) {
      margin-top: -76px;
    }
  }
}
</style>
