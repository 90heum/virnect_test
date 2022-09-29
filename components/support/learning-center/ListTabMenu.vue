<template>
  <div>
    <!-- 리스트 탭 -->
    <div class="LearningCenterTab ListTabMenuWebWrapper">
      <div
        class="LearningCenterMbTab-prev"
        @click="
          chooseTabMenu(
            isTabMenu - 1 < 0
              ? categoryList[categoryList.length - 1].id
              : isTabMenu - 1
          )
        "
      >
        <img
          src="https://velog.velcdn.com/images/kyj0206/post/ca9d309b-94ce-41db-a002-66a2f0d76ff8/image.png"
          alt="prebutton"
        />
      </div>
      <span
        :class="data.id === isTabMenu ? 'active' : ''"
        v-for="(data, idx) of categoryList"
        :key="idx"
        @click="chooseTabMenu(data.id)"
      >
        <p>
          <img v-if="idx === 0 " src="~/assets/images/pages/support/icon-product-remote@2x.png" />
          <img v-else-if="idx === 1 " src="~/assets/images/pages/support/icon-product-make@2x.png" />
          <img v-else-if="idx === 2 " src="~/assets/images/pages/support/icon-product-view@2x.png" />
          <img v-else-if="idx === 3 " src="~/assets/images/pages/support/icon-product-workstation@2x.png" />
        
        </p>
        <p>
          {{ $i18n.localeProperties.code === "ko" ? data.name : data.nameEn }}
        </p>
      </span>

      <span @click="chooseTabMenu(null)" :class="!isTabMenu ? 'active' : ''">
        <p>
          <img
            src="https://velog.velcdn.com/images/kyj0206/post/90dc6681-fd1c-43de-ba9e-b1557f71b29a/image.png"
            alt="전체보기"
          />
        </p>
        <p>{{ $i18n.localeProperties.code === "ko" ? "전체보기" : "All" }}</p>
      </span>
      <div
        class="LearningCenterMbTab-next"
        @click="
          chooseTabMenu(isTabMenu + 1 > categoryList.length ? 0 : isTabMenu + 1)
        "
      >
        <img
          src="https://velog.velcdn.com/images/kyj0206/post/a1bbf083-3da6-413c-9f16-48fc60000827/image.png"
          alt="nextbutton"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categoryList: Array,
    isTabMenu: Number,
    chooseTabMenu: Function,
  },
  data() {
    return {
      jotang: ["icon-product-remote@2x","icon-product-make@2x","icon-product-view@2x","icon-product-workstation@2x"],
    };
  }
};
</script>

<style lang="scss" scoped>
.LearningCenterMbTab-prev,
.LearningCenterMbTab-next {
  display: none;
  cursor: pointer;
}
.LearningCenterTab {
  display: flex;
  margin-bottom: 10px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    flex: 1;
    padding: 13px 5px 11px;
    border: solid 1px #c5c8cf;
    gap: 10px;
    p {
      &:first-child {
        img {
          max-width: 34px;
          width: 100%;
          margin-top: 8px;
        }
      }
      &:last-child {
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: normal;
        text-align: center;
        color: #616161;
      }
    }
    &.active,
    &:hover {
      border: solid 1px #092e6e;
      background-color: #092e6e;
      p {
        color: #fff;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .LearningCenterTab span {
    border: none;
    border-bottom: 4px solid #092e6e;
    display: none;
  }
  .LearningCenterTab span.active {
    background-color: inherit;
    border: none;
    display: flex;
    border-bottom: 4px solid #092e6e;
    p {
      color: #616161;
      font-size: 20px;
    }
  }
  .LearningCenterMbTab-prev,
  .LearningCenterMbTab-next {
    display: flex;
    align-items: center;
    border-bottom: 4px solid #092e6e;
    img {
      max-width: 42px;
      width: 100%;
    }
  }
}
@media screen and (max-width: 600px) {
}
</style>