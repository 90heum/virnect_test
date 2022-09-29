<template>
  <el-dialog :visible.sync="show" :before-close="close" class="mobile-dialog">
    <section class="info-wrap">
      <div class="lay-1">
        <div class="title" v-html="dialogSetting.title"></div>
        <img
          @click="close"
          class="close"
          src="~assets/images/pages/pricing/ic-close-dialog.png"
          alt="close"
        />
      </div>
      <div
        class="desc"
        v-html="dialogSetting.desc"
        v-if="dialogSetting.desc === String(dialogSetting.desc)"
      ></div>
      <div
        v-else
        class="desc"
        v-for="(tooltip, idx) of dialogSetting.desc"
        :key="idx"
      >
        <p v-if="dialogSetting.desc.length > 1">{{ tooltip.title }} :</p>
        <p v-html="tooltip.tooltip"></p>
      </div>
      <span slot="footer" class="dialog-footer"> </span>
    </section>
  </el-dialog>
</template>
<script>
export default {
  props: {
    dialogSetting: Object,
  },
  data() {
    return {
      show: false,
    }
  },
  watch: {
    dialogSetting() {
      this.show = this.dialogSetting.dialog
    },
  },
  methods: {
    close() {
      this.show = false
      this.$emit('toolTips', false)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~assets/css/mixin.scss';
.mobile-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .info-wrap {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 40px 28px;
    overflow-y: auto;
    background-color: #ffffff;
    border-radius: 10px 10px 0 0;
  }
  .lay-1 {
    display: flex;
    justify-content: space-between;
    .title {
      color: #000000;
      font-weight: bold;
      font-size: 24px;
      font-family: $noto;
      line-height: 1.17;
    }
  }
  .desc {
    margin-top: 9px;
    color: #000000;
    font-weight: 500;
    font-size: 14px;
    font-family: $noto;
    line-height: 1.71;
  }
  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
}
</style>
