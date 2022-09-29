<template>
  <span class="noticeList">
    <ul>
      <li>{{$t(`supportText.noticeList.title1`)}}</li>
      <li>{{$t(`supportText.noticeList.title2`)}}</li>
      <li>{{$t(`supportText.noticeList.title3`)}}</li>
    </ul>

    <ul v-for="(data, idx) of contentData || []" :key="idx">
      <li>
        {{
          $i18n.localeProperties.code === "ko" ? data.typeName : data.typeNameEn
        }}
      </li>
      <li>
        <nuxt-link
          :to="`notice-detail?id=${data.id}&type=${
            isType === null ? '' : isType
          }`"
          >{{
            $i18n.localeProperties.code === "ko" ? data.title : data.titleEng
          }}</nuxt-link
        >
      </li>
      <li>{{ $dayjs(data.createdDate).format("YYYY-MM-DD") }}</li>
    </ul>

    <!-- 페이지네이션 -->
    <common-paging :pagingData="pagingData" :movePage="movePage" />
  </span>
</template>

<script>
import CommonPaging from "~/components/paging/paging.vue";

export default {
  components: {
    CommonPaging,
  },
  props: {
    pagingData: Object,
    contentData: Array,
    movePage: Function,
    isType: [Number, Boolean],
  },
};
</script>

<style lang="scss" scoped>
.noticeList {
  li,
  ul,
  a {
    text-decoration: none;
    list-style: none;
  }
  display: block;
  width: 100%;
  > ul {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    border-bottom: solid 1px #c5c8cf;
    padding-left: 0px;
    li {
      padding: 31px 0;
      font-size: 16px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.75;
      letter-spacing: normal;
      color: #616161;
      a {
        color: #616161;
      }
      &:first-child {
        flex: 1;
        text-align: left;
        padding-left: 30px;
        font-weight: 500;
        color: #616161;
      }
      &:nth-child(2) {
        flex: 6;
        font-size: 16px;
        a {
          &:hover {
            color: #0a51b7;
          }
        }
      }
      &:last-child {
        flex: 1;
        text-align: right;
        white-space: nowrap;
        padding-right: 30px;
        font-weight: 500;
        color: #616161;
      }
    }
    &:first-child {
      border-top: solid 1px #616161;
      border-bottom: solid 1px #616161;
      > li {
        padding: 23px 0;
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.75;
        letter-spacing: normal;
        text-align: center;
        color: #121212;
        &:first-child {
          text-align: left;
          padding-left: 30px;
        }
        &:nth-child(2) {
          text-align: center;
        }
        &:last-child {
          text-align: right;
          padding-right: 30px;
        }
      }
    }
    &:nth-last-child(2) {
      margin-bottom: 50px;
    }
  }
}
</style>>
