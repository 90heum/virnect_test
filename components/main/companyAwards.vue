<template>
  <div class="company">
    <div class="companyWrap">
      <!-- 인증 및 수상 모듈 -->
      <span class="companyAwards">
        <!-- <div class="awardsWrap"> -->
        <div class="companyAwardsTitleWrapper">
          <p>{{$t(`companyText.companyAwards.title`)}}</p>
        </div>

        <div class="slide-wrap">
          <div class="carousel-wrapper">
            <div
              v-swiper:mySwiper="options"
              class="dark"
              @slideChangeTransitionStart="getActiveSlide()"
            >
              <div class="swiper-wrapper">
                <div
                  v-for="(list, idx) of award"
                  :key="idx"
                  class="img-wrapper swiper-slide"
                >
                  <span>
                    <img
                      :src="list.src"
                      :alt="list.alt"
                      class="CompanyBottomBannerAwardSlideImg"
                    />
                  </span>
                  <span>
                    <p>{{ list.title }}</p>
                    <p>{{ list.host }}</p>
                    <p>{{ list.info }}</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="pagination">
            <img src="~/assets/images/pages/right@2x.png" class="prev-btn" />
            <img src="~/assets/images/pages/left@2x.png" class="next-btn" />
          </div>
        </div>
      </span>
    </div>
  </div>
</template>
<script>
import { awardData } from "~/components/dummy/award.js";

export default {
  methods: {
    getActiveSlide() {
      this.exampleActiveIdx = this.$el
        .querySelector(".swiper-slide-active")
        .getAttribute("data-idx");
    },
  },
  data() {
    return {
      options: {
        slidesPerView: "6",
        loop: true,
        autoplay: {
          delay: 3500,
        },
        navigation: {
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        },
        breakpoints: {
          1024: {
            slidesPerView: "3",
            autoplay: {
              delay: 3500,
            },
          },
        },
      },

      award: awardData,
    };
  },
};
</script>
<style lang="scss" scoped>
.companyAwardsTitleWrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 70px 0 40px;
  p {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: -0.23px;
    color: #121212;
  }
}
// 인증 및 수상 모듈
.companyAwards {
  display: block;
  width: 100%;
  background-color: #f7f8fa;
  padding: 0 24px;
  .awardsWrap {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 42px;
    max-width: 1200px;
    box-sizing: unset;
    padding: 69px 30px 100px;
    div > .SliderList {
      font-size: 10px;
      span:nth-child(2) {
        height: 36px;
      }
    }
    div {
      &:first-child {
        p {
          font-size: 18px;
          font-weight: bold;
          letter-spacing: -0.23px;
          color: #121212;
        }
      }
      &:last-child {
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        .SliderList {
          width: calc(100% / 7 - 40px);
          span {
            position: relative;
            max-width: 160px;
            &:first-child {
              img {
                max-width: 160px;
                margin-bottom: 6px;
              }
              &::after {
                display: block;
                position: absolute;
                content: "";
                width: 100%;
                border-bottom: 1px solid #c5c8cf;
                left: 0;
                bottom: 0;
              }
            }
            &:last-child {
              width: 100%;
              display: block;
              text-align: center;
              font-size: 12px;
              margin: 14px 19px 0 15px;
              color: #9b9da3;
            }
          }
        }
      }
    }
  }
}
.company .companyWrap .companyAwards {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 100px;
  position: relative;
  > div:first-child {
    align-self: start;
    // padding-left: 2.5%;
  }
  .slide-wrap {
    width: 90%;
  }
  .carousel-wrapper .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.4s;
    img {
      width: 160px;
    }
    span {
      width: 160px;
      // 조성우수정
      margin-top: -12px;
    }
    p {
      text-align: center;
      font-size: 14px;
      line-height: 1.3;
    }
  }
  .prev-btn,
  .next-btn {
    position: absolute;
    width: 42px;
    transform: translateY(50px);
    cursor: pointer;
    top: 40%;
  }
  .prev-btn {
    left: 15px;
  }
  .next-btn {
    right: 15px;
  }
}
@media screen and(max-width: 550px){
  .carousel-wrapper .swiper-slide {
    width: 50% !important;
  }
}
@media screen and(max-width: 1024px) {
  .company
    .companyWrap
    .companyAwards
    .awardsWrap
    div:last-child
    .SliderList
    span:first-child
    img {
    width: 100%;
    max-width: 226px;
  }
  .company .companyWrap .companyAwards .awardsWrap div:last-child {
    gap: 25px;
  }

  .company .companyWrap .companyAwards .awardsWrap div:last-child .SliderList {
    width: calc(100% / 4 - 19px);
  }

  .company .companyWrap .companyBanner {
    height: 1326px;
    background-image: url(https://velog.velcdn.com/images/kyj0206/post/78d93c8e-931f-4655-82c3-2f174608c229/image.jpg);
    background-size: auto 100%;
  }
  .company .companyWrap .companyVirnect div {
    min-width: auto;
  }
}

@media screen and(max-width: 1970px) {
  .company .companyWrap .companyBanner .companyBannerInner {
    gap: 5%;
  }
}

@media screen and(max-width: 1630px) {
  .company .companyWrap .companyBanner .companyBannerInner {
    gap: 5%;
    left: 60%;
  }
}

@media screen and(max-width: 1450px) {
  .company .companyWrap .companyBanner .companyBannerInner {
    gap: 5%;
    left: 55%;
    top: 50%;
  }
}

@media screen and(max-width: 1370px) {
  .company .companyWrap .companyBanner .companyBannerInner {
    left: 53%;
  }
}

@media screen and(max-width: 1350px) {
  .company .companyWrap .companyBanner .companyBannerInner .companyBannerCont {
    gap: 70px;
  }

  .company .companyWrap .companyBanner {
    height: 1326px;
    background-image: url(https://velog.velcdn.com/images/kyj0206/post/78d93c8e-931f-4655-82c3-2f174608c229/image.jpg);
    background-size: 100% 100%;
  }
  .company .companyWrap .companyBanner .companyBannerInner {
    flex-direction: column;
  }

  .company .companyWrap .companyBanner .companyBannerInner {
    height: auto;
  }

  .company .companyWrap .companyBanner .companyBannerInner {
    align-items: flex-start;
    transform: translate(5%, 20%);
    gap: 142px;
  }

  .company .companyWrap .companyBanner .companyBannerInner .companyBannerTit {
    text-align: center;
    max-width: 768px;
    width: 100%;
    margin: 0 auto;
    padding-right: 70px;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerTit
    span:nth-child(3) {
    margin-bottom: 103px;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerTit
    span:nth-child(3)
    > p {
    display: inline;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerTit
    div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 65%;
    margin: 0 auto;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerTit
    div
    span:last-child {
    justify-content: flex-start;
  }

  .company .companyWrap .companyVirnect {
    position: static;
    transform: translateX(0);
  }

  .company .companyWrap .companyVirnect div > a > img {
    max-width: none;
    min-height: 176px;
    max-height: 176px;
    object-fit: cover;
  }

  .company .companyWrap .companyVirnect {
    flex-wrap: wrap;
  }

  .company .companyWrap .companyVirnect div {
    width: 50%;
  }
  .company .companyWrap .companyVirnect div.virnectModule1 {
    height: 176px;
  }
  .company .companyWrap .companyVirnect div.virnectModule2 {
    height: 176px;
  }
  .company .companyWrap .companyVirnect div.virnectModule3 {
    width: 100%;
    height: 80px;
  }

  .company .companyWrap .companyNews .companyNewsWrap {
    padding: 68px 30px 70px;
  }
}

@media screen and(max-width: 1024px) {
  .company
    .companyWrap
    .companyAwards
    .awardsWrap
    div:last-child
    .SliderList
    span:first-child
    img {
    width: 100%;
    max-width: 226px;
  }
  .company .companyWrap .companyAwards .awardsWrap div:last-child {
    gap: 25px;
  }

  .company .companyWrap .companyAwards .awardsWrap div:last-child .SliderList {
    width: calc(100% / 4 - 19px);
  }

  .company .companyWrap .companyBanner {
    height: 1326px;
    background-image: url(https://velog.velcdn.com/images/kyj0206/post/78d93c8e-931f-4655-82c3-2f174608c229/image.jpg);
    background-size: auto 100%;
  }
  .company .companyWrap .companyVirnect div {
    min-width: auto;
  }
}

@media screen and(max-width: 768px) {
  .company
    .companyWrap
    .companyAwards
    .awardsWrap
    div:last-child
    .SliderList
    span:first-child
    img {
    width: 100%;
    max-width: 226px;
  }
  .company .companyWrap .companyAwards .awardsWrap div:last-child {
    gap: 28px;
  }

  .company .companyWrap .companyAwards .awardsWrap div:last-child .SliderList {
    width: calc(100% / 3 - 19px);
  }

  .company .companyWrap .companyBanner .companyBannerInner {
    transform: translate(0%, 10%);
    gap: 122px;
    padding-left: 24px;
  }

  .company .companyWrap .companyBanner .companyBannerInner .companyBannerTit {
    min-width: auto;
    padding-right: 24px;
  }

  .company .companyWrap .companyBanner {
    height: 1274px;
    background-image: url(https://velog.velcdn.com/images/kyj0206/post/78d93c8e-931f-4655-82c3-2f174608c229/image.jpg);
    background-size: auto 100%;
  }

  .company .companyWrap .companyNews .companyNewsWrap > span:last-child ul {
    flex-wrap: wrap;
    gap: 19px;
    justify-content: space-between;
  }

  .company .companyWrap .companyNews .companyNewsWrap > span:last-child ul li {
    width: calc(95% / 2);
    max-width: none;
  }
}
.prevBtn,
.nextBtn {
  width: 42px;
  height: 42x;
  cursor: pointer;
  margin-left: 23px;
}
.company .companyWrap .companyAwards .prev-btn,
.company .companyWrap .companyAwards .next-btn {
  top: 70%;
}
.company .companyWrap .companyAwards .carousel-wrapper .swiper-slide span,
.company .companyWrap .companyAwards .carousel-wrapper .swiper-slide img {
  width: 100%;
  max-width: 200px;
}

.company .companyWrap .companyAwards .carousel-wrapper .swiper-slide img{
  max-width: 200px;
}
.swiper-wapper {
  gap: 10px;
}
.awardsSlider {
  display: flex;
  align-items: center;
}
@media screen and(max-width: 735px) {
  .company .companyWrap .companyBanner .companyBannerInner {
    gap: 99px;
  }

  .company .companyWrap .companyBanner .companyBannerInner .companyBannerCont {
    gap: 50px;
  }

  .company .companyWrap .companyBanner {
    height: 1090px;
    background-image: url(https://velog.velcdn.com/images/kyj0206/post/78d93c8e-931f-4655-82c3-2f174608c229/image.jpg);
    background-size: auto 100%;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerCont
    span
    img {
    min-width: 377px;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerTit
    div {
    margin: 0;
    width: 100%;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerTit
    > p {
    margin-bottom: 36px;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerTit
    h2 {
    margin-bottom: 26px;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerTit
    span:nth-child(3) {
    margin-bottom: 39px;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerTit
    div
    span:last-child
    p:last-child {
    text-align: left;
  }
  .company .companyWrap .companyBanner .companyBannerInner .companyBannerTit {
    padding-right: 24px;
  }

  .company .companyWrap .companyVirnect div.virnectModule1 a div,
  .company .companyWrap .companyVirnect div.virnectModule2 a div {
    padding: 0 24px;
  }
}

@media screen and(max-width: 455px) {
  .company .companyWrap .companyNews .companyNewsWrap > span:last-child ul li {
    width: calc(100% / 1);
    max-width: none;
  }

  .company .companyWrap .companyNews .companyNewsWrap > span:last-child ul {
    gap: 38px;
  }
}

@media screen and(max-width: 425px) {
  .company .companyWrap .companyAwards .awardsWrap div:last-child {
    gap: 38px;
  }

  .company .companyWrap .companyAwards .awardsWrap div:last-child .SliderList {
    width: calc(100% / 2 - 19px);
  }

  .company .companyWrap .companyBanner {
    height: 1090px;
    background-image: url(https://velog.velcdn.com/images/kyj0206/post/78d93c8e-931f-4655-82c3-2f174608c229/image.jpg);
    background-size: auto 100%;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerCont
    span
    img {
    min-width: 377px;
  }
}
.CompanyBottomBanner {
  width: 100%;
  overflow: hidden;
  top: 0px;
  /* background-color: #000; */

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

      .banner1024 {
        display: block;
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        a {
          display: block;

          img {
            width: 100%;
          }
        }
      }

      .banner768 {
        display: none;

        a {
          display: block;

          img {
            width: 100%;
          }
        }
      }
    }

    // 실제사용 모듈용 css 구역 여기까지!!!!!!!!!!!
  }
}
:root {
  --shadow: rgba(0, 0, 0, 0.8);
}
.CompanyBottomBannerSlide {
  margin-right: 15px;
  max-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1rem;
  img {
    width: 100%;
    max-width: 660px;
  }
}
.CompanyBottomBanner .CompanyBottomBannerSlider-container {
  display: inline-flex;
  overflow: hidden;
  scrollbar-width: none;
  transform: translateX(0);
  will-change: transform;
  transition: transform 0.3s ease-out;
  cursor: grab;
}

@media (min-width: 1200px) {
  .CompanyBottomBanner .slide {
    padding: 3rem;
  }
}

.CompanyBottomBanner .slide img {
  max-width: 100%;
  width: 80%;
  transition: transform 0.3s ease-in-out;
  box-shadow: 5px 5px 50px -1px var(--shadow);
  border-radius: 4px;
  user-select: none;
}

.CompanyBottomBanner .CompanyGrabbing {
  cursor: grabbing;
}

.CompanyBottomBanner .CompanyGrabbing .slide img {
  transform: scale(0.9);
  box-shadow: 5px 5px 40px -1px var(--shadow);
}

@media screen and(max-width:768px) {
  .CompanyBottomBanner .banner .bannerWrap .bannerMoule .banner1024 {
    display: none;
  }

  .CompanyBottomBanner .banner .bannerWrap .bannerMoule .banner768 {
    display: block;
  }

  .CompanyBottomBanner .banner .bannerWrap .bannerMoule {
    padding: 0 24px;
    transform: translate(-50%, 60%);
  }
}
</style>