<template>
  <section class="effect-part dark" :id="`${id}`">
    <div class="heading-wrap">
      <p class="category">{{ category }}</p>
      <h2 class="title" v-html="title"></h2>
      <p class="contents" v-html="contents"></p>
    </div>
    <div
      class="effectlist-wrap"
      :style="`background-image: url(https://virnect.com/images/pages/products/img-remote-effect.png)`"
      v-if="!isMobile"
    >
      <dl
        v-for="(list, idx) of effectArr"
        :key="idx"
        :class="{ active: activeIndex == idx }"
        @mouseenter="activeIndex = idx"
      >
        <dt>{{ list.title }}</dt>
        <dd v-html="list.contents"></dd>
      </dl>
    </div>
    <!-- <button class="grey-btn light">{{ greyBtn }}</button> -->
    <!-- <button class="blue-btn light">{{blueBtn}}</button> -->
    <client-only>
      <swiper
        :options="effectOptions"
        class="effectlist-wrap"
        v-if="isMobile"
        :style="`background-image : url(require(${bg}))`"
      >
        <swiper-slide v-for="(list, idx) of effectArr" :key="idx">
          <p class="title">{{ list.title }}</p>
          <p class="contents" v-html="list.contents"></p>
        </swiper-slide>
      </swiper>
      <ul class="pagination effect" slot="pagination" v-if="isMobile"></ul>
    </client-only>
  </section>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  props: {
    bg: String,
    category: String,
    title: String,
    contents: String,
    effectArr: Array,
    greyBtn: String,
    blueBtn: String,
    id: String,
  },
  data() {
    return {
      isMobile: false,
      activeIndex: "0",
      effectOptions: {
        breakpoints: {},
        loop: true,
        pagination: {
          el: ".pagination.effect",
          clickable: true,
          renderBullet(index, classs) {
            return `<li class="${classs}"><svg
 xmlns="http://www.w3.org/2000/svg"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 width="10px" height="12px">
<path fill-rule="evenodd"  
 d="M5.000,-0.000 L-0.000,3.000 L-0.000,9.000 L5.000,12.000 L10.000,9.000 L10.000,3.000 L5.000,-0.000 Z"/>
</svg></li>`;
          },
        },
      },
    };
  },
  computed: {
    // ...mapGetters(['isMobile']),
    // isMobileImage() {
    //   if (!this.isMobile) return this.bg
    //   else return `${this.bg}-m@2x`
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/css/mixin.scss";
.effect-part {
  h2 {
    font-size: 44px;
  }
  p {
    font-size: 16px;
  }
  position: relative;
  margin-top: 150px;
  text-align: center;
  border-top: 560px solid #202937;
  $height: 380px;
  .heading-wrap {
    margin-top: -452px;
    $height: 380px;
    .category {
      margin-bottom: 8px;
      color: #aecdff;
      font-weight: bold;
      font-size: 18px;
      font-family: $poppins, $noto;
      line-height: 1.56;
    }
    .title {
      margin-bottom: 20px;
      font-weight: bold;
      font-size: 44px;
      font-family: $noto;
      line-height: 1.45;
      color: #fff;
    }
    .contents {
      font-weight: normal;
      font-size: 16px;
      font-family: $noto;
      line-height: 1.88;
      color: #fff;
    }
  }
  @media (max-width: $mobile) {
    margin-top: 140px;
    border-top: 480px solid #202937;
    .heading-wrap {
      margin-top: -420px;
      .category {
        font-size: 14px;
      }
      .title {
        margin-bottom: 16px;
        font-size: 26px;
      }
      .contents {
        font-size: 15px;
      }
      p {
        padding: 0 24px;
      }
    }
  }
  .effectlist-wrap {
    @include area-flex(1272px);
    display: flex;
    margin-top: 60px;
    margin-bottom: 40px;
    background: #ccc;
    background-size: cover;
    dl {
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      width: 20.4%;
      height: $height;
      overflow: hidden;
      background: rgba(9, 16, 27, 0.6);
      transition: width 0.2s, background-color 0.4s;
      color: #fff;
      &.active {
        width: 41%;
        background: rgba(9, 16, 27, 0);
        .title,
        dt {
          color: #aecdff;
        }
        .contents,
        dd {
          height: 57px;
          opacity: 1;
          color: #fff;
        }
      }
    }
    .title,
    dt {
      width: 100%;
      margin-bottom: 12px;
      font-weight: bold;
      font-size: 24px;
      font-family: $poppins;
    }
    .contents,
    dd {
      width: 100%;
      height: 0;
      font-size: 18px;
      font-family: $noto;
      line-height: 1.56;
      opacity: 0;
      transition: opacity 0.4s, height 0.4s;
    }
  }

  @media (max-width: $mobile) {
    .effectlist-wrap {
      width: auto;
      margin: 0 24px;
      margin-top: 44px;
      padding: 0;
      .title,
      dt {
        color: #aecdff;
        font-size: 22px;
      }
      .contents,
      dd {
        height: auto;
        opacity: 1;
      }
    }
    .swiper-slide {
      padding: 70px 0;
    }
  }

  button {
    @include default-btn(220px);
  }
}
@media screen and (max-width: 1200px) {
  .carousel-wrapper li.swiper-pagination-bullet {
    margin-right: 10px !important;
  }
  .carousel-wrapper .pagination {
    display: flex !important;
    width: 100% !important;
    justify-content: center !important;
  }
}
</style>
