<template>
  <section class="function-part">
    <dl
      v-for="(list, idx) of functionArr"
      :key="idx"
      :style="`backgroundImage : url(${list.img})`"
      @click="slideDown(idx)"
      :class="{ active: idx == activeIdx }"
    >
      <dt class="title">{{ list.title }}</dt>
      <dd class="contents" v-html="list.contents"></dd>
    </dl>
  </section>
</template>

<script>
export default {
  props: {
    functionArr: Array,
    iconImage: String,
  },
  data() {
    return {
      activeIdx: 0,
    };
  },
  methods: {
    slideDown(idx) {
      if (this.activeIdx == idx) return (this.activeIdx = null);
      else return (this.activeIdx = idx);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/css/mixin.scss";
.function-part {
  // 기능소개 6개
  @include area-flex(1200px);

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: -20px;
  border-bottom: 1px solid #ced3dc;
  border-left: 1px solid #ced3dc;

  dl {
    background-position-x: calc(80%);
    width: calc(100% / 4);
    min-height: 320px;
    padding: 26px 30px 28px;
    text-align: left;
    background-repeat: no-repeat;
    background-position: 175px 200px;
    background-size: 100px;
    border-top: 1px solid #ced3dc;
    border-right: 1px solid #ced3dc;
  }
  @include default-text($point, 18px);
  .title {
    margin-bottom: 10px;
  }
  .contents {
    font-weight: 400;
    line-height: 1.5;
  }
  @media (max-width: $mobile) {
    border: 0;
    dl {
      width: 100%;
      // height: 54px;
      min-height: auto;
      padding: 15px 6px 13px 44px;
      overflow: hidden;
      background-position: 6px 13px;
      background-size: 28px;
      border-top: 0;
      border-right: 0;
      border-bottom: 1px solid #ced3dc;
      &:first-child {
        border-top: 1px solid #ced3dc;
      }
      &.active {
        height: auto;
        margin-top: -1px;
        border-top: 2px solid $point;
        .title {
          margin-bottom: 13px;
          color: $point;
          background-image: url("~assets/images/pages/products/ic-remove@2x.png");
        }
        .contents {
          display: block;
        }
      }
    }
    .title {
      margin-bottom: 0;
      // margin-bottom: 13px;
      padding-right: 20px;
      color: #222;
      font-size: 16px;
      background-image: url("~assets/images/pages/products/ic-add@2x.png");
      background-repeat: no-repeat;
      background-position: right;
      background-size: 20px;
    }
    .contents {
      display: none;
      font-size: 14px;
    }
  }
}
@media (min-width: $mobile) {
  html:lang(en) .function-part dl {
    min-height: 380px;
    background-position-y: 274px;
    background-position-x: calc(80%);
  }
}
</style>
