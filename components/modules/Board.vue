<template>
  <section id="board" class="board-module">
    <!-- Table -->
    <table>
      <thead>
        <tr>
          <th class="num">{{ $t('global.boardText.num') }}</th>
          <th class="title">{{ $t('global.boardText.title') }}</th>
          <th class="date">{{ $t('global.boardText.date') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="nodata" v-if="false">
          <td colspan="3">{{ $t('global.boardText.nodata') }}</td>
        </tr>
        <tr
          @click="$router.push({ name: 'irDetail', params: { id: ir.id } })"
          v-for="(ir, idx) of irContents"
          :key="idx"
        >
          <td class="num">{{ ir.id }}</td>
          <td class="title">{{ ir.title }}</td>
          <td class="date">{{ ir.date }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination -->
    <div class="pagination numb" v-if="true">
      <button
        class="prev-btn btn"
        @click="changePage(currentPage - 1)"
      ></button>
      <ul>
        <li
          v-for="(pagination, idx) in totalPage"
          :key="idx"
          :class="{ active: idx + 1 === currentPage }"
        >
          <button @click="changePage(idx + 1)">{{ idx + 1 }}</button>
        </li>
      </ul>
      <button
        class="next-btn btn"
        @click="changePage(currentPage + 1)"
      ></button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    irContents: Array,
    totalPage: Number,
  },
  data() {
    return {
      currentPage: 1,
    }
  },
  methods: {
    changePage(page) {
      if (page === this.currentPage || page > this.totalPage || page < 1)
        return false
      this.currentPage = page
      this.$emit('changePage', page)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/modules/board.scss';
</style>
