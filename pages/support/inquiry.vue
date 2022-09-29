<template>
  <div>
    <!-- 헤더 -->
    <inquiry-banner />

    <!-- 콘텍트 콘텐츠 -->
    <section class="contactTab">
      <sub-menu :isActive="'inquiry'" />

      <div data-content="4">
        <span class="contactContTab">
          <ul class="contactContTabInner">
            <li
              :class="`${chosenMenu ? 'contactTabActive2' : ''}`"
              tap="1"
              @click="chooseMenu(true)"
            >
              {{ $t("supportText.inquiries.sub1") }}
            </li>
            <li
              :class="`${!chosenMenu ? 'contactTabActive2' : ''}`"
              tap="2"
              @click="chooseMenu(false)"
            >
              {{ $t("supportText.inquiries.sub2") }}
            </li>
          </ul>

          <span class="contContMenu">
            <span
              :class="`${chosenMenu ? 'contactTabActive3' : ''}`"
              tap-content="1"
            >
              <h2>{{ $t("supportText.contactText.contact.title") }}</h2>
              <p>
                {{ $t("supportText.contactText.contact.subTitle") }}
              </p>
              <!-- <span class="formTab">
                <ul>
                  <li
                    :class="`${isTab === 1 ? 'active' : ''}`"
                    @click="chooseTab(1)"
                  >
                    데모신청
                  </li>
                  <li
                    :class="`${isTab === 2 ? 'active' : ''}`"
                    @click="chooseTab(2)"
                  >
                    {{ $t("supportText.contactText.contact.buy") }}
                  </li>
                  <li
                    :class="`${isTab === 3 ? 'active' : ''}`"
                    @click="chooseTab(3)"
                  >
                    {{ $t("supportText.contactText.contact.productQ") }}
                  </li>
                  <li
                    :class="`${isTab === 4 ? 'active' : ''}`"
                    @click="chooseTab(4)"
                  >
                    {{ $t("supportText.contactText.contact.other") }}
                  </li>
                </ul>
              </span> -->
              <div class="formWrap">
                <!-- //NOTE - 폼삽입 구역 START-->
                <!-- 데모신청 -->
                <!-- <iframe
                  class="iframeForm"
                  v-if="isTab === 1"
                  id="iframe1"
                  src="https://pardot.virnect.com/l/929783/2022-06-16/3nplr"
                  frameborder="0"
                  marginwidth="0"
                  marginheight="0"
                  scrolling="auto"
                  style="
                    padding-bottom: 49px;
                    position: absolute;
                    border: none;
                    width: 100%;
                    height: 100%;
                    max-width: 100%;
                    display: block;
                  "
                  allowfullscreen
                  webkitallowfullscreen
                  mozallowfullscreen
                  msallowfullscreen
                ></iframe> -->
                <!-- 통합문의 -->
                <iframe
                  class="iframeForm"
                  v-if="isTab === 2"
                  id="iframe2"
                  src="https://pardot.virnect.com/l/929783/2022-09-20/5dl4c"
                  frameborder="0"
                  marginwidth="0"
                  marginheight="0"
                  scrolling="auto"
                  style="
                    padding-bottom: 49px;
                    position: absolute;
                    border: none;
                    width: 100%;
                    height: 100%;
                    max-width: 100%;
                    display: block;
                  "
                  allowfullscreen
                  webkitallowfullscreen
                  mozallowfullscreen
                  msallowfullscreen
                ></iframe>
                <!-- 구매문의 -->
                <!-- <iframe
                  class="iframeForm"
                  v-if="isTab === 2"
                  id="iframe2"
                  src="https://pardot.virnect.com/l/929783/2022-06-15/3l686"
                  frameborder="0"
                  marginwidth="0"
                  marginheight="0"
                  scrolling="auto"
                  style="
                    padding-bottom: 49px;
                    position: absolute;
                    border: none;
                    width: 100%;
                    height: 100%;
                    max-width: 100%;
                    display: block;
                  "
                  allowfullscreen
                  webkitallowfullscreen
                  mozallowfullscreen
                  msallowfullscreen
                ></iframe> -->
                <!-- 제품문의 -->
                <!-- <iframe
                  class="iframeForm"
                  v-if="isTab === 3"
                  id="iframe3"
                  src="https://pardot.virnect.com/l/929783/2022-06-14/3kzcp"
                  frameborder="0"
                  marginwidth="0"
                  marginheight="0"
                  scrolling="auto"
                  style="
                    padding-bottom: 49px;
                    position: absolute;
                    border: none;
                    width: 100%;
                    height: 100%;
                    max-width: 100%;
                    display: block;
                  "
                  allowfullscreen
                  webkitallowfullscreen
                  mozallowfullscreen
                  msallowfullscreen
                ></iframe> -->
                <!-- 기타 -->
                <!-- <iframe
                  class="iframeForm"
                  v-if="isTab === 4"
                  id="iframe4"
                  src="https://pardot.virnect.com/l/929783/2022-06-16/3npmk"
                  frameborder="0"
                  marginwidth="0"
                  marginheight="0"
                  scrolling="auto"
                  style="
                    padding-bottom: 49px;
                    position: absolute;
                    border: none;
                    width: 100%;
                    height: 100%;
                    max-width: 100%;
                    display: block;
                  "
                  allowfullscreen
                  webkitallowfullscreen
                  mozallowfullscreen
                  msallowfullscreen
                ></iframe> -->
                <!-- //NOTE - 폼삽입 구역 END -->
              </div>
            </span>

            <span
              :class="`${!chosenMenu ? 'contactTabActive3' : ''}`"
              tap-content="2"
            >
              <google-map />

              <!-- 하단 이미지 지도 및 사업지원 -->
              <span>
                <h2 v-html="$t('supportText.location.title')"></h2>
                <img
                  src="~/assets/images/pages/support/imageadf.png"
                  alt="글로벌 지도 이미지"
                />
                <div class="mapList">
                  <ul>
                    <li>
                      <p>KOREA</p>
                      <ul>
                        <li>
                          <p v-html="$t('supportText.location.text1')"></p>
                          <p v-html="$t('supportText.location.contents1')"></p>
                        </li>
                        <li>
                          <p v-html="$t('supportText.location.text2')"></p>
                          <p v-html="$t('supportText.location.contents2')"></p>
                        </li>
                        <li>
                          <p v-html="$t('supportText.location.text3')"></p>
                          <p v-html="$t('supportText.location.contents3')"></p>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <p>AUSTRIA</p>
                      <ul>
                        <li>
                          <p v-html="$t('supportText.location.text4')"></p>
                          <p v-html="$t('supportText.location.contents4')"></p>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <p>U.S.</p>
                      <ul>
                        <li>
                          <p v-html="$t('supportText.location.text5')"></p>
                          <p v-html="$t('supportText.location.contents5')"></p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div class="mapInfo">
                  <span>
                    <span v-html="$t('supportText.location.title6')"></span>
                    <p v-html="$t('supportText.location.text6')"></p>
                    <p v-html="$t('supportText.location.contents6')"></p>
                  </span>
                </div>
              </span>
            </span>
          </span>
          <div class="erroTIt">Please correct the errors below: 문구가 나오면 정보가 올바른지 확인해주세요.</div>
        </span>
      </div>
    </section>
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
import SubMenu from "~/components/support/SubMenu.vue";
import GoogleMap from "~/components/support/faq/GoogleMap.vue";
import InquiryBanner from "../../components/support/inquiryBanner.vue";
import SupportTail from "~/layouts/common/Tail.vue";

export default {
  head: {
    title: '문의하기 - VIRNECT',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '버넥트의 준비된 기술 컨설턴트가 직접 도움을 드립니다. 항상 고객 중심으로 생각하며, 고객과 함께 성장해 나가겠습니다.'
      }
    ],
  },
  components: {
    SubMenu,
    GoogleMap,
    InquiryBanner,
    SupportTail,
  },
  data() {
    return {
      chosenMenu: true,
      isTab: 2,
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
    };
  },
  methods: {
    chooseMenu(e) {
      this.chosenMenu = e;
    },
    chooseTab(e) {
      this.isTab = e;
    },
  },
};
</script>

<style lang="scss" scoped>
// 공통 서브메뉴
.contactTab {
  width: 100%;
  background-color: #fff;
  li,
  ul,
  a {
    list-style: none;
    text-decoration: none;
  }
  ul {
    padding-left: 0px;
  }
}

// 문의하기
span {
  &.contactContTab {
    display: block;
    margin: 0 auto;
    max-width: 1260px;
    width: 100%;
    padding: 150px 30px;
    > ul {
      display: flex;
      margin-bottom: 110px;
      li {
        padding: 13px 0;
        cursor: pointer;
        border: solid 1px #c5c8cf;
        width: 50%;
        font-size: 14px;
        font-weight: bold;
        line-height: 1;
        letter-spacing: normal;
        text-align: center;
        color: #616161;
        &.contactTabActive2 {
          color: #fff;
          border: solid 1px #092e6e;
          background-color: #092e6e;
        }
      }
    }
    .contContMenu {
      > span {
        text-align: center;
        display: none;
        &.contactTabActive3 {
          display: block;
        }
        &:first-child {
          h2 {
            font-size: 44px;
            font-weight: bold;
            line-height: 1.4;
            letter-spacing: -0.55px;
            text-align: center;
            color: #121212;
            margin-bottom: 49px;
          }
          > p {
            font-size: 16px;
            font-weight: 500;
            line-height: 1.75;
            letter-spacing: normal;
            text-align: center;
            color: #121212;
            margin-bottom: 49px;
          }
          .formWrap {
            display: block;
            padding: 49px 0;
            border-top: solid 2px #999;
            border-bottom: solid 2px #999;
            margin-bottom: 49px;
            // NOTE - 폼태그 적용 부분
            // form{
            //     display: block;
            //     padding: 24px;
            //     span{
            //         display: flex;
            //         &:first-child{
            //             justify-content: space-between;
            //         }
            //         &:nth-child(2){
            //             justify-content: space-between;
            //             label{

            //             }
            //             p{
            //                 display: flex;
            //                 flex-wrap: wrap;
            //                 justify-content: flex-end;
            //                 input{
            //                     display: flex;
            //                     border: 1px solid #121212;
            //                     height: 35px;
            //                 }
            //             }
            //         }
            //         &:nth-child(3){}
            //         &:nth-child(4){}
            //         &:nth-child(5){}
            //         &:last-child{}
            //         label{
            //             white-space: nowrap;
            //             font-size: 16px;
            //             font-weight: 500;
            //             line-height: 1.75;
            //             letter-spacing: normal;
            //             text-align: center;
            //             color: #121212;
            //         }
            //         p{
            //             font-size: 16px;
            //             font-weight: 500;
            //             line-height: 1.75;
            //             letter-spacing: normal;
            //             text-align: center;
            //             color: #121212;
            //             input{
            //                 font-size: 16px;
            //                 color: #121212;
            //             }
            //         }
            //         select{
            //             font-size: 14px;
            //             font-weight: 500;
            //             line-height: 1.75;
            //             letter-spacing: normal;
            //             text-align: center;
            //             color: #121212;
            //         }
            //     }
            // }
          }
          .inquiryButton {
            button {
              display: flex;
              margin: 0 auto;
              border: solid 1px #0a51b7;
              background-color: #0a51b7;
              a {
                height: 100%;
                padding: 20px 63px 19px;
                font-size: 18px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                letter-spacing: normal;
                text-align: center;
                color: #fff;
              }
            }
          }
        }
        &:last-child {
          span {
            &:first-child {
              text-align: left;
              h2 {
                font-size: 44px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.4;
                letter-spacing: -0.55px;
                color: #121212;
                margin-bottom: 15px;
              }
              p {
                font-size: 16px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.75;
                letter-spacing: normal;
                color: #121212;
                margin-bottom: 50px;
              }
              iframe {
                padding-bottom: 50px;
                display: block;
                border-bottom: solid 1px #616161 !important;
              }
            }
            &:last-child {
              text-align: left;
              h2 {
                font-size: 44px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.4;
                letter-spacing: -0.55px;
                color: #121212;
                margin-top: 69.5px;
                margin-bottom: 50px;
              }
              img {
                max-width: 1200px;
                width: 100%;
                margin-bottom: 50px;
              }
              div {
                &.mapList {
                  margin-bottom: 50px;
                  > ul {
                    display: flex;
                    gap: 52px;
                    > li {
                      padding: 48px 0;
                      min-height: 346px;
                      flex: 1;
                      border-top: solid 1px #c5c8cf;
                      border-bottom: solid 1px #c5c8cf;
                      > p {
                        font-size: 20px;
                        font-weight: bold;
                        letter-spacing: -0.25px;
                        color: #0a51b7;
                        margin-bottom: 30px;
                      }
                      ul {
                        display: flex;
                        flex-direction: column;
                        gap: 15px;
                        li {
                          p {
                            &:first-child {
                              font-size: 16px;
                              font-weight: bold;
                              font-stretch: normal;
                              font-style: normal;
                              line-height: 1.75;
                              letter-spacing: normal;
                              color: #121212;
                            }
                            &:last-child {
                              font-size: 16px;
                              font-weight: normal;
                              line-height: 1.75;
                              color: #616161;
                            }
                          }
                        }
                      }
                    }
                  }
                }
                &.mapInfo {
                  width: 100%;
                  background: #e6e8eb;
                  padding: 45px;
                  text-align: center;
                  span {
                    span {
                      display: block;
                      font-size: 20px;
                      font-weight: bold;
                      font-stretch: normal;
                      font-style: normal;
                      line-height: normal;
                      letter-spacing: -0.25px;
                      text-align: center;
                      color: #092e6e;
                      margin-bottom: 15px;
                    }
                    p {
                      margin: 0;
                      font-size: 16px;
                      font-weight: normal;
                      font-stretch: normal;
                      font-style: normal;
                      line-height: 1.75;
                      letter-spacing: normal;
                      text-align: center;
                      color: #121212;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

.formWrap {
  min-height: 1700px;
  position: relative;
  display: block;
  padding: 49px 0 100%;
  border-top: solid 2px #999;
  margin-bottom: 150px;
}
.formTab {
  width: 100%;
  ul {
    display: flex;
    li {
      width: 33%;
      padding: 30px 10px;
      font-size: 14px;
      font-weight: bold;
      line-height: 1;
      letter-spacing: normal;
      text-align: center;
      color: #9a9da3;
      &.active,
      &:hover {
        color: #0a51b7;
      }
    }
  }
}

.erroTIt{
  font-size: 14px;
  color: #181818;
}

@media screen and (max-width: 768px) {
  span.contactContTab
    .contContMenu
    > span:last-child
    span:last-child
    div.mapList
    > ul {
    flex-direction: column;
    gap: 0;
  }
}
</style>
