<template>
  <section class="benefit-part">
    <dl v-for="(list, idx) of benefitArr" :key="idx">
      <dt class="title">{{ list.title }}</dt>
      <!-- 단순 텍스트일 때 -->
      <dd
        v-if="typeof list.contents === 'string'"
        class="contents"
        v-html="list.contents"
      ></dd>
      <!-- 리스트 목록일 때 -->
      <dd v-if="typeof list.contents === 'object'" class="contents">
        <div v-for="[key, value] in list.contents" :key="key">
          <span v-html="key" />
          <span v-html="value" />
        </div>
      </dd>
    </dl>
  </section>
</template>

<script>
export default {
  props: {
    benefitArr: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/css/mixin.scss";
.benefit-part {
  // 장점 4개
  @include area-flex(1200px);

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  dl {
    width: calc(50% - 15px);
    padding: 26px;
    text-align: left;
    border-top: 1px solid #ced3dc;
    &:nth-child(3) {
      border-bottom: 1px solid #ced3dc;
    }
    &:nth-child(4) {
      border-bottom: 1px solid #ced3dc;
    }
    @include default-text($point, 20px);
    .title {
      margin-bottom: 12px;
    }
    .contents {
      font-weight: 400;
      span:nth-child(1) {
        display: inline-block;
        width: 138px;
        margin-bottom: 10px;
      }
    }
  }

  @media (max-width: $mobile) {
    margin-bottom: 64px;
    dl {
      width: 100%;
      padding: 14px 12px;
      &:nth-child(3) {
        border-bottom: 0;
      }
      .title {
        margin-bottom: 8px;
        font-size: 18px;
      }
      .contents {
        font-size: 14px;
        span:nth-child(1) {
          width: 30%;
          vertical-align: top;
        }
        span:nth-child(2) {
          display: inline-block;
          width: 60%;
          margin-bottom: 10px;
          margin-left: 5%;
          line-height: 24px;
        }
      }
    }
  }
}
</style>
