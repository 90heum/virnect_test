<template>
  <div>
    <sub-visual-section
      class="sm"
      :image="'https://velog.velcdn.com/images/kyj0206/post/826e3755-e1d4-4466-bf63-273cc3b52c9c/image.png'"
      :category="visualText.category"
      :title="$t('companyText.visualText.title')"
      :contents="$t('companyText.visualText.contents')"
    ></sub-visual-section>
    <!-- NoticeDetail -->
    <div class="detailCompany">
      <!-- 컨텐츠 -->
      <div class="detailCompanyWrap">
        <!-- 목록으로 -->
        <span class="asList1">
          <button onclick={window.history.go(-1)}>
           목록으로
          </button>
        </span>
        <!-- ContHead -->
        <span class="contHead">
          <span>
            <h2>
              {{
                $i18n.localeProperties.code === "ko"
                  ? irContentData.title
                  : irContentData.titleEn
              }}
            </h2>
          </span>
          <span>
            <p>{{ $dayjs(irContentData.createdDate).format("YYYY-MM-DD") }}</p>
          </span>
        </span>
        <!-- 블로그 -->
        <span
          class="detailBlog"
          v-html="
            $i18n.localeProperties.code === 'ko'
              ? irContentData.content
              : irContentData.contentEn
          "
        ></span>
        <!-- PreNext -->
        <span class="PreNext">
          <ul
            @click="
              requestData(irContentData.prevId ? irContentData.prevId : id)
            "
          >
            <li>
              <p>
                {{ $i18n.localeProperties.code === "ko" ? "이전글" : "Prev" }}
              </p>
              <i>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/7bd599f7-7fb2-40a0-9289-25db6e412a37/image.png"
                  alt="이전글 아이콘"
                />
              </i>
            </li>
            <li>
              <nuxt-link
                :to="`?id=${irContentData.prevId ? irContentData.prevId : id}`"
              >
                {{
                  irContentData.prevTitle
                    ? $i18n.localeProperties.code === "ko"
                      ? irContentData.prevTitle
                      : irContentData.prevTitleEn
                    : "이전 글이 존재하지 않습니다."
                }}
              </nuxt-link>
            </li>
            <li>
              {{
                irContentData.nextPrevDate
                  ? $dayjs(irContentData.prevCreatedDate).format("YYYY-MM-DD")
                  : ""
              }}
            </li>
          </ul>
          <ul
            @click="
              requestData(irContentData.nextId ? irContentData.nextId : id)
            "
          >
            <li>
              <p>
                {{ $i18n.localeProperties.code === "ko" ? "다음글" : "Next" }}
              </p>
              <i>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/3d9cc89c-e518-415b-8b40-01ae30b6ae60/image.png"
                  alt="다음글 아이콘"
                />
              </i>
            </li>
            <li>
              <nuxt-link
                :to="`?id=${irContentData.nextId ? irContentData.nextId : id}`"
              >
                {{
                  irContentData.nextTitle
                    ? $i18n.localeProperties.code === "ko"
                      ? irContentData.nextTitle
                      : irContentData.nextTitleEn
                    : "다음 글이 존재하지 않습니다."
                }}
              </nuxt-link>
            </li>
            <li>
              {{
                irContentData.nextCreatedDate
                  ? $dayjs(irContentData.nextCreatedDate).format("YYYY-MM-DD")
                  : ""
              }}
            </li>
          </ul>
        </span>
        <!-- 목록으로 -->
        <span class="asList2">
          <button>
            <nuxt-link to="ir"> 목록으로 </nuxt-link>
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import subVisualSection from "~/layouts/common/SubVisual.vue";
export default {
  head: {
    title: "Investor Relations - VIRNECT",
    htmlAttrs: {
      lang: "ko",
    },
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "버넥트는 고객, 주주, 임직원을 비롯한 다양한 파트너들과 가치를 공유하며 생활 전반에 XR 기술이 스며들도록 최선을 다하고 있습니다.",
      },
    ],
  },
  components: {
    subVisualSection,
  },
  data() {
    return {
      id: null,
      irContentData: {},
      visualText: {
        image: "../images/pages/company/img-company-top",
        category: "Company",
      },
    };
  },
  methods: {
    requestData(e) {
      this.id = e;
      this.$axios
        .get(`admin/ir/${e}`)
        .then((res) => {
          this.irContentData = res.data.data;
        })
        .catch((e) => console.error(e));
    },
  },
  async asyncData({ $axios, route }) {
    try {
      const data = await $axios.get(`admin/ir/${route.query.id}`);
      const dataJson = await data;
      console.log(dataJson.data.data);
      return { irContentData: dataJson.data.data, id: route.query.id };
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style lang="scss" scoped>
.detailCompany {
  width: 100%;
  background-color: #fff;
  .detailCompanyWrap {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 150px 30px;
    // 목록으로
    .asList1 {
      display: flex;
      justify-content: end;
      width: 100%;
      padding-bottom: 25px;
      border-bottom: solid 1px #616161;
      button {
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
    .contHead {
      display: flex;
      justify-content: space-between;
      width: 100%;
      gap: 10px;
      border-bottom: solid 3px #616161;
      span {
        &:first-child {
          width: 100%;
          padding: 29px 0;
          h2 {
            font-size: 22px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.27;
            letter-spacing: normal;
            color: #121212;
          }
          p {
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.75;
            letter-spacing: normal;
            color: #121212;
          }
        }
        &:last-child {
          display: flex;
          align-items: flex-end;
          white-space: nowrap;
          padding: 29px 0;
          p {
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
    .detailBlog {
      border-bottom: solid 1px #616161;
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
    // PreNext
    .PreNext {
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
          padding: 29px 15px;
        }
        &:first-child {
          border-bottom: solid 1px #c5c8cf;
          li {
            &:first-child {
              flex: 1;
              display: flex;
              gap: 6px;
              align-items: center;
              p {
                &:first-child {
                  font-size: 16px;
                  font-weight: normal;
                  font-stretch: normal;
                  font-style: normal;
                  line-height: 1.75;
                  letter-spacing: normal;
                  color: #616161;
                }
              }
              i {
                img {
                  max-width: 19px;
                }
              }
            }
            &:nth-child(2) {
              flex: 6;
              a {
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
                &:hover {
                  color: #0a51b7;
                }
              }
            }
            &:last-child {
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
        &:last-child {
          li {
            &:first-child {
              flex: 1;
              display: flex;
              gap: 6px;
              align-items: center;
              p {
                &:first-child {
                  font-size: 16px;
                  font-weight: normal;
                  font-stretch: normal;
                  font-style: normal;
                  line-height: 1.75;
                  letter-spacing: normal;
                  color: #616161;
                }
              }
              i {
                img {
                  max-width: 19px;
                }
              }
            }
            &:nth-child(2) {
              flex: 6;
              a {
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
                &:hover {
                  color: #0a51b7;
                }
              }
            }
            &:last-child {
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
    .asList2 {
      display: flex;
      justify-content: end;
      width: 100%;
      padding-top: 25px;
      border-top: solid 1px #616161;
      button {
        max-width: 120px;
        width: 100%;
        border: solid 1px #979797;
        background-color: #fff;

        a {
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
  .detailCompany .detailCompanyWrap {
    padding: 80px 24px;
  }

  .detailCompany .detailCompanyWrap .PreNext ul li {
    padding: 29px 10px;
  }
}

@media screen and (max-width: 650px) {
  .detailCompany .detailCompanyWrap .PreNext ul:last-child li:last-child,
  .detailCompany .detailCompanyWrap .PreNext ul:first-child li:last-child {
    display: none;
  }

  .detailCompany .detailCompanyWrap .PreNext ul:first-child li:nth-child(2) a,
  .detailCompany .detailCompanyWrap .PreNext ul:last-child li:nth-child(2) a {
    -webkit-line-clamp: 1;
  }

  .detailCompany .detailCompanyWrap .contHead span:last-child p,
  .detailCompany .detailCompanyWrap .PreNext ul:last-child li:first-child i,
  .detailCompany .detailCompanyWrap .PreNext ul:first-child li:first-child i {
    display: none;
  }

  .detailCompany .detailCompanyWrap .PreNext ul:last-child li:first-child,
  .detailCompany .detailCompanyWrap .PreNext ul:first-child li:first-child {
    padding: 29px 0px 29px 10px;
  }

  .detailCompany .detailCompanyWrap .PreNext ul:first-child li:nth-child(2),
  .detailCompany .detailCompanyWrap .PreNext ul:last-child li:nth-child(2) {
    padding: 29px 10px 29px 15px;
  }
}
</style>