<template>
  <section class="solution-infographic-part">
    <client-only>
    <div class="img-wrap">
      <img :src="image" />
      <!-- <button @click="fancyPop(image)" class="expand-btn" v-if="checkMobile()"> -->
      <button @click="fancyPop(image)" class="expand-btn">
        <!-- <img src="~assets/images/pages/solution/ic-search@2x.png" /> -->
      </button>
    </div>

    <ul>
      <li
        v-for="(list, idx) of infographicArr"
        :key="idx"
        :class="{ active: idx == activeIdx }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="10px"
          height="12px"
        >
          <path
            fill-rule="evenodd"
            fill="rgb(22, 85, 191)"
            d="M5.000,-0.000 L-0.000,3.000 L-0.000,9.000 L5.000,12.000 L10.000,9.000 L10.000,3.000 L5.000,-0.000 Z"
          />
        </svg>
        <h4 v-html="list.title" @click="slideDown(idx)"></h4>
        <div class="text-wrap">
          <p v-html="list.contents"></p>
          <img :src="`${list.image}`" />
          <!-- <button
            @click="fancyPop(list.image)"
            v-if="checkMobile()"
            class="expand-btn"
          > -->
          <button @click="fancyPop(list.image)" class="expand-btn">
            <!-- <img src="~assets/images/pages/solution/ic-search@2x.png" /> -->
          </button>
          <p class="thumb-text" v-if="slideList[idx].length >= 1">
            {{ $t("solutionText.exampleTitle.category") }}
          </p>
          <div class="slide-wrap">
            <div v-if="(arrow[idx] = false)">
              <button class="prev-btn arrow-btn"></button>
              <div class="fade-bg left"></div>
            </div>
            <!-- 1 --> 
            <div class="carousel-wrapper">
              <div
                v-swiper:mySwiper="solutionGellaryOption"
                class="solution-slide-image"
              >
                <div class="swiper-wrapper" @transitionEnd="getArrowSlide()">
                  <div
                    v-for="(list, idx) of slideList[idx]"
                    :key="idx"
                    class="img-wrapper swiper-slide"
                    :style="`background-image: url(${list.thumb})`"
                  >
                    <img
                      class="product-icon"
                      v-for="(ico, i) of list.iconList"
                      :src="`${ico}@2x.png`"
                      :key="i"
                    />
                    <!-- <div @click="fancyPop(list.img)"></div> -->
                  </div>
                </div>
              </div>
            </div>
            <!-- 2 -->
            <!-- 3 -->
            <!-- 4 -->

            <div v-if="(arrow[idx] = false)">
              <button class="next-btn arrow-btn"></button>
              <div class="fade-bg right"></div>
            </div>
          </div>
          <transition name="app-fade" mode="out-in">
            <div class="fancy-box" v-if="fancyPopup">
              <div>
                <button class="popup-close-btn" @click="fancyPop()">
                  <img
                    src="https://virnect.com/images/common/ic-close@2x.png"
                  />
                </button>
                <img :src="showImage" />
              </div>
              <article @click="fancyPop()"></article>
            </div>
          </transition>
          <!-- <button
            class="into"
            v-for="(btn, idx) of btnList[idx]"
            :key="idx"
            @click="
              $router.push({ name: btn.router });
              scrollContent(811);
            "
          >
            {{ btn.name }}
          </button> -->
        </div>
      </li>
    </ul>
    </client-only>
  </section>
</template>

<script>
// import mixin from 'mixins/mixin'
export default {
  // mixins: [mixin],
  props: {
    title: String,
    contents: String,
    image: String,
    infographicArr: Array,
    btnList: Array,
    slideList: Array,
  },
  data() {
    return {
      activeIdx: 0,
      fancyPopup: false,
      showImage: "",
      direction: "horizontal",
      solutionGellaryOption: {
        slidesPerView: "auto",
        spaceBetween: 12,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        },
      },
      arrow: [false, false, false, false],
    };
  },
  methods: {
    slideDown(idx) {
      if (this.activeIdx == idx) return (this.activeIdx = null);
      else return (this.activeIdx = idx);
      // console.log(idx)
      // window.scrollTo({
      // 	left: 0,
      // 	top: element + 50,
      // })
    },
    fancyPop(e) {
      this.showImage = e;
      this.fancyPopup = !this.fancyPopup;
      document.documentElement.classList.toggle("box");
    },
    getArrowSlide() {
      for (let i in this.slideList) {
        if (this.slideList[i].length >= 4) {
          this.arrow[i] = true;
        }
      }
      // this.$nextTick(() => {
      // 	// if (this.$el.querySelector('.arrow-btn').getAttribute('aria-disabled')) {
      // 	// console.log(
      // 	let btn = this.$el.querySelector('.fade-bg')
      // 	if (btn) {
      // 		console.log(btn)
      // 		btn.nextElementSibling.style.display = 'none'
      // 	} else {
      // 		this.$el.querySelector(
      // 			'.arrow-btn',
      // 		).nextElementSibling.style.display = 'block'
      // 	}
      // 	// btn.nextElementSibling.style.display = 'none'
      // 	// )
      // 	// console.log(this.$el.querySelector('.arrow-btn').nextElementSibling)
      // 	// }
      // 	// console.log(this.$el.querySelector('.arrow-btn').nextElementSibling)
      // 	// console.log(
      // 	// 	this.$el.querySelector('.next-btn').getAttribute('aria-disabled'),
      // 	// )
      // })
    },
  },
  created() {
    this.getArrowSlide();
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/css/pages/products.scss";
img {
  width: 100%;
}
p {
  color: #292c30;
}
.solution-infographic-part {
  @include area-flex(1160px);
  text-align: center;
}
h3 {
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 38px;
  font-family: $noto;
  line-height: 1.53;
}
.contents {
  margin-bottom: 52px;
  font-size: 16px;
  font-family: $noto;
  line-height: 1.88;
}
.img-wrapper {
  margin-right: 12px;
}
ul {
  margin-top: 108px;
}

.expand-btn {
  display: none;
}

@media (max-width: $mobile) {
  .img-wrap {
    margin: 0 -24px;
  }
  ul {
    margin-top: 90px;
    border-top: 1px solid #ced3dc;
  }
  .expand-btn {
    position: relative;
    display: block;
    float: right;
    width: 40px;
    height: 34px;
    height: auto;
    margin-right: 24px;
    padding-top: 9px;
    background: #fff;
    border: 1px solid #eaedf3;
    border-radius: 4px;
    img {
      width: 16px;
    }
  }
  .text-wrap .expand-btn {
    z-index: 2;
    margin-top: -46px;
    margin-right: 6px;
  }
}
li {
  position: relative;
  padding-top: 24px;
  padding-bottom: 88px;
  text-align: left;
  border-top: 1px solid #ced3dc;
  @include clearfix();
  h4 {
    float: left;
    width: 34%;
    padding-left: 28px;
    color: $point;
    font-weight: bold;
    font-size: 20px;
  }

  .text-wrap {
    float: left;
    width: 66%;
    overflow: hidden;
    p {
      margin-bottom: 28px;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.78;
    }

    .thumb-text {
      margin-top: 28px;
      margin-bottom: 10px;
      font-weight: 500;
      font-size: 14px;
      line-height: 2;
    }
    .into {
      @include into-btn();
      margin-top: 44px;
      margin-right: 8px;
    }
  }

  svg {
    position: absolute;
    top: 33px;
    left: 2px;
  }
  @media (max-width: $mobile) {
    padding-top: 16px;
    padding-bottom: 16px;
    border-top: 0;
    border-bottom: 1px solid #ced3dc;
    &.active {
      margin-top: -1px;
      padding-bottom: 30px;
      border-top: 2px solid $point;
      h4 {
        margin-bottom: 14px;
        background-image: url("~assets/images/pages/products/ic-remove@2x.png");
      }
      .text-wrap {
        height: auto;
      }
    }
    h4 {
      float: none;
      width: 100%;
      margin-bottom: 0;
      padding-right: 24px;
      padding-left: 30px;
      font-size: 16px;
      background-image: url("~assets/images/pages/products/ic-add@2x.png");
      background-repeat: no-repeat;
      background-position: right;
      background-size: 20px;
    }
    .text-wrap {
      float: none;
      width: 100%;
      height: 0;
      padding-left: 30px;
      p {
        margin-bottom: 14px;
        font-size: 14px;
      }
      .thumb-text {
        margin-top: 20px;
        margin-bottom: 8px;
      }
      .into {
        margin-top: 28px;
        & + .into {
          margin-top: 8px;
        }
      }
    }
    svg {
      top: 23px;
      left: 10px;
    }
  }
}
.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.slide-wrap {
  position: relative;
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
  .arrow-btn {
    position: absolute;
    top: 50%;
    z-index: 3;
    width: 40px;
    height: 40px;
    background-color: #fff;
    background-position: center;
    background-size: 20px;
    border: 1px solid #d7dce5;
    border-radius: 50%;
    transform: translateY(-50%);

    &.prev-btn {
      left: -8px;
    }
    &.next-btn {
      right: -8px;
    }
    &.swiper-button-disabled {
      opacity: 0;
    }
  }
}
.solution-slide-image {
  .swiper-slide {
    width: 190px;
    height: 120px;
    background-position: center;
    background-size: 110%;
    > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 8px 5px;
      cursor: pointer;
      &:hover {
        background: rgba(0, 0, 0, 0.6);
        &:after {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 24px;
          height: 24px;
          color: #fff;
          font-weight: 500;
          font-size: 18px;
          font-family: $noto;
          line-height: 24px;
          text-align: center;
          background: rgba(22, 85, 191, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.15);
          transform: translate(-50%, -50%);
          content: "+";
        }
      }
    }
  }
  .product-icon {
    width: 26px;
    margin: 6px;
  }
  @media (max-width: $mobile) {
    .swiper-slide {
      width: 148px;
      height: 94px;
    }
  }
}

.fancy-box {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  img {
    position: relative;
    z-index: 1;
  }
  article {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
  > div {
    position: relative;
  }

  .popup-close-btn {
    position: absolute;
    top: -6px;
    left: 102%;
    z-index: 2;
    width: 28px;
    height: 28px;
    margin: 0;
    padding: 0;
    border: 0;
  }

  @media (max-width: $mobile) {
    // > div {
    // 	background: #fff;
    // 	padding: 20px 0;
    // }
    .popup-close-btn {
      top: -36px;
      left: 90%;
    }
  }
}
.fade-bg {
  position: absolute;
  top: 0;
  z-index: 2;
  width: 40%;
  height: 100%;
  pointer-events: none;
  &.left {
    left: 0;
    background-image: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
  }
  &.right {
    right: 0;
    background-image: linear-gradient(to left, #fff, rgba(255, 255, 255, 0));
  }
}
</style>
