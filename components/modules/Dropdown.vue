<template>
  <div class="dropdown-wrap">
    <span class="front-text">
      {{ frontText }}
    </span>
    <el-dropdown
      trigger="click"
      :class="dropActive ? 'dropdown-2' : 'dropdown-1'"
      :hide-on-click="false"
      @visible-change="click"
    >
      <span class="main">
        <p class="text">{{ mainText }}</p>
        <img
          src="~assets/images/pages/resources/ic-expand-more.png"
          class="icon"
          alt="draw 아이콘"
        />
      </span>
      <el-dropdown-menu slot="dropdown" class="drop-menu-1">
        <div class="filter">{{ $t('resources.filter') }}</div>
        <el-dropdown-item v-for="(list, i) of menuList" :key="i">
          <el-checkbox
            class="dropdown"
            v-model="checkAll"
            @change="handleCheckAllChange"
            v-if="i === 'CUSTOMER' || i === 'REMOTE' || i === 'ENERGY'"
            >All</el-checkbox
          >
          <el-checkbox-group
            v-model="checkedList"
            @change="handleCheckedListChange"
          >
            <el-checkbox class="dropdown" :label="i">{{ list }}</el-checkbox>
          </el-checkbox-group>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
// import mixin from 'mixins/mixin'
export default {
  // mixins: [mixin],
  props: {
    filter: String,
    frontText: String,
    menuList: Object,
    isFilter: Boolean,
  },
  data() {
    return {
      checkAll: true,
      checkedList: [],
      mainText: 'ALL',
      dropActive: false,
    }
  },
  computed: {},
  watch: {
    isFilter() {
      this.handleCheckAllChange()
    },
    '$i18n.locale'() {
      this.handleCheckAllChange()
    },
    checkedList(val) {
      if (val.length >= Object.entries(this.menuList).length) {
        this.mainText = 'ALL'
      } else if (val.length === 0) {
        this.checkAll = true
        this.mainText = 'ALL'
      }
    },
  },
  methods: {
    click(val) {
      this.dropActive = val
    },
    setArr(obj) {
      const arr = []
      for (let [idx, val] of Object.entries(obj)) {
        arr.push(idx)
      }
      return arr
    },
    handleCheckAllChange() {
      this.mainText = 'ALL'
      this.checkAll = true
      this.checkedList = []
      this.$emit('handleFilter', this.filter, this.setArr(this.menuList))
    },
    handleCheckedListChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.menuList.length
      if (this.checkAll === true) {
        this.mainText = 'ALL'
      } else if (checkedCount === 0) {
        this.handleCheckAllChange()
      } else if (checkedCount === 1) {
        this.mainText = this.$t(
          `resources.filterArr.${this.filter}.arr.${value[0]}`,
        )
        this.$emit('handleFilter', this.filter, this.checkedList)
      } else {
        this.mainText =
          this.$t(`resources.filterArr.${this.filter}.arr.${value[0]}`) +
          ` +${value.length - 1}`
        this.$emit('handleFilter', this.filter, this.checkedList)
      }
    },
  },
  created() {
    this.$emit('handleFilter', this.filter, this.setArr(this.menuList))
  },
}
</script>
<style lang="scss" scoped>
@import '~assets/css/mixin.scss';
.filter {
  color: #566173;
  font-weight: 500;
  font-size: 12px;
  font-family: $noto;
  line-height: 1.5;
}
.el-dropdown-menu {
  width: 192px;
  height: auto;
  padding-bottom: 20px;
  background-color: #ffffff;
  border: solid 1px #e6e9ee;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.06);
  .el-dropdown-menu__item {
    outline: 0;
  }
}
.dropdown-wrap {
  display: flex;
}
.front-text {
  display: flex;
  align-items: center;
  height: 47px;
  margin-right: 10px;
  color: #0d2a58;
  font-weight: bold;
  font-size: 18px;
  font-family: $noto;
  line-height: 1.67;
}
.dropdown-1 {
  ::selection {
    background-color: transparent;
  }
  display: flex;
  max-height: 47px;
  // background-color: #fafbfc;
  background-color: #f8f9fb;
  outline: 0;
  cursor: pointer;
  .main {
    width: 192px;
    height: 47px;
    padding-top: 14px;
    padding-left: 16px;
    color: #8b96a8;
    font-weight: 500;
    font-size: 14px;
    font-family: $noto;
    line-height: 1.43;
    background-color: #f8f9fb;
    outline: 0;
    .text {
      display: inline-block;
      width: 140px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .icon {
    position: absolute;
    transition: transform 0.3s;
  }
}
.dropdown-2 {
  ::selection {
    background-color: transparent;
  }
  display: flex;
  max-height: 47px;
  margin-left: -4px;
  background-color: #fafbfc;
  background-color: #ffffff;
  border: solid 2px #5696f0;
  outline: 0;
  cursor: pointer;
  .main {
    width: 192px;
    height: 47px;
    padding-top: 12px;
    padding-left: 18px;
    color: #8b96a8;
    font-weight: 500;
    font-size: 14px;
    font-family: $noto;
    line-height: 1.43;
    outline: 0;
    .text {
      display: inline-block;
      width: 140px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .icon {
    position: absolute;
    transform: rotate(180deg);
    transition: transform 0.3s;
  }
}
.drop-menu-1 {
  padding-top: 10px;
  padding-right: 16px;
  padding-left: 16px;
}
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  border-radius: 0px !important;
}
.mmt-18 {
  margin-top: 18px !important;
}
</style>
