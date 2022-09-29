<template>
  <section id="newsDetailSection" class="news-view">
    <div class="view-head">
      <p class="category" v-if="boardContents.category">
        {{ boardContents.category }}
        <span class="date">{{ boardContents.date }}</span>
      </p>
      <p class="title">{{ boardContents.title }}</p>
    </div>
    <div class="view-body area-flex-inner">
      <div class="view-body-text" v-html="setHtml"></div>
    </div>
    <div class="view-foot">
      <button
        class="prev-btn page-btn"
        @click="
          $router.push({
            name: $route.name == 'prDetail' ? 'prDetail' : 'irDetail',
            params: { id: boardContents.prevID },
          })
          scrollContent(snbTop)
        "
        v-if="boardContents.prevTitle"
      >
        <p class="direction">{{ $t('global.boardText.prev') }}</p>
        <p class="title">{{ boardContents.prevTitle }}</p>
        <p class="date">{{ boardContents.date }}</p>
      </button>
      <button class="prev-btn page-btn" v-else>
        <p class="direction">{{ $t('global.boardText.prev') }}</p>
        <p class="title">{{ $t('global.boardText.prevNodata') }}</p>
        <p class="date"></p>
      </button>
      <button
        class="next-btn page-btn"
        @click="
          $router.push({
            name: $route.name == 'prDetail' ? 'prDetail' : 'irDetail',
            params: { id: boardContents.nextID },
          })
          scrollContent(snbTop)
        "
        v-if="boardContents.nextTitle"
      >
        <p class="direction">{{ $t('global.boardText.next') }}</p>
        <p class="title">{{ boardContents.nextTitle }}</p>
        <p class="date">{{ boardContents.date }}</p>
      </button>
      <button class="next-btn page-btn" v-else>
        <p class="direction">{{ $t('global.boardText.next') }}</p>
        <p class="title">{{ $t('global.boardText.nextNodata') }}</p>
        <p class="date"></p>
      </button>
    </div>
    <div class="align-center">
      <button
        @click="
          $router.push({ name: $route.name == 'prDetail' ? 'pr' : 'ir' })
          scrollContent(snbTop)
        "
      >
        {{ $t('global.listText') }}
      </button>
    </div>
  </section>
</template>

<script>
// import mixin from 'mixins/mixin'
export default {
  // mixins: [mixin],
  data() {
    return {
      snbTop: 540,
    }
  },
  props: {
    boardContents: Object,
  },
  computed: {
    setHtml() {
      let html = this.boardContents.text
      let multiple = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&apos;': '`',
      }
      for (let i in multiple) {
        let before = i
        let after = multiple[i]
        let pattern = new RegExp(before, 'g')
        html = html.replace(pattern, after)
      }
      // console.log(html)
      return html
    },
  },
  // methods: {
  //   setHtml() {
  //     let html = this.$props.boardContents.text
  //     let multiple = {
  //       '&amp;': '&',
  //       '&lt;': '<',
  //       '&gt;': '>',
  //       '&quot;': '"',
  //       '&apos;': '`',
  //     }
  //     for (let i in multiple) {
  //       let before = i
  //       let after = multiple[i]
  //       let pattern = new RegExp(before, 'g')
  //       html = html.replace(pattern, after)
  //     }
  //     return html
  //   },
  // },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/modules/board.scss';
@import '~assets/css/mixin.scss';
.right-align {
  text-align: right;
}
</style>
