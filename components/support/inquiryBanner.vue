<template>
  <!-- 헤더 -->
  <div class="contactBanner">
    <div class="ContactBannerInner">
      <p>SUPPORT</p>
      <h2>Contact Us</h2>
      <span>
        {{ $t("supportText.contactBannerText.contents1") }}
        <p>{{ $t("supportText.contactBannerText.contents2") }}</p>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// 헤더용 css
.contactBanner {
  width: 100%;
  height: 480px;
  margin-top: 80px;
  display: flex;
  background-image: url("https://velog.velcdn.com/images/kyj0206/post/8261f4b8-7f71-46b6-aad9-a9ed90b3b3e7/image.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  .ContactBannerInner {
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
      margin-bottom: 34px;
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

@media screen and(max-width: 500px) {
  .contactBanner .ContactBannerInner span p {
    display: inline;
  }
}
</style>