<template>
<div :class="`${this.name}`">
    <span v-for="(arr, idx) of snbArr" :key="idx" class="subMenuInnerSpan" @click="$emit(`click`)">
            <nuxt-link :to="arr.to">
                {{arr.text}}
            </nuxt-link>
    </span>
</div>
</template>

<script>
// import mixin from 'mixins/mixin'
export default {
  // mixins: [mixin],
  props: {
    snbArr: Array,
    name: String,
    click: Function,

  },
  data() {
    return {
    }
  },
  
  methods: {
    
  },
}
</script>

<style lang="scss" scoped>
@import "~assets/css/pages/header.scss";
</style>
