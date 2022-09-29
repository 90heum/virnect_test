<template>
<div>
    <!-- 헤더 -->
    <faq-banner />

    <!-- 콘텍트 콘텐츠 -->
    <div class="contactTab">
        <sub-menu :isActive="'faq'"/>

         <!-- FAQ -->
        <div data-content="2">
            <div class="FAQWrap">
            <!-- 리스트 탭 -->
            <div class="FAQTab">
                <div class="LearningCenterMbTab-prev"
                     @click="changeTabNextAndPrevMenu(typeList.findIndex(e => e.id === isCategory), 'prev')">
                    <img src="https://velog.velcdn.com/images/kyj0206/post/ca9d309b-94ce-41db-a002-66a2f0d76ff8/image.png" alt="prebutton">
                </div>

                <span v-for="(data, idx) of typeList" 
                      :class="`${isCategory === (data.id) ? 'active' : ''}`"
                      :key="idx"
                      @click="chooseCategory(data.id)">{{$i18n.localeProperties.code === "ko" ? data.name : data.nameEn}}</span>
                
                <div class="LearningCenterMbTab-next"
                     @click="changeTabNextAndPrevMenu(typeList.findIndex(e => e.id === isCategory), 'next')">
                    <img src="https://velog.velcdn.com/images/kyj0206/post/a1bbf083-3da6-413c-9f16-48fc60000827/image.png" alt="nextbutton">
                </div>
            </div>

            <div class="tabCont">
                <aside-menu :asideMenuList="asideMenuList"
                            :chooseType="chooseType"
                            :isType="isType"/>
                <faq-contents :contentList="contentList"
                              :pagingData="pagingData"
                              :movePage="movePage"/>
            </div>
            </div>    
        </div>
    </div>
</div>
</template>

<script>
import faqBanner from "~/components/support/faqBanner.vue";
import SubMenu from "~/components/support/SubMenu.vue";
import AsideMenu from "~/components/support/faq/AsideMenu.vue";
import FaqContents from "~/components/support/faq/FaqContents.vue";

export default {
    data() {
        return {
            isCategory: 3,
            isType: null,
            typeList: [],
            asideMenuList: [],
            contentList: [],
            pagingData: {
                currentPage: 1,
                currentSize: 20,
                totalPage: 1,
                totalElements: 1,
                startPage: 1,
                endPage: 1
            }
        }
    },
    components: {
        SubMenu,
        AsideMenu,
        FaqContents,
        faqBanner
    },
    methods: {
        changeTabNextAndPrevMenu(idx, action) {
            if (action === "next") {
                const targetIdx = idx >= (this.typeList.length-1) ? 0 : idx + 1;
                this.isCategory = this.typeList[targetIdx].id;
            } else {
                const targetIdx = idx <= 0 ? (this.typeList.length-1) : idx - 1;
                this.isCategory = this.typeList[targetIdx].id;
            }
            this.chooseCategory(this.isCategory);
        },
        movePage (currentPage) {
            this.pagingData = {...this.pagingData, currentPage: currentPage};
            this.chooseType(this.isType, true);

        },
        async chooseCategory (e) {
            this.isCategory = e;
            try{
                const data = Promise.all([this.$axios.$get(`admin/support/faq/type?categoryId=${this.isCategory}`), 
                                        this.$axios.$get("admin/support/faq", {params: {
                                                                                category: this.isCategory,
                                                                                type: null,
                                                                                device: null,
                                                                                page: 1,
                                                                                size: this.pagingData.currentSize,
                                                                                sort: "updated_at,DESC"
                                                                            }})]);
            const dataJson = await data;
            this.asideMenuList = dataJson[0].data.typeList;
            this.contentList = dataJson[1].data.supportFaqDTOList;
            this.pagingData = dataJson[1].data.pageMetadataResponse;
            this.isType = null;
            } catch (e) {console.error(e)}
        },

        async chooseType (e, isPaging = false) {
            this.isType = e;
            if (!isPaging) this.pagingData = {...this.pagingData, currentPage: 1 };
            try {
                 const data = this.$axios.$get("admin/support/faq", {params: {
                                                                    category: this.isCategory,
                                                                    type: e === 0 ? null : e,
                                                                    device: null,
                                                                    page: this.pagingData.currentPage,
                                                                    size: this.pagingData.currentSize,
                                                                    sort: "updated_at,DESC"
                                                                }});
                const dataJson = await data;
                this.contentList = dataJson.data.supportFaqDTOList;
                this.pagingData = dataJson.data.pageMetadataResponse;
            } catch(e) { console.error(e) };
        }
    },
    async asyncData ({$axios}) {
        try{
            const data = Promise.all([$axios.$get("admin/support/faq/category"), 
                                      $axios.$get("admin/support/faq/type?categoryId=3"), 
                                      $axios.$get("admin/support/faq", {params: {
                                          category: 3,
                                          type: null,
                                          device: null,
                                          pageRequest: {
                                              page: 1,
                                              size: 20,
                                              sort: "updated_at,DESC"
                                          }
                                      }})])
            const dataJson = await data;
            return {
                typeList: dataJson[0].data.categoryList, 
                asideMenuList: dataJson[1].data.typeList, 
                contentList: dataJson[2].data.supportFaqDTOList,
                pagingData: dataJson[2].data.pageMetadataResponse
            };
        } catch (e) {console.error(e)}
            
    }
}
</script>

<style lang="scss" scoped>
.tabCont{
    >div { width: 100%; }
        display: flex;
        gap: 20px;
        .FAQAside{
            display: flex;
            gap: 30px;
            flex-direction: column;
            max-width: 180px;
            width: 100%;
            span{
                
                display: flex;
                align-items: center;
                gap: 10px;
                &:hover{
                    p{
                        text-decoration: underline;
                        text-underline-position: under;
                        color: #0a51b7;
                    }
                }
                p{
                    cursor: pointer;
                    font-size: 18px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.5;
                    letter-spacing: -0.25px;
                    color: #121212;
                }
                i{
                    cursor: pointer;
                    display: flex;
                    padding-bottom: 5px;
                    img{
                        max-width: 19px;
                        width: 100%;
                    }
                }
            }
        }
    }
.FAQTab{
    display: flex;
    margin-bottom: 50px;
    span{
        cursor: pointer;
        flex: 1;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: normal;
        text-align: center;
        color: #616161;
        padding: 14px 5px 12px;
        border: solid 1px #c5c8cf;
        &.active,
        &:hover{
            border: solid 1px #092e6e;
            background-color: #092e6e;
            color: #fff;
        }
    }
}
// 공통 서브메뉴 
section.contactTab {
    width: 100%;
    background-color: #fff;
}

// asideMenu 공통 css
.FAQWrap{            
    margin: 0 auto;
    max-width: 1260px;
    width: 100%;
    padding: 150px 30px;
}

.LearningCenterMbTab-prev, .LearningCenterMbTab-next  { display: none; cursor: pointer; }
@media screen and (max-width: 1024px) {

}

@media screen and (max-width: 768px) {
    .contactBanner .ContactBannerInner span p{
        display: inline;
    }
    .FAQTab {
        border-bottom: 4px solid #092e6e;
        display: flex;
    }
    .FAQTab>span { 
        display: none;
        border: none; 
        justify-content: center;
    }
    .contactTab .FAQTab>span.active {
        display: flex;
        background-color: inherit;
        align-items: center;
        color: #092e6e;
        border: none;
    }
    .LearningCenterMbTab-prev, .LearningCenterMbTab-next  { 
        display: block;
    }

    .LearningCenterMbTab-prev img, .LearningCenterMbTab-next img  { 
        max-width: 42px;
        width: 100%;
    }

    .tabCont > div { margin-bottom: 35px;}
    
    .tabCont { display: block; }
}

@media screen and (max-width: 425px) {

}

</style>