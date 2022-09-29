<template>
  <div class="support-part">
    <dl v-for="(list, idx) of supportArr" :key="idx">
      <dt class="title">
        <p>{{ list.title }}</p>
      </dt>
      <dd class="contents">
        <p v-html="list.contents"></p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    supportArr: Array,
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/mixin.scss';
dl {
  padding: 24px 30px 24px 52px;
  text-align: left;
  background: url('~assets/images/common/ic-polygon@2x.png') no-repeat 20px 30px;
  background-size: 18px;
  @include default-text($point, 20px);

  .title {
    margin-bottom: 12px;
    line-height: 1.5;
  }

  .contents {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.75;
  }
  @media (max-width: $mobile) {
    padding: 14px 0 14px 28px;
    background: url('~assets/images/common/ic-polygon@2x.png') no-repeat 0 16px;
    background-size: 16px;
    border-top: 1px solid #ced3dc;
    &:last-child {
      border-bottom: 1px solid #ced3dc;
    }
    .title {
      margin-bottom: 8px;
      font-size: 18px;
    }
    .contents {
      font-size: 14px;
    }
  }
}
</style>
