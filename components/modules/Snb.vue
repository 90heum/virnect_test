<template>
  <nav id="snb" class="snb-section" :class="{ sticky: snbSticky }">
    <ul>
      <template v-for="(arr, idx) of snbArr">
        <li
          :class="{ active: $route.path === arr.to }"
          :key="idx"
          v-if="arr.page !== 'blank'"
        >
          <router-link :to="arr.to"> {{ arr.text }} </router-link>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
// import mixin from 'mixins/mixin'
export default {
  // mixins: [mixin],
  props: {
    snbArr: Array,
  },
  data() {
    return {
      snbSticky: false,
      snbTop: '',
      didScroll: 0,
      pushup: false,
    }
  },
  watch: {
    // $route() {
    //   if (process.client) {
    //     this.didScroll = window.pageYOffset
    //   if (this.didScroll > this.snbTop) {
    //     this.snbSticky = true
    //     document.querySelector('#headerSection').classList.add('sticky-pushup')
    //   } else {
    //     this.snbSticky = false
    //   }
    //   }
      
    // },
  },
  computed: {
    // isMobile() {
    //   return this.$store.getters.isMobile
    // },
  },
  created() {
    // if (process.client) window.addEventListener('scroll', this.snbNav)
  },
  beforeDestroy() {
    // window.removeEventListener('scroll', this.snbNav)
    // window.removeEventListener('scroll', this.hasScrolled)
  },
  methods: {
    // snbNav() {
    //   let scrollY = window.pageYOffset
    //   let elHeight = this.$el.offsetHeight
    //   this.snbTop = document.querySelector('#subVisualSection').offsetHeight
    //   if (scrollY - elHeight > this.snbTop) {
    //     this.snbSticky = true
    //     document.querySelector('#headerSection').classList.add('sticky-pushup')
    //     document.querySelector('#headerSection').classList.remove('active')
    //     this.$eventHub.$emit('headerClose')
    //     this.hasScrolled()
    //   } else {
    //     this.snbSticky = false
    //     document
    //       .querySelector('#headerSection')
    //       .classList.remove('sticky-pushup')
    //   }
    // },
    // hasScrolled() {
    //   let header = document.querySelector('#headerSection')

    //   if (window.pageYOffset > this.didScroll) {
    //     header.classList.add('sticky-pushup')
    //     document.querySelector('#headerSection').classList.remove('active')
    //   } else {
    //     header.classList.remove('sticky-pushup')
    //   }

    //   this.didScroll = window.pageYOffset
    // },
  },
}
</script>

<style lang="scss">
nav.sticky {
  + section {
    padding-top: 65px;
  }
}
</style>

<style lang="scss" scoped>
@import '~assets/css/mixin.scss';
nav {
  z-index: 4;
  width: 100%;
  text-align: center;
  background: #fff;
  border-bottom: 1px solid #eaedf3;
  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
  }
}
ul {
  display: flex;
  width: 1200px;
  margin: auto;
}

li {
  position: relative;
  flex-grow: 1;
  font-size: 16px;
  &:hover {
    a {
      color: $point;
      opacity: 1;
    }
  }
  &.active {
    a {
      color: $point;
      opacity: 1;
    }
    &:before {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 100%;
      height: 2px;
      background-color: $point;
      transform: translateX(-50%);
      opacity: 0.75;
      content: '';
    }
  }
  &:after {
    position: absolute;
    top: 50%;
    right: 0;
    width: 1px;
    height: 18px;
    background: #d2d5da;
    transform: translateY(-50%);
    content: '';
  }
  &:last-child {
    &:after {
      display: none;
    }
  }
}
a {
  display: inline-block;
  width: 100%;
  height: 64px;
  color: #0d2a58;
  font-weight: 500;
  font-family: $noto;
  line-height: 64px;
  opacity: 0.5;
}

@media (max-width: $mobile) {
  nav {
    overflow-x: scroll;
  }
  ul {
    width: 100%;
  }
  li {
    font-size: 15px;
  }
  a {
    width: auto;
    height: 56px;
    padding: 0 24px;
    line-height: 56px;
    white-space: nowrap;
  }
}
</style>
