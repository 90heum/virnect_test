<template>
  <!-- Video Tutorial -->
  <div
    class="tutorialBox"
    v-if="
      isDetailList === 5 ||
      isDetailList === null ||
      isDetailList === 2 ||
      isDetailList === 3
    "
  >
    <!-- 타이틀 -->

    <span class="tutorialBoxTit">
      <p>Video Tutorial</p>
      <p @click="chooseTypeMenu(5)">
        {{ $i18n.localeProperties.code === "ko" ? "전체보기" : "All" }}
        <i>
          <img
            src="https://velog.velcdn.com/images/kyj0206/post/bf391c7f-fbc8-466f-af3a-9f6ca4433529/image.png"
            alt="more"
          />
        </i>
      </p>
    </span>
    <!-- 컨텐츠박스 -->
    <span class="tutorialBoxCont">
      <div
        v-for="(data, idx) of contentList.length > 0
          ? contentList.filter((e, idx) => {
              if (!isDetailList && idx < 3) {
                return e;
              } else if (isDetailList) {
                return e;
              }
            })
          : []"
        :key="idx"
      >
        <nuxt-link
          :to="`learning-video-detail?category=${data.id}&type=${data.typeId}&cateId=${data.categoryId[0]}`"
        >
          <span class="listImg">
            <img
              :src="`${
                data.thumbnail
                  ? data.thumbnail
                  : 'https://velog.velcdn.com/images/kyj0206/post/75a8bf3a-fe84-47e5-aa54-fca6f438b599/image.png'
              }`"
            />
          </span>
          <span class="listInfo">
            <span>
              <h2>
                {{
                  $i18n.localeProperties.code === "ko"
                    ? data.title
                    : data.titleEn
                }}
              </h2>
            </span>
            <span class="tagWrapper" style="height: auto">
              <p v-for="(innerData, idx) of data.categoryName" :key="idx">
                {{ innerData }}
              </p>
            </span>
          </span>
        </nuxt-link>
      </div>
    </span>
    <!-- 모바일용 전체보기 버튼  -->
    <span class="mobileMore">
      <button>
        <a href="#">{{
          $i18n.localeProperties.code === "ko" ? "전체보기" : "All"
        }}</a>
      </button>
    </span>

    <div v-if="isDetailList || isDetailList === 5">
      <common-paging :pagingData="pagingData" :movePage="movePage" />
    </div>
  </div>
</template>

<script>
import CommonPaging from "~/components/paging/paging.vue";

export default {
  components: {
    CommonPaging,
  },
  props: {
    contentList: Array,
    isDetailList: Number,
    pagingData: Object,
    movePage: Function,
    chooseTypeMenu: Function,
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/pages/support-learning-center.scss";
.tutorialBox {
  li,
  ul,
  a {
    list-style: none;
    text-decoration: none;
  }
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px #616161;
  .tutorialBoxTit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      display: block;
      margin-bottom: 30px;
      margin-top: 60px;
      &:first-child {
        font-size: 24px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: -0.3px;
        color: #0a51b7;
      }
      &:last-child {
        cursor: pointer;
        display: flex;
        font-size: 14px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.18px;
        text-align: right;
        color: #9a9da3;
        i {
          margin-left: 7px;
          display: flex;
          padding-top: 1px;
          img {
            max-width: 12px;
            width: 100%;
            height: 12px;
          }
        }
      }
    }
  }
  .tutorialBoxCont {
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    margin-bottom: 70px;
    > div {
      margin-right: 15px;
      display: block;
      cursor: pointer;
      height: 100%;
      padding: 26px;
      border: solid 1px #e6e8eb;
      background-color: #fff;
      max-width: 324px;
      width: calc((100% - 30px) / 3);
      &:first-child {
        margin-right: 15px;
        margin-bottom: 15px;
      }
      &:nth-child(2) {
        margin-right: 15px;
        margin-bottom: 15px;
      }
      &:nth-child(3n) {
        margin-right: 0px;
        margin-bottom: 15px;
      }
      a {
        display: flex;
        flex-direction: column;
        max-height: 300px;
        min-height: 300px;
        span {
          &.listImg {
            flex: 1;
            display: block;
            margin-bottom: 16px;
            img {
              width: 100%;
            }
          }
          &.listInfo {
            flex: 13;
            display: flex;
            flex-direction: column;
            span {
              &:first-child {
                h2 {
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  display: -moz-box;
                  -webkit-line-clamp: 2;
                  -moz-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  -moz-box-orient: vertical;
                  font-size: 20px;
                  font-weight: bold;
                  font-stretch: normal;
                  font-style: normal;
                  line-height: 1.4;
                  letter-spacing: -0.25px;
                  color: #121212;
                  margin-bottom: 12px;
                  height: 56px;
                }
              }
              &:nth-child(2) {
                // max-width: 60px;
                // max-height: 24px;
                // padding: 6px 10px;
                // border-radius: 12px;
                // border: solid 1px #3f97d3;
                // background-color: #fff;
                p {
                  font-size: 12px;
                  font-weight: bold;
                  font-stretch: normal;
                  font-style: normal;
                  line-height: 1;
                  letter-spacing: normal;
                  text-align: center;
                  color: #3f97d3;
                  margin-right: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
  .mobileMore {
    display: none;
    text-align: center;
    margin: 30px 0 60px 0;
    button {
      cursor: pointer;
      padding: 10px 30px 9px;
      border: solid 1px #979797;
      background-color: #f7f8f9;
      a {
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #121212;
      }
    }
  }
}
.tagWrapper {
  display: block;
  width: 100%;
  overflow: hidden;
  p {
    // max-width: 60px;
    -moz-padding: 6px 10px;
    max-height: 24px;
    padding: 4.5px 10px;
    border-radius: 12px;
    border: solid 1px #3f97d3;
    background-color: #fff;
    display: inline-block;
  }
}
@media screen and (max-width: 768px) {
  .tutorialBox .tutorialBoxCont > div {
    width: calc((100% - 30px) / 2);
  }
  .tutorialBox .tutorialBoxCont > div:nth-child(3) {
    margin-right: 15px;
    margin-bottom: 15px;
  }
}
</style>