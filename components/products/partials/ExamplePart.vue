<template>
  <div class="example-part">
    <div class="slide-wrap">
      <div class="carousel-wrapper">
        <!-- @click.native="sliderClicked" -->
        <div
          v-swiper:mySwiper="options"
          class="dark"
          @slideChangeTransitionStart="getActiveSlide()"
        >
          <div class="swiper-wrapper">
            <div
              v-for="(list, idx) of exampleArr"
              :key="idx"
              class="img-wrapper swiper-slide"
              :class="{ 'cursor-pointer': list.video }"
              :data-idx="idx + 1"
            >
              <div
                class="img-wrap"
                :style="`background-image : url(${list.img})`"
              >
                <img
                  src="https://virnect.com/assets/images/pages/company/ic-play.svg"
                  class="icon"
                  alt="재생 아이콘"
                />
              </div>
              <div class="text-wrap">
                <p class="title" v-html="list.title"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="navy-infomation-list-pagination">
      <div class="pagination-progressive-bar" slot="pagination"></div>
      <div class="pagination-number-wrap">
        <button class="prev-btn arrow-btn"></button>
        <i class="praction"
          ><span>{{ exampleActiveIdx }}</span
          >/{{ exampleArr.length }}</i
        >
        <button class="next-btn arrow-btn"></button>
      </div>
    </div>
    <!-- 전체화면 영상 -->
    <youtube-fullscreen ref="player" />
  </div>
</template>

<script>
import YoutubeFullscreen from "../../modules/YoutubeFullscreen";

export default {
  components: {
    YoutubeFullscreen,
  },
  data() {
    return {
      isWeb: "full",
      options: {
        slidesPerView: "auto",
        loop: true,
        pagination: {
          el: ".pagination-progressive-bar",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        },
        breakpoints: {
          1200: {
            slidesPerView: "1",
            loop: true,
            mousewheel: false,
            direction: "horizontal",
            spaceBetween: 12,
          },
          480: {
            mousewheel: false,
            direction: "vertical",
            spaceBetween: 12,
          },
        },
      },
      exampleActiveIdx: "1",
    };
  },
  props: {
    exampleArr: Array,
  },
  created() {
    if (process.client)
      document.addEventListener("resize", this.handleReactWebView);
  },
  beforeDestroy() {
    if (process.client)
      document.removeEventListener("resize", this.handleReactWebView);
  },
  methods: {
    getActiveSlide() {
      this.exampleActiveIdx = this.$el
        .querySelector(".swiper-slide-active")
        .getAttribute("data-idx");
    },
    sliderClicked(e) {
      const idx = e.target.parentElement.getAttribute("data-idx");
      if (!idx) return false;
      const video = this.exampleArr[idx - 1].video;
      // if (video) this.$refs.player.play(video)
    },
    handleReactWebView() {
      if (process.client) {
        const innerWidth = window.innerWidth;
        if (innerWidth <= 1200 && innerWidth > 480 && this.isWeb !== "tablet") {
          this.isWeb = "tablet";
        } else if (innerWidth <= 480 && this.isWeb !== "mobile") {
          this.isWeb = "mobile";
        } else if (innerWidth > 1200 && this.isWeb !== "full") {
          this.isWeb = "full";
        }
        console.log(this.isWeb);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/css/mixin.scss";
$height: 340px;
$width: 534px;

.title {
  color: #fff;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: -ms-flexbox;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
}
.swiper-slide {
  width: $width!important;
  margin-right: 30px;
}
.img-wrap {
  width: $width;
  height: $height;
  vertical-align: top;
  background: #ccc;
  background-size: cover;
  .icon {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 87px;
    left: 0;
    width: 80px;
    height: 80px;
    margin: auto;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }
}
.cursor-pointer .img-wrap {
  cursor: pointer;
  &:hover .icon {
    opacity: 1;
  }
}
.swiper-pagination-progressbar > .swiper-pagination-progressbar-fill {
  height: 3px;
  margin-top: -1px;
  background: #1655bf;
  position: absolute;
  right: 41%;
  top: 0;
  width: 100%;
}
.swiper-pagination-progressbar {
  background: rgba(0, 0, 0, 0.25);
}

@media (max-width: $mobile) {
  .swiper-slide {
    width: 100%!important;
  }
  .img-wrap {
    width: 100%;
    height: auto;
    &:before {
      display: block;
      width: 100%;
      padding-top: 63.57%;
      content: "";
    }
  }
  .cursor-pointer .img-wrap .icon {
    bottom: 48px;
    width: 60px;
    height: 60px;
    opacity: 1;
  }
}
.text-wrap {
  width: $width;
  padding: 24px;
  vertical-align: top;
  .title {
    font-weight: 400;
    font-size: 24px;
    font-family: $noto;
    line-height: 1.65;
    text-align: left;
  }
}
.navy-infomation-list-pagination {
  display: flex;
  margin-top: 70px;
  margin-left: -60%;
  padding-top: 680px;
  white-space: nowrap;
}
.pagination-progressive-bar {
  position: relative;
  display: inline-block;
  width: 900px;
  height: 1px;
  vertical-align: middle;
  &.swiper-pagination-progressbar {
    .swiper-pagination-progressbar-fill {
      background-color: $point;
    }
  }
}

@media (max-width: $mobile) {
  .text-wrap {
    width: 100%;
    padding: 12px;
    .title {
      font-size: 15px;
    }
  }
  .navy-infomation-list-pagination {
    margin-top: 56px;
    margin-left: 0;
    padding-top: 0;
  }

  .pagination-progressive-bar {
    width: calc(100% - 140px);
  }
}
.pagination-number-wrap {
  display: inline-block;
  height: 28px;
  margin-left: 60px;
  vertical-align: middle;
  i {
    display: inline-block;
    margin: 0 28px;
    color: #7e8792;
    font-weight: 500;
    font-size: 20px;
    font-family: $noto;
    line-height: 24px;
    vertical-align: top;
    span {
      color: #1655bf;
    }
  }
  .arrow-btn {
    width: 30px;
    height: 24px;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-size: 100%;
    &.prev-btn {
      background-image: url("~assets/images/common/ic-arrow-back@2x.png");
    }
    &.next-btn {
      background-image: url("~assets/images/common/ic-arrow-forward@2x.png");
    }
  }

  @media (max-width: $mobile) {
    margin-left: 28px;
    i {
      margin: 0 16px;
      font-size: 16px;
    }
    .arrow-btn {
      width: 20px;
      height: 18px;
    }
  }
}

.slide-wrap {
  position: absolute;
  left: 40%;
  width: 60%;
  margin-top: 88px;
  overflow: hidden;

  .swiper-container {
    width: 460px;
    margin: 0;
    overflow: visible;
  }
  @media (max-width: $mobile) {
    position: relative;
    left: 0;
    width: 100%;
    margin-top: 0;
    overflow: visible;
    .swiper-container {
      width: 100%;
    }
    .swiper-slide {
      transition: opacity 0.4s;
    }
    .swiper-slide-prev {
      opacity: 0;
    }
  }
}
</style>
