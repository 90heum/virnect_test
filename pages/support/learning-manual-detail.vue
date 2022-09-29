<template>
<div>
     <!-- 헤더 -->
    <head-banner />
    <sub-menu :isActive="'learning-center'"/>

    <!-- NoticeDetail -->
    <div class="viewManual">
            <!-- 컨텐츠 -->
            <div class="detailviewManualWrap">
                <!-- 목록으로 -->
                <span class="asList1">
                    <span>
                        <i><img :src="`${contentList.supportLearningInfoCategoryListResponses[0].thumbnail ? 'data:image/png;base64,' + contentList.supportLearningInfoCategoryListResponses[0].thumbnail : 'https://velog.velcdn.com/images/kyj0206/post/75a8bf3a-fe84-47e5-aa54-fca6f438b599/image.png'}`"></i>
                        <p>{{contentList.supportLearningInfoCategoryListResponses[0].name}}</p>
                    </span>
                    <button>
                        <nuxt-link to="learning-center">
                            목록으로
                        </nuxt-link>
                    </button>
                </span>
                <!-- ContHead -->
                <span class="contHead">
                    <span>
                        <h2>
                            {{$i18n.localeProperties.code === "ko" ? contentList.title : contentList.titleEn}}
                        </h2>
                        <p>
                            User’s Manual
                        </p>
                    </span>
                    <span>
                        <p>{{$dayjs(contentList.createdDate).format("YYYY-MM-DD")}}</p>
                    </span>
                </span>
                <!-- 블로그 -->
                <span class="detailBlog"
                      v-html="$i18n.localeProperties.code === 'ko' ? contentList.content : contentList.contentEn">
                </span>
                <!-- 첨부파일 다운로드 -->
                <!-- <div class="downloadFile">
                    <span class="downloadFileWrap">
                        <span class="downloadFileTit">첨부파일 다운로드</span>
                        <span class="downloadFileCont">
                            <span v-for="(data, idx) of contentList.supportLearningFilesResponse"
                                  :key="idx"
                                  @click="requestFile(idx, contentList.id, (`${$i18n.localeProperties.code === 'ko' ? data.name : data.nameEn}.${data.extension}`) )">
                                <i><img src="https://velog.velcdn.com/images/kyj0206/post/acd53d6c-61d6-47f2-8747-f260c7d434f3/image.png" alt="다운로드 아이콘"/></i>
                                <u>{{data.name + "." + data.extension}}</u>
                                <p>[257kb]</p>
                            </span>
                        </span>
                    </span>
                </div> -->
                <!-- PreNext -->
                <span class="PreNext">
                    <ul @click="goToPage(contentList.prevId)">
                        <li>
                            <p>{{$i18n.localeProperties.code === "ko" ? "이전글" : "Prev"}}</p>
                            <i>
                                <img src="https://velog.velcdn.com/images/kyj0206/post/7bd599f7-7fb2-40a0-9289-25db6e412a37/image.png" alt="이전글 아이콘">
                            </i>
                        </li>
                        <li>
                            <nuxt-link :to="`learning-manual-detail?category=${contentList.prevId}&type=${$route.query.type}&cateId=${$route.query.cateId}`">
                                {{contentList.prevTitle ? contentList.prevTitle : "이전글이 존재하지 않습니다."}}
                            </nuxt-link>
                        </li>
                        <li>
                            {{contentList.prevCreatedDate ? $dayjs(contentList.prevCreatedDate).format("YYYY-MM-DD") : ''}}
                        </li>
                    </ul>
                    <ul @click="goToPage(contentList.nextId)">
                        <li>
                            <p>{{$i18n.localeProperties.code === "ko" ? "다음글" : "Next"}}</p>
                            <i>
                                <img src="https://velog.velcdn.com/images/kyj0206/post/3d9cc89c-e518-415b-8b40-01ae30b6ae60/image.png" alt="다음글 아이콘">
                            </i>
                        </li>
                        <li>
                            <nuxt-link :to="`learning-manual-detail?category=${contentList.nextId}&type=${$route.query.type}&cateId=${$route.query.cateId}`">
                                {{contentList.nextTitle ? $i18n.localeProperties.code === "ko" ? contentList.nextTitle : contentList.nextTitleEn : "다음글이 존재하지 않습니다."}}
                            </nuxt-link>
                        </li>
                        <li>
                            {{contentList.nextCreatedDate ? $dayjs(contentList.nextCreatedDate).format("YYYY-MM-DD") : ''}}
                        </li>
                    </ul>
                </span>
                <!-- 목록으로 -->
                <span class="asList2">
                    <button>
                        <nuxt-link to="learning-center">
                            목록으로
                        </nuxt-link>
                    </button>
                </span>
            </div>
    </div>
    
        <support-tail 
      :bg="tailText.bg"
      :mention="$t('productsText.tailText')"
      :blueBtn="tailText.blue"
      :blueRouter="tailText.blueRouter"
      :greyBtn="tailText.grey"
      :greyRouter="tailText.greyRouter"
      />

</div>
</template>

<script>
import HeadBanner from "~/components/support/headBanner.vue";
import SubMenu from "~/components/support/SubMenu.vue";
import SupportTail from "~/layouts/common/Tail.vue";

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

    data() {
        return {
              visualText: {
        // 상단 비주얼 텍스트
        image:
          "https://image.virnect.com/images/pages/products/img-products-main.png",
        category: "Products",
      },
      tailText: {
        // 막줄 꼬리 텍스트
        bg: "assets/images/pages/products/img-products-banner.png",
        blue: "SOLUTIONS",
        blueRouter: "infra_energy",
        grey: "Contact",
        greyRouter: "inquiry",
      },
        }
    },
    components: {
        HeadBanner,
        SubMenu,
        SupportTail
    },
    methods: {
        async goToPage (id) {
            if(!id) return;
            const data = await this.$axios.get(`admin/support/learning/${id}?typeId=${this.$route.query.type}&categoryId=${this.$route.query.cateId}`);
            const dataJson = await data;
            if (process.client) window.scrollTo({top: "0px"});
            this.contentList = dataJson.data.data;
        },
        requestFile (idx, id, fileName) {
            this.$axios.get(`admin/support/learning/download/${id}?idx=${idx}`, {responseType: "blob"})
                       .then(res => {
                           const fileDownload = require("js-file-download");
                           fileDownload(res.data, fileName);
                        })
                       .catch(e => console.error(e))
        }
    },
    async asyncData ({$axios, route}) {
        try {
            const data = await $axios.get(`admin/support/learning/${route.query.category}?typeId=${route.query.type}&categoryId=${route.query.cateId}`);
            const dataJson = await data;
            return {contentList: dataJson.data.data}
        } catch(e) {console.error(e)}
    }
}
</script>

<style lang="scss" scoped>
.viewManual{
    li, ul, a { list-style: none; text-decoration: none; }
    width: 100%;
    background-color: #fff;
    .detailviewManualWrap{
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        padding: 150px 30px;
        // 목록으로
        .asList1{
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding-bottom: 25px;
            border-bottom: solid 1px #616161;
            span{
                display: flex;
                gap: 10px;
                align-items: center;
                i{
                    img{
                        max-width: 34px;
                        width: 100%;
                    }
                }
                p{
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
            button{
                max-width: 120px;
                width: 100%;
                border: solid 1px #979797;
                background-color: #fff;
               
                a{
                    display: block;
                    padding: 14px 0 12px;
                    font-size: 14px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1;
                    letter-spacing: normal;
                    text-align: center;
                    color: #121212;
                }
            }
        }
        .contHead{
            display: flex;
            justify-content: space-between;
            width: 100%;
            gap: 10px;
            border-bottom: solid 3px #616161;
            span{
                &:first-child{
                    width: 100%;
                    padding: 29px 0;
                    h2{
                        font-size: 22px;
                        font-weight: bold;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.27;
                        letter-spacing: normal;
                        color: #121212;
                        margin-bottom: 30px;
                    }
                    p{
                        font-size: 16px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.75;
                        letter-spacing: normal;
                        color: #121212;
                    }
                }
                &:last-child{
                    display: flex;
                    align-items: flex-end;
                    white-space: nowrap;
                    padding: 29px 0;
                    p{
                        font-size: 16px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.75;
                        letter-spacing: normal;
                        color: #121212;
                    }
                }
            }
        }
        // 블로그 
        .detailBlog{
            padding: 50px 24px;
            /deep/ img { width: 100%; }
            h1{
                font-size: 32px;
                font-weight: bold;
                line-height: 1.44;
                color: #121212;
                margin-bottom: 37px;
            }
            h2{
                font-size: 26px;
                font-weight: bold;   
                line-height: 1.46; 
                color: #121212;
                margin-bottom: 31px;
            }
            h3{
                font-size: 22px;
                font-weight: 500;
                line-height: 1.45;
                color: #121212;
                margin-bottom: 29px;
            }
            h4{
                font-size: 18px;
                font-weight: bold;
                line-height: 1.56;
                color: #121212;
                margin-bottom: 15px;
            }
            p{
                font-size: 16px;
                line-height: 1.75;
                color: #121212;
            }
        }
        // 첨부파일 다운로드
        .downloadFile{
            display: block;
            margin-bottom: 40px;
            padding: 40px;
            background-color: #f7f8f9;
            .downloadFileWrap{
                display: flex;
                flex-direction: column;
                .downloadFileTit{
                    margin-bottom: 28px;
                    font-size: 18px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1;
                    letter-spacing: -0.23px;
                    color: #092e6e;
                }
                .downloadFileCont{
                    display: flex;
                    gap: 24px;
                    span{
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        i{
                            display: block;
                            margin-right: 8px;
                            img{
                                max-width: 22px;
                                min-width: 22px;
                                width: 100%;
                            }
                        }
                        u{
                            font-size: 16px;
                            font-weight: normal;
                            font-stretch: normal;
                            font-style: normal;
                            line-height: normal;
                            letter-spacing: -0.2px;
                            color: #092e6e;
                        }
                        p{
                            margin-left: 5px;
                            font-size: 16px;
                            font-weight: normal;
                            font-stretch: normal;
                            font-style: normal;
                            line-height: normal;
                            letter-spacing: -0.2px;
                            color: #092e6e;
                        }
                    }
                }
            }
        }
        // PreNext
        .PreNext{
            border-top: solid 1px #616161;
            ul{
                display: flex;
                justify-content: space-between;
                align-items: center;
                li{
                    padding: 29px 15px;
                }
                &:first-child{
                    border-bottom: solid 1px #c5c8cf;
                    li{
                        &:first-child{
                            flex: 1;
                            display: flex;
                            gap: 6px;
                            align-items: center;
                            p{
                                &:first-child{
                                    font-size: 16px;
                                    font-weight: normal;
                                    font-stretch: normal;
                                    font-style: normal;
                                    line-height: 1.75;
                                    letter-spacing: normal;
                                    color: #616161;                                                                  
                                }
                            }
                            i{
                                img{
                                    max-width: 19px;
                                }
                            }
                        }
                        &:nth-child(2){
                            flex: 6;
                            a{
                                font-size: 16px;
                                font-weight: bold;
                                font-stretch: normal;
                                font-style: normal;
                                line-height: 1.75;
                                letter-spacing: normal;
                                color: #616161;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                                &:hover{
                                    color: #0a51b7;
                                }
                            }
                        }
                        &:last-child{
                            flex: 1;
                            font-size: 16px;
                            font-weight: normal;
                            font-stretch: normal;
                            font-style: normal;
                            line-height: 1.75;
                            letter-spacing: normal;
                            text-align: right;
                            color: #616161;
                            white-space: nowrap;
                        }
                    }
                }
                &:last-child{
                    li{
                        &:first-child{
                            flex: 1;
                            display: flex;
                            gap: 6px;
                            align-items: center;
                            p{
                                &:first-child{
                                    font-size: 16px;
                                    font-weight: normal;
                                    font-stretch: normal;
                                    font-style: normal;
                                    line-height: 1.75;
                                    letter-spacing: normal;
                                    color: #616161;   
                                }
                            }
                            i{
                                img{
                                    max-width: 19px;
                                }
                            }
                        }
                        &:nth-child(2){
                            flex: 6;
                            a{
                                font-size: 16px;
                                font-weight: bold;
                                font-stretch: normal;
                                font-style: normal;
                                line-height: 1.75;
                                letter-spacing: normal;
                                color: #616161;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                                &:hover{
                                    color: #0a51b7;
                                }
                            }
                        }
                        &:last-child{
                            flex: 1;
                            font-size: 16px;
                            font-weight: normal;
                            font-stretch: normal;
                            font-style: normal;
                            line-height: 1.75;
                            letter-spacing: normal;
                            text-align: right;
                            color: #616161;
                            white-space: nowrap;
                        }
                    }
                }
            }
        }
        // 목록으로
        .asList2{
            display: flex;
            justify-content: end;
            width: 100%;
            padding-top: 25px;
            border-top: solid 1px #616161;
            button{
                max-width: 120px;
                width: 100%;
                border: solid 1px #979797;
                background-color: #fff;
               
                a{
                    display: block;
                    padding: 14px 0 12px;
                    font-size: 14px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1;
                    letter-spacing: normal;
                    text-align: center;
                    color: #121212;
                }
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .viewManual .detailviewManualWrap{
        padding: 80px 24px;
    }

    .viewManual .detailviewManualWrap .PreNext ul li{
        padding: 29px 10px;
    }

    .viewManual .detailviewManualWrap .downloadFile .downloadFileWrap .downloadFileCont{
        flex-direction: column;
        gap: 10px;
    }
}

@media screen and (max-width: 650px) {
    .viewManual .detailviewManualWrap .PreNext ul:last-child li:last-child,
    .viewManual .detailviewManualWrap .PreNext ul:first-child li:last-child{
        display: none;
    }

    .viewManual .detailviewManualWrap .PreNext ul:first-child li:nth-child(2) a,
    .viewManual .detailviewManualWrap .PreNext ul:last-child li:nth-child(2) a{
        -webkit-line-clamp: 1;
    }

    .viewManual .detailviewManualWrap .contHead span:last-child p,
    .viewManual .detailviewManualWrap .PreNext ul:last-child li:first-child i,
    .viewManual .detailviewManualWrap .PreNext ul:first-child li:first-child i{
        display: none;
    }

    .viewManual .detailviewManualWrap .contHead span:first-child h2{
        margin-bottom: 12px;
    }

    .viewManual .detailviewManualWrap .PreNext ul:last-child li:first-child,
    .viewManual .detailviewManualWrap .PreNext ul:first-child li:first-child{
        padding: 29px 0px 29px 10px;
    }

    .viewManual .detailviewManualWrap .PreNext ul:first-child li:nth-child(2),
    .viewManual .detailviewManualWrap .PreNext ul:last-child li:nth-child(2){
        padding: 29px 10px 29px 15px;
    }
}

@media screen and (max-width: 425px) {
    .viewManual .detailviewManualWrap .downloadFile .downloadFileWrap .downloadFileCont span i{
        display: none;
    }
    .viewManual .detailviewManualWrap .downloadFile .downloadFileWrap .downloadFileCont span{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }
}
</style>