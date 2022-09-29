<template>
  <section
    id="subVisualSection"
    class="sub-visual-section dark"
    :style="`background-image : url(${image})`"
  >
    <div class="visual-text-wrap">
      <p class="category" v-if="category">{{ category }}</p>
      <h2 class="title" v-html="title"></h2>
      <p class="contents" v-html="contents"></p>
      <slot name="search"></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    image: String,
    category: String,
    title: String,
    contents: String,
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
@import "~assets/css/global/subVisual.scss";
</style>
