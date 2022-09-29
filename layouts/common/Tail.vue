<template>
  <!-- <section
    id="tailSection"
    class="tail-section dark"
    :style="`background-image : url(require(${bg}))`"
  >
    <p v-html="mention"></p>
    <button
      class="blue-btn"
      v-if="blueBtn"
      @click="
        $router.push({ name: blueRouter })
        scrollContent()
      "
    >
      {{ blueBtn }}
    </button>
    <button
      class="grey-btn"
      v-if="greyBtn"
      @click="
        $router.push({ name: greyRouter })
        scrollContent()
      "
    >
      {{ greyBtn }}
    </button>
  </section> -->
  <section>
    <div class="ValueCtaModule">
      <div class="ValueCtaCont">
        <span>
          <h2>산업 문제의 XR/DT 해답. VIRNECT가 알려드립니다.</h2>
          <p>다양한 산업에서 활용되어 있는 사례를 직접 확인하세요.</p>
          <span>
            <p>준비된 기술 컨설턴트가 직접 도움을 드립니다.</p>
            <span>
              <span>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/960b5c80-72dc-4243-b474-b7f6a0e2d73f/image.png"
                    alt="추가문의 연락처"
                /></i>
                <p>070.7733.2025</p>
                <a class="bb" href="/support/inquiry" target="blank"
                  >문의하기</a
                >
              </span>
              <button>
                <nuxt-link to="/value/infra_energy">
                  VIRNECT Value 바로가기
                </nuxt-link>
              </button>
            </span>
          </span>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
// import { mapGetters } from 'vuex'
// import mixin from 'mixins/mixin' << 모바일 체크용인듯
export default {
  // mixins: [mixin],
  props: {
    bg: String,
    mention: String,
    blueBtn: String,
    blueRouter: String,
    greyBtn: String,
    greyRouter: String,
  },
  computed: {
    // ...mapGetters(['isMobile']),
    // mobileImg() {
    //   if (!this.isMobile) return this.bg
    //   else return `${this.bg}-m@2x`
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/modules/ValueCtaModule.scss";
a.bb {
  font: none;
  text-decoration: none;
  color: white;
  padding-bottom: 2px;
}
</style>
