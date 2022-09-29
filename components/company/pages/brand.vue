<template>
  <section class="brand">
    <div class="brandInner">
      <!-- 브랜드 개요 -->
      <span class="brandTitle">
        <h2>{{ $t("newCompany.BrandText.topTitleText") }}</h2>
        <p>{{ $t("newCompany.BrandText.topContents1") }}</p>
        <p>{{ $t("newCompany.BrandText.topContents2") }}</p>
      </span>
      <!-- 기업로고 (CI) -->
      <span class="brandCi">
        <dl>
          <dt>{{ $t("newCompany.BrandText.companylogo") }}</dt>
          <dd>
            {{ $t("newCompany.BrandText.logoContents") }}
          </dd>
        </dl>
        <ul>
          <li>
            <div>
              <img
                src="~/assets/images/pages/company/img-brand-02.png"
                alt=""
              />
            </div>
            <div>
              <p class="ciTit">{{ $t("newCompany.BrandText.twinTitle1") }}</p>
              <p class="ciCont">
                {{ $t("newCompany.BrandText.twinContents1") }}
              </p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="~/assets/images/pages/company/img-brand-01.png"
                alt=""
              />
            </div>
            <div>
              <p class="ciTit">{{ $t("newCompany.BrandText.twinTitle2") }}</p>
              <p class="ciCont">
                {{ $t("newCompany.BrandText.twinContents2") }}
              </p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="~/assets/images/pages/company/img-brand-03.png"
                alt=""
              />
            </div>
            <div>
              <p class="ciTit">{{ $t("newCompany.BrandText.twinTitle3") }}</p>
              <p class="ciCont">
                {{ $t("newCompany.BrandText.twinContents3") }}
              </p>
            </div>
          </li>
        </ul>
        <span class="fontStyle1">
          <p>{{ $t("newCompany.BrandText.basicText") }}</p>
          <span>
            <img
              src="~/assets/images/pages/company/logo-basic.png"
              alt="기본형"
            />
          </span>
        </span>
        <span class="fontStyle2">
          <span>
            <p>{{ $t("newCompany.BrandText.hangeulText") }}</p>
            <span>
              <img
                src="~/assets/images/pages/company/logo-kor-type.png"
                alt="한글조합형"
              />
            </span>
          </span>
          <span>
            <p>{{ $t("newCompany.BrandText.englishText") }}</p>
            <span>
              <img
                src="~/assets/images/pages/company/logo-eng-type.png"
                alt="영문조합형"
              />
            </span>
          </span>
        </span>
        <div class="branding-notice">
          <p>
            {{ $t("newCompany.BrandText.downText") }}
          </p>
          <a
            href="https://test-api.virnect.com:8080/static/VIRNECT_CI.zip"
            download
            >{{ $t("newCompany.BrandText.downTextButtonText") }}</a
          >
        </div>
      </span>
      <!-- 제품로고 (BI) -->
      <span class="brrandBi">
        <dl>
          <dt>{{ $t("newCompany.BrandText.logoText2") }}</dt>
          <dd>
            {{ $t("newCompany.BrandText.logoContents2") }}
            <div>
              <img
                src="~/assets/images/pages/company/logo-bi.png"
                alt="로고이미지"
              />
            </div>
          </dd>
        </dl>
      </span>
    </div>
  </section>
</template>

<script>
import headingModule from "../../modules/Heading";
export default {
  head: {
    title: "업무현장의 운영 및 관리를 위한 XR 솔루션 공급기업 - VIRNECT",
    htmlAttrs: {
      lang: "ko",
    },
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "버넥트는 스마트한 미래, 행복한 미래, 지속 가능한 저탄소 미래를 추구하는 확장현실(XR) 기술을 활용한 일상의 디지털 트랜스포메이션을 제시합니다. 국내 주요 대기업 및 공공기업에서 버넥트의 XR 솔루션을 이미 사용하고 있으며 혁신적인 솔루션으로 인정받아 기술 및 시장의 리더로서 인정받고 있습니다.",
      },
    ],
  },
  components: {
    headingModule,
  },
};
</script>
<style lang="scss" scoped>
//@import "~assets/css/pages/products.scss";
//@import "~assets/css/pages/company.scss";
@import "~assets/css/pages/brand.scss";
</style>
