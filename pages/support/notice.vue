<template>
  <div>
    <!-- 헤더 -->
    <head-banner />

    <!-- 콘텍트 콘텐츠 -->
    <div class="contactTab">
      <sub-menu :isActive="'notice'" />

      <div data-content="1" class="contactTabActive1">
        <div class="noticeWrap">
          <!-- aside -->
          <aside-menu
            :asideData="asideData"
            :chooseType="chooseType"
            :isType="isType"
          />

          <!-- 블로그 리스트 -->
          <notice-contents
            :pagingData="pagingData"
            :contentData="contentData"
            :movePage="movePage"
            :isType="isType"
          />
        </div>
      </div>
    </div>
    <noticeBanner />
  </div>
</template>

<script>
import HeadBanner from "~/components/support/headBannerProduct.vue";
import SubMenu from "~/components/support/SubMenu.vue";
import AsideMenu from "~/components/support/notice/AsideMenu.vue";
import NoticeContents from "~/components/support/notice/NoticeContents.vue";
import noticeBanner from "~/layouts/common/Tail.vue";
export default {
  head: {
    title: 'Product Notice - VIRNECT',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'VIRNECT 제품 및 서비스 이용을 위한 주요 안내를 확인해 보세요.'
      }
    ],
  },
  watch: {
    $route() {
      const type = Number(this.$route.query.type) || null;
      this.chooseType(type);
    },
  },
  components: {
    HeadBanner,
    SubMenu,
    AsideMenu,
    NoticeContents,
    noticeBanner,
  },
  data() {
    return {
      pagingData: {
        currentPage: 1,
        currentSize: 20,
        totalPage: 1,
        totalElements: 1,
        startPage: 1,
        endPage: 1,
      },
      asideData: [],
      contentData: [],
      isType: Number(this.$route.query.type) || null,
    };
  },
  methods: {
    movePage(currentPage) {
      this.pagingData = { ...this.pagingData, currentPage: currentPage };
      this.chooseType(this.isType, true);
    },
    async chooseType(e, isPaging = false) {
      this.isType = e;
      // this.$router.push(`?type=${e ? e : ""}`);
      if (!isPaging) this.pagingData = { ...this.pagingData, currentPage: 1 };
      try {
        const data = await this.$axios.get(
          `admin/support/notice?page=${this.pagingData.currentPage}&size=${
            this.pagingData.currentSize
          }${this.isType ? "&type=" + this.isType : ""}`
        );
        const dataJson = await data;
        this.contentData = dataJson.data.data.supportNoticeResponseList;
        this.pagingData = dataJson.data.data.pageMetadataResponse;
        window.scrollTo({top: "0px"})
      } catch (e) {
        console.error(e);
      }
    },
  },
  async asyncData({ $axios, route }) {
    const routeType = route.query.type ? route.query.type : null;
    try {
      const data = Promise.all([
        $axios.get("admin/support/notice/type"),
        $axios.get(
          `admin/support/notice?page=1&size=${20}${
            routeType ? "&type=" + routeType : ""
          }`
        ),
      ]);
      const dataJson = await data;
      return {
        asideData: dataJson[0].data.data.noticeType,
        contentData: dataJson[1].data.data.supportNoticeResponseList,
        pagingData: dataJson[1].data.data.pageMetadataResponse,
      };
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style lang="scss" scoped>
.noticeWrap {
  display: flex;
  gap: 20px;
  margin: 0 auto;
  max-width: 1260px;
  width: 100%;
  padding: 150px 30px;
}
@media screen and (max-width: 1024px) {
  .noticeWrap {
    flex-direction: column;
    padding: 100px 24px;
  }
}
</style>