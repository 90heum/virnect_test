<template>
  <section class="talent">
    <subVisualSection
      class="sm"
      :image="require('~/assets/images/pages/epc/company_bg_img.jpg')"
      :category="'Company'"
      :title="$t('companyText.talentText.title')"
      :contents="$t('companyText.talentText.contents')"
    ></subVisualSection>

    <subMenuBrand />
    <div class="talentWrap">
      <span class="talentTit">
        <p>
          버넥트는 글로벌 No.1 XR 플랫폼 기업이 되기 위해 모두가 같은 목표를
          향해 달리고 있습니다. 버넥트의 현재와 미래를 함께 만들어갈 여러분을
          기다립니다.
        </p>
      </span>
      <span class="talentCont">
        <button>
          <a
            href="https://virnect.notion.site/70deb7e4870c45b29bb3fccf9103af57"
            target="blank"
          >
            채용정보 자세히 보기
          </a>
        </button>
      </span>
    </div>
    <ctaModule />
  </section>
</template>

<script>
import Recruit from "~/components/company/pages/Recruit.vue";
import subMenuBrand from "../../components/company/partials/subMenuBrand.vue";
import subVisualSection from "~/layouts/common/SubVisual.vue";
import ctaModule from "~/components/main/ctaModule.vue";

export default {
  head: {
    title: "인재 채용 - VIRNECT",
    htmlAttrs: {
      lang: "ko",
    },
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "버넥트는 글로벌 No.1 XR 플랫폼 기업이 되기 위해 모두가 같은 목표를 향해 달리고 있습니다. 버넥트의 현재와 미래를 함께 만들어갈 여러분을 기다립니다.",
      },
    ],
  },
  components: {
    Recruit,
    subMenuBrand,
    subVisualSection,
    ctaModule,
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/css/pages/products.scss";
.talent {
  width: 100%;
}
.talent .talentWrap {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 30px 80px;
}
.talent .talentWrap .talentTit {
  p {
    color: #121212;
  }
  display: block;
  font-size: 26px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: normal;
  text-align: center;
  color: #121212;
  padding-bottom: 80px;
  border-bottom: solid 1px #979797;
}
.talent .talentWrap .talentCont {
  display: block;
  margin-top: 80px;
}
.talent .talentWrap .talentCont button {
  width: 282px;
  height: 84.6px;
  padding: 26px 45px;
  border: solid 1px #0a51b7;
  background-color: #0a51b7;
}
.talent .talentWrap .talentCont button a {
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
}
</style>