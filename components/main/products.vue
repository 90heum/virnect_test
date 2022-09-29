<template>
  <div class="productsModule">
    <div class="slide-wrap">
      <div class="carousel-wrapper">
        <div
          v-swiper:mySwiper="options"
          class="dark"
          @slideChangeTransitionStart="getActiveSlide()"
        >
          <div class="swiper-wrapper">
            <div class="img-wrapper swiper-slide">
              <span class="banner1024">
                <a href="https://virnect.com/news/detail?id=401&type">
                  <img
                    style="width: 100%"
                    src="~/assets/images/common/_____XR-0722bannerHompage.png"
                    alt="배너모듈"
                  />
                </a>
              </span>
            </div>
            <div class="img-wrapper swiper-slide">
              <span class="banner768">
                <a href="https://virnect.com/news/detail?id=400&type">
                  <img
                    style="width: 100%"
                    src="~/assets/images/common/banner_0810_pc revised.png"
                    alt="배너모듈"
                  />
                </a>
              </span>
            </div>
            <div class="img-wrapper swiper-slide">
              <span class="banner700">
                <a href="https://virnect.com/news/detail?id=403&type">
                  <img
                    style="width: 100%"
                    src="~/assets/images/common/20220905_CS_PC.png"
                    alt="배너모듈"
                  />
                </a>
              </span>
            </div>
            <div class="img-wrapper swiper-slide">
              <span class="banner700">
                <a href="https://virnect.com/news/detail?id=404&type">
                  <img
                    style="width: 100%"
                    src="~/assets/images/common/[Banner] 2022 METAVERSE KOREA_PC.png"
                    alt="배너모듈"
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="moduleTop">
      <span class="moduleTopTit">
        <p>Products</p>
        <h2>{{ $t(`productsText.moduleTop.title`) }}</h2>
        <span>
          <p v-html="$t(`productsText.moduleTop.contents`)"></p>
        </span>
        <ul ul class="dataModule">
          <li>
            <span>{{ $t(`productsText.moduleTop.text1`) }}</span>
            <span>
              <p>20%</p>
              <p>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/a0ed0456-10c5-49a1-8d99-7e71777be5b4/image.png"
                  alt="상승아이콘"
                />
              </p>
            </span>
          </li>
          <li>
            <span>{{ $t(`productsText.moduleTop.text2`) }}</span>
            <span>
              <p>5%</p>
              <p>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/a0ed0456-10c5-49a1-8d99-7e71777be5b4/image.png"
                  alt="상승아이콘"
                />
              </p>
            </span>
          </li>
          <li>
            <span>{{ $t(`productsText.moduleTop.text3`) }}</span>
            <span>
              <p>10%</p>
              <p>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/7997fb47-0a01-462e-889e-fa2b2baf5726/image.png"
                  alt="하락아이콘"
                />
              </p>
            </span>
          </li>
          <li>
            <span>{{ $t(`productsText.moduleTop.text4`) }}</span>
            <span>
              <p>10%</p>
              <p>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/7997fb47-0a01-462e-889e-fa2b2baf5726/image.png"
                  alt="하락아이콘"
                />
              </p>
            </span>
          </li>
        </ul>
      </span>
      <span class="moduleTopNavi">
        <ul>
          <div
            class="LearningCenterMbTab-prev"
            @click="
              handleCategory(category - 1 > category.length ? 0 : category - 1)
            "
          >
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/ca9d309b-94ce-41db-a002-66a2f0d76ff8/image.png"
              alt="prebutton"
            />
          </div>
          <li
            @click="handleCategory(1)"
            :class="`${category === 1 && 'topNaviActive'}`"
          ></li>
          <li
            @click="handleCategory(2)"
            :class="`${category === 2 && 'topNaviActive'}`"
          ></li>
          <li
            @click="handleCategory(3)"
            :class="`${category === 3 && 'topNaviActive'}`"
          ></li>
          <li
            @click="handleCategory(4)"
            :class="`${category === 4 && 'topNaviActive'}`"
          ></li>
          <li
            @click="handleCategory(5)"
            :class="`${category === 5 && 'topNaviActive'}`"
          ></li>
          <div
            class="LearningCenterMbTab-next"
            @click="
              handleCategory(category + 1 > category.length ? 0 : category + 1)
            "
          >
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/a1bbf083-3da6-413c-9f16-48fc60000827/image.png"
              alt="nextbutton"
            />
          </div>
        </ul>
      </span>
    </div>
    <!-- //TODO - -->
    <div style="width: 100%">
      <div class="moduleBottom">
        <span class="bottomBackLogo">
          <img
            src="https://velog.velcdn.com/images/kyj0206/post/98cf4c83-d886-464e-8f33-e289c3908adc/image.png"
            alt="배경로고"
          />
        </span>
        <div :class="`moduleBottomWrapRemote`" v-if="category === 1">
          <span class="moduleBottomTitRemote">
            <div>
              <p>VIRNECT Remote</p>
              <h2 v-html="$t('newMainText.remoteText.title')"></h2>
              <span class="solution">
                <p v-html="$t('newMainText.remoteText.contents')"></p>
              </span>
            </div>
            <div style="padding-top: 52px">
              <span>
                <button>
                  <nuxt-link to="/products/remote">{{
                    $t(`productsText.remoteinfo.text1`)
                  }}</nuxt-link>
                </button>
                <button>
                  <a href="support/demo" target="blank">{{
                    $t(`productsText.remoteinfo.text2`)
                  }}</a>
                </button>
              </span>
              <span>
                <a @click="modal()">
                  <i>
                    <img
                      src="https://velog.velcdn.com/images/kyj0206/post/7f7bb43e-b114-4733-b9f6-060e25b8ee49/image.png"
                      alt="다운로드이미지"
                    />
                  </i>
                  <p>
                    <u>{{ $t(`productsText.remoteinfo.text3`) }}</u>
                  </p>
                </a>
              </span>
            </div>
          </span>
          <span class="moduleBottomCont">
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/83c051ef-5178-405e-a1f2-75dc1e351a25/image.jpg"
              alt="VIRNECT Remote"
            />
          </span>
        </div>
        <div
          :class="`moduleBottomWrapMake ${category === 2 && 'topNaviActive'}`"
          v-if="category === 2"
        >
          <span class="moduleBottomTitMake">
            <div>
              <p>VIRNECT Make</p>
              <h2 v-html="$t('newMainText.makeText.title')"></h2>
              <span>
                <p v-html="$t('newMainText.makeText.contents')"></p>
              </span>
            </div>

            <div style="padding-top: 52px">
              <span>
                <button>
                  <nuxt-link to="/products/make"
                    >{{ $t(`productsText.remoteinfo.text1`) }}
                  </nuxt-link>
                </button>
                <button>
                  <a href="support/demo" target="_blank">
                    {{ $t(`productsText.remoteinfo.text2`) }}
                  </a>
                </button>
              </span>
              <span>
                <a @click="modal()">
                  <i>
                    <img
                      src="https://velog.velcdn.com/images/kyj0206/post/7f7bb43e-b114-4733-b9f6-060e25b8ee49/image.png"
                      alt="다운로드이미지"
                    />
                  </i>
                  <p>
                    <u>{{ $t(`productsText.remoteinfo.text3`) }}</u>
                  </p>
                </a>
              </span>
            </div>
          </span>
          <span class="moduleBottomCont">
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/d3b6f1ee-9f96-4645-8db3-86b6fb2ec337/image.png"
              alt="VIRNECT Make"
            />
          </span>
        </div>
        <div
          :class="`moduleBottomWrapView ${category === 3 && 'topNaviActive'}`"
          v-if="category === 3"
        >
          <span class="moduleBottomTitView">
            <div>
              <p>VIRNECT View</p>
              <h2 v-html="$t('newMainText.viewText.title')"></h2>
              <span>
                <p v-html="$t('newMainText.viewText.contents')"></p>
              </span>
            </div>

            <div class="viewview" style="padding-top: 52px">
              <span>
                <button>
                  <nuxt-link to="/products/view">{{
                    $t(`productsText.remoteinfo.text1`)
                  }}</nuxt-link>
                </button>
                <button>
                  <a href="support/demo" target="blank">
                    {{ $t(`productsText.remoteinfo.text2`) }}
                  </a>
                </button>
              </span>
              <span>
                <a @click="modal()">
                  <i>
                    <img
                      src="https://velog.velcdn.com/images/kyj0206/post/7f7bb43e-b114-4733-b9f6-060e25b8ee49/image.png"
                      alt="다운로드이미지"
                    />
                  </i>
                  <p>
                    <u>{{ $t(`productsText.remoteinfo.text3`) }}</u>
                  </p>
                </a>
              </span>
            </div>
          </span>
          <span class="moduleBottomCont">
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/d63cf94f-7150-4866-a0de-0697035f1de2/image.jpg"
              alt="VIRNECT View"
            />
          </span>
        </div>
        <div
          :class="`moduleBottomWrapTwin ${category === 4 && 'topNaviActive'}`"
          v-if="category === 4"
        >
          <span class="moduleBottomTitTwin">
            <div>
              <p>VIRNECT Twin</p>
              <h2 v-html="$t('newMainText.twinText.title')"></h2>
              <!-- <h3 v-html="$t('newMainText.twinText.subtitle')"></h3> -->
              <span>
                <p v-html="$t('newMainText.twinText.contents')"></p>
              </span>
            </div>

            <div style="height: 92px; padding-top: 52px">
              <span>
                <button>
                  <nuxt-link to="/products/twin">{{
                    $t(`productsText.remoteinfo.text1`)
                  }}</nuxt-link>
                </button>
                <button>
                  <a href="support/demo" target="blank">
                    {{ $t(`productsText.remoteinfo.text2`) }}
                  </a>
                </button>
              </span>
              <!-- <span>
            <i>
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/7f7bb43e-b114-4733-b9f6-060e25b8ee49/image.png"
                alt="다운로드이미지"
              />
            </i>
            <p><u>Twin 제품 소개서 다운로드(PDF)</u></p>
          </span> -->
            </div>
          </span>
          <span class="moduleBottomCont">
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/8cec24d8-3d90-404c-9608-9856d9a7681c/image.jpg"
              alt="VIRNECT Twin"
            />
          </span>
        </div>
        <div
          :class="`moduleBottomWrapTrack ${category === 5 && 'topNaviActive'}`"
          v-if="category === 5"
        >
          <span class="moduleBottomTitTrack">
            <div>
              <p>VIRNECT Track</p>
              <h2 v-html="$t('newMainText.trackText.title')"></h2>
              <!-- <h3 v-html="$t('newMainText.trackText.subtitle')"></h3> -->
              <span>
                <p v-html="$t('newMainText.trackText.contents')"></p>
              </span>
            </div>

            <div style="height: 92px; padding-top: 52px">
              <span>
                <button>
                  <a href="http://track.virnect.com/1.5.0/">
                    {{ $t(`productsText.remoteinfo.text4`) }}</a
                  >
                </button>
                <button>
                  <a href="support/demo" target="blank">
                    {{ $t(`productsText.remoteinfo.text2`) }}
                  </a>
                </button>
              </span>
              <!-- <span>
            <i>
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/7f7bb43e-b114-4733-b9f6-060e25b8ee49/image.png"
                alt="다운로드이미지"
              />
            </i>
            <p><u>Track 제품 소개서 다운로드(PDF)</u></p>
          </span> -->
            </div>
          </span>
          <span class="moduleBottomCont">
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/3f31dd88-8507-4d28-8b10-eee7a70c675e/image.jpg"
              alt="VIRNECT Track"
            />
          </span>
        </div>
      </div>
      <pro-modal :modal="modal" :popup="popup" />
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import ProModal from "../subscription/proModal.vue";
export default {
  data() {
    return {
      popup: false,
      category: 1,
      options: {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 13,
        centeredSlides: true,
        pagination: {
          // el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".LearningCenterMbTab-prev",
          prevEl: ".LearningCenterMbTab-next",
        },
        breakpoints: {},
      },
      options: {
        loop: true,
        autoplay: {
          delay: 3500,
        },
      },
    };
  },
  directives: {
    ClickOutside,
  },
  methods: {
    getActiveSlide() {
      this.exampleActiveIdx = this.$el.querySelector(".swiper-slide-active");
    },
    modal() {
      this.popup = !this.popup;
    },
    handleCategory(e) {
      if (e > 5) {
        this.category = 1;
      } else if (e > 0) {
        this.category = e;
      } else {
        this.category = 5;
      }
    },
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
  props: {
    categoryList: Array,
    isTabMenu: Number,
    chooseTabMenu: Function,
  },
  components: { ProModal },

  /* methods: {
    getActiveSlide() {
      this.exampleActiveIdx = this.$el.querySelector(".swiper-slide-active");
    },
  },
  data() {
    return {
      options: {
        loop: true,
        autoplay: {
          delay: 3500,
        },
      },
    };
  }, */
};
</script>

<style lang="scss" scoped>
.moduleBottom a {
  cursor: pointer;
}
.productsModule {
  position: relative;
  > .slide-wrap {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    position: absolute;
    z-index: 999;
    left: 50%;
    transform: translateX(-50%);
    top: -100px;
  }
  ul,
  li,
  span,
  a {
    list-style: none;
    text-decoration: none;
  }
  a {
    display: flex;
    align-items: center;
    grid-gap: 10px;
    gap: 10px;
  }
  // max-width: 2400px;
  width: 100%;
  display: flex;
  padding-top: 376px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .moduleTop {
    max-width: 1200px;
    width: 100%;
    padding: 0 30px;
    .moduleTopTit {
      display: block;
      max-width: 1200px;
      margin-bottom: 94px;
      > p {
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.23px;
        text-align: center;
        color: #0a51b7;
        margin-bottom: 16px;
      }
      h2 {
        font-size: 44px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.55px;
        text-align: center;
        color: #121212;
        margin-bottom: 42px;
      }
      > span {
        display: block;
        margin-bottom: 34px;
        > p {
          font-size: 16px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.75;
          letter-spacing: -0.2px;
          text-align: center;
          color: #616161;
        }
      }
      ul {
        max-width: 600px;
        min-height: 107px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        background-color: #f7f8f9;
        padding: 0;
        li {
          border-right: 1px solid #c5c8cf;
          display: flex;
          gap: 13px;
          text-align: center;
          flex-direction: column;
          width: 25%;
          &:last-child {
            border-right: none;
          }
          span {
            &:first-child {
              font-size: 14px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: 1;
              letter-spacing: -0.18px;
              text-align: center;
              color: #121212;
            }
            &:last-child {
              display: flex;
              justify-content: center;
              p {
                &:first-child {
                  font-size: 28px;
                  font-weight: bold;
                  font-stretch: normal;
                  font-style: normal;
                  line-height: 1.35;
                  letter-spacing: normal;
                  text-align: center;
                  color: #121212;
                }
                &:last-child {
                  img {
                    max-width: 20px;
                    width: 100%;
                  }
                }
              }
            }
          }
        }
      }
    }
    .moduleTopNavi {
      display: block;
      max-width: 1200px;
      min-height: 70px;
      height: 100%;
      ul {
        display: flex;
        min-height: 70px;
        height: 100%;
        padding: 0;
        .LearningCenterMbTab-prev,
        .LearningCenterMbTab-next {
          display: none;
          cursor: pointer;
        }
        li {
          cursor: pointer;
          min-height: 70px;
          width: 20%;
          height: 100%;
          border-bottom: 4px solid transparent;
          &.topNaviActive,
          &:hover {
            border-bottom: 4px solid #092e6e;
          }
          &:nth-child(2) {
            background-image: url("https://velog.velcdn.com/images/kyj0206/post/d3979587-c0e2-430b-ad0f-1eec7deb8c84/image.png");
            background-size: auto 100%;
            background-position: center;
          }
          &:nth-child(3) {
            background-image: url("https://velog.velcdn.com/images/kyj0206/post/c90bac54-bec8-415b-949f-b9e7e5142ffa/image.png");
            background-size: auto 100%;
            background-position: center;
          }
          &:nth-child(4) {
            background-image: url("https://velog.velcdn.com/images/kyj0206/post/55999c1f-157d-4dde-85c3-4038aba26b91/image.png");
            background-size: auto 100%;
            background-position: center;
          }
          &:nth-child(5) {
            background-image: url("https://velog.velcdn.com/images/kyj0206/post/0acbda75-7c59-48e7-ac7c-bc20fc45d618/image.png");
            background-size: auto 100%;
            background-position: center;
          }
          &:nth-child(6) {
            background-image: url("https://velog.velcdn.com/images/kyj0206/post/9a3abaac-00cb-4eb1-9605-1ad5e3c38371/image.png");
            background-size: auto 100%;
            background-position: center;
          }
        }
      }
    }
  }
  .moduleBottom {
    position: relative;
    display: flex;
    // max-width: 2400px;
    width: 100%;
    min-height: 728px;
    background-image: linear-gradient(to bottom, #f7f8f9 54%, #e4e4e4 107%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100%;
    justify-content: center;
    .bottomBackLogo {
      position: absolute;
      bottom: 0;
      left: 10%;
      img {
        max-width: 461px;
        width: 100%;
      }
    }

    .moduleBottomWrapTrack,
    .moduleBottomWrapTwin,
    .moduleBottomWrapView,
    .moduleBottomWrapMake,
    .moduleBottomWrapRemote {
      display: flex;
      position: absolute;
      max-width: 1200px;
      padding: 0 30px;
      padding-top: 165px;
      gap: 85px;
      &.bottomContActive {
        display: flex;
      }
      .moduleBottomTitMake {
        div {
          &:last-child {
            span {
              &:last-child {
                a {
                  display: flex;
                  align-items: center;
                  gap: 10px;
                }
              }
            }
          }
        }
      }

      .moduleBottomTitMake,
      .moduleBottomTitView,
      .moduleBottomTitTwin,
      .moduleBottomTitTrack,
      .moduleBottomTitRemote {
        width: 50%;
        max-height: 384.22px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div {
          &:first-child {
            > p {
              font-size: 18px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: -0.23px;
              color: #0a51b7;
              margin-bottom: 13px;
            }
            h2 {
              font-size: 32px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: -0.4px;
              color: #121212;
              margin-bottom: 10px;
            }
            > span {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              line-height: 1.75;
              p {
                display: grid;
                span {
                  display: grid;
                }
              }
            }
            h3 {
              font-size: 18px;
              margin-bottom: 30px;
            }
          }
          &:last-child {
            span {
              display: flex;
              gap: 12px;
              margin-bottom: 25px;
              &:last-child {
                display: flex;
                align-items: center;
                margin: 0;
                i {
                  display: flex;
                  align-items: center;
                  img {
                    max-width: 22px;
                  }
                }
                p {
                  u {
                    font-size: 14px;
                    font-weight: 500;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.36;
                    letter-spacing: -0.18px;
                    color: #092e6e;
                    padding-bottom: 5px;
                  }
                }
              }
              &:nth-child(3) {
                margin-bottom: 76.5px;
                p {
                  &:first-child {
                    font-size: 16px;
                    font-weight: 500;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.75;
                    letter-spacing: -0.2px;
                    color: #121212;
                  }
                  &:nth-child(2) {
                    font-size: 16px;
                    font-weight: 500;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.75;
                    letter-spacing: -0.2px;
                    color: #121212;
                  }
                  &:nth-child(3) {
                    font-size: 16px;
                    font-weight: 500;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.75;
                    letter-spacing: -0.2px;
                    color: #121212;
                  }
                  &:last-child {
                    font-size: 16px;
                    font-weight: 500;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.75;
                    letter-spacing: -0.2px;
                    text-align: justify;
                    color: #121212;
                  }
                }
              }
              button {
                &:first-child {
                  border: solid 1px #979797;
                  background-color: #f7f8f9;
                  display: flex;
                  a {
                    padding: 10px 33px;
                    font-size: 18px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: normal;
                    letter-spacing: normal;
                    text-align: center;
                    color: #121212;
                  }
                }
                &:last-child {
                  border: solid 1px #0a51b7;
                  background-color: #0a51b7;
                  display: flex;
                  a {
                    padding: 10px 33px;
                    font-size: 18px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: normal;
                    letter-spacing: normal;
                    text-align: center;
                    color: #fff;
                  }
                }
              }
            }
          }
        }
      }
      .moduleBottomCont {
        width: 50%;
        display: flex;
        align-items: center;
        img {
          max-width: 588px;
          width: 100%;
        }
      }
    }
  }
}
@media screen and (max-width: 1150px) {
  .moduleBottomTitMake,
  .moduleBottomTitView,
  .moduleBottomTitTwin,
  .moduleBottomTitTrack,
  .moduleBottomTitRemote {
    div {
      &:first-child {
        span {
          display: inline;
        }

        h2 {
          margin-bottom: 10px;
        }
      }
    }
  }
  .moduleBottomTitRemote {
    div {
      .solution {
        display: grid;
        > p {
          display: grid;
          span {
            display: grid;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1050px) {
  .moduleBottomTitView {
    .viewview {
      padding-top: 26px !important;
    }
  }
}
@media screen and (max-width: 1000px) {
  .productsModule .moduleBottom .moduleBottomWrapTrack.bottomContActive,
  .productsModule .moduleBottom .moduleBottomWrapTwin.bottomContActive,
  .productsModule .moduleBottom .moduleBottomWrapView.bottomContActive,
  .productsModule .moduleBottom .moduleBottomWrapMake.bottomContActive,
  .productsModule .moduleBottom .moduleBottomWrapRemote.bottomContActive {
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  .productsModule .moduleBottom .moduleBottomWrapTrack .moduleBottomCont,
  .productsModule .moduleBottom .moduleBottomWrapTwin .moduleBottomCont,
  .productsModule .moduleBottom .moduleBottomWrapView .moduleBottomCont,
  .productsModule .moduleBottom .moduleBottomWrapMake .moduleBottomCont,
  .productsModule .moduleBottom .moduleBottomWrapRemote .moduleBottomCont {
    width: 100%;
  }

  .productsModule .moduleBottom .moduleBottomWrapTrack .moduleBottomTitMake,
  .productsModule .moduleBottom .moduleBottomWrapTrack .moduleBottomTitView,
  .productsModule .moduleBottom .moduleBottomWrapTrack .moduleBottomTitTwin,
  .productsModule .moduleBottom .moduleBottomWrapTrack .moduleBottomTitTrack,
  .productsModule .moduleBottom .moduleBottomWrapTrack .moduleBottomTitRemote,
  .productsModule .moduleBottom .moduleBottomWrapTwin .moduleBottomTitMake,
  .productsModule .moduleBottom .moduleBottomWrapTwin .moduleBottomTitView,
  .productsModule .moduleBottom .moduleBottomWrapTwin .moduleBottomTitTwin,
  .productsModule .moduleBottom .moduleBottomWrapTwin .moduleBottomTitTrack,
  .productsModule .moduleBottom .moduleBottomWrapTwin .moduleBottomTitRemote,
  .productsModule .moduleBottom .moduleBottomWrapView .moduleBottomTitMake,
  .productsModule .moduleBottom .moduleBottomWrapView .moduleBottomTitView,
  .productsModule .moduleBottom .moduleBottomWrapView .moduleBottomTitTwin,
  .productsModule .moduleBottom .moduleBottomWrapView .moduleBottomTitTrack,
  .productsModule .moduleBottom .moduleBottomWrapView .moduleBottomTitRemote,
  .productsModule .moduleBottom .moduleBottomWrapMake .moduleBottomTitMake,
  .productsModule .moduleBottom .moduleBottomWrapMake .moduleBottomTitView,
  .productsModule .moduleBottom .moduleBottomWrapMake .moduleBottomTitTwin,
  .productsModule .moduleBottom .moduleBottomWrapMake .moduleBottomTitTrack,
  .productsModule .moduleBottom .moduleBottomWrapMake .moduleBottomTitRemote,
  .productsModule .moduleBottom .moduleBottomWrapRemote .moduleBottomTitMake,
  .productsModule .moduleBottom .moduleBottomWrapRemote .moduleBottomTitView,
  .productsModule .moduleBottom .moduleBottomWrapRemote .moduleBottomTitTwin,
  .productsModule .moduleBottom .moduleBottomWrapRemote .moduleBottomTitTrack,
  .productsModule .moduleBottom .moduleBottomWrapRemote .moduleBottomTitRemote {
    width: 100%;
  }

  .productsModule .moduleBottom {
    min-height: 669px;
  }
  .productsModule .moduleBottom .moduleBottomWrapTrack.bottomContActive,
  .productsModule .moduleBottom .moduleBottomWrapTwin.bottomContActive,
  .productsModule .moduleBottom .moduleBottomWrapView.bottomContActive,
  .productsModule .moduleBottom .moduleBottomWrapMake.bottomContActive,
  .productsModule .moduleBottom .moduleBottomWrapRemote.bottomContActive {
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  .productsModule .moduleBottom .moduleBottomWrapTrack .moduleBottomCont,
  .productsModule .moduleBottom .moduleBottomWrapTwin .moduleBottomCont,
  .productsModule .moduleBottom .moduleBottomWrapView .moduleBottomCont,
  .productsModule .moduleBottom .moduleBottomWrapMake .moduleBottomCont,
  .productsModule .moduleBottom .moduleBottomWrapRemote .moduleBottomCont {
    width: 100%;
    flex-direction: column;
  }

  .productsModule .moduleBottom .moduleBottomWrapTrack .moduleBottomTitMake,
  .productsModule .moduleBottom .moduleBottomWrapTrack .moduleBottomTitView,
  .productsModule .moduleBottom .moduleBottomWrapTrack .moduleBottomTitTwin,
  .productsModule .moduleBottom .moduleBottomWrapTrack .moduleBottomTitTrack,
  .productsModule .moduleBottom .moduleBottomWrapTrack .moduleBottomTitRemote,
  .productsModule .moduleBottom .moduleBottomWrapTwin .moduleBottomTitMake,
  .productsModule .moduleBottom .moduleBottomWrapTwin .moduleBottomTitView,
  .productsModule .moduleBottom .moduleBottomWrapTwin .moduleBottomTitTwin,
  .productsModule .moduleBottom .moduleBottomWrapTwin .moduleBottomTitTrack,
  .productsModule .moduleBottom .moduleBottomWrapTwin .moduleBottomTitRemote,
  .productsModule .moduleBottom .moduleBottomWrapView .moduleBottomTitMake,
  .productsModule .moduleBottom .moduleBottomWrapView .moduleBottomTitView,
  .productsModule .moduleBottom .moduleBottomWrapView .moduleBottomTitTwin,
  .productsModule .moduleBottom .moduleBottomWrapView .moduleBottomTitTrack,
  .productsModule .moduleBottom .moduleBottomWrapView .moduleBottomTitRemote,
  .productsModule .moduleBottom .moduleBottomWrapMake .moduleBottomTitMake,
  .productsModule .moduleBottom .moduleBottomWrapMake .moduleBottomTitView,
  .productsModule .moduleBottom .moduleBottomWrapMake .moduleBottomTitTwin,
  .productsModule .moduleBottom .moduleBottomWrapMake .moduleBottomTitTrack,
  .productsModule .moduleBottom .moduleBottomWrapMake .moduleBottomTitRemote,
  .productsModule .moduleBottom .moduleBottomWrapRemote .moduleBottomTitMake,
  .productsModule .moduleBottom .moduleBottomWrapRemote .moduleBottomTitView,
  .productsModule .moduleBottom .moduleBottomWrapRemote .moduleBottomTitTwin,
  .productsModule .moduleBottom .moduleBottomWrapRemote .moduleBottomTitTrack,
  .productsModule .moduleBottom .moduleBottomWrapRemote .moduleBottomTitRemote {
    width: 100%;
    flex-direction: column;
  }

  .productsModule .moduleBottom {
    min-height: 1320px;
  }
  .productsModule .moduleBottom .moduleBottomWrapTrack,
  .productsModule .moduleBottom .moduleBottomWrapTwin,
  .productsModule .moduleBottom .moduleBottomWrapView,
  .productsModule .moduleBottom .moduleBottomWrapMake,
  .productsModule .moduleBottom .moduleBottomWrapRemote {
    flex-direction: column;
    padding-top: 100px;
  }
  .moduleBottomCont {
    img {
      max-width: 100% !important;
    }
  }
}
@media screen and (max-width: 768px) {
  .productsModule {
    padding-top: 200px;
  }

  .productsModule .moduleBottom {
    min-height: 1100px;
  }

  .productsModule .moduleTop .moduleTopNavi ul li {
    display: none;
  }
  .productsModule .moduleTop .moduleTopNavi ul li.topNaviActive {
    display: block;
    width: 100%;
    background-repeat: no-repeat;
  }
  .productsModule .moduleTop .moduleTopNavi ul .LearningCenterMbTab-prev,
  .productsModule .moduleTop .moduleTopNavi ul .LearningCenterMbTab-next {
    display: flex;
    align-items: center;
    border-bottom: 4px solid #092e6e;
    img {
      max-width: 42px;
      width: 100%;
    }
  }
}

@media screen and (max-width: 600px) {
  .productsModule .moduleBottom {
    min-height: 1000px;
  }
  .productsModule .moduleTop .moduleTopNavi ul {
    padding-left: 0;
  }
  .productsModule .moduleTop .moduleTopTit .dataModule {
    flex-wrap: wrap;
    padding: 25px 0;
  }

  .productsModule .moduleTop .moduleTopTit .dataModule li {
    width: 50%;
    border: none;
  }

  .productsModule .moduleTop .moduleTopTit .dataModule li:nth-child(1),
  .productsModule .moduleTop .moduleTopTit .dataModule li:nth-child(3) {
    border-right: 1px solid #c5c8cf;
  }
  .productsModule .moduleTop .moduleTopTit .dataModule li:nth-child(1),
  .productsModule .moduleTop .moduleTopTit .dataModule li:nth-child(2) {
    padding-bottom: 55px;
  }
  .moduleBottomCont {
    img {
      max-width: 100%;
    }
  }
}

@media screen and (max-width: 515px) {
  .moduleBottomTitMake div:first-child > span p,
  .moduleBottomTitView div:first-child > span p,
  .moduleBottomTitTwin div:first-child > span p,
  .moduleBottomTitTrack div:first-child > span p,
  .moduleBottomTitRemote div:first-child > span p {
    display: inline !important;
  }
}

@media screen and (max-width: 425px) {
  .moduleBottomWrapTrack,
  .moduleBottomWrapTwin,
  .moduleBottomWrapView,
  .moduleBottomWrapMake,
  .moduleBottomWrapRemote {
    flex-direction: column;
  }
  .productsModule .moduleBottom {
    min-height: 900px;
  }

  .productsModule {
    padding-top: 120px;
  }
}
</style>