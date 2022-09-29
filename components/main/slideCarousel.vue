<template>
   <div class="banner">
        <div class="slide-wrap">
            <div class="carousel-wrapper">
                <div
                v-swiper:mySwiper="options"
                class="dark"
                @slideChangeTransitionStart="getActiveSlide()"
                >
                <div class="swiper-wrapper">
                    <div
                    v-for="(data, idx) of bottomBannerData"
                    :key="idx"
                    class="img-wrapper swiper-slide"
                    >
                <span>
                    <img
                    class="CompanyBottomBannerSlideImg"
                    :src="data.src"
                    :alt="data.alt"
                    />
                    <p class="CompanyBottomBannerSlideTitle">
                    {{ data.title }}
                    </p>
                    <p class="CompanyBottomBannerSlideContent"
                       v-html="$t(data.content)"
                    >
                    </p>
                </span>
                    </div>
                </div>
                </div>
            </div>
        <!-- <div class="pagination">
            <img
            src="~/assets/images/pages/right@2x.png"
            class="prev-btn-company"/>
        <img
            src="~/assets/images/pages/left@2x.png"
            class="next-btn-company"/>
        </div> -->
    </div>  
</div>
</template>

<script>
export default {
    methods: { 
        getActiveSlide() {
            this.exampleActiveIdx = this.$el
                .querySelector(".swiper-slide-active")
                .getAttribute("data-idx");
        }
    },
    data() {
        return {
            bottomBannerData: [
                {
                src: "https://velog.velcdn.com/images/kyj0206/post/295148e7-24fd-4611-af87-d2f0f95f576a/image.jpg",
                alt: "Smart future",
                title: "Smart future",
                content: "-Efficient working<br>-Effective education",
                },
                {
                src: "https://velog.velcdn.com/images/kyj0206/post/ed9983b2-ceeb-4258-b543-0a29f40fda60/image.jpg",
                alt: "Safe future",
                title: "Safe future",
                content: "-Environmental cost reduction of business travel and equipment with remote collaboration and virtual experiences",
                },
                {
                src: "https://velog.velcdn.com/images/kyj0206/post/ca545369-1a3e-4ce7-993c-3a5830ea7bec/image.jpg",
                alt: "Low-carbon future",
                title: "Low-carbon future",
                content: "-Safe workplace<br>-Safe training",
                },
            ],
            bottomBannerData: [
                {
                src: "https://velog.velcdn.com/images/kyj0206/post/295148e7-24fd-4611-af87-d2f0f95f576a/image.jpg",
                alt: "Smart future",
                title: "Smart future",
                content: "효율적인 업무와 효과적인 학습환경",
                },
                {
                src: "https://velog.velcdn.com/images/kyj0206/post/ed9983b2-ceeb-4258-b543-0a29f40fda60/image.jpg",
                alt: "Safe future",
                title: "Safe future",
                content: "안전한 작업환경과 현장실습",
                },
                {
                src: "https://velog.velcdn.com/images/kyj0206/post/ca545369-1a3e-4ce7-993c-3a5830ea7bec/image.jpg",
                alt: "Low-carbon future",
                title: "Low-carbon future",
                content: "원격 협업 및 가상 경험을 통한 출장 및 장비 비용 절감",
                },
            ],
            options: {
                slidesPerView: "auto",
                loop: true,
                mousewheel: true,
            autoplay: {
                delay: 3500,
            },
            breakpoints: {
                1024: {
                    slidesPerView: "auto",
                    mousewheel: false,
                }
            }
            // navigation: {
            //     nextEl: ".next-btn-company",
            //     prevEl: ".prev-btn-company",
            // },
        },
        }
    }
}
</script>

<style lang="scss" scoped>
.company {
  /* 컴퍼니 배너 수정 */
  .CompanyBottomBannerSlideImg { max-width: 500px; }
  .slide-wrap { position: relative; }
  .next-btn-company, .prev-btn-company {
      width: 45px;
      position: absolute;
      top: 45%;
  }
  .next-btn-company {
      right: 87.4%;
      z-index: 10;
  }
  .prev-btn-company {
      left: -70px;
  }
  /* */ 
  display: block;
  overflow: hidden;
  .companyWrap {
    // 회사 배너
    .companyBanner {
      display: block;
      width: 100%;
      margin: 0 auto;
      height: 1010px;
      overflow: hidden;
      background-image: url("https://velog.velcdn.com/images/kyj0206/post/06ebae19-89fa-4331-a600-f572bc8273d6/image.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      object-fit: cover;
      .companyBannerInner {
        gap: 200px;
        height: 440px;
        box-sizing: border-box;
        align-items: center;
        display: flex;
        transform: translate(17%, 55%);
        max-width: 2400px;

        margin: 0 auto;
        width: 100%;
        color: #fff;
        .companyBannerTit {
          min-width: 558px;
          > p {
            font-size: 18px;
            font-weight: bold;
            letter-spacing: -0.23px;
            color: #bfdcff;
            margin-bottom: 16px;
          }
          h2 {
            font-size: 44px;
            font-weight: bold;
            letter-spacing: -0.55px;
            color: #fff;
            margin-bottom: 32px;
          }
          span {
            display: block;
            &:nth-child(3) {
              margin-bottom: 75px;
              > p {
                font-size: 16px;
                line-height: 1.75;
                letter-spacing: -0.2px;
                color: #e6e8eb;
              }
            }
          }
          div {
            display: flex;
            flex-direction: column;
            span {
              &:first-child {
                font-size: 18px;
                font-weight: bold;
                letter-spacing: -0.23px;
                color: #e6e8eb;
                margin-bottom: 10px;
              }
              &:last-child {
                display: flex;
                gap: 14px;
                p {
                  &:first-child {
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 2;
                    letter-spacing: -0.2px;
                    color: #bfdcff;
                  }
                  &:last-child {
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 1.72;
                    letter-spacing: -0.23px;
                    color: #f7f8f9;
                  }
                }
              }
            }
          }
        }
        .companyBannerCont {
          display: block;
          gap: 140px;
          height: 100%;
          span {
            img {
              min-width: 660px;
              width: 100%;
            }
            p {
              &:nth-child(2) {
                font-size: 24px;
                font-weight: bold;
                line-height: 1;
                letter-spacing: normal;
                color: #fff3bb;
                margin-top: 26px;
                margin-bottom: 12px;
              }
              &:last-child {
                font-size: 16px;
                font-weight: normal;
                line-height: 1;
                letter-spacing: -0.2px;
                color: #bfdcff;
              }
            }
          }
        }
      }
    }

    // 회사소개 모듈
    .companyVirnect {
      display: flex;
      position: absolute;
      box-shadow: 8px 8px 10px 0 rgba(0, 0, 0, 0.14);
      background-color: #fff;
      box-sizing: border-box;
      left: 50%;
      transform: translatex(-50%);
      top: -90px;
      div {
        display: block;
        min-width: 401px;
        width: 100%;
        position: relative;
        a {
          display: block;
          img {
            display: block;
            max-width: 401px;
            width: 100%;
            height: 100%;
          }
        }
        &.virnectModule1 {
          a {
            div {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 51%;
              transform: translateY(-50%);
              display: flex;
              padding: 0px 30px 0 67px;
              justify-content: space-between;
              align-items: center;
              > span {
                font-size: 18px;
                font-weight: bold;
                letter-spacing: -0.23px;
                text-align: center;
                color: #092e6e;
                img {
                  max-width: 19px;
                  min-width: 19px;
                  width: 100%;
                }
                &:last-child {
                  transform: translateY(-260%);
                }
              }
            }
          }
        }
        &.virnectModule2 {
          a {
            div {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 51%;
              transform: translateY(-50%);
              display: flex;
              padding: 0px 30px 0 67px;
              justify-content: space-between;
              align-items: center;
              > span {
                font-size: 18px;
                font-weight: bold;
                letter-spacing: -0.23px;
                color: #f7f8f9;
                img {
                  max-width: 19px;
                  min-width: 16px;
                  width: 100%;
                }
                &:last-child {
                  transform: translateY(-300%);
                }
              }
            }
          }
        }
        &.virnectModule3 {
          a {
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: center;
            height: 100%;
            gap: 10px;
            > span {
              font-size: 14px;
              font-weight: 500;
              line-height: 1.36;
              letter-spacing: -0.18px;
              color: #092e6e;
              &:first-child {
                u {
                  display: block;
                  height: 100%;
                }
              }
              img {
                max-width: 22px;
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 600px) { .company .CompanyBottomBannerSlideImg { max-width: 300px; } }
@media screen and (max-width: 360px) { .company .CompanyBottomBannerSlideImg { max-width: 250px; } }
</style>