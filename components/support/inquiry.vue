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
              문의하기
            </li>
            <li
              :class="`${!chosenMenu ? 'contactTabActive2' : ''}`"
              tap="2"
              @click="chooseMenu(false)"
            >
              찾아오는 길
            </li>
          </ul>

          <span class="contContMenu">
            <span
              :class="`${chosenMenu ? 'contactTabActive3' : ''}`"
              tap-content="1"
            >
              <h2>무엇을 도와드릴까요?</h2>
              <p>
                아래 문의 유형을 선택하시고, 내용을 작성해주시면 신속하게 답변
                드리겠습니다.
              </p>
              <span class="formTab">
                <ul>
                  <li
                    :class="`${isTab === 2 ? 'active' : ''}`"
                    @click="chooseTab(2)"
                  >
                    구매문의
                  </li>
                  <li
                    :class="`${isTab === 3 ? 'active' : ''}`"
                    @click="chooseTab(3)"
                  >
                    제품문의
                  </li>
                  <li
                    :class="`${isTab === 4 ? 'active' : ''}`"
                    @click="chooseTab(4)"
                  >
                    기타
                  </li>
                </ul>
              </span>
              <div class="formWrap">
                <!-- //NOTE - 폼삽입 구역 START-->
                <!-- 데모신청 -->
                <iframe
                  class="iframeForm"
                  v-if="isTab === 1"
                  id="iframe1"
                  :src="
                    $i18n.localeProperties.code === 'ko'
                      ? 'https://pardot.virnect.com/l/929783/2022-06-16/3nplr'
                      : 'https://pardot.virnect.com/l/929783/2022-07-15/485t2'
                  "
                  frameborder="0"
                  marginwidth="0"
                  marginheight="0"
                  scrolling="no"
                  style="border: none; max-width: 100%; max-height: 100vh"
                  allowfullscreen
                  webkitallowfullscreen
                  mozallowfullscreen
                  msallowfullscreen
                ></iframe>

                <!-- 구매문의 -->
                <iframe
                  class="iframeForm"
                  v-if="isTab === 2"
                  id="iframe2"
                  :src="
                    $i18n.localeProperties.code === 'ko'
                      ? 'https://pardot.virnect.com/l/929783/2022-06-15/3l686'
                      : 'https://pardot.virnect.com/l/929783/2022-07-15/485t5'
                  "
                  style="
                    padding-bottom: 49px;
                    position: absolute;
                    border: 0;
                    display: block;
                    width: 100%;
                    height: 100%;
                  "
                ></iframe>
                <!-- 제품문의 -->
                <iframe
                  class="iframeForm"
                  v-if="isTab === 3"
                  id="iframe3"
                  :src="
                    $i18n.localeProperties.code === 'ko'
                      ? 'https://pardot.virnect.com/l/929783/2022-06-14/3kzcp'
                      : 'https://pardot.virnect.com/l/929783/2022-07-15/485t8'
                  "
                  style="
                    padding-bottom: 49px;
                    position: absolute;
                    border: 0;
                    display: block;
                    width: 100%;
                    height: 100%;
                  "
                ></iframe>
                <!-- 기타 -->
                <iframe
                  class="iframeForm"
                  v-if="isTab === 4"
                  id="iframe4"
                  src="https://pardot.virnect.com/l/929783/2022-06-16/3npmk"
                  style="
                    padding-bottom: 49px;
                    position: absolute;
                    border: 0;
                    display: block;
                    width: 100%;
                    height: 100%;
                  "
                ></iframe>
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
                <h2>글로벌 버넥트</h2>
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
                          <p>본사</p>
                          <p>서울시 용산구 한강대로 7길 10-15</p>
                        </li>
                        <li>
                          <p>연구/개발 센터</p>
                          <p>서울시 용산구 서빙고로 17, 센트럴파워타워 3층</p>
                        </li>
                        <li>
                          <p>사업/프로젝트 센터</p>
                          <p>서울시 용산구 한강대로 31, KY빌딩 1층</p>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <p>AUSTRIA</p>
                      <ul>
                        <li>
                          <p>유럽 법인</p>
                          <p>
                            Hoher Markt4, Stiege2, Top D1, 1010 Wien, Austria
                          </p>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <p>U.S.</p>
                      <ul>
                        <li>
                          <p>미국 지사</p>
                          <p>
                            3003 N First St #221, San Jose CA95134, United
                            States
                          </p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div class="mapInfo">
                  <span>
                    <span>사업 지원</span>
                    <p>이메일 : contact@virnect.com</p>
                    <p>연락처 : 02-749-1004</p>
                  </span>
                </div>
              </span>
            </span>
          </span>
        </span>
      </div>
    </section>
  </div>
</template>

<script>
import SubMenu from "~/components/support/SubMenu.vue";
import GoogleMap from "~/components/support/faq/GoogleMap.vue";
import InquiryBanner from "../../components/support/inquiryBanner.vue";

export default {
  components: {
    SubMenu,
    GoogleMap,
    InquiryBanner,
  },
  data() {
    return {
      chosenMenu: true,
      isTab: 2,
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
            padding: 50px 50px;
            border-top: solid 2px #999;
            border-bottom: solid 2px #999;
            margin-bottom: 49px;
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
  min-height: 1400px;
  position: relative;
  display: block;
  padding: 49px 50px;
  border-top: solid 2px #999;
  margin-bottom: 150px;
  max-width: 1200px;
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
        color: #121212;
      }
    }
  }
}
</style>
