<template>
  <div>
    <!-- 헤더 -->
    <head-banner />

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
              {{ $t("middleBanner.introuduce") }}
            </li>
            <li
              :class="`${!chosenMenu ? 'contactTabActive2' : ''}`"
              tap="2"
              @click="chooseMenu(false)"
            >
              {{ $t("middleBanner.brand") }}
            </li>
          </ul>

          <span class="contContMenu">
            <span
              :class="`${chosenMenu ? 'contactTabActive3' : ''}`"
              tap-content="1"
            >
              <!-- <About/> -->
              <transition name="app-fade" mode="out-in">
                <indroduce-component />
                <companyValue />
              </transition>
            </span>

            <span
              :class="`${!chosenMenu ? 'contactTabActive3' : ''}`"
              tap-content="2"
            >
              <transition name="app-fade" mode="out-in">
                <brand-component />
              </transition>
            </span>
          </span>
        </span>
      </div>
    </section>
  </div>
</template>
<script>
import About from "./about.vue";
import Brand from "./subCompany/Brand.vue";
import indroduceComponent from "../../components/company/pages/introduce.vue";
import brandComponent from "../../components/company/pages/brand.vue";
import companyValue from "../../components/company/pages/companyValue.vue";

export default {
  data() {
    return {
      chosenMenu: true,
    };
  },
  methods: {
    chooseMenu(e) {
      this.chosenMenu = e;
    },
  },
  components: {
    About,
    Brand,
    brandComponent,
    indroduceComponent,
    companyValue,
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
    width: 100%;
    padding: 150px 0 0;
    > ul {
      display: flex;
      margin: 0 auto 100px;
      max-width: 1200px;
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



@media screen and(max-width: 768px) {
  span.contactContTab{
    padding: 90px 0;
  }
}
</style>