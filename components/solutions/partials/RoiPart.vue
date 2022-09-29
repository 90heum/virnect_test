<template>
  <section class="roi-part">
    <p v-html="text"></p>
    <p class="bold" v-html="boldText"></p>
    <button class="blue-btn light" v-if="btnText">{{ btnText }}</button>
  </section>
</template>

<script>
export default {
  props: {
    text: String,
    boldText: String,
    btnText: String,
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/css/pages/products.scss";
.roi-part {
  margin-top: 100px;
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;
  background: url("~assets/images/pages/solution/img-solutions-roi.png")
    no-repeat;
  background-size: cover;
  p {
    font-size: 34px;
    color: black;
  }
  .bold {
    margin-top: 4px;
    font-weight: bold;
    font-size: 42px;
    line-height: 1.57;
  }
  button {
    @include default-btn(220px);
  }
  @media (max-width: $mobile) {
    // margin-top: 120px;
    // margin-bottom: 120px;
    margin-top: 0;
    padding-top: 50px;
    padding-bottom: 48px;
    background: url("~assets/images/pages/solution/img-solutions-roi-m.png")
      no-repeat;
    background-size: cover;
    p {
      padding: 0 24px;
      font-size: 18px;
    }
    .bold {
      margin-top: 8px;
      font-size: 26px;
    }
  }
}
</style>
