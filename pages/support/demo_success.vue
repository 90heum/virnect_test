<template>
  <div>

    // TODO 이미지: 750px, 센터정렬, 폰트 사이즈: 18px
    <!-- 데모하긔배널~ -->
    <section class="demoBanner">
      <div class="demoBannerWrap">
        <p>데모신청</p>
        <h2>현장의 XR/DT 혁신, 지금 바로 시작하세요</h2>
        <span> 준비가 된 기술 컨설턴트가 직접 도움을 드립니다. </span>
      </div>
    </section>
    <!-- 데모하긔가 들어가 있는 콘텐츠~ -->
    <section class="demoCont">
      <div class="demoSuccess">
        <span class="demoSucIcon">
          <i>
            <img class="normalDemo" src="~/assets/images/pages/support/Succes@2x.png" alt="성공메세지아이콘">
            <img class="mbDemo" src="~/assets/images/pages/support/demoSucMb@2x.png" alt="성공메세지모바일아이콘">
          </i>
        </span>
        <span class="demoSucTit">
          귀하의 메세지에 감사드립니다.
          <p>정상적으로 제출되었습니다. 감사합니다.</p>
        </span>
      </div>
    </section>
    <!-- <cta-module /> -->
  </div>
</template>

<script>
// import CtaModule from "~/components/main/ctaModule.vue";

export default {
  head: {
    title: '산업용 XR 전문 솔루션을 무료로 체험하세요 - VIRNECT',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '산업현장의 XR/DT 혁신, 지금 바로 경험해 보세요.'
      }
    ],
    // components: {
    //   CtaModule
    // },
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 0 24px;
  // 데모 배너
  &.demoBanner {
    width: 100%;
    background-image: url("https://velog.velcdn.com/images/kyj0206/post/06e6d381-3ae1-4433-9e3f-627ded4c9177/image.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 160px;
    height: 480px;
    .demoBannerWrap {
      max-width: 1200px;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      margin: 0 auto;
      p {
        font-size: 20px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.3;
        letter-spacing: -0.25px;
        text-align: center;
        color: #bfdcff;
        margin-bottom: 46px;
      }
      h2 {
        font-size: 44px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.36;
        letter-spacing: normal;
        text-align: center;
        color: #fff;
        margin-bottom: 10px;
      }
      span {
        font-size: 18px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.61;
        letter-spacing: -0.23px;
        text-align: center;
        color: #f7f8f9;
      }
    }
  }
  // 데모 폼~
  &.demoCont {
    display: block;
    margin-bottom: 80px;
    width: 100%;
    padding: 0 24px;
  .demoSuccess{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
    .demoSucIcon{
      width: 100%;
      display: block;
      margin-top: 200px;
      margin-bottom: 50px;
      i{
        display: block;
        img{
          max-width: 1200px;
          width: 100%;
          &.normalDemo{
            display: block;
          }
          &.mbDemo{
            display: none;
          }
        }
      }
    }
    .demoSucTit{
      margin: 0 auto;
      text-align: center;
      margin-bottom: 220px;
      font-size: 26px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #121212;
      p{
        margin-top: 30px;
        font-size: 26px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #121212;
      }
    }
  }

  }
}

@media screen and(max-width: 780px) {
  section.demoBanner .demoBannerWrap p {
    font-size: 14px;
  }
  section.demoBanner .demoBannerWrap h2 {
    font-size: 24px;
    margin-bottom: 16px;
  }
  section.demoBanner .demoBannerWrap span {
    font-size: 14px;
  }
}

@media screen and(max-width: 425px) {

  section.demoCont .demoSuccess .demoSucIcon[data-v-1c778123]{
    margin-top: 80px;
  }
  section.demoCont .demoSuccess .demoSucTit{
    margin: 40px 0 80px;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #121212;
    p{
    margin-top: 10px;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #121212;
    }
  }

  section.demoCont .demoSuccess .demoSucIcon i img{
    &.normalDemo{
      display: none;
    }
    &.mbDemo{
      display: block;
    }
  }
}
</style>