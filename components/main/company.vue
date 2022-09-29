<template>
  <div class="company">
    <div class="companyWrap">
      <!-- 회사 배너 -->
      <span class="companyBanner">
        <div class="companyBannerInner">
          <span class="companyBannerTit">
            <p>Company</p>
            <h2 v-html="$t('newMainText.companyText.title')"></h2>
            <span>
              <p v-html="$t('newMainText.companyText.contents')"></p>
            </span>
            <div v-if="$i18n.localeProperties.code === 'ko'">
              <span>IR</span>
              <span>
                <p>
                  [{{ $dayjs(irData[0].createdDate).format("YYYY-MM-DD") }}]
                </p>
                <nuxt-link :to="`/company/ir-detail?id=${irData[0].id}`"
                  ><p>
                    <u>{{
                      $i18n.localeProperties.code === "ko"
                        ? irData[0].title
                        : irData[0].titleEn
                    }}</u>
                  </p></nuxt-link
                >
              </span>
            </div>
          </span>

          <client-only>
            <slide-carousel />
            <!-- <div class="CompanyBottomBanner">
                <div class="CompanyBottomBannerSlider-container">
                  <div
                    class="CompanyBottomBannerSlide"
                    v-for="(data, idx) of bottomBannerData"
                    :key="idx"
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
                      <p class="CompanyBottomBannerSlideContent">
                        {{ data.content }}
                      </p>
                    </span>
                  </div>
                </div>
              </div> -->
            <!-- </div> -->
          </client-only>
        </div>
      </span>

      <!-- 버넥트 뉴스 모듈 -->
      <span class="companyNews">
        <!-- 회사소개 모듈 -->
        <com-modal :comModal="comModal" :comPopup="comPopup" />
        <span class="companyVirnect">
          <div class="virnectModule1">
            <nuxt-link to="/company/about">
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/048484e3-41b2-4f43-a14c-7a451594343c/image.jpg"
                alt="VIRNECT 회사소개"
              />
              <div>
                <span>{{$t(`companyText.banner.text1`)}}</span>
                <span>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/094e88c4-3d54-4c08-a0ee-7876622f7e3b/image.svg"
                    alt="더보기 아이콘"
                  />
                </span>
              </div>
            </nuxt-link>
          </div>
          <div class="virnectModule2">
            <nuxt-link to="/company/talent">
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/163bcddf-ccbd-444b-b2d7-57eaea06b375/image.jpg"
                alt="인재채용"
              />
              <div>
                <span> 인재채용 </span>
                <span>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/90feb726-eece-4bab-8e46-e27c04c83f44/image.svg"
                    alt="더보기 아이콘"
                  />
                </span>
              </div>
            </nuxt-link>
          </div>
          <div class="virnectModule3">
            <a @click="comModal()">
              <span>
                <u>{{$t(`companyText.banner.text2`)}}</u>
              </span>
              <span>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/72ce179f-90a7-4397-acfd-466b1d7282ab/image.svg"
                  alt="다운로드 아이콘"
                />
              </span>
            </a>
          </div>
        </span>
        <div class="companyNewsWrap">
          <span>
            <p>{{$t(`companyText.mainNews.text1`)}}</p>
            <span>
              <nuxt-link to="/news/main" target="_blank">
                <p>{{$t(`companyText.mainNews.text2`)}}</p>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/5154a98a-9041-4d8d-989e-f3fdfe4ebaa4/image.svg"
                    alt="뉴스전체 더보기"
                  />
                </i>
              </nuxt-link>
            </span>
          </span>
          <span>
            <ul>
              <li
                v-for="(data, idx) of contentList
                  ? contentList.filter((e, idx) => {
                      if (idx < 4) return e;
                    })
                  : []"
                :key="idx"
              >
                <nuxt-link :to="`/news/detail?id=${data.id}&type`">
                  <span>
                    <img
                      :src="`data:image/png;base64,${data.thumbnail}`"
                      alt="뉴스리스트 이미지"
                    />
                  </span>
                  <span>
                    {{
                      $i18n.localeProperties.code === "ko"
                        ? data.title
                        : data.titleEn
                    }}
                  </span>
                  <span class="news">{{
                    $i18n.localeProperties.code === "ko"
                      ? data.typeName
                      : data.typeNameEn
                  }}</span>
                </nuxt-link>
              </li>
            </ul>
          </span>
        </div>
      </span>

      <company-awards />
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import { awardData } from "~/components/dummy/award.js";
import CompanyAwards from "~/components/main/companyAwards.vue";
import SlideCarousel from "~/components/main/slideCarousel.vue";
import ComModal from "../subscription/comModal.vue";

export default {
  components: {
    CompanyAwards,
    SlideCarousel,
    ComModal,
  },
  data() {
    return {
      comPopup: false,

      award: awardData,
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
    };
  },
  directives: {
    ClickOutside,
  },
  created() {
    if (process.client) {
      window.addEventListener("resize", this.handleReactiveView);
    }
  },
  beforeDestroy() {
    if (process.client)
      window.removeEventListener("resize", this.handleReactiveView);
  },
  props: {
    contentList: Array,
    irData: Array,
  },
  methods: {
    comModal() {
      this.comPopup = !this.comPopup;
    },
    getActiveSlide() {
      this.exampleActiveIdx = this.$el
        .querySelector(".swiper-slide-active")
        .getAttribute("data-idx");
    },
    handleReactiveView() {
      if (window.innerWidth > 1025) {
        this.awardIdx = { ...this.awardIdx, end: 6 };
        // this.plus = 6;
        // this.minus = 6;
      } else if (window.innerWidth < 1025) {
        this.awardIdx = { ...this.awardIdx, end: 3 };
        // this.plus = 3;
        // this.minus = 3;
      }
    },
  },
  updated() {
    // if (process.client) {
    //   const slider = document.querySelector(
    //       ".CompanyBottomBannerSlider-container"
    //     ),
    //     slides = Array.from(
    //       document.querySelectorAll(".CompanyBottomBannerSlide")
    //     );
    //   let isDragging = false,
    //     startPos = 0,
    //     currentTranslate = 0,
    //     prevTranslate = 0,
    //     animationID,
    //     currentIndex = 0;
    //   slides.forEach((slide, index) => {
    //     const slideImage = slide.querySelector(".CompanyBottomBannerSlideImg");
    //     // disable default image drag
    //     slideImage.addEventListener("dragstart", (e) => e.preventDefault());
    //     // touch events
    //     slide.addEventListener("touchstart", touchStart(index));
    //     slide.addEventListener("touchend", touchEnd);
    //     slide.addEventListener("touchmove", touchMove);
    //     // mouse events
    //     slide.addEventListener("mousedown", touchStart(index));
    //     slide.addEventListener("mouseup", touchEnd);
    //     slide.addEventListener("mousemove", touchMove);
    //     slide.addEventListener("mouseleave", touchEnd);
    //   });
    //   // make responsive to viewport changes
    //   window.addEventListener("resize", setPositionByIndex);
    //   // prevent menu popup on long press
    //   window.oncontextmenu = function (event) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     return false;
    //   };
    //   function getPositionX(event) {
    //     return event.type.includes("mouse")
    //       ? event.pageX
    //       : event.touches[0].clientX;
    //   }
    //   function touchStart(index) {
    //     return function (event) {
    //       currentIndex = index;
    //       startPos = getPositionX(event);
    //       isDragging = true;
    //       animationID = requestAnimationFrame(animation);
    //       slider.classList.add("CompanyGrabbing");
    //     };
    //   }
    //   function touchMove(event) {
    //     if (isDragging) {
    //       const currentPosition = getPositionX(event);
    //       currentTranslate = prevTranslate + currentPosition - startPos;
    //     }
    //   }
    //   function touchEnd() {
    //     cancelAnimationFrame(animationID);
    //     isDragging = false;
    //     const movedBy = currentTranslate - prevTranslate;
    //     // if moved enough negative then snap to next slide if there is one
    //     if (movedBy < -100 && currentIndex < slides.length - 1)
    //       currentIndex += 1;
    //     // if moved enough positive then snap to previous slide if there is one
    //     if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;
    //     setPositionByIndex();
    //     slider.classList.remove("CompanyGrabbing");
    //   }
    //   function animation() {
    //     setSliderPosition();
    //     if (isDragging) requestAnimationFrame(animation);
    //   }
    //   function setPositionByIndex() {
    //     currentTranslate = currentIndex * -window.innerWidth;
    //     prevTranslate = currentTranslate;
    //     setSliderPosition();
    //   }
    //   function setSliderPosition() {
    //     slider.style.transform = `translateX(${currentTranslate}px)`;
    //   }
    // }
  },
};
</script>

<style lang="scss" scoped>
.companyAwardsTitleWrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 70px 0;
  p {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: -0.23px;
    color: #121212;
  }
}
.company {
  /* 컴퍼니 배너 수정 */
  .CompanyBottomBannerSlideImg {
    max-width: 500px;
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
            cursor: pointer;
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

    // 버넥트 뉴스 모듈
    .companyNews {
      position: relative;
      display: block;
      width: 100%;
      border-bottom: 1px solid #c5c8cf;
      .companyNewsWrap {
        margin: 0 auto;
        display: block;
        max-width: 1200px;
        box-sizing: unset;
        padding: 180px 30px 70px;
        li,
        ul {
          list-style: none;
        }
        ul {
          padding-left: 0px;
        }
        > span {
          display: flex;
          width: 100%;
          transition: all 0.4s;

          &:first-child {
            justify-content: space-between;
            margin-bottom: 30px;
            > p {
              font-size: 18px;
              font-weight: bold;
              letter-spacing: -0.23px;
              color: #121212;
            }
            span {
              a {
                display: flex;
                gap: 6px;
                p {
                  font-size: 14px;
                  font-weight: bold;
                  font-stretch: normal;
                  letter-spacing: -0.18px;
                  text-align: right;
                  color: #9a9da3;
                }
                p:hover {
                  color: #444547;
                }
                i {
                  img {
                    max-width: 13px;
                    width: 100%;
                  }
                }
              }
            }
          }
          &:last-child {
            display: block;
            // border-bottom: ;
            ul {
              display: flex;
              gap: 24px;
              li {
                max-width: 281px;
                width: calc(100% / 4);
                a {
                  display: flex;
                  flex-direction: column;
                  span {
                    &:first-child {
                      margin-bottom: 18px;
                      img {
                        width: 100%;
                        border: 2px solid #fff;
                        transition: all 0.3s;
                        //조성우추가
                        aspect-ratio: 16 / 9.7;
                      }
                      img:hover {
                        border: 2px solid #121212;
                      }
                    }
                    &:nth-child(2) {
                      font-size: 14px;
                      font-weight: 500;
                      margin-bottom: 14px;
                      letter-spacing: -0.18px;
                      color: #121212;
                      line-height: 1.3;
                      overflow: hidden;
                      // 말줄임
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      height: 37px;
                    }
                    // 조성우추가
                    &:nth-child(2):hover {
                      font-size: 14px;
                      font-weight: 500;
                      margin-bottom: 14px;
                      letter-spacing: -0.18px;
                      color: #0a51b7;
                      line-height: 1.3;
                      overflow: hidden;
                      // 말줄임
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                    }
                    &:last-child {
                      border: solid 1px #c5c8cf;
                      max-width: max-content;
                      padding: 5.5px 10px;
                      font-size: 12px;
                      font-weight: bold;
                      letter-spacing: -0.15px;
                      text-align: center;
                      &.news {
                      max-width: 60px;
                      max-height: 24px;
                      padding: 2px 10px;
                      border-radius: 12px;
                      border: solid 1px #3f97d3;
                      background-color: #fff;
                      color: #0a51b7;
                      }
                      &.people {
                        color: #d88318;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        ul li a {
          text-decoration: none;
        }
      }
      // 조성우 추가

      // 조성우 추가 끝
    }

    // 인증 및 수상 모듈
    .companyAwards {
      display: block;
      width: 100%;
      background-color: #f7f8fa;
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
  }
}

// .companyAwards
// .slide-wrap
// .carousel-wrapper
// .swiper-slide
.company .companyWrap .companyAwards {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 60px;
  > div:first-child {
    align-self: start;
    padding-left: 2.5%;
  }
  .slide-wrap {
    width: 90%;
  }
  .carousel-wrapper .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 160px;
    }
    span {
      width: 160px;
    }
    p {
      text-align: center;
    }
  }
  .prev-btn,
  .next-btn {
    position: absolute;
    width: 42px;
    transform: translateY(50px);
    cursor: pointer;
  }
  .prev-btn {
    left: 10px;
  }
  .next-btn {
    right: 10px;
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