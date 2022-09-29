<template>
  <section id="libraryModule" class="library-module">
    <dl class="no-data" v-if="libraryArr.length === 0">
      <dt>{{ $t('resources.noData.title') }}</dt>
      <dd>{{ $t('resources.noData.contents') }}</dd>
    </dl>
    <ul>
      <li
        v-for="(list, idx) of libraryArr"
        :sep="list.resoucesId"
        :key="idx"
        :class="{ none: idx > showitem }"
      >
        <transition name="app-fade" mode="out-in">
          <div
            v-if="idx < showitem"
            class="img-wrap"
            :style="`background-image : url(${clsImg(list.resourcesType)})`"
          >
            <div
              class="text-wrap"
              @click="$router.push(`/resources/library/${list.resourcesId}`)"
            >
              <p class="category">
                {{ setType(list.resourcesType) }}
              </p>
              <p class="title" v-html="list.title"></p>
              <p class="date">{{ list.date }}</p>
              <div class="bottom">
                <p
                  :class="i2 === 0"
                  v-for="(data, i2) in list.resourcesProduct"
                  :key="data"
                  v-show="list.resourcesProduct.length"
                >
                  <span class="tag" v-if="i2 === 0"
                    >{{ $t(`resources.filterArr.product.arr.${data}`) }} +
                    {{ list.resourcesProduct.length }}</span
                  >
                </p>
                <p
                  v-for="(data, i) in list.resourcesSolution"
                  :key="i"
                  v-show="list.resourcesSolution.length > 0"
                >
                  <span class="tag" v-if="i === 0"
                    >{{ $t(`resources.filterArr.solution.arr.${data}`) }} +
                    {{ list.resourcesSolution.length }}</span
                  >
                </p>
              </div>
              <img
                class="arrow"
                src="~assets/images/pages/resources/resources-path.png"
                alt=""
              />
            </div>
          </div>
        </transition>
      </li>
    </ul>
    <button id="moreBtn" v-if="libraryArr.length === 0" @click="resetBtn">
      {{ $t('global.listText') }}
    </button>
    <button
      id="moreBtn"
      @click="loadMore"
      v-if="libraryArr.length !== 0 && showitem < libraryArr.length"
    >
      {{ $t('global.galleryText.more') }}
      <img class="img" src="~assets/images/pages/resources/plus.png" />
    </button>
  </section>
</template>

<script>
// import mixin from 'mixins/mixin'
export default {
  // mixins: [mixin],
  props: {
    libraryArr: Array,
    showitem: Number,
  },
  data() {
    return {
      introOption: {
        spaceBetween: 12,
        slidesPerView: 'auto',
      },
    }
  },
  computed: {
    isShow() {
      if (this.libraryArr.length < this.showitem) return false
      else return true
    },
  },
  methods: {
    setType(val) {
      if (val === 'PR_NOTICE' || val === 'PR_EVENT' || val === 'PR_PRESS')
        return 'PR'
      else return this.$t(`resources.filterArr.type.arr.${val}`)
    },
    clsImg(val) {
      if (val === 'CUSTOMER' || val === 'REPORT') {
        return '../images/pages/resources/resources-case.png'
      } else if (val === 'VIDEO') {
        return '../images/pages/resources/resources-video.png'
      } else if (val === 'BROCHURE') {
        return '../images/pages/resources/resources-Brochure.png'
      } else if (val === 'MANUAL') {
        return '../images/pages/resources/resources-Manual.png'
      } else if (val === 'IR') {
        return '../images/pages/resources/resources-ir.png'
      } else if (
        val === 'PR' ||
        val === 'PR_NOTICE' ||
        val === 'PR_EVENT' ||
        val === 'PR_PRESS'
      ) {
        return '../images/pages/resources/resources-pr.png'
      }
    },
    loadMore() {
      this.$emit('clickBtn')
    },
    resetBtn() {
      this.$emit('resetBtn')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/mixin.scss';
.no-data {
  margin-bottom: 70px;
  text-align: center;
  dt {
    font-weight: 500;
    font-size: 32px;
  }
  dd {
    margin-top: 26px;
    font-size: 18px;
  }
  @media (max-width: $mobile) {
    dt {
      font-size: 24px;
    }
    dd {
      margin-top: 16px;
      font-size: 14px;
    }
  }
}
.library-module {
  $mg: 15px;
  ul {
    margin-right: -$mg;
    margin-left: -$mg;
    font-size: 0;
  }
  li {
    position: relative;
    display: inline-block;
    width: calc(100% / 3 - #{$mg}* 2);
    margin-right: $mg;
    margin-bottom: 68px;
    margin-left: $mg;
    vertical-align: top;
    &.none {
      margin-bottom: 0px !important;
    }
  }
  .img-wrap {
    height: 398px;
    background-position: center;
    background-size: cover;
    border: 1px solid #eaedf3;
    &:before {
      display: block;
      width: 100%;
      content: '';
    }
    .text-wrap {
      position: relative;
      height: 398px;
      padding: 39px 34px 36px;
      cursor: pointer;
      .category {
        padding-bottom: 18px;
        color: #ffffff;
        font-weight: 600;
        font-size: 19px;
        line-height: 1.47;
      }
      .title {
        color: #ffffff;
        font-weight: bold;
        font-size: 28px;
        font-family: $noto;
        line-height: 1.5;
        word-break: break-all;
        &:after {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 16px;
          height: 1px;
          background: #d4d9e1;
          content: '';
        }
      }
      .tag {
        display: inline-block;
        // width: 100%;
        height: 32px;
        margin-top: 14px;
        padding: 0 16px;
        color: #ffffff;
        font-weight: 500;
        font-size: 16px;
        font-family: $noto;
        line-height: 32px;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 16px;
      }
      .arrow {
        position: absolute;
        right: 34px;
        bottom: 43px;
        width: 73px;
        height: 12px;
        object-fit: contain;
        cursor: pointer;
      }
      .date {
        padding-top: 15px;
        padding-bottom: 30px;
        color: #858a90;
        color: #ffffff;
        font-weight: normal;
        font-size: 16px;
        font-family: $noto;
        line-height: 1.25;
        letter-spacing: 0.2px;
      }
      .bottom {
        position: absolute;
        bottom: 36px;
      }
    }
  }

  .news-contents-list {
    li {
      margin-bottom: 72px;
      @media (max-width: $mobile) {
        margin-bottom: 0;
      }
    }
  }
  @media (max-width: $mobile) {
    .category {
      margin-bottom: 6px;
    }
    .title {
      font-size: 15px;
    }
    ul {
      margin: 0;
    }
    li {
      width: 100%;
      margin: 0;
      margin-bottom: 30px;
      .text-wrap {
        padding: 14px 0;
      }
      .category {
        font-weight: bold;
        font-size: 14px;
      }
      &:last-child .title {
        &:after {
          display: none;
        }
      }
      .title {
        font-size: 20px;
        &:after {
          width: 100%;
        }
      }
      .date {
        position: relative;
        top: 16px;
        right: 0;
        font-size: 13px;
      }
    }
    .swiper-container {
      overflow: visible;
    }
    .category {
      font-size: 13px;
    }
    .title {
      font-size: 14px;
    }
    .swiper-slide {
      width: 70%;
    }
    .img-wrap {
      width: 100%;
      // height: 144px;
    }
  }
}
#moreBtn {
  .img {
    display: none;
    width: 14px;
    margin-left: 10px;
  }
  @include into-btn();
  display: block;
  width: 180px;
  margin: 40px auto 200px;
  padding: 0;
  color: #5c6373;
  background: none;
  &:after {
    display: none;
  }

  @media (max-width: $mobile) {
    .img {
      display: inline !important;
    }
    width: 100%;
    height: 46px;
    margin-top: 16px;
    margin-bottom: 140px;
    padding-right: 16px !important;
    font-size: 16px;
  }
}

@media (max-width: $mobile) {
  .img-wrap {
    height: 326px !important;

    .text-wrap {
      height: 326px !important;
      padding: 31px 26px 29px !important;

      p {
        &.category {
          padding-bottom: 8px !important;
          font-weight: 600;
          font-size: 14px !important;
        }

        &.date {
          padding: 0 !important;
          font-size: 13px !important;
        }
      }

      .arrow {
        right: 24px !important;
      }

      .tag {
        font-size: 13px !important;
      }

      .bottom {
        bottom: 29px !important;
      }
    }
  }
}
</style>
