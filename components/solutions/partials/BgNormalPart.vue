<template>
  <section class="bg-normal-part dark">
    <div>
      <p>{{ text }}</p>
      <p class="bold" v-html="boldText"></p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    text: String,
    boldText: String,
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/css/pages/products.scss";
.bg-normal-part {
  margin-bottom: -12px;
  padding-top: 108px;
  text-align: center;
  background: url("~assets/images/pages/solution/img-bg-solutions.png")
    no-repeat top;
  background-size: 100%;
  > div {
    margin: 0 120px;
    padding: 120px 0 110px;
    background: url("~assets/images/pages/solution/img-solutions.png");
    background-size: cover;
  }
  p {
    font-weight: 300;
    font-size: 34px;
    &.bold {
      margin-top: 6px;
      font-weight: bold;
      font-size: 44px;
    }
  }
  .contents {
    font-weight: 500;
    font-size: 28px;
    line-height: 1.5;
  }

  @media (max-width: $mobile) {
    // margin-top: 120px;
    margin-bottom: -28px;
    padding-top: 28px;
    background: url("~assets/images/pages/solution/img-bg-solutions-m.png")
      no-repeat top;
    background-size: 100%;
    > div {
      margin: 0 24px;
      padding: 40px 0;
      background: url("~assets/images/pages/solution/img-solutions-m.png");
      background-size: cover;
    }
    p {
      font-size: 16px;
      &.bold {
        margin: 0 31px;
        margin-top: 8px;
        font-size: 26px;
      }
    }
  }
}
</style>
