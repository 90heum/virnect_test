<template>
   <span class="MenuSubSub">
          <ul>
            <li>
              <a :class="`${navActive === 1 ? 'SubSubActive' : ''}`" href="#headingModuleTop" id="a01" @click="() => navActive = 1">제품개요</a>
            </li>
            <li v-if="!type">
              <a :class="`${navActive === 2 ? 'SubSubActive' : ''}`" href="#featuresWrapId" id="a02" @click="() => navActive = 2">제품특징</a>
            </li>
            <li>
              <a :class="`${navActive === 3 ? 'SubSubActive' : ''}`" href="#headingModuleBottom" id="a03" @click="() => navActive = 3">기능소개</a>
            </li>
            <li>
              <a :class="`${navActive === 4 ? 'SubSubActive' : ''}`" href="#functionPart" id="a04" @click="() => navActive = 4">도입효과</a>
            </li>
          </ul>
        </span>
</template>

<script>
export default {
  props: {
    type: Boolean
  },
  data() {
    return {
      navActive: 1
    }
  }
}
</script>

<style lang="scss">
.MenuSubSub {
      ul {
        height: 100%;
        display: flex;
        align-items: center;
        li {
          border-right: 1px solid #c5c8cf;
          &:last-child {
            border-right: none;
          }
          a {
            font-size: 14px;
            font-weight: bold;
            line-height: 1;
            letter-spacing: -0.26px;
            color: #616161;
            margin: 0 20px;
            &:hover,
            &.SubSubActive {
              color: #121212;
            }
          }
        }
      }
    }
    @media screen and (max-width: 720px) {
  .SubMenu .SubMenuWrap .MenuSubSub ul {
    display: none;
  }

  .SubMenu .SubMenuWrap .MenuSub ul {
    width: 100%;
  }
}
</style>