<template>
  <section
    id="headingModule"
    class="info-text-heading"
    :class="{ 'align-left': align == 'left' }"
  >
    <p class="category" v-if="category">{{ category }}</p>
    <p class="title" v-html="title"></p>
    <p class="contents" v-if="contents" v-html="contents"></p>
    <button class="circle-arrow-btn" v-if="btnText" @click="filterEvent()">
      {{ btnText }}
    </button>
  </section>
</template>

<script>
// import mixin from 'mixins/mixin'
export default {
  // mixins: [mixin],
  props: {
    align: String,
    category: String,
    title: String,
    contents: String,
    required: String,
    btnText: String,
    btnRoute: String,
    btnPopup: String,
  },
  methods: {
    filterEvent() {
      if (this.btnRoute) {
        this.$router.push({ name: this.btnRoute })
        this.scrollReset()
      }
      if (this.btnPopup) {
        this.$emit('popupToggle')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/mixin.scss';
#headingModule {
  @include area-flex(1200px);
  padding-top: 180px;
  padding-bottom: 60px;
  text-align: center;
  &.align-left {
    text-align: left;
  }
  @include default-text(#222222, 44px);
  &.dark {
    @include default-text(#ffffff, 44px);
    .category {
      color: #aecdff;
    }
  }

  @media (max-width: $mobile) {
    padding-top: 72px;
    padding-bottom: 40px;
  }
}
</style>
