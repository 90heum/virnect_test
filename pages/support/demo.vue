<template>
  <div>
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
      <!-- <a href="demo_success">HERE</a> -->
      <div class="demoContWrap">
        <span>
          <p>VIRNECT XR 솔루션 데모신청</p>
        </span>
        <span>
          <!-- // NOTE - 폼삽입 구역 -->
          <div class="demoForm">
            <iframe
              src="https://pardot.virnect.com/l/929783/2022-06-16/3nplr"
              width="100%"
              height="1600"
              type="text/html"
              frameborder="0"
              allowTransparency="true"
              style="border: 0"
            ></iframe>
          </div>
          <!-- // NOTE - 폼삽입 끝~~~~ -->
        </span>
        <div class="erroTIt">Please correct the errors below: 문구가 나오면 정보가 올바른지 확인해주세요.</div>
      </div>
    </section>
  </div>
</template>

<script>
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
    .demoContWrap {
      display: block;
      max-width: 1080px;
      margin: 0 auto;
      padding: 71px 40px 65px;
      box-shadow: 2px 2px 16px 0 rgba(0, 0, 0, 0.15);
      background-color: #fff;
      transform: translateY(-5%);
      span {
        &:first-child {
          display: block;
          padding-bottom: 65px;
          margin-bottom: 40px;
          border-bottom: solid 1px #616161;
          p {
            font-size: 26px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.58;
            letter-spacing: normal;
            text-align: center;
            color: #121212;
          }
        }
        &:last-child {
          div {
            &.demoForm {
              height: 1600px;
            }
          }
          span {
            display: flex;
            justify-content: center;
            padding-top: 74px;
            padding-bottom: 82px;
            button {
              display: block;
              max-width: 188px;
              max-height: 60px;
              width: 100%;
              height: 100%;
              border: solid 1px #0a51b7;
              background-color: #0a51b7;
              a {
                max-width: 188px;
                max-height: 60px;
                display: block;
                font-size: 18px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                letter-spacing: normal;
                text-align: center;
                color: #fff;
                padding: 19px 20px;
              }
            }
          }
        }
      }
    }
  }
}

.erroTIt{
  margin-top: 30px;
  font-size: 14px;
  color: #181818;
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
</style>