<template>
    <client-only>
         <div class="moduleApply">
          <div class="moduleApplyBgTop">
              <div class="moduleApplyTit">
                  <span>
                      <p>적용 사례</p>
                      <h2>
                          가치 향상의 경험을
                          <p>공유합니다</p>
                      </h2>
                  </span>
                  <span>
                      VIRNECT {{title}} 만들어낸 효율과 혁신을 
                      <p>최신 사례와 자료를 통해 확인하세요.</p>
                  </span>
              </div>
              <div class="ApplyInner">
                  <div class="ApplySlider">
                      <!-- <div class="ApplySliderInner"> -->
                          <client-only>
                            <div class="carousel-wrapper">
                                <div v-swiper:mySwiper="options" 
                                     @readey="onSwiperRedied"
                                     @click-slide="onSwiperClickSlide"
                                     @slide-change-transition="onSwiperSlideChangeTransitionStart">

                                <div class="swiper-wrapper">
                                    <div v-for="(data, idx) of bannerData" :key="idx" class="img-warpper swiper-slide">
                                        <i>
                                            <img :src="data.src||data.img" :alt="data.alt" />
                                        </i>
                                        <p>{{data.title}}</p>
                                    </div>
                                </div>
                                <div class="swiper-pagination swiper-pagination-bullets">
                                    <div class="swiper-button-prev"></div>
                                    <div class="swiper-button-next"></div>
                                </div>
                                </div>
                            </div>
                        </client-only>
                          <!-- <span v-for="(data, idx) of bannerData"
                                :key="idx"
                                :class="`sliderContents ${idx === curPos ? 'active' : ''}`"
                                @dragstart="(e) => touchStart(e)"
                                @dragend="(e) => touchEnd(e)">
                              <i>
                                  <img :src="data.src" 
                                       :alt="data.alt" />
                              </i>
                              <p>{{data.title}}</p>
                          </span> -->
                      <!-- </div> -->
                  </div>
              </div>
          </div>
          <!-- <div class="moduleApplyBgBottom"></div> -->
      </div>
      </client-only>
</template>

<script>
export default {
    methods: {
        onSwiperSlideChangeTransitionStart (e) {
            console.log("redied", e)
        },
        onSwiperRedied (swiper) {
            console.log("transtion", swiper)
        }, 
        onSwiperClickSlide (idx, realIdx) {
            console.log("click", idx, realIdx)
        }
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
                nextEl: ".swiper-button-prev",
                prevEl: ".swiper-button-next",
                },
                breakpoints: {
                    1024: {
                        slidesPerView: "auto",
                        centeredSlides: true,
                        slidesGroup: "2"
                    },
                    650: {
                        slidesPerView: "1"
                    }
                }
            },
          }
      },
      props: {
          bannerData: Array,
          title: String
      }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/mixin.scss";
.example-wrap {
  position: relative;

  &:before {
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 46px;
    height: 164px;
    background: #202937;
    content: "";
  }

  @media (max-width: $mobile) {
    &:before {
      bottom: 46px;
      height: 164px;
    }
  }
}
.moduleApply{
    max-width: 100%;
    .moduleApplyBgTop{
        background-color: #fff;
        height: 581px;
        padding: 100px 24px 0;

        .moduleApplyTit{
            display: flex;
            justify-content: space-between;
            max-width: 1200px;
            margin: 0 auto;
            padding-top: 53px;
            border-top: solid 2px #0a51b7;
            span{
                &:first-child{
                    >p{
                        font-size: 18px;
                        font-weight: bold;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: normal;
                        letter-spacing: -0.23px;
                        color: #0a51b7;
                        margin-bottom: 17px;
                    }
                    h2{
                        font-size: 34px;
                        font-weight: bold;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.5;
                        letter-spacing: -0.43px;
                        color: #121212;
                        p{
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
                &:last-child{
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
                    p{
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
    .moduleApplyBgBottom{
        background-color: #0a51b7;
        height: 246px;
    }
    .ApplyInner {
        .swiper-button-prev, .swiper-button-next {
            bottom: 100px;
            top: auto;
        }
        .swiper-button-prev {
            background-image: url(~/assets/images/pages/right@2x.png);
        }
        .swiper-button-next {
            background-image: url(~/assets/images/pages/left@2x.png);
        }
    }
    .ApplyInner .ApplySlider {
        .swiper-slide {
            min-width: 33%;
            max-width: 33%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }
        .swiper-slide img {
            width: 85%;
            border-radius: 15px;
            max-height: 276px;
        }
        .swiper-slide i {
            display: flex;
            width: 100%;
            justify-content: center;
        }
        .swiper-slide p {
            text-align: center;
        }
    }
}

@media screen and(max-width:1350px) {
    .moduleApply .moduleApplyBgTop .ApplyInner .ApplySlider .ApplySliderInner{
        display: flex;
        margin: 0 auto;
        width: auto;
    }

    .moduleApply .moduleApplyBgTop{
        height: 572px;
    }

}

@media screen and(max-width : 1024px) {
    .moduleApply .moduleApplyBgTop .ApplyInner{
        margin-top: 100px;
    }
    .moduleApply .ApplyInner .ApplySlider {
        .swiper-slide {
            min-width: 50%;
            max-width: 50%;
        }
        .swiper-slide img {
            width: 85%;
            border-radius: 15px;
        }
    }
}

@media screen and(max-width : 950px) {

    .moduleApply .moduleApplyBgTop .moduleApplyTit{
        margin-bottom: 20px;
    }

    .moduleApply .moduleApplyBgTop .ApplyInner .ApplySlider .ApplySliderInner > span{
        width: 100%;
        margin-right: 0;
    }

    .moduleApply .moduleApplyBgTop .moduleApplyTit span:last-child{
        flex-direction: column;
        justify-content: flex-end;
    }

}
@media screen and (max-width: 768px) {

}
@media screen and(max-width: 650px) {
    .moduleApply .moduleApplyBgTop{
        padding-top: 49.5px;
    }
    .moduleApply .ApplyInner .ApplySlider {
        .swiper-slide {
            min-width: 100%;
            max-width: 100%;
        }
    }
    .moduleApply .moduleApplyBgTop .moduleApplyTit{
        margin-bottom: 20px;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 33.5px;
    }

    .moduleApply .moduleApplyBgTop .moduleApplyTit span:first-child > p{
        margin-bottom: 13.5px;
    }

    .moduleApply .moduleApplyBgTop .moduleApplyTit span:first-child h2{
        margin-bottom: 28.5px;
    }

    .moduleApply .moduleApplyBgTop .moduleApplyTit span:first-child h2,
    .moduleApply .moduleApplyBgTop .moduleApplyTit span:first-child h2 p{
        font-size: 26px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.46;
        letter-spacing: -0.33px;
        color: #121212;
    }

    .moduleApply .moduleApplyBgTop .moduleApplyTit span:last-child,
    .moduleApply .moduleApplyBgTop .moduleApplyTit span:last-child p{
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

    .moduleApply .moduleApplyBgTop .ApplyInner .ApplySlider .ApplySliderInner > span i{
        margin-bottom: 20px;
    }

    .moduleApply .moduleApplyBgTop .ApplyInner .ApplySlider .preNextButton .next,
    .moduleApply .moduleApplyBgTop .ApplyInner .ApplySlider .preNextButton .pre{
        top: unset;
        bottom: 20px;
    }

    .moduleApply .moduleApplyBgTop .moduleApplyTit{
        margin-bottom: 0;
    }

    .moduleApply .moduleApplyBgTop{
        height: 495px;
    }

    .moduleApply .moduleApplyBgBottom{
        height: 236px;
    }

    .moduleApply .moduleApplyBgTop .ApplyInner{
        height: auto;
        margin: 50px 0 0;
        padding-bottom: 130px;
    }
}
</style>
