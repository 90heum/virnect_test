<template>
  <section class="arsdk-section" id="trackId">
    <!-- <intro-part :introSource="arsdkIntro"></intro-part> -->
    <span id="headingModuleTop" />
    <!-- <heading-module
      :category="$t('productsText.arsdkText.introText.category')"
      :title="$t('productsText.arsdkText.introText.title')"
      :contents="$t('productsText.arsdkText.introText.contents')"
    ></heading-module> -->
    <!-- <benefit-part
      :benefitArr="$t('productsText.arsdkText.benefitLists')"
    ></benefit-part> -->

    <div class="overViewTrack">
      <div class="overViewWrap">
        <span class="overViewTit">
          <p>{{ $t("productsText.trackTitle.category") }}</p>
          <h2>{{ $t("productsText.trackTitle.title") }}</h2>
          <span>
            {{ $t("productsText.trackTitle.contents") }}
          </span>
        </span>
        <span class="overViewCont">
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/d47cf553-7a4f-4e94-b696-dff128df0eae/image.png"
                alt="우수한 검출 성능"
            /></i>
            <p>{{ $t("productsText.trackSubText.Title1") }}</p>
            <p>
              {{ $t("productsText.trackSubText.Contents1") }}
            </p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/ef06c2ae-8193-498e-8a81-cceebcd9be6a/image.png"
                alt="경량 디바이스 최적화"
            /></i>
            <p>{{ $t("productsText.trackSubText.Title2") }}</p>
            <p>{{ $t("productsText.trackSubText.Contents2") }}</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/b6d72214-1b00-4b81-a786-580203193731/image.png"
                alt="수정 가능한 소스코드"
            /></i>
            <p>{{ $t("productsText.trackSubText.Title3") }}</p>
            <p>{{ $t("productsText.trackSubText.Contents3") }}</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/545eccf4-9784-419d-a579-d6f6e3fd2a95/image.png"
                alt="다양한 타겟 지원"
            /></i>
            <p>{{ $t("productsText.trackSubText.Title4") }}</p>
            <p>{{ $t("productsText.trackSubText.Contents4") }}</p>
          </span>
          <span id="headingModuleBottom" />
        </span>
      </div>
    </div>
    <heading-module
      :category="$t('productsText.arsdkText.funcTitle.category')"
      :title="$t('productsText.arsdkText.funcTitle.title')"
    ></heading-module>
    <function-part
      :functionArr="$t('productsText.arsdkText.functionLists')"
      :iconImage="functionIconImage"
    ></function-part>
    <span id="functionPart" />

    <new-effect-part
      :title="title"
      :effectList="effectList.track"
      :moduleData="moduleData.track"
    />
    <new-bg-slide
      :bannerData="moduleData.view"
      :title="`Remote가`"
    ></new-bg-slide>
  </section>
</template>

<script>
import introPart from "../partials/IntroducePart";
import benefitPart from "../partials/BenefitPart";
import functionPart from "../partials/FunctionPart2";
import effectPart from "../partials/EffectPart";
import supportPart from "../partials/SupportPart";
import examplePart from "../partials/ExamplePart";
import bgSlidePart from "../partials/BgSlidePart";
import NewModule from "~/components/products/partials/newModule.vue";
import NewBgSlide from "~/components/products/partials/NewBgSlideTrack.vue";

import headingModule from "../../modules/Heading";
import NewEffectPart from "~/components/products/partials/NewEffectTrack.vue";
import { filedData, moduleData } from "~/components/products/newModuleData.js";
import { title, effectList } from "~/components/products/newEffectPartData.js";

export default {
  components: {
    introPart,
    benefitPart,
    functionPart,
    effectPart,
    supportPart,
    examplePart,
    bgSlidePart,
    headingModule,
    NewModule,
    NewBgSlide,
    NewEffectPart,
  },
  data() {
    return {
      title,
      effectList,
      filedData,
      moduleData,
      arsdkIntro: {
        logo: "../images/pages/products/logo-products-bi-track",
        // intoBtn: `${window.urls['download']}/track`,
        site: `http://track.virnect.com/`,
        btnText: this.$t("global.downloadIntoBtn"),
        img: "../images/pages/products/img-products-ar-sdk",
      },
      functionIconImage:
        "../images/pages/products/img-products-ar-sdk-function-0",
      effectBG: "../images/pages/products/img-ar-sdk-effect",
      supportTitle: {
        align: "left",
        btnText: "Pricing",
      },
      exampleAlign: "left",
    };
  },
};
</script>
<style lang="scss" scoped>
@import "~assets/css/pages/products.scss";
@import "~/assets/css/pages/overviewTrack.scss";
</style>
