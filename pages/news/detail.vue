<template>
  <div>
      <!-- 헤더 -->
    <head-banner />

     <!-- 콘텍트 콘텐츠 -->
    <div class="contactTab">
        <!-- <sub-menu :isActive="'notice'"/> -->

            <div data-content="1" class="contactTabActive1">
                 <!-- NoticeDetail -->
                <div class="detailNotice">
                    <!-- 컨텐츠 -->
                    <div class="detailNoticeWrap">
                        <!-- 목록으로 -->
                        <span class="asList1">
                            <button onclick={window.history.go(-1)}>
                                <nuxt-link to="main">
                                    목록으로
                                </nuxt-link>
                            </button>
                        </span>
                        <!-- ContHead -->
                        <span class="contHead">
                            <span>
                                <h2>
                                    {{$i18n.localeProperties.code === "ko" ? contentData.title : contentData.titleEn}}
                                </h2>
                                <p>
                                    {{$i18n.localeProperties.code === "ko" ? contentData.typeName : contentData.typeNameEn }}
                                </p>
                            </span>
                            <span>
                                <p>{{$dayjs(contentData.createdDate).format("YYYY-MM-DD")}}</p>
                            </span>
                        </span>
                        <!-- 블로그 -->
                        <span class="detailBlog" v-html="`${$i18n.localeProperties.code === 'ko' ? contentData.content: contentData.contentEn}`">
                        </span>
                


                        <!-- PreNext -->
                        <span class="PreNext">
                            <ul @click="goToPage(contentData.prevId)">
                                <li>
                                    <p>{{$i18n.localeProperties.code === 'ko' ? "이전글" : "Prev"}}</p>
                                    <i>
                                        <img src="https://velog.velcdn.com/images/kyj0206/post/7bd599f7-7fb2-40a0-9289-25db6e412a37/image.png" alt="이전글 아이콘">
                                    </i>
                                </li>
                                <li>
                                    <nuxt-link :to="`detail?id=${contentData.prevId||id}&type=${type ? type : ''}`">
                                        {{contentData.prevTitle ? $i18n.localeProperties.code === 'ko' ? contentData.prevTitle : contentData.prevTitleEn : "이전 글이 존재하지 않습니다."}}
                                    </nuxt-link>
                                </li>
                                <li>
                                    {{contentData.prevCreatedDate ? $dayjs(contentData.prevCreatedDate).format("YYYY-MM-DD") : ""}}
                                </li>
                            </ul>
                            <ul @click="goToPage(contentData.nextId)">
                                <li>
                                    <p>{{$i18n.localeProperties.code === 'ko' ? "다음글" : "Next"}}</p>
                                    <i>
                                        <img src="https://velog.velcdn.com/images/kyj0206/post/3d9cc89c-e518-415b-8b40-01ae30b6ae60/image.png" alt="다음글 아이콘">
                                    </i>
                                </li>
                                <li>
                                    <nuxt-link :to="`detail?id=${contentData.nextId||id}&type=${type ? type : ''}`">
                                        {{contentData.nextTitle ? $i18n.localeProperties.code === 'ko' ? contentData.nextTitle : contentData.nextTitleEn : "다음 글이 존재하지 않습니다."}}
                                    </nuxt-link>
                                </li>
                                <li>
                                    {{contentData.nextCreatedDate ? $dayjs(contentData.nextCreatedDate).format("YYYY-MM-DD") : ""}}
                                </li>
                            </ul>
                        </span>
                        <!-- 목록으로 -->
                        <span class="asList2">
                            <button onclick={window.history.go(-1)}>
                                <nuxt-link to="main">
                                    목록으로
                                </nuxt-link>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
    </div>

    <contact-cta-module />
  </div>
</template>

<script>
import HeadBanner from "~/components/news/CommonBaner.vue";
import SubMenu from "~/components/support/SubMenu.vue";
import ContactCtaModule from "~/components/company/partials/contactModule.vue";

export default {
    components: {
        HeadBanner,
        SubMenu,
        ContactCtaModule
    },
    data () {
        return {
            contentData: {},
        }
    },
    methods: {
        async goToPage (id) {
            if(!id) return;
            const data = await this.$axios.get(`admin/news/${id}?typeId=${this.type ? this.type : ''}`);
            const dataJson = await data;
            if (process.client) window.scrollTo({top: "0px"});
            this.contentData = dataJson.data.data;
            this.id = dataJson.data.data.id;
        }
    },
    async asyncData ({$axios, route}) {
        const data = await $axios.get(`admin/news/${route.query.id}?typeId=${route.query.type ? route.query.type : ''}`);
        const dataJson = await data;
        console.log(dataJson.data.data)
        return {contentData: dataJson.data.data, id: route.query.id, type: route.query.type}
    }
}
</script>

<style lang="scss" scoped>
.detailNotice{
    li, ul, a { text-decoration: none; list-style: none; }
    width: 100%;
    background-color: #fff;
    .detailNoticeWrap{
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        padding: 150px 30px;
        // 목록으로
        .asList1{
            display: flex;
            justify-content: end;
            width: 100%;
            padding-bottom: 25px;
            border-bottom: solid 1px #616161;
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
                display: flex;
                justify-content: center;
                font-size: 16px;
                line-height: 1.75;
                color: #121212;
            }
            /deep/ img { width: 80%; }
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
    .detailNotice .detailNoticeWrap{
        padding: 80px 24px;
    }

    .detailNotice .detailNoticeWrap .PreNext ul li{
        padding: 29px 10px;
    }
}
</style>