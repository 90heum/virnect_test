<template>
  <section id="galleryModule" class="gallery-module">
    <ul v-if="!isMobile || $route.name !== 'landing'">
      <li
        v-for="(list, idx) of galleryArr"
        :sep="list.id"
        @click="
          $router.push({ name: 'prDetail', params: { id: list.id } })
          scrollContent()
        "
        :key="idx"
      >
        <div
          class="img-wrap"
          :style="`background-image : url(${list.img})`"
        ></div>
        <div class="text-wrap">
          <p class="category">{{ list.category }}</p>
          <p class="title">{{ sliceStr(list.title) }}</p>
          <p class="date">{{ list.date }}</p>
        </div>
      </li>
    </ul>

    <swiper :options="introOption" v-if="isMobile && $route.name == 'landing'">
      <swiper-slide
        v-for="(list, idx) of galleryArr"
        :sep="list.id"
        @click="
          $router.push({ name: 'prDetail', params: { id: list.id } })
          scrollContent()
        "
        :key="idx"
      >
        <div
          class="img-wrap"
          :style="`background-image : url(${list.img})`"
        ></div>
        <div class="text-wrap">
          <p class="category">{{ list.category }}</p>
          <p class="title">{{ list.title }}</p>
          <p class="date">{{ list.date }}</p>
        </div>
      </swiper-slide>
    </swiper>
    <button id="moreBtn" v-if="!hideMoreBtn" @click="loadMore">
      {{ $t('global.galleryText.more') }}
    </button>
  </section>
</template>

<script>
export default {
  props: {
    galleryArr: Array,
    hideMoreBtn: Boolean,
  },
  data() {
    return {
      isMobile: false,
      introOption: {
        spaceBetween: 12,
        slidesPerView: 'auto',
      },
    }
  },
  computed: {
    
  },
  methods: {
    loadMore() {
      this.$emit('clickBtn')
    },
    sliceStr(str) {
      const length = this.$i18n.locale === 'ko' ? 42 : 64
      if (str.length > length) {
        return str.replace(str.substr(length), '...')
      } else return str
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/mixin.scss';
.gallery-module {
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
    margin-left: $mg;
    vertical-align: top;
    cursor: pointer;
  }
  .img-wrap {
    // height: 240px;
    background-position: center;
    background-size: cover;
    border: 1px solid #eaedf3;
    &:before {
      display: block;
      width: 100%;
      padding-top: 60%;
      content: '';
    }
  }
  .text-wrap {
    position: relative;
    padding: 14px 16px;
  }
  .category {
    margin-bottom: 10px;
    color: $point;
    font-weight: 600;
    font-size: 16px;
    font-family: $poppins;
    line-height: 1.75;
  }
  .title {
    position: relative;
    margin-bottom: 14px;
    padding-bottom: 16px;
    overflow: hidden;
    font-weight: 500;
    font-size: 20px;
    font-family: $noto;
    line-height: 1.5;
    text-overflow: ellipsis;
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
  .date {
    color: #858a90;
    font-size: 16px;
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
        position: absolute;
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
  @include into-btn();
  display: block;
  width: 180px;
  margin: 40px auto 150px;
  padding: 0;
  color: #5c6373;
  background: none;
  &:after {
    display: none;
  }

  @media (max-width: $mobile) {
    width: 100%;
    height: 46px;
    margin-top: 16px;
    margin-bottom: 140px;
    font-size: 16px;
  }
}
</style>
