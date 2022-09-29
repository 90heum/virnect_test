<template>
  <!-- COMPANY -->
  <div class="NewsBanner">
    <div class="NewsBannerInner">
      <p>NEWS</p>
      <h2>News & Press</h2>
      <span>
        {{ $t("newsRoom.topText.text") }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'News & Press - VIRNECT',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'VIRNECT는 고객과 함께 산업 현장의 문제를 해결하고, 더 안전하고 효율적인 현장을 만들어 가고 있습니다.'
      }
    ],
  },
};
</script>

<style lang="scss" scoped>
.NewsBanner {
  width: 100%;
  height: 480px;
  margin-top: 80px;
  display: flex;
  background-image: url("https://velog.velcdn.com/images/kyj0206/post/65c0ebf9-9255-425d-80b8-5c8176713ef2/image.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  .NewsBannerInner {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0 24px;
    > p {
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
      line-height: 1.36;
      color: #fff;
      margin-bottom: 26px;
    }
    span {
      font-size: 18px;
      font-weight: 500;
      line-height: 1.61;
      letter-spacing: -0.23px;
      text-align: center;
      color: #f7f8f9;

      p {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.61;
        letter-spacing: -0.23px;
        text-align: center;
        color: #f7f8f9;
      }
    }
  }
}

@media screen and (max-width: 555px) {
  .NewsBanner .NewsBannerInner h2 {
    font-size: 26px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.54;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
  }
  .NewsBanner .NewsBannerInner span,
  .NewsBanner .NewsBannerInner span p {
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.64;
    letter-spacing: -0.18px;
    text-align: center;
    color: #f7f8f9;
  }
}

@media screen and (max-width: 445px) {
  .NewsBanner .NewsBannerInner span,
  .NewsBanner .NewsBannerInner span p {
    display: inline;
  }
}
</style>