<template >
  <section>
    <Header />
    <nuxt />
    <Footer />
  </section>
</template>

<script>
// import Header from "../components/header.vue";
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";

export default {
  components: { Header, Footer },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Signika+Negative:wght@400;600&display=swap");
/* @import "~assets/css/reset.scss";
@import "~assets/css/common.scss"; */
html {
  /* font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", */
  /* Roboto, "Helvetica Neue", Arial, sans-serif; */
  font-family: "Pretendard";
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  line-height: 1.8;
}

ul,
ol {
  margin: 0;
  padding: 0;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

@media screen and (max-width: 425px) {
  /* .productsSubMain {
     min-width: 600px;
     width: 100vw;
   } */

  body {
    min-width: 425px;
    width: 100vw;
  }
}
</style>

