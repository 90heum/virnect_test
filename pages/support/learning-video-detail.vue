<template>
    <div>
        <!-- 헤더 -->
        <head-banner />
        <sub-menu :isActive="'learning-center'" />

        <!-- NoticeDetail -->
        <div class="viewVideo">
            <!-- 컨텐츠 -->
            <div class="detailviewVideoWrap">
                <!-- 목록으로 -->
                <span class="asList1">
                    <span>
                        <i><img :src="`${contentData.supportLearningInfoCategoryListResponses[0].thumbnail ? 'data:image/png;base64,' + contentData.supportLearningInfoCategoryListResponses[0].thumbnail : 'https://velog.velcdn.com/images/kyj0206/post/75a8bf3a-fe84-47e5-aa54-fca6f438b599/image.png'}`"></i>
                        <p>{{contentData.supportLearningInfoCategoryListResponses[0].name}}</p>
                    </span>
                    <button onclick={window.history.go(-1)}>
                        목록으로
                    </button>
                </span>
                <!-- ContHead -->
                <span class="contHead">
                    <span>
                        <h2>
                            {{$i18n.localeProperties.code === 'ko' ? contentData.title : contentData.titleEn}}
                        </h2>
                        <p>
                            {{contentData.learningType === "- 초급자용" ? "Video Tutorial" : ""}}
                        </p>
                    </span>
                    <span>
                        <p>{{$dayjs(contentData.createdDate).format("YYYY-MM-DD")}}</p>
                    </span>
                </span>
                <!-- 비디오 영상 시작 -->
                <!-- 이미지 삽입 예시 진행 이후 동영상으로 대체 해야 함 -->
                <div class="videoIn">
                    <video-player :src="`${contentData.videoUrl ? contentData.videoUrl : ''}`" alt="비디오예시" :allow="true"
                        :muted="true" />
                </div>
                <!-- 비디오 영상 끝 -->
                <!-- 블로그 -->
                <span class="detailBlog"
                    v-html="$i18n.localeProperties.code === 'ko' ? contentData.content : contentData.contentEn"></span>
                <!-- PreNext -->
                <span class="PreNext">
                    <ul @click="goToPage(contentData.prevId)">
                        <li>
                            <p>{{$i18n.localeProperties.code === 'ko' ? "이전글" : "Prev"}}</p>
                            <i>
                                <img src="https://velog.velcdn.com/images/kyj0206/post/7bd599f7-7fb2-40a0-9289-25db6e412a37/image.png"
                                    alt="이전글 아이콘">
                            </i>
                        </li>
                        <li>
                            <nuxt-link
                                :to="`?category=${contentData.prevId}&type=${$route.query.type}&cateId=${$route.query.cateId}`">
                                {{contentData.prevTitle ? $i18n.localeProperties.code === 'ko' ? contentData.prevTitle :
                                contentData.prevTitleEn : "이전 글이 존재하지 않습니다."}}
                            </nuxt-link>
                        </li>
                        <li>
                            {{contentData.prevCreatedDate ? $dayjs(contentData.prevCreatedDate).format("YYYY-MM-DD") :
                            ''}}
                        </li>
                    </ul>
                    <ul @click="goToPage(contentData.nextId)">
                        <li>
                            <p>{{$i18n.localeProperties.code === 'ko' ? "다음글" : "Next"}}</p>
                            <i>
                                <img src="https://velog.velcdn.com/images/kyj0206/post/3d9cc89c-e518-415b-8b40-01ae30b6ae60/image.png"
                                    alt="다음글 아이콘">
                            </i>
                        </li>
                        <li>
                            <nuxt-link
                                :to="`?category=${contentData.nextId}&type=${$route.query.type}&cateId=${$route.query.cateId}`">
                                {{contentData.nextTitle ? $i18n.localeProperties.code === 'ko' ? contentData.nextTitle :
                                contentData.nextTitleEn : "다음 글이 존재하지 않습니다."}}
                            </nuxt-link>
                        </li>
                        <li>
                            {{contentData.nextCreatedDate ? $dayjs(contentData.nextCreatedDate).format("YYYY-MM-DD") :
                            ''}}
                        </li>
                    </ul>
                </span>
                <!-- 목록으로 -->
                <span class="asList2">
                    <button onclick={window.history.go(-1)}>
                        목록으로
                    </button>
                </span>
            </div>
        </div>
        <support-tail :bg="tailText.bg" :mention="$t('productsText.tailText')" :blueBtn="tailText.blue"
            :blueRouter="tailText.blueRouter" :greyBtn="tailText.grey" :greyRouter="tailText.greyRouter" />
    </div>
</template>

<script>
import HeadBanner from "~/components/support/headBanner.vue";
import SubMenu from "~/components/support/SubMenu.vue";
import VideoPlayer from 'nuxt-video-player';
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
        VideoPlayer,
        SupportTail
    },
     methods: {
        async goToPage (id) {
            if(!id) return;
            const data = await this.$axios.get(`admin/support/learning/${id}?typeId=${this.$route.query.type}&categoryId=${this.$route.query.cateId}`);
            const dataJson = await data;
            if (process.client) window.scrollTo({top: "0px"});
            this.contentData = dataJson.data.data;
        },
        // requestFile (idx, id, fileName) {
        //     this.$axios.get(`admin/support/learning/download/${id}?idx=${idx}`, {responseType: "blob"})
        //                .then(res => {
        //                    const fileDownload = require("js-file-download");
        //                    fileDownload(res.data, fileName);
        //                 })
        //                .catch(e => console.error(e))
        // }
    },
    async asyncData ({$axios, route}) {
        try {
            const data = await $axios.get(`admin/support/learning/${route.query.category}?typeId=${route.query.type}&categoryId=${route.query.cateId}`);
            const dataJson = await data;
            return {contentData: dataJson.data.data};
        } catch (e) {console.error(e)}
    }
}
</script>

<style lang="scss" scoped>
.viewVideo{
    li, ul, a { list-style: none; text-decoration: none; }
    width: 100%;
    background-color: #fff;
    .detailviewVideoWrap{
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
        // 비디오 삽입 
        .videoIn{
            display: block;
            margin-top: 50px;
            width: 100%;
            img{
                max-width: 1200px;
                width: 100%;
            }
        }
        // 블로그 
        .detailBlog{
            /deep/ img { width: 100%; }
            border-bottom: solid 1px #616161;
            padding: 50px 24px;
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
        // PreNext
        .PreNext{
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

@media screen and (max-width: 768px) {
    .viewVideo .detailviewVideoWrap{
        padding: 80px 24px;
    }

    .viewVideo .detailviewVideoWrap .PreNext ul li{
        padding: 29px 10px;
    }
}

@media screen and (max-width: 650px) {
    .viewVideo .detailviewVideoWrap .PreNext ul:last-child li:last-child,
    .viewVideo .detailviewVideoWrap .PreNext ul:first-child li:last-child{
        display: none;
    }

    .viewVideo .detailviewVideoWrap .PreNext ul:first-child li:nth-child(2) a,
    .viewVideo .detailviewVideoWrap .PreNext ul:last-child li:nth-child(2) a{
        -webkit-line-clamp: 1;
    }

    .viewVideo .detailviewVideoWrap .contHead span:last-child p,
    .viewVideo .detailviewVideoWrap .PreNext ul:last-child li:first-child i,
    .viewVideo .detailviewVideoWrap .PreNext ul:first-child li:first-child i{
        display: none;
    }

    .viewVideo .detailviewVideoWrap .contHead span:first-child h2{
        margin-bottom: 12px;
    }

    .viewVideo .detailviewVideoWrap .PreNext ul:last-child li:first-child,
    .viewVideo .detailviewVideoWrap .PreNext ul:first-child li:first-child{
        padding: 29px 0px 29px 10px;
    }

    .viewVideo .detailviewVideoWrap .PreNext ul:first-child li:nth-child(2),
    .viewVideo .detailviewVideoWrap .PreNext ul:last-child li:nth-child(2){
        padding: 29px 10px 29px 15px;
    }
}
</style>