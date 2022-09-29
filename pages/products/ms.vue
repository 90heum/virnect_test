<template>
  <section class="products-section">
    <subMenuMs />
    <section class="XRDeviceBanner">
      <div class="XRDeviceBannerInner">
        <p>Products</p>
        <h2>XR Devices</h2>
        <span>
          다양한 XR 디바이스와 함께 놀라운 퍼포먼스를 경험하세요.
        </span>
      </div>
    </section>
    <section class="classDeviceVideo" id="hololensId">
      <div class="DeviceVideoWrap">
        <div class="videoTit">
          <i>
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/ca2e8983-303e-4f04-b4af-ca2a180f3a44/image.png"
              alt="타이틀로고"
            />
          </i>
          <h2>Hololens 2</h2>
          <p>홀로렌즈 전용 버넥트 XR 솔루션을 경험해보세요.</p>
        </div>
        <div class="videoCont">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/eqFqtAJMtYE?autoplay=1&mute=1"
            title="Introducing Microsoft HoloLens 2"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="videoButton">
          <button>
            <a href="https://www.microsoft.com/ko-kr/hololens" target="blank">
              제품 정보 바로가기
            </a>
          </button>
          <div id="productInfoId" />
        </div>
      </div>
    </section>

    <!-- 기능소개 -->
    <heading-module
      :title="$t('productsText.msText.introText.title')"
    ></heading-module>
    <benefit-part
      :benefitArr="$t('productsText.msText.benefitLists')"
    ></benefit-part>
    <span id="caseId" />
    <!-- 적용사례 -->
    <!-- <div class="example-wrap">
      <section class="divide-section">
        <div class="example-style">
          <heading-module
            :align="exampleAlign"
            :category="$t('solutionText.exampleTitle.category')"
            :title="$t('solutionText.exampleTitle.title')"
            :contents="$t('solutionText.exampleTitle.contents')"
          ></heading-module>

          <div class="divide-contents-section example">
            <example-part
              :exampleArr="$t('solutionText.energyText.exampleList')"
            ></example-part>
          </div>
        </div>
      </section>
    </div> -->
    <span id="realWearId" />
    <!-- 아이템 -->
    <section class="deviceItem">
      <div class="deviceItemWrap">
        <span>
          <a href="https://www.realwear.com/ko/hmt-1/">
            <p>Realwear</p>
            <h2>HMT - 1</h2>
            <i>
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/127af7ac-6fc1-4d40-a6e3-f5feb348bdbe/image.png"
                alt="hmt"
              />
            </i>
          </a>
        </span>
        <span>
          <a href="https://www.realwear.com/ko/navigator/">
            <p>Realwear</p>
            <h2>Navigator 500</h2>
            <i>
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/d82cc586-f962-453d-a771-5b62823b45bd/image.png"
                alt="500"
              />
            </i>
          </a>
        </span>
      </div>
    </section>

    <!-- 슬라이더 -->
    <new-bg-slide
      :bannerData="moduleData.motor"
      :title="`Twin이`"
    ></new-bg-slide>
    <!-- cta 모듈 -->
    <ctaModule />
  </section>
</template>

<script>
import subVisualSection from "../../layouts/common/SubVisual.vue";
import snbSection from "../../layouts/modules/Snb.vue";
import tailSection from "../../layouts/common/Tail.vue";
import msComponent from "../../components/products/pages/MS.vue";
import subMenuMs from "~/components/products/partials/subMenuMs.vue";
import CtaModule from "~/components/main/ctaModule.vue";
import headingModule from "~/components/modules/Heading.vue";
import examplePart from "~/components/products/partials/ExamplePart.vue";
import benefitPart from "~/components/products/partials/BenefitPart.vue";
import NewBgSlide from "~/components/products/partials/NewBgSlide.vue";
import { filedData, moduleData } from "~/components/products/NewBgPartData.js";
import ctaModule from "~/components/main/ctaModule.vue";

export default {
  head: {
    title: "VIRNECT XR Devices",
    htmlAttrs: {
      lang: "ko",
    },
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "다양한 XR 디바이스와 함께 놀라운 퍼포먼스를 경험하세요.",
      },
    ],
  },
  components: {
    subVisualSection,
    snbSection,
    tailSection,
    msComponent,
    subMenuMs,
    CtaModule,
    headingModule,
    examplePart,
    ctaModule,

    benefitPart,

    NewBgSlide,
  },
  data() {
    return {
      filedData,
      moduleData,
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
@import "~/assets/css/modules/XR_DeviceBanner.scss";
@import "~/assets/css/modules/XR_DeviceVideo.scss";
@import "~/assets/css/pages/products.scss";
@import "~/assets/css/modules/deviceItem.scss";
.deviceItem {
  margin-top: 80px;
}
</style>
