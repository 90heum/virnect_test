<template>
  <client-only>
    <div class="moduleApply">
      <div class="moduleApplyBgTop">
        <div class="ApplyInner">
          <div class="ApplySlider">
            <client-only>
              <div class="carousel-wrapper">
                <div
                  v-swiper:mySwiper="options"
                  @readey="onSwiperRedied"
                  @click-slide="onSwiperClickSlide"
                  @slide-change-transition="onSwiperSlideChangeTransitionStart"
                >
                  <div class="swiper-wrapper">
                    <div class="img-warpper swiper-slide">
                      <i
                        ><img
                          src="~/assets/images/slideLogo/hyundaiSteel.png"
                          alt="현대스틸"
                      /></i>
                      <p class="contents">
                        버넥트 솔루션은 저희 회사 Smart Factory 플랫폼 발전에
                        상당한 기여를 하였습니다.
                      </p>
                      <p class="category">- 현대제철 -</p>
                    </div>
                    <div class="img-warpper swiper-slide">
                      <i
                        ><img
                          src="~/assets/images/slideLogo/koreaR&D.png"
                          alt="한국원자력연구원"
                      /></i>
                      <p class="contents">
                        버넥트 솔루션은 높은 신뢰성을 요구하는 분야에도 체계적인
                        정보관리와 최적의 안전관리 플랫폼을 제시합니다.
                      </p>
                      <p class="category">
                        - 한국원자력연구원, 폐기물총관리실 연구원 -
                      </p>
                    </div>
                    <div class="img-warpper swiper-slide">
                      <i
                        ><img
                          src="~/assets/images/slideLogo/koreaUnvercityLogo.png"
                          alt="한국원자력연구원"
                      /></i>
                      <p class="contents">
                        버넥트 솔루션을 통해 환자의 안전이 중요한 수술 과정에서
                        의료진의 집중도를 높이고 수술의 정확성을 향상할 수 있게
                        되었습니다.
                      </p>
                      <p class="category">- 고려대학교, 성형외과 -</p>
                    </div>
                    <div class="img-warpper swiper-slide">
                      <i
                        ><img
                          src="~/assets/images/slideLogo/endElectrick.png"
                          alt="이엔디일렉트릭(주)"
                      /></i>
                      <p class="contents">
                        버넥트 솔루션은 저희 회사에게 Smart Factory에 대한
                        미래를 꿈꾸게 하였습니다.
                      </p>
                      <p class="category">- 이앤디일렉트릭(주) -</p>
                    </div>
                    <div class="img-warpper swiper-slide">
                      <i
                        ><img
                          src="~/assets/images/slideLogo/SkC&CLogo.png"
                          alt="sk"
                      /></i>
                      <p class="contents">
                        현장 설비유지보수 업무에 AR솔루션 활용하니 업무
                        이해도<br />
                        빠르고, 작업효율성도 좋아져서 업무가 쉬워 졌습니다.
                      </p>
                      <p class="category">- SK CnC -</p>
                    </div>
                    <div class="img-warpper swiper-slide">
                      <i
                        ><img
                          src="~/assets/images/slideLogo/Seollogo.png"
                          alt="seo"
                      /></i>
                      <p class="contents">
                        글로벌 AR 기업과 비교해도 손색없는 토종 AR 전문기업,
                        버넥트의 core 솔루션은 확실한 차별점을 가지고 있습니다.
                        산업생산성 향상에 필수적인 파트너가 될 것입니다.
                      </p>
                      <p class="category">- 서일이엔엠 -</p>
                    </div>
                  </div>
                  <div class="swiper-pagination swiper-pagination-bullets">
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                  </div>
                </div>
              </div>
            </client-only>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  methods: {
    onSwiperSlideChangeTransitionStart(e) {
      console.log("redied", e);
    },
    onSwiperRedied(swiper) {
      console.log("transtion", swiper);
    },
    onSwiperClickSlide(idx, realIdx) {
      console.log("click", idx, realIdx);
    },
  },
  updated() {
    console.log(this.bannerData);
  },
  data() {
    return {
      options: {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 13,
        centeredSlides: true,
        pagination: {
          // el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {},
      },
    };
  },
  props: {
    bannerData: Array,
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.moduleApply {
  max-width: 100%;
  .moduleApplyBgTop {
    background-color: #fff;
    height: 560px;
    // padding: 100px 24px 0;
    //margin-top: 20px;
    .moduleApplyTit {
      display: flex;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
      padding-top: 53px;
      border-top: solid 2px #0a51b7;
      span {
        &:first-child {
          > p {
            font-size: 18px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.23px;
            color: #0a51b7;
            margin-bottom: 17px;
          }
          h2 {
            font-size: 34px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
            letter-spacing: -0.43px;
            color: #121212;
            p {
              font-size: 34px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.54;
              letter-spacing: -0.43px;
              color: #121212;
            }
          }
        }
        &:last-child {
          display: flex;
          align-items: flex-end;
          font-size: 18px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.61;
          letter-spacing: normal;
          text-align: right;
          color: #121212;
          padding-bottom: 2px;
          p {
            font-size: 18px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.61;
            letter-spacing: normal;
            text-align: right;
            color: #121212;
          }
        }
      }
    }
  }
  .moduleApplyBgBottom {
    background-color: #0a51b7;
    height: 246px;
  }
  .ApplyInner {
    .swiper-container {
      height: 560px;
    }
    .swiper-button-prev,
    .swiper-button-next {
      bottom: 100px;
      top: -250px;
      width: 42px;
      height: 42px;
    }
    .swiper-button-prev {
      background-image: url(https://velog.velcdn.com/images/kyj0206/post/da614e72-c0b7-4100-b9ec-e347da4ef52f/image.png);
      background-size: 100%;
      left: 24px;
    }
    .swiper-button-next {
      background-image: url(https://velog.velcdn.com/images/kyj0206/post/7e1793ec-273a-4cb7-9c7f-6312de2f0e1d/image.png);
      background-size: 100%;

      right: 24px;
    }
  }
  .ApplyInner .ApplySlider {
    .contents {
      font-size: 28px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.55;
      letter-spacing: -0.35px;
      text-align: center;
      color: #000;
      max-width: 1000px;
      margin-bottom: 43px;
    }
    .swiper-slide {
      min-width: 100%;
      max-width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      background-image: url(https://velog.velcdn.com/images/kyj0206/post/0a222264-b3d0-4459-9d40-6c1ffad70ab2/image.png);
      background-size: cover;
      border-bottom: solid 1px #9a9da3;
    }
    .swiper-slide img {
      // width: 208px;
      max-width: 150px;
      width: 100%;
      //  filter: invert(100%);
    }
    .swiper-slide i {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      margin-bottom: 56px;
    }
    .swiper-slide p {
      line-height: 1.5;
    }
    .swiper-slide p:last-child {
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: -0.2px;
      text-align: center;
      color: #0a51b7;
    }
  }
}

@media screen and(max-width:1350px) {
  .moduleApply .moduleApplyBgTop .ApplyInner .ApplySlider .ApplySliderInner {
    display: flex;
    margin: 0 auto;
    width: auto;
  }

  .moduleApply .moduleApplyBgTop {
    height: 560px;
  }
}
@media screen and (max-width: 1090px) {
  .moduleApply .ApplyInner .ApplySlider {
    .contents {
      font-size: 20px;
      max-width: 372px;
    }
  }
}
@media screen and(max-width : 1024px) {
  .moduleApply .ApplyInner .ApplySlider {
    .swiper-slide i {
      display: flex;
      width: 100%;
      // margin: 40px 526px 30px;
      justify-content: center;
      align-items: center;
    }
    // .swiper-slide p { line-height: 2; }
    .swiper-slide p:last-child {
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: -0.2px;
      text-align: center;
      color: #0a51b7;
      margin-bottom: 25px;
    }
  }
  .moduleApply .moduleApplyBgTop .ApplyInner {
    // margin-top: 100px;
    .swiper-button-prev,
    .swiper-button-next {
      bottom: 100px;
      top: -100px;
    }
  }
}

@media screen and(max-width : 950px) {
  .moduleApply .moduleApplyBgTop .moduleApplyTit {
    margin-bottom: 20px;
  }

  .moduleApply
    .moduleApplyBgTop
    .ApplyInner
    .ApplySlider
    .ApplySliderInner
    > span {
    width: 100%;
    margin-right: 0;
  }

  .moduleApply .moduleApplyBgTop .moduleApplyTit span:last-child {
    flex-direction: column;
    justify-content: flex-end;
  }
}
@media screen and (max-width: 749px) {
  .moduleApply .ApplyInner .ApplySlider {
    .swiper-slide i {
      display: flex;
      width: 100%;
      margin: 20px 526px 15px;
      justify-content: center;
      align-items: center;
    }
    .swiper-slide p {
      line-height: 2;
    }
    .swiper-slide p:last-child {
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: -0.2px;
      text-align: center;
      color: #0a51b7;
    }
  }
  .moduleApply .moduleApplyBgTop .ApplyInner {
    .swiper-button-prev,
    .swiper-button-next {
      bottom: 100px;
      top: -100px;
    }
  }
}
@media screen and(max-width: 650px) {
  .moduleApply {
    padding-bottom: 90px;
  }
  .moduleApply .moduleApplyBgTop {
    //padding-top: 49.5px;
  }
  .moduleApply .moduleApplyBgTop .moduleApplyTit {
    margin-bottom: 20px;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 33.5px;
  }

  .moduleApply .moduleApplyBgTop .moduleApplyTit span:first-child > p {
    margin-bottom: 13.5px;
  }

  .moduleApply .moduleApplyBgTop .moduleApplyTit span:first-child h2 {
    margin-bottom: 28.5px;
  }

  .moduleApply .moduleApplyBgTop .moduleApplyTit span:first-child h2,
  .moduleApply .moduleApplyBgTop .moduleApplyTit span:first-child h2 p {
    font-size: 26px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    letter-spacing: -0.33px;
    color: #121212;
  }

  .moduleApply .moduleApplyBgTop .moduleApplyTit span:last-child,
  .moduleApply .moduleApplyBgTop .moduleApplyTit span:last-child p {
    display: inline;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    color: #121212;
    text-align: start;
  }

  .moduleApply
    .moduleApplyBgTop
    .ApplyInner
    .ApplySlider
    .ApplySliderInner
    > span
    i {
    margin-bottom: 20px;
  }

  .moduleApply .moduleApplyBgTop .ApplyInner .ApplySlider .preNextButton .next,
  .moduleApply .moduleApplyBgTop .ApplyInner .ApplySlider .preNextButton .pre {
    top: unset;
    bottom: 20px;
  }

  .moduleApply .moduleApplyBgTop .moduleApplyTit {
    margin-bottom: 0;
  }

  .moduleApply .moduleApplyBgTop {
    height: 495px;
  }

  .moduleApply .moduleApplyBgBottom {
    height: 236px;
  }

  .moduleApply .moduleApplyBgTop .ApplyInner {
    height: auto;
    margin: 0 0 0;
    padding-bottom: 90px;
  }
}

@media screen and(max-width: 430px) {
  .moduleApply .moduleApplyBgTop {
    height: 410px;
  }
  .moduleApply .ApplyInner .ApplySlider {
    .swiper-slide p {
      font-size: 20px;
    }
  }
}
</style>
