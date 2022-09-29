Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@KYJ0206 
90heum
/
virnect
Public
Code
Issues
Pull requests
1
Actions
Projects
Wiki
Security
Insights
virnect/components/support/faq/FaqContents.vue

ParkTaeYong faq 복구
Latest commit d567db7 8 hours ago
 History
 1 contributor
465 lines (433 sloc)  10.2 KB

<template>
  <div>
    <span class="FAQList">
      <div
        class="FAQListInnerWrap"
        v-for="(data, idx) of contentList || []"
        :key="idx"
        @click="chooseDetail(data.id)"
      >
        <ul>
          <li>
            <p>
              {{
                $i18n.localeProperties.code === "ko"
                  ? data.typeName
                  : data.typeNameEn
              }}
            </p>
          </li>
          <li>
            <p>
              {{
                $i18n.localeProperties.code === "ko" ? data.title : data.titleEn
              }}
            </p>
          </li>
          <li>
            <i>
              <img
                class="normal"
                src="https://velog.velcdn.com/images/kyj0206/post/c005c24b-ce96-4a0b-98eb-3f299de4bd5a/image.png"
                alt="문의기본"
              />
              <img
                class="hover"
                src="https://velog.velcdn.com/images/kyj0206/post/ea1ff28b-e1d6-4f0d-aafe-125a72606beb/image.png"
                alt="문의호버"
              />
            </i>
          </li>
        </ul>
        <div class="FAQInnerWrap" v-if="isDetail === data.id">
          <span
            class="FaqInner"
            v-html="
              $i18n.localeProperties.code === 'ko'
                ? responseData.contents
                : responseData.contentsEn
            "
          >
          </span>
        </div>
      </div>

      <common-paging :pagingData="pagingData" :movePage="movePage" />
    </span>
  </div>
</template>

<script>
import CommonPaging from "~/components/paging/paging.vue";
export default {
  components: {
    CommonPaging,
  },
  props: {
    contentList: Array,
    pagingData: Object,
    movePage: Function,
  },
  data() {
    return {
      isDetail: null,
      responseData: {},
    };
  },
  methods: {
    chooseDetail(e) {
      
      this.isDetail = this.isDetail === e ? null : e;
      // this.$router.push(`?type=${e ? e : ''}${this.isCategory ? '&category=' + this.isCategory : ''}`);
      this.requestData(this.isDetail);
    },
    async requestData(e) {
      this.responseData = {};
      if (!this.isDetail) return;
      const { data } = await this.$axios.$get(`admin/support/faq/${e}`);
      this.responseData = data ? data : !this.isDetail
    },
  },
};
</script>



<style lang="scss" scoped>
.FAQList {
  display: block;
  width: 100%;

  li,
  ul,
  a {
    list-style: none;
    text-decoration: none;
  }
  .FAQListInnerWrap {
    display: block;
    border-bottom: solid 1px #c5c8cf;
    &.active {
      ul {
        li {
          &:nth-child(2) {
            p {
              font-weight: bold;
              color: #121212;
              &:hover {
                color: #0a51b7;
              }
            }
          }
          &:last-child {
            i {
              .normal {
                display: none;
              }
              .hover {
                display: block;
              }
            }
          }
        }
      }
      .FAQInnerWrap {
        display: block;
        &::before {
          display: block;
        }
      }
    }
    > ul {
      padding: 0;
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: space-between;
      li {
        padding: 31px 0;
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.75;
        letter-spacing: normal;
        color: #616161;
        a {
          color: #616161;
        }
        span {
          display: none;
        }
        &:first-child {
          flex: 1;
          text-align: left;
          min-width: 160px;
          padding: 30px;
          p {
            border-radius: 12px;
            border: solid 1px #3f97d3;
            background-color: #fff;
            padding: 6px 12px 7px;
            width: 100%;
            height: 100%;
            font-size: 12px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1;
            letter-spacing: normal;
            text-align: center;
            color: #3f97d3;
          }
        }
        &:nth-child(2) {
          flex: 20;
          p {
            text-align: left;
            cursor: pointer;
            &:hover {
              color: #0a51b7;
            }
          }
        }
        &:last-child {
          flex: 1;
          padding: 30px;
          i {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            img {
              max-width: 19px;
              &.normal {
                display: block;
              }
              &.hover {
                display: none;
              }
            }
          }
        }
      }
    }
    .FAQInnerWrap {
      &::before {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-image: linear-gradient(
          to right,
          #aaa 33%,
          rgba(255, 255, 255, 0) 0%
        );
        background-position: bottom;
        background-size: 8px 2px;
        background-repeat: repeat-x;
      }
      .FaqInner {
        display: block;
        padding: 50px 24px;
        h1 {
          font-size: 32px;
          font-weight: bold;
          line-height: 1.44;
          color: #121212;
          margin-bottom: 37px;
        }
        h2 {
          font-size: 26px;
          font-weight: bold;
          line-height: 1.46;
          color: #121212;
          margin-bottom: 31px;
        }
        h3 {
          font-size: 22px;
          font-weight: 500;
          line-height: 1.45;
          color: #121212;
          margin-bottom: 29px;
        }
        h4 {
          font-size: 18px;
          font-weight: bold;
          line-height: 1.56;
          color: #121212;
          margin-bottom: 15px;
        }
        p {
          font-size: 16px;
          line-height: 1.75;
          color: #121212;
        }
      }
    }
    &:nth-last-child(2) {
      margin-bottom: 50px;
    }
  }
}
@media screen and (max-width: 650px) {
  .FAQList .FAQListInnerWrap > ul:first-child {
    padding-top: 20px;
  }
  .FAQList .FAQListInnerWrap > ul li[data-v-caca98e8]:last-child {
    padding: 10px 5px 10px 5px;
  }
  .FAQList .FAQListInnerWrap > ul li:nth-child(2) p {
    margin-left: 20px;
  }
  .LearningCenterList
    .userBox
    .userBoxCont
    > a
    span.listInfo
    span:nth-child(2) {
    margin-bottom: 10px;
  }
  .noticeList > ul:first-child {
    display: none;
  }
  .FAQList .FAQListInnerWrap > ul ul,
  .FAQList .FAQListInnerWrap > ul > li:first-child {
    width: 100%;
  }
  .noticeList > ul:nth-child(2) {
    border-top: 1px solid #616161;
  }
  .noticeList > ul li:last-child {
    display: none;
  }
  .FAQList .FAQListInnerWrap > ul,
  .noticeList > ul {
    gap: 5px;
  }
  .FAQList .FAQListInnerWrap > ul li:first-child,
  .noticeList > ul li:first-child {
    min-width: 85px;
    padding: 0 0 25px 0;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    color: #616161;
  }
  .FAQList .FAQListInnerWrap > ul ul li:first-child,
  .FAQList .FAQListInnerWrap > ul ul li:last-child,
  .FAQList .FAQListInnerWrap > ul li:nth-child(2),
  .noticeList > ul li:nth-child(2) {
    padding: 25px 0;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: #616161;
  }
  .FAQList .FAQListInnerWrap > ul ul li:first-child p,
  .FAQList .FAQListInnerWrap > ul ul li:last-child {
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: #616161;
  }
  .LearningCenter .centerModule {
    flex-direction: column;
    text-align: center;
    gap: 30px;
    padding: 40px;
  }
  .LearningCenter .centerModule .centerModuleMore {
    justify-content: center;
  }
  .LearningCenter .centerModule .centerModuleMore,
  .LearningCenter .centerModule .centerModuleTit {
    width: 100%;
  }
  .FAQList .FAQListInnerWrap > ul li:first-child p {
    max-width: 90px;
    min-width: 90px;
    padding: 10px;
  }
  .LearningCenter .centerModule .centerModuleMore span:last-child p,
  .LearningCenter .centerModule .centerModuleMore span:first-child p {
    white-space: nowrap;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.18px;
    color: #092e6e;
  }
  .LearningCenter .centerModule .centerModuleTit h2 {
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: -0.23px;
    text-align: center;
    color: #092e6e;
  }
  .LearningCenterList .userBox .userBoxCont > div,
  .LearningCenterList .tutorialBox .tutorialBoxCont > div,
  .LearningCenterList .guideBox .guideBoxCont > div {
    width: 100%;
    margin-right: 0 !important;
  }
  .LearningCenterList .userBox .userBoxCont > a,
  .LearningCenterList .tutorialBox .tutorialBoxCont > a,
  .LearningCenterList .guideBox .guideBoxCont > a {
    max-height: none;
  }
}
@media screen and (max-width: 500px) {
  .contContMenu > span:first-child .formWrap {
    min-height: 1725px;
  }
  .contContMenu > span.contactTabActive3 .formTab ul {
    flex-wrap: wrap;
  }
  .contContMenu > span.contactTabActive3 .formTab ul li {
    width: 50%;
    border: 1px solid #ccc;
    padding: 15px 10px;
  }
  .contContMenu > span.contactTabActive3 .formTab ul li.active,
  .contContMenu > span.contactTabActive3 .formTab ul li:hover {
    background-color: #092e6e;
    border: 1px solid #092e6e;
    color: #fff;
  }
}
@media screen and (max-width: 425px) {
  .FAQList .FAQListInnerWrap > ul li:first-child p {
    font-size: 10px;
  }
  .LearningCenterMbAside,
  .LearningCenterMbAside ul,
  .FAQMbAside,
  .FAQMbAside ul,
  .noticeMbAside,
  .noticeMbAside ul {
    max-width: none;
  }
  .LearningCenterMbAside,
  .FAQMbAside,
  .noticeMbAside {
    position: relative;
  }
  .LearningCenterMbAside ul,
  .FAQMbAside ul,
  .noticeMbAside ul {
    box-sizing: content-box;
  }
}
@media screen and (max-width: 350px) {
  .contContMenu > span:first-child .formWrap {
    min-height: 1750px;
  }
}
</style>
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
You have no unread notifications
90heum
virnect
main
Search files
modulesmodules
newsnews
pagingpaging
policypolicy
productsproducts
solutionssolutions
subscriptionsubscription
supportsupport
faqfaq
AsideMenu.vueAsideMenu.vue
FaqContents.vueFaqContents.vue
GoogleMap.vueGoogleMap.vue
learning-centerlearning-center
noticenotice
SubMenu.vueSubMenu.vue
faq.vuefaq.vue
faqBanner.vuefaqBanner.vue
headBanner.vueheadBanner.vue
inquiry.vueinquiry.vue
inquiryBanner.vueinquiryBanner.vue
learnBanner.vuelearnBanner.vue
learning-center.vuelearning-center.vue
notice.vuenotice.vue
footer.vuefooter.vue
gnbHeader.vuegnbHeader.vue
header.vueheader.vue
langlang
layoutslayouts
mixinsmixins
node_modulesnode_modules
pagespages
pluginsplugins
staticstatic
storestore
.DS_Store.DS_Store
.gitignore.gitignore
README.mdREADME.md
nuxt.config.jsnuxt.config.js
package-lock.jsonpackage-lock.json
package.jsonpackage.json
zzz.htmlzzz.html
v3.8.2
