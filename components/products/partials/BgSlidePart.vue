<template>
  <div class="bg-part dark">
    <div>
      <div class="carousel-wrapper">
    <div v-swiper:mySwiper="bgExampleOption">
      <div class="swiper-wrapper">
        <div v-for="(list, idx) of bgExampleArr" :key="idx" class="img-wrapper swiper-slide">
          <img :src="`${imgList[idx]}`" />
          <p class="contents" v-html="list.contents"></p>
          <p class="category">{{list.category}}</p>
        </div>
      </div>
    </div>
  </div>
      <ul class="pagination bg" slot="pagination"></ul>
    </div>
  </div>
</template>

<script>
// import mixin from '~/mixins/mixin'
export default {
  // mixins: [mixin],
  data() {
    return {
      imgList: ['https://virnect.com/images/pages/products/logo-recommendation-sds.png',
      'https://virnect.com/images/pages/products/logo-recommendation-oci.png',
      'https://virnect.com/images/pages/products/logo-recommendation-miraecity.png',
      'https://virnect.com/images/pages/products/logo-recommendation-lgchem.png'],
      bgExampleOption: {
        loop: true,
        direction: 'vertical',
        mousewheel: true,
        pagination: {
          el: '.pagination.bg',
          clickable: true,
          renderBullet(index, classs) {
            return `<li class="${classs} swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10px" height="12px">
<path fill-rule="evenodd" d="M5.000,-0.000 L-0.000,3.000 L-0.000,9.000 L5.000,12.000 L10.000,9.000 L10.000,3.000 L5.000,-0.000 Z"></path>
</svg></li>
`
          },
        },

        breakpoints: {
          1200: {
            mousewheel: false,
            direction: 'vertical',
            spaceBetween: 32,
          },
        },
      },
    }
  },
  props: {
    bgExampleArr: Array
  },
  computed: {
    isMobile() {
      let arr = []
      // for (let val of this.bgExampleArr) {
      //   // if (!this.checkMobile()) {
      //   //   arr.push(val.img)
      //   // } else {
      //   //   arr.push(`${val.img}-m@2x`)
      //   // }
      // }
      return arr
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/mixin.scss';
.bg-part {
  position: relative;
  margin-top: 240px;
  padding-bottom: 40px;
  @include area-flex(1680px);
  overflow: hidden;
  background-image: url('~assets/images/pages/products/img-recommendation@2x.png');
  background-size: cover;
  > div {
    height: 400px;
    padding: 80px 100px 86px;
  }
}
.pagination {
  position: absolute;
  top: 50%;
  right: 68px;
  z-index: 2;
  transform: translateY(-50%);
  list-style: none;

}
p {
  font-family: $noto;
  line-height: 1.75;
}
.swiper-container {
  overflow: visible;
}

.contents {
  position: relative;
  margin-top: 28px;
  margin-bottom: 20px;
  font-size: 24px;
  color: #ffffff;
  &:before {
    position: absolute;
    top: -8px;
    left: -40px;
    font-weight: 600;
    font-size: 80px;
    font-family: $poppins;
    line-height: 1;
    opacity: 0.25;
    content: '“';
  }
}
.category {
  font-size: 16px;
  color: #ffffff;
}

@media (max-width: $mobile) {
  .bg-part {
    width: auto;
    max-height: 438px;
    margin: 0 18px;
    margin-top: 142px;
    padding-right: 0;
    padding-left: 0;
    text-align: center;
    background-image: url('~assets/images/pages/products/img-recommendation-m@2x.png');
    > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 36px 24px 92px;
    }
    &:before {
      display: block;
      width: 100%;
      padding-top: 118.18%;
      content: '';
    }
  }
  .contents {
    margin-top: 66px;
    margin-bottom: 16px;
    font-size: 18px;
    color: #ffffff;
    &:before {
      top: -32px;
      left: 44%;
    }
  }
  .category {
    font-size: 13px;
    color: #ffffff;
  }
  .pagination {
    top: auto;
    right: 0;
    bottom: -4px;
    width: 100%;
    text-align: center;
    transform: translateY(0);
  }
}
</style>
