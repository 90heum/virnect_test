<template>
  <header>
    <div class="wrab">
      <div class="headers">
        <div class="logo">
          <nuxt-link to="/">
            <div @click="hidebox()">로고 로고 로고 로고 로고</div>
          </nuxt-link>
        </div>
        <div class="nav">
          <ul>
            <li @click="[foo(), solutionShowF()]">Sloutions</li>
            <li @click="[foo(), productsShowF()]">Products</li>
            <li @click="[foo(), pricingShowF()]">Pricing</li>
            <li @click="[foo(), companyShowF()]">Company</li>
            <li @click="[foo()]">Contact</li>
            <li @click="[foo()]">Free Trials</li>
          </ul>
        </div>
        <div class="nav2">
          <ul>
            <li>Log in</li>
            <li>Sign up</li>
            <li @click="langlang()">
              <img
                src="../assets/earth.jpg"
                alt=""
                width="30px"
                height="30px"
              />
              <div class="langBox" v-if="showEarth">
                <div
                  v-for="locale in availableLocales"
                  :key="locale.code"
                  @click.prevent.stop="$i18n.setLocale(locale.code)"
                >
                  {{ locale.name }}
                </div>
              </div>
            </li>
            <li>B</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="gnbBox" v-if="show">
      <Solution class="aaa" v-if="solutionShow" />
      <Products class="aaa" v-if="productsShow" />
      <Pricing class="aaa" v-if="pricingShow" />
      <Company class="aaa" v-if="companyShow" />
      <Contact class="aaa" v-if="contactShow" />
      <FreeTrials class="aaa" v-if="freeTrialsShow" />
    </div>
    <div class="hideBox" v-if="show" @click="hidebox()"></div>
  </header>
</template>

<script>
import Solution from "./Gnb/Solution/index.vue";
import Products from "./Gnb/Products/index.vue";
import Pricing from "./Gnb/Pricing/index.vue";
import Company from "./Gnb/Company/index.vue";
import Contact from "./Gnb/Contact/index.vue";
import FreeTrials from "./Gnb/FreeTrials/index.vue";

export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },
  },

  components: { Solution, Products, Pricing, Company, Contact, FreeTrials },

  data: () => ({
    showEarth: false,
    master: false,
    test: false,
    show: false,
    solutionShow: false,
    productsShow: false,
    companyShow: false,
    pricingShow: false,
    contactShow: false,
    freeTrialsShow: false,
  }),
  methods: {
    langlang() {
      this.showEarth = !this.showEarth;
    },

    hidebox() {
      if (this.show == true) {
        this.solutionShow = false;
        this.productsShow = false;
        this.companyShow = false;
        this.pricingShow = false;
        this.contactShow = false;
        this.freeTrialsShow = false;
        this.show = false;
      }
    },

    foo() {
      if (this.show == false) {
        this.show = true;
      }
    },
    solutionShowF() {
      this.solutionShow = false;
      this.productsShow = false;
      this.companyShow = false;
      this.pricingShow = false;
      this.contactShow = false;
      this.freeTrialsShow = false;
      if (this.solutionShow == false) {
        this.solutionShow = true;
      }
    },
    productsShowF() {
      this.solutionShow = false;
      this.productsShow = false;
      this.companyShow = false;
      this.pricingShow = false;
      this.contactShow = false;
      this.freeTrialsShow = false;
      if (this.productsShow == false) {
        this.productsShow = true;
      }
    },
    pricingShowF() {
      this.solutionShow = false;
      this.productsShow = false;
      this.companyShow = false;
      this.pricingShow = false;
      this.contactShow = false;
      this.freeTrialsShow = false;
      if (this.pricingShow == false) {
        this.pricingShow = true;
      }
    },
    companyShowF() {
      this.solutionShow = false;
      this.productsShow = false;
      this.companyShow = false;
      this.pricingShow = false;
      this.contactShow = false;
      this.freeTrialsShow = false;
      if (this.companyShow == false) {
        this.companyShow = true;
      }
    },
  },
};
</script>

<style scoped>
.headers {
  z-index: 3;
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: darkgray;
}
.logo {
  background-color: blue;
}
.nav {
  width: 100%;
  background-color: red;
}
.nav2 {
  background-color: green;
}

.nav > ul {
  text-align: center;
  background-color: aqua;
  margin: 0 auto;
  height: 30px;
  margin-top: 30px;
}
ul {
  height: 50px;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.nav > ul > li {
  display: inline;
  margin-right: 70px;
}
.nav2 > ul > li {
  display: inline;
}
.gnbBox {
  margin-top: 80px;
  width: 100%;
  height: 400px;
  background-color: blueviolet;
  position: fixed;
  z-index: 100;
}
.hideBox {
  height: 450px;
  width: 100%;
  z-index: 99;
  position: absolute;
  bottom: -1px;
}

.SolutionC {
  display: none;
}
.ProductsC {
  display: none;
}

.langBox {
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: aqua;
  z-index: 30;
}
</style>