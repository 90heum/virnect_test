<template>
  <section class="issue-part">
    <div
      class="img-wrap"
      :style="`background-image : url(${bannerImg})`"
    ></div>
    <div class="text-wrap">
      <p class="issue-title">{{ title }}</p>
      <dl v-for="(list, idx) of issueArr" :key="idx">
        <dt class="title">
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
          {{ list.title }}
        </dt>
        <dd class="contents" v-html="list.contents"></dd>
      </dl>
    </div>
  </section>
</template>

<script>
// import mixin from 'mixins/mixin'
export default {
  // mixins: [mixin],
  data() {
    return {
      isMobile: false,
    }
  },
  props: {
    image: String,
    title: String,
    issueArr: Array,
    bannerImg: String
  },
  computed: {
    isMobile() {
      // if (!this.checkMobile()) return this.image
      // else return `${this.image}-m@2x`
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/pages/products.scss';
.issue-part {
  // padding-top: 160px;
  @include area-flex(1200px);
}

.issue-title {
  margin-bottom: 24px;
  color: #000;
  font-weight: 600;
  font-size: 16px;
}

.img-wrap {
  // height: 520px;
  background-color: #ccc;
  background-position: center;
  background-size: cover;
  &:before {
    display: block;
    width: 100%;
    padding-top: 43.33%;
    content: '';
  }
}

.text-wrap {
  @include default-text($point, 20px);
  margin: -100px 120px 0;
  padding: 40px;
  background: #fff;
  .title {
    margin-bottom: 12px;
  }
  .contents {
    font-weight: 400;
  }
}

svg {
  position: absolute;
  top: 8px;
  left: 4px;
}

dl {
  position: relative;
  margin-bottom: 30px;
}

dt,
dd {
  padding-left: 32px;
}
@media (max-width: $mobile) {
  .issue-title {
    margin-bottom: 12px;
    font-size: 14px;
  }
  .img-wrap {
    // height: 240px;
    margin: 0 -24px;
    &:before {
      padding-top: 66.66%;
    }
  }
  .text-wrap {
    margin: -48px -4px 0;
    padding: 14px 20px;
    .title {
      margin-bottom: 8px;
      font-size: 16px;
    }
    .contents {
      font-size: 14px;
    }
  }
  svg {
    top: 6px;
    left: 3px;
  }
  dl {
    margin-bottom: 20px;
  }
  dt,
  dd {
    padding-left: 30px;
  }
}
</style>
