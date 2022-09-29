<template>
  <section id="bannerSection" class="banner-section">
    <div
      class="main-scroll-newsletter"
      @mouseenter="cursorIn"
      @mouseleave="cursorOut"
    >
      <ul class="banner-list">
        <li
          v-for="(banner, idx) of $t('bannerText.bannerList')"
          :key="idx"
          :class="{ active: active == idx }"
        >
          <div>
            <button
              class="area-flex"
              @click="
                $router.push({
                  name: banner.router,
                  params: { id: banner.seq },
                })
              "
              v-if="banner.router"
            >
              <span class="category" v-html="banner.category"></span>
              <span v-html="banner.title" class="title"></span>
              <p v-html="banner.content" class="txt"></p>
              <p v-html="banner.period" class="period"></p>
              <p v-html="banner.place" class="place"></p>
              <p v-html="banner.noti" class="noti"></p>
            </button>
            <a class="area-flex" :href="banner.isTabUrl" target="blank" v-else>
              <span class="category" v-html="banner.category"></span>
              <span v-html="banner.title" class="txt"></span>
              <span v-html="banner.content" class="txt"></span>
              <p v-html="banner.period" class="period"></p>
              <p v-html="banner.place" class="place"></p>
            </a>
          </div>
        </li>
      </ul>
      <div class="area-flex" v-if="$t('bannerText.bannerList').length >= 2">
        <ul class="banner-pagination">
          <li
            v-for="(banner, idx) of $t('bannerText.bannerList')"
            :key="idx"
            :class="{ active: active == idx }"
            @click="moveTo(idx)"
          >
            <button>{{ idx }}</button>
          </li>
        </ul>
      </div>
      <ul class="popup-foot">
        <li id="popUpNoMore" @click="nomore">{{ $t('bannerText.nomore') }}</li>
        <li id="popUpClose" @click="close">{{ $t('bannerText.close') }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
// import mixin from 'mixins/mixin'

export default {
  // mixins: [mixin],
  data() {
    return {
      active: 0,
      playBanner: null,
      listLegnth: this.$t('bannerText.bannerList').length,
    }
  },
  methods: {
    moveTo(idx) {
      this.active = idx
    },
    // cursorIn() {
    //   window.addEventListener('scroll', this.noscroll)
    //   window.addEventListener('wheel', this.wheel)
    // },
    // cursorOut() {
    //   window.removeEventListener('scroll', this.noscroll)
    //   window.removeEventListener('wheel', this.wheel)
    // },
    // noscroll() {
    //   window.scrollTo(0, 0)
    // },
    autoPlay() {
      this.playBanner = setInterval(() => {
        if (this.active < this.listLegnth - 1) {
          this.active++
        } else {
          this.active = 0
        }
        if (this.$route.name !== 'landing') {
          clearInterval(this.playBanner)
        }
      }, 5000)
    },
    wheel(e) {
      const delta = e.deltaY
      if (delta < 0) {
        // 휠 위로
        this.active--
        if (this.active < 0) {
          this.active = this.listLegnth - 1
        }
      } else {
        // 휠 아래로
        this.active++
        if (this.active >= this.listLegnth) {
          this.active = 0
        }
      }
    },
    nomore() {
      this.$emit('nomoreBanner')
      this.$emit('toggleBanner')
    },
    close() {
      this.$emit('toggleBanner')
    },
  },
  // beforeDestroy() {
  //   window.removeEventListener('scroll', this.noscroll)
  // },
  mounted() {
    if (
      this.$t('bannerText.bannerList').length > 1 &&
      this.$route.name === 'landing'
    ) {
      this.autoPlay()
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/modules/banner.scss';
@import '~assets/css/mixin.scss';
</style>
