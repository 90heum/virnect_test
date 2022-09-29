<template>
  <section class="view-section" id="viewId">
    <!-- <intro-part :introSource="viewIntro"></intro-part> -->
    <span id="headingModuleTop" />
    <!-- <heading-module
      :category="$t('productsText.viewText.introText.category')"
      :title="$t('productsText.viewText.introText.title')"
      :contents="$t('productsText.viewText.introText.contents')"
    ></heading-module>
    <benefit-part
      :benefitArr="$t('productsText.viewText.benefitLists')"
    ></benefit-part> -->

    <div class="overViewView">
      <div class="overViewWrap">
        <span class="overViewTit">
          <p>{{ $t("productsText.viewTitle.category") }}</p>
          <h2>
            {{ $t("productsText.viewTitle.title") }}
          </h2>
          <span>
            {{ $t("productsText.viewTitle.contents") }}
          </span>
        </span>
        <span class="overViewCont">
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/03189562-2552-4290-883b-977b8f3aca79/image.png"
                alt="Check it out right away"
            /></i>
            <p>Check it out right away</p>
            <p>{{ $t("productsText.viewSubText.check") }}</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/bd7cbdad-7d8f-4f2a-8ba7-fe5eaa82d0ce/image.png"
                alt="Save Time & Efficiency"
            /></i>
            <p>Save Time & Efficiency</p>
            <p>{{ $t("productsText.viewSubText.efficiency") }}</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/138ea655-8c32-4f13-a2c8-8a401996cff6/image.png"
                alt="Expandability & Customize"
            /></i>
            <p>Expandability & Customize</p>
            <p>{{ $t("productsText.viewSubText.expandability") }}</p>
          </span>
        </span>
        <span class="overViewBox" id="featuresWrapId">
          <ul>
            <li>
              <p>38+</p>
              <p>{{ $t("productsText.subBox.current") }}</p>
            </li>
            <li>
              <p>2,569+</p>
              <p>{{ $t("productsText.subBox.download") }}</p>
            </li>
            <li>
              <p>51+</p>
              <p>{{ $t("productsText.subBox.prject") }}</p>
            </li>
          </ul>
        </span>
      </div>
    </div>

    <!-- sdaf -->
    <div class="featuresView">
      <div class="featuresWrap">
        <span class="title">
          <p>{{ $t("productsText.viewPropertyTitle.category") }}</p>
        </span>
        <div class="contents">
          <span class="featuresTit">
            <h2>
              {{ $t("productsText.viewPropertyTitle.title") }}
            </h2>
            <ul>
              <li>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                    alt="리스트1"
                /></i>
                <p>
                  {{ $t("productsText.viewPropertyTitle.contents1") }}
                </p>
              </li>
              <li>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                    alt="리스트2"
                /></i>
                <p>{{ $t("productsText.viewPropertyTitle.contents2") }}</p>
              </li>
              <li>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                    alt="리스트3"
                /></i>
                <p>
                  {{ $t("productsText.viewPropertyTitle.contents3") }}
                </p>
              </li>
              <li>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                    alt="리스트4"
                /></i>
                <p>
                  {{ $t("productsText.viewPropertyTitle.contents4") }}
                </p>
              </li>
            </ul>
            <span id="headingModuleBottom" />
          </span>
          <span class="featuresCont">
            <img
              src="~/assets/images/pages/products/imdsfg-en@2x.png"
              alt="features"
            />
          </span>
        </div>
      </div>
    </div>
    <!-- dsadsf -->
    <heading-module
      :category="$t(`productsText.arsdkText.funcTitle.category`)"
      :title="$t('productsText.viewText.funcTitle.title')"
    ></heading-module>
    <function-part
      :functionArr="$t('productsText.viewText.functionLists')"
      :iconImage="functionIconImage"
    ></function-part>
    <span id="functionPart" />

    <!-- <effect-part
      :bg="effectBG"
      :category="$t('productsText.viewText.effectHeading.category')"
      :title="$t('productsText.viewText.effectHeading.title')"
      :contents="$t('productsText.viewText.effectHeading.contents')"
      :effectArr="$t('productsText.viewText.effectList')"
      :greyBtn="$t('global.demoText')"
      :blueBtn="$t('global.ROIText')"
    ></effect-part> -->

    <!-- <section class="divide-section">
      <heading-module
        :align="supportTitle.align"
        :category="$t('productsText.supportTitle.category')"
        :title="$t('productsText.supportTitle.title')"
        :contents="$t('productsText.supportTitle.contents')"
      ></heading-module>

      <div class="divide-contents-section">
        <support-part
          :supportArr="$t('productsText.viewText.supportList')"
        ></support-part>
      </div>
    </section> -->

    <!-- <div class="example-wrap">
      <section class="divide-section">
        <div class="example-style">
          <heading-module
            :align="exampleAlign"
            :category="$t('productsText.exampleTitle.category')"
            :title="$t('productsText.exampleTitle.title')"
            :contents="$t('productsText.viewText.exampleContents')"
          ></heading-module>

          <div class="divide-contents-section example">
            <example-part
              :exampleArr="$t('productsText.viewText.exampleList')"
            ></example-part>
          </div>
          <new-module :bannerData="$t('productsText.viewText.exampleList')"
                      :title="`View가`"/>
        </div>
      </section>
    </div> -->
    <new-effect-part
      :title="title"
      :effectList="effectList.view"
      :moduleData="moduleData.view"
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
import NewBgSlide from "~/components/products/partials/NewBgSlideView.vue";
import NewEffectPart from "~/components/products/partials/NewEffectView.vue";
import { filedData, moduleData } from "~/components/products/newModuleData.js";
import { title, effectList } from "~/components/products/newEffectPartData.js";
import headingModule from "../../modules/Heading";

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
      viewIntro: {
        logo: "../images/pages/products/logo-products-bi-view",
        // img: '../images/pages/products/img-products-view',
        // intoBtn: `${window.urls['download']}/view`,
        btnText: this.$t("global.downloadIntoBtn"),
        videoLink:
          "https://player.vimeo.com/external/427962056.hd.mp4?s=4c405dbd984c474798385f7ccc95c1b38de0e7db&profile_id=174",
      },
      functionIconImage:
        "../images/pages/products/img-products-view-function-0",
      effectBG: "../images/pages/products/img-view-effect",
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
@import "~/assets/css/pages/overviewView.scss";
@import "~/assets/css/pages/FeaturesView.scss";
</style>
