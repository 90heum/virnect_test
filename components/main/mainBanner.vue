<template>
  <div class="mainBanner">
    <div class="mainBannerInner">
      <span class="mainBannerTit">
        <p class="bannerTitN1">{{ $t(`mainTit.title1`) }}</p>
        <h1 class="bannerTitN2">
          {{ $t(`mainTit.title2`) }}
        </h1>
        <p class="bannerTitN3">
          {{ $t(`mainTit.title3`) }}
        </p>
        <span class="bannerButton">
          <button>
            <nuxt-link to="/products/productsMain">{{
                $t(`bannerTit.text1`)
            }}</nuxt-link>
          </button>
          <button>
            <nuxt-link to="/support/demo" target="_blank">{{
                $t(`bannerTit.text2`)
            }}</nuxt-link>
          </button>
        </span>
        <span class="bannerTitN4">
          <p>{{ $t(`bannerTit.text3`) }}</p>
          <span>
            <i>
              <img :src="`https://velog.velcdn.com/images/kyj0206/post/8430c7fd-128e-491d-9ff0-45b2ca725f5d/image.png`"
                alt="문의하기 이미지" />
            </i>
            <p>
              {{ $t(`bannerTit.text4`)
              }}<a href="support/inquiry"><u>{{ $t(`bannerTit.text5`) }}</u></a>
            </p>
          </span>
        </span>
      </span>
      <span class="mainBannerCont">
        <!-- <img
          :src="`https://velog.velcdn.com/images/kyj0206/post/6d62537d-6161-42ab-ac36-244f978d597b/image.png`"
          alt="메인베너이미지"
        /> -->
        <!-- 조성우추가 -->
        <img src="~/assets/images/common/main_th.gif" alt="메인베너이미지" />
        <!-- <img src="~/assets/images/common/logo-gnb-ci.png" alt="메인베너이미지" />  -->
      </span>
      <span class="mainBannerTitMb">
        <p class="bannerTitMb">
          {{ $t("mainTit.title3") }}
        </p>
        <span class="bannerButtonMb">
          <button>
            <nuxt-link to="/products/productsMain" target="_blank">{{
                $t("bannerTit.text1")
            }}</nuxt-link>
          </button>
          <button>
            <a href="/support/demo" target="_blank">{{
                $t("bannerTit.text2")
            }}</a>
          </button>
        </span>
        <span class="bannerTitMb2">
          <p>{{ $t("bannerTit.text3") }}</p>
          <span>
            <i>
              <img src="https://velog.velcdn.com/images/kyj0206/post/8430c7fd-128e-491d-9ff0-45b2ca725f5d/image.png"
                alt="문의하기 이미지" />
            </i>
            <p>
              {{ $t("bannerTit.text4")
              }}<a href="support/inquiry"><u>{{ $t("bannerTit.text5") }}</u></a>
            </p>
          </span>
        </span>
      </span>
    </div>
    <!-- 배너삽입 -->



  </div>
</template>

<script>
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
  updated() {
    if (process.client) {
      // 버튼 위치 지정 자바스크립트
      // const buttonTarget = document.querySelectorAll(
      //   ".banner .agile__dot button"
      // );
      // const parentButtonTarget = document.querySelector(".agile__dots");
      // parentButtonTarget.style.position = "absolute";
      // parentButtonTarget.style.top = "-2px";
      // parentButtonTarget.style.right = "25%";
      // buttonTarget.forEach((e, idx) => {
      //   e.style.width = "13px";
      //   e.style.height = "13px";
      //   e.style.margin = "0 5px";
      //   // e.style.border = "0px";
      //   e.style.borderRadius = "50%";
      //   e.style.border = "none";
      //   e.style.backgroundColor = "#ffffff75";
      // });
    }
  },
  created() {
    if (process.client) {
    }
  },
  methods: {
    getActiveSlide() {
      this.exampleActiveIdx = this.$el
        .querySelector(".swiper-slide-active")
    },
  },
  data() {
    return {
      options: {
        loop: true,
        autoplay: {
          delay: 3500,
        }
      },
    };
  },
};
</script>
<style lang="scss" scoped>
// 메인배너
.mainBanner {
  position: relative;
  box-sizing: border-box;

  width: 100%;
  max-height: 1003px;
  height: 100%;
  padding: 150px 30px;
  background-image: url("https://velog.velcdn.com/images/kyj0206/post/1e0517a7-d564-465f-b8e2-458f7d4fcfac/image.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to left, rgba(18, 18, 18, 0.47) 0%, #000);
    // z-index: 9999;
    opacity: 0.6;
  }

  .mainBannerInner {
    position: relative;
    z-index: 1;
    margin: 0 auto;
    gap: 64px;
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    max-width: 2400px;

    .mainBannerTit {
      margin-left: 130px;

      .bannerTitN1 {
        display: block;
        margin-bottom: 24px;
        font-size: 26px;
        letter-spacing: -0.33px;
        color: #c5c8cf;
      }

      .bannerTitN2 {
        display: block;
        font-size: 50px;
        letter-spacing: -0.63px;
        color: #fff;
        margin-bottom: 100px;
        line-height: 1.44;

        span {
          p {
            a {
              margin-left: 12px;
              display: inline;
              font-size: 16px;
              letter-spacing: -0.2px;
              height: 24px;
              color: #fff;
              white-space: nowrap;
              line-height: 25px;
            }

            font-size: 16px;
            letter-spacing: -0.2px;

            &:first-child {
              display: inline;
              font-weight: 300;
            }
          }
        }
      }

      .bannerTitN3 {
        display: block;
        margin-bottom: 18px;
        font-size: 18px;
        letter-spacing: -0.23px;
        color: #fff;
      }

      .bannerButton {
        display: block;
        margin-bottom: 48px;
        display: flex;
        gap: 10px;

        button {
          // 조성우추가
          padding: 15px 35px 13px;
          cursor: pointer;
          transition: all 0.4s;

          a {
            width: 100%;
            height: 100%;
            display: block;
            color: #fff;
            font-weight: bold;
            font-size: 16px;
            text-decoration: none;
          }

          &:first-child {
            border: solid 1px #979797;
            background-color: #121212;
          }

          &:last-child {
            border: solid 1px #0a51b7;
            background-color: #0a51b7;
          }
        }

        // 조성우추가
        button:hover {
          // 조성우추가
          padding: 15px 35px 13px;
          cursor: pointer;
          transition: all 0.4s;

          a {
            width: 100%;
            height: 100%;
            display: block;
            color: rgb(0, 0, 0);
            font-weight: bold;
            font-size: 16px;
            text-decoration: none;
          }

          &:first-child {
            border: solid 1px #fff;
            background-color: #fff;
          }

          &:last-child {
            border: solid 1px #78bbfd;
            background-color: #78bbfd;
          }
        }
      }

      .bannerTitN4 {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 16px;

        >p {
          display: inline;
          height: 100%;
          font-size: 16px;
          letter-spacing: -0.2px;
          color: #bfdcff;
          height: 24px;
          line-height: 25px;
          white-space: nowrap;
        }

        span {
          display: flex;
          align-items: center;
          gap: 8px;

          i {
            img {
              max-width: 22px;
              display: inline;
              // 조성우추가
              margin-top: 9px;
            }
          }

          >p {
            display: inline;
            font-size: 16px;
            letter-spacing: -0.2px;
            height: 24px;
            color: #fff;
            white-space: nowrap;
            line-height: 25px;

            a {
              margin-left: 12px;
            }

            font-size: 16px;
            letter-spacing: -0.2px;

            u {
              color: #fff;
            }
          }
        }
      }
    }

    .mainBannerCont {
      display: block;

      img {
        max-width: 700px;
        min-width: 560px;
        width: 100%;
      }
    }

    .mainBannerTitMb {
      display: none;
      text-align: center;

      .bannerTitMb {
        display: block;
        margin-top: 30px;
        margin-bottom: 18px;
        font-size: 18px;
        letter-spacing: -0.23px;
        color: #fff;
      }

      .bannerButtonMb {
        display: block;
        margin-bottom: 48px;
        display: flex;
        gap: 10px;
        justify-content: center;

        button {
          padding: 9px 16px 7px;

          a {
            width: 100%;
            height: 100%;
            display: block;
            color: #fff;
            font-weight: bold;
            font-size: 18px;
          }

          &:first-child {
            border: solid 1px #979797;
            background-color: #121212;
          }

          &:last-child {
            border: solid 1px #0a51b7;
            background-color: #0a51b7;
          }
        }
      }

      .bannerTitMb2 {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 16px;

        >p {
          display: inline;
          height: 100%;
          font-size: 16px;
          letter-spacing: -0.2px;
          color: #bfdcff;
          height: 24px;
          line-height: 25px;
          white-space: nowrap;

          >a {
            color: #fff;
            font-size: 16px;
          }
        }

        span {
          display: flex;
          align-items: center;
          gap: 8px;

          i {
            img {
              max-width: 22px;
              display: inline;
            }
          }

          >p {
            display: inline;
            font-size: 16px;
            letter-spacing: -0.2px;
            height: 24px;
            color: #fff;
            white-space: nowrap;
            line-height: 25px;

            a {
              margin-left: 12px;
            }

            font-size: 16px;
            letter-spacing: -0.2px;
            color: #fff;
          }
        }
      }
    }
  }
}

.banner {
  width: 100%;
  z-index: 1;
  position: absolute;
  left: 0px;
  top: 90%;
  overflow: hidden;

  /* background-color: #000; */
  .Whats-New {
    width: 90px;
    height: 39px;
    margin-left: 600px;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.2px;
    color: #fff;
  }

  .bannerWrap {
    position: relative;

    // 실제사용 모듈용 css 구역!!!!!!!!!!!!!!
    .bannerMoule {
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 35%);
      padding: 0 30px;
    }
  }
}

.banner>.agile--ssr .agile__actions ul li button {
  width: 10px;
  height: 10px;
  margin: 0 8px;
  border-radius: 7px;
  background-color: #f7f8f9;
}

:root {
  --shadow: rgba(0, 0, 0, 0.8);
}

.slider-container {
  display: inline-flex;
  overflow: hidden;
  scrollbar-width: none;
  transform: translateX(0);
  will-change: transform;
  transition: transform 0.3s ease-out;
  cursor: grab;
}

.slide {
  max-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  img {
    max-height: 306px;
    width: 1200px;
  }
}

@media (min-width: 1200px) {
  .Whats-New {
    margin-left: 2%;
  }
}

.slide img {
  max-width: 100%;
  transition: transform 0.3s ease-in-out;
  box-shadow: 5px 5px 50px -1px var(--shadow);
  border-radius: 4px;
  user-select: none;
}

.grabbing {
  cursor: grabbing;
}

.grabbing .slide img {
  transform: scale(0.9);
  box-shadow: 5px 5px 40px -1px var(--shadow);
}

@media screen and (min-width: 1104px) and (max-width: 1115px) {
  .banner {
    top: 85%;
  }
}

@media screen and (max-width: 1103px) {
  .banner {
    top: 93%;
  }
}

@media screen and (max-width: 1076px) {
  .banner {
    top: 90%;
  }
}

@media screen and (max-width: 1024px) {
  .slide img {
    width: 964px;
    height: 246px;
  }

  .banner {
    .Whats-New {
      margin-left: 30px;
    }
  }

  /*  .banner {  top: 147%; } */
}

@media screen and(max-width:768px) {

  /* .banner {  top: 133%; } */
  .banner .bannerWrap .bannerMoule .banner1024 {
    display: none;
  }

  .banner .bannerWrap .bannerMoule .banner768 {
    display: block;
  }

  .banner .bannerWrap .bannerMoule {
    padding: 0 24px;
    transform: translate(-50%, 60%);
  }
}

/* @media screen and (max-width: 745px) {
    .banner {  top: 129%; }
}
@media screen and (max-width: 665px) {
    .banner {  top: 126%; }
}
@media screen and (max-width: 617px) {
    .banner {  top: 120%; }
}
@media screen and (max-width: 550px) {
    .banner {  top: 112%; }
} */

@media screen and(max-width: 1260px) {
  .mainBanner {
    padding: 126px 30px 129px;
  }

  .mainBanner .mainBannerInner .mainBannerTit {
    margin-left: 0;
  }

  .mainBanner .mainBannerInner .mainBannerTit .bannerTitN2 p {
    display: inline;
  }
}

@media screen and(max-width: 1024px) {
  .mainBanner .mainBannerInner .mainBannerTit {
    text-align: center;
  }

  .mainBanner .mainBannerInner .mainBannerCont img {
    padding-left: 10%;
    padding-right: 10%;
  }

  .mainBanner {
    padding: 150px 30px 219px;
    max-height: none;
  }

  .mainBanner .mainBannerInner {
    gap: 0;
  }

  .mainBanner .mainBannerInner .mainBannerTit .bannerTitN2 {
    margin-bottom: 0;
  }

  .mainBanner .mainBannerInner {
    flex-direction: column;
  }

  .mainBanner .mainBannerInner .mainBannerTit .bannerTitN2 p {
    display: block;
  }

  .mainBanner .mainBannerInner .mainBannerTit .bannerButton,
  .mainBanner .mainBannerInner .mainBannerTit .bannerTitN3,
  .mainBanner .mainBannerInner .mainBannerTit .bannerTitN4 {
    display: none;
  }

  .mainBanner .mainBannerInner .mainBannerTitMb {
    display: block;
  }

  .bannerTitMb2 span>p>a {
    font-size: 16px;
    color: #fff;
  }
}

@media screen and(max-width: 802px) {
  .mainBanner .mainBannerInner .mainBannerTit .bannerTitN2 p {
    display: inline;
  }
}

@media screen and(max-width: 768px) {
  .mainBanner {
    padding: 128px 34px 100px;
    max-height: none;
  }

  .slide img {
    width: 720px;
    height: auto;
  }

  .mainBanner .mainBannerInner {
    padding-top: 100px;
  }

  .mainBanner .mainBannerInner .mainBannerCont img {
    min-width: auto;
    padding-left: 10%;
    padding-right: 10%;
  }
}

@media screen and(max-width: 767px) {
  .mainBanner {
    padding: 104px 24px 200px;
    max-height: none;
  }

  .mainBanner .mainBannerInner .mainBannerTit .bannerTitN2 {
    font-size: 34px;
  }

  .mainBanner .mainBannerInner .mainBannerTit .bannerTitN1 {
    font-size: 22px;
  }

  .mainBanner .mainBannerInner .mainBannerTitMb .bannerTitMb {
    font-size: 16px;
  }

  .mainBanner .mainBannerInner .mainBannerTitMb .bannerTitMb2 {
    justify-content: center;
  }
}

@media screen and(max-width: 425px) {
  .slide img {
    width: 377px;
    height: 96px;
  }

  .mainBanner .mainBannerInner .mainBannerTit .bannerTitN1 {
    font-size: 22px;
  }

  .mainBanner .mainBannerInner .mainBannerTitMb .bannerTitMb {
    font-size: 16px;
  }

  .mainBanner .mainBannerInner .mainBannerTitMb .bannerTitMb2 {
    justify-content: center;
  }
}

// 임시
.banner {
  width: 100%;
  background-color: #000;
  z-index: 10000;
}

.banner .bannerWrap {
  position: relative;
  width: 100%;
  height: 300px;
  padding: 50px 30px;
}

.bannerMoule {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 76%);
  padding: 0 30px;
  z-index: 999;
}

.bannerMoule .banner1024 {
  display: block;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  // 조성우 수정
  // box-shadow: 6px 6px 13px #00000040;
}

.bannerMoule .banner1024 a {
  display: block;
}

.bannerMoule .banner1024 a img {
  width: 100%;
  box-shadow: 4px 4px 8px #00000030;
  transition: all 0.4s;
}

.bannerMoule .banner1024 a img:hover {
  width: 100%;
  box-shadow: 12px 12px 20px #00000045;
}

.bannerMoule .banner768 {
  display: none;
}

.bannerMoule .banner768 a {
  display: block;
}

.bannerMoule .banner768 a img {
  width: 100%;
  box-shadow: 6px 6px 13px #00000040;
}

@media screen and (max-width: 768px) {
  .bannerMoule .banner1024 {
    display: none;
  }

  .bannerMoule .banner768 {
    display: block;
    // box-shadow: 6px 6px 13px #00000040;
  }

  .bannerMoule {
    padding: 0 24px;
    transform: translate(-50%, 60%);
  }
}
</style>
