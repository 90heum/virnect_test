<template>
<div>
     <!-- 헤더 -->
    <learn-banner/>
    <sub-menu :isActive="'learning-center'"/>

    <!-- 콘텍트 콘텐츠 -->
    <div class="LearningCenter">

    <list-tab-menu :categoryList="categoryList"
                   :isTabMenu="isTabMenu"
                   :chooseTabMenu="chooseTabMenu"/>

    <!-- 학습센터 고정 모듈 -->
    <static-module />

     <!-- 컨텐츠 -->
        <div class="tabCont">
              <!-- aside -->
              <aside-menu :typeList="typeList"
                          :chooseTypeMenu="chooseTypeMenu"
                          :isTypeMenu="isTypeMenu"/>

               <!-- 블로그 탭 리스트 -->
                <span class="LearningCenterList">
                    <user-manual :contentList="contentList.manual||contentList.supportLearningResponseList"
                                 :isDetailList="isTypeMenu"
                                 :pagingData="pagingData"
                                 :movePage="movePage"
                                 :chooseTypeMenu="chooseTypeMenu"/>
                    <video-tutoral :contentList="contentList.tutorial||contentList.supportLearningResponseList"
                                   :isDetailList="isTypeMenu"
                                   :pagingData="pagingData"
                                   :movePage="movePage"
                                   :chooseTypeMenu="chooseTypeMenu"/>
                    <video-real-guide :contentList="contentList.guide||contentList.supportLearningResponseList"
                                      :isDetailList="isTypeMenu"
                                      :pagingData="pagingData"
                                      :movePage="movePage"
                                      :chooseTypeMenu="chooseTypeMenu"/>
                </span>
        </div>
    </div>

</div>  
</template>

<script>
import SubMenu from "~/components/support/SubMenu.vue";
import AsideMenu from "~/components/support/learning-center/AsideMenu.vue";
import ListTabMenu from "~/components/support/learning-center/ListTabMenu.vue";
import StaticModule from "~/components/support/learning-center/StaticModule.vue";
import UserManual from "~/components/support/learning-center/userManual.vue";
import VideoTutoral from "~/components/support/learning-center/videoTutorial.vue";
import VideoRealGuide from "~/components/support/learning-center/videoRealGuide.vue";
import LearnBanner from "./learnBanner.vue";

export default {
    data () {
        return {
            isTabMenu: 1,
            isTypeMenu: null,
            pagingData: {
                currentPage: 1,
                currentSize: 20,
                totalPage: 1,
                totalElements: 1,
                startPage: 1,
                endPage: 1
            },
            contentList: [],
        }
    },
    methods: {
        movePage (currentPage, isPaging = false) {
            this.pagingData = {...this.pagingData, currentPage: isPaging ? currentPage : 1};
            this.requestData();
        },
        chooseTabMenu (e) {
            this.isTabMenu = e;
            this.requestData();
        },
        chooseTypeMenu (e) {
            this.isTypeMenu = e;
            this.requestData();
        },
        requestData () {
            this.$axios.get(`admin/support/learning?page=${this.pagingData.currentPage}&size=${this.pagingData.currentSize}&categoryId=${this.isTabMenu === 0 ? '' : this.isTabMenu}&typeId=${this.isTypeMenu === 0 ? 0 : this.isTypeMenu ? this.isTypeMenu : ''}`)
            .then(res => this.contentList = res.data.data)
            .catch(e => console.error(e))
        }
    },
    components: {
    SubMenu,
    AsideMenu,
    ListTabMenu,
    StaticModule,
    UserManual,
    VideoTutoral,
    VideoRealGuide,
    LearnBanner
},
    async asyncData ({$axios}) {
        try {
         const iconData = [
        "../../../assets/images/pages/support/icon-product-remote@2x.png", 
        "../../../assets/images/pages/support/icon-product-make@2x.png",
        "../../../assets/images/pages/support/icon-product-view@2x.png",
        "../../../assets/images/pages/support/icon-product-workstation@2x.png"
        ]
        /* const iconData = [
        "icon-product-remote@2x", 
        "icon-product-make@2x",
        "icon-product-view@2x",
        "icon-product-workstation@2x"
        ] */
            const data = Promise.all([$axios.get("admin/support/learning/category"),
                                      $axios.get("admin/support/learning/type"),
                                      $axios.get(`admin/support/learning?categoryId=1&page=1&size=${20}`)]);
            const dataJson = await data;
            const categoryData = dataJson[0].data.data.categoryList
            const newCategoryData = categoryData.reduce((acc, cur, index) => acc.concat({
                createdDate: cur.createdDate,
                id: cur.id,
                name: cur.name,
                nameEn: cur.nameEn,
                thumbnail: cur.thumbnail,
                updatedDate: cur.updatedDate,
                icon: iconData[index]
            }),[])
            console.log(newCategoryData, 'newCategoryData!!!!!!')
            return {
                /* categoryList: dataJson[0].data.data.categoryList,  */
                categoryList: newCategoryData, 
                typeList: dataJson[1].data.data.typeList, 
                contentList: dataJson[2].data.data
            }
        } catch (e) {console.error(e)}
    }
}
</script>

<style lang="scss" scoped>

.LearningCenter{
    li, ul, a { list-style: none; text-decoration: none; }
                margin: 0 auto;
                max-width: 1260px;
                width: 100%;
                padding: 150px 30px;
                
    .tabCont{
                    display: flex;
                    gap: 20px;
    }
    .LearningCenterList{
                        display: block;
                        width: 100%;
    }
}

@media screen and (max-width: 768px) {
    .LearningCenter .tabCont { display: block; }
}

</style>