<template>
  <div>
    <!-- 헤더 -->
    <head-banner />
    <sub-menu :isActive="'learning-center'" />

    <!-- 콘텍트 콘텐츠 -->
    <div class="LearningCenter">
      <list-tab-menu
        :categoryList="categoryList"
        :isTabMenu="isTabMenu"
        :chooseTabMenu="chooseTabMenu"
      />

      <!-- 학습센터 고정 모듈 -->
      <static-module />

      <!-- 컨텐츠 -->
      <div class="tabCont">
        <!-- aside -->
        <aside-menu
          :typeList="typeList"
          :chooseTypeMenu="chooseTypeMenu"
          :isTypeMenu="isTypeMenu"
        />

        <!-- 블로그 탭 리스트 -->
        <span class="LearningCenterList">
          <user-manual
            :contentList="
              contentList.manual || contentList.supportLearningResponseList
            "
            :isDetailList="isTypeMenu"
            :pagingData="pagingData"
            :movePage="movePage"
            :chooseTypeMenu="chooseTypeMenu"
          />
          <video-tutoral
            :contentList="
              contentList.tutorial || contentList.supportLearningResponseList
            "
            :isDetailList="isTypeMenu"
            :pagingData="pagingData"
            :movePage="movePage"
            :chooseTypeMenu="chooseTypeMenu"
          />
          <!-- <video-real-guide :contentList="contentList.guide||contentList.supportLearningResponseList"
                                      :isDetailList="isTypeMenu"
                                      :pagingData="pagingData"
                                      :movePage="movePage"
                                      :chooseTypeMenu="chooseTypeMenu"/> -->
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import HeadBanner from "~/components/support/headBannerCENTER.vue";
import SubMenu from "~/components/support/SubMenu.vue";
import AsideMenu from "~/components/support/learning-center/AsideMenu.vue";
import ListTabMenu from "~/components/support/learning-center/ListTabMenu.vue";
import StaticModule from "~/components/support/learning-center/StaticModule.vue";
import UserManual from "~/components/support/learning-center/userManual.vue";
import VideoTutoral from "~/components/support/learning-center/videoTutorial.vue";
import VideoRealGuide from "~/components/support/learning-center/videoRealGuide.vue";
export default {
  head: {
    title: '학습센터 - VIRNECT',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'VIRNECT 제품 사용을 위한 튜토리얼, 메뉴얼, 유용한 팁 등을 안내합니다.'
      }
    ],
  },
  watch: {
    $route(to, from) {
      // this.chooseTabMenu(Number(this.$route.query.category) || 1)
      this.isTabMenu = Number(this.$route.query.category);
      this.isTypeMenu = Number(this.$route.query.type) || null;
      this.requestData();
    },
  },
  data() {
    return {
      isTabMenu: Number(this.$route.query.category) || 1,
      isTypeMenu: Number(this.$route.query.type) || null,
      // isTabMenu: 1,
      // isTypeMenu: 1,
      pagingData: {
        currentPage: 1,
        currentSize: 20,
        totalPage: 1,
        totalElements: 1,
        startPage: 1,
        endPage: 1,
      },
      contentList: [],
    };
  },
  methods: {
    movePage(currentPage, isPaging = false) {
      this.pagingData = {
        ...this.pagingData,
        currentPage: isPaging ? currentPage : 1,
      };
      this.requestData();
    },
    chooseTabMenu(e) {
      this.$router.push(`?category=${e ? e : ""}`);
      // this.isTabMenu = e;
      // this.isTypeMenu = null;
      // this.requestData();
    },
    chooseTypeMenu(e) {
      this.$router.push(
        `?category=${this.isTabMenu ? this.isTabMenu : ""}&type=${e || ""}`
      );
      // this.isTypeMenu = e;
      // this.requestData();
    },
    requestData() {
      this.$axios
        .get(
          `admin/support/learning?page=${this.pagingData.currentPage}&size=${
            this.pagingData.currentSize
          }&categoryId=${this.isTabMenu ? this.isTabMenu : ""}&typeId=${
            this.isTypeMenu ? (this.isTypeMenu === 5 ? 0 : this.isTypeMenu) : ""
          }`
        )
        .then((res) => (this.contentList = res.data.data))
        .catch((e) => console.error(e));
    },
  },
  components: {
    HeadBanner,
    SubMenu,
    AsideMenu,
    ListTabMenu,
    StaticModule,
    UserManual,
    VideoTutoral,
    VideoRealGuide,
  },
  async asyncData({ $axios, route }) {
    const routeCategory = Number(route.query.category) || 1;
    const routeType = Number(route.query.type) || null;
    try {
    
      const data = Promise.all([
        $axios.get("admin/support/learning/category"),
        $axios.get("admin/support/learning/type"),
        $axios.get(
          `admin/support/learning?categoryId=${routeCategory}&typeId=${
            routeType ? (routeType === 5 ? 0 : routeType) : ""
          }&page=1&size=${20}`
        ),
      ]);
      const dataJson = await data;

      return {
        categoryList: dataJson[0].data.data.categoryList,
        typeList: dataJson[1].data.data.typeList,
        contentList: dataJson[2].data.data,
      };
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style lang="scss" scoped>
.LearningCenter {
  li,
  ul,
  a {
    list-style: none;
    text-decoration: none;
  }
  margin: 0 auto;
  max-width: 1260px;
  width: 100%;
  padding: 150px 30px;

  .tabCont {
    display: flex;
    gap: 20px;
  }
  .LearningCenterList {
    display: block;
    width: 100%;
  }
}
@media screen and (max-width: 768px) {
  .LearningCenter .tabCont {
    display: block;
  }
}
</style>