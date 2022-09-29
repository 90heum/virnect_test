<template>
  <div>
    <!-- 배너 -->
    <common-banner />

    <!-- 바디 -->
    <div class="newsPress">
      <!-- 컨텐츠 -->
      <div class="tabCont">
        <!-- aside -->
        <span class="newsPressAside">
          <span @click="handleIsType(null)">
            <p :class="isType === null ? 'newsTypeActive' : ''">
              {{ $i18n.localeProperties.code === "ko" ? "전체" : "All" }}
            </p>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/677e0a5b-146e-46a5-a5db-ef2b185febf4/image.png"
                alt="newsPressTag"
            /></i>
          </span>
          <span
            v-for="(data, idx) of typeList"
            :key="idx"
            @click="handleIsType(data.id)"
          >
            <p :class="isType === data.id ? 'newsTypeActive' : ''">
              {{
                $i18n.localeProperties.code === "ko" ? data.name : data.nameEn
              }}
            </p>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/677e0a5b-146e-46a5-a5db-ef2b185febf4/image.png"
                alt="newsPressTag"
            /></i>
          </span>
        </span>
        <!-- 모바일 어사이드 -->
        <div class="newsPressMbAside select">
          <div class="selected" @click="() => (isToggle = !isToggle)">
            <div class="selected-icon">
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/0f39f4c6-a786-41ea-b239-84f4997f5712/image.png"
                alt="다운아이콘"
              />
            </div>
            <div class="selected-value">
              {{
                isType
                  ? $i18n.localeProperties.code === "ko"
                    ? typeList[typeList.findIndex((e) => e.id === isType)].name
                    : typeList[typeList.findIndex((e) => e.id === isType)]
                        .nameEn
                  : $i18n.localeProperties.code === "ko"
                  ? "전체"
                  : "All"
              }}
            </div>
            <div class="arrow"></div>
          </div>
          <ul v-if="isToggle">
            <li
              class="option"
              @click="[handleIsType(null), (isToggle = !isToggle)]"
            >
              {{ $i18n.localeProperties.code === "ko" ? "전체" : "All" }}
            </li>
            <li
              class="option"
              v-for="(data, idx) of typeList"
              :key="idx"
              @click="[handleIsType(data.id), (isToggle = !isToggle)]"
            >
              {{
                $i18n.localeProperties.code === "ko" ? data.name : data.nameEn
              }}
            </li>
          </ul>
        </div>
        <!-- 블로그 탭 리스트 -->
        <span class="newsPressList" v-show="newsData()">
          <!-- Video Tutorial -->
          <div class="tutorialBox">
            <!-- 컨텐츠박스 -->
            <span class="tutorialBoxCont">
              <div v-for="(data, idx) of contentList" :key="idx">
                <nuxt-link
                  :to="`detail?id=${data.id}&type=${isType ? isType : ''}`"
                >
                  <span class="listImg">
                    <img
                      :src="`${
                        data.thumbnail
                          ? data.thumbnail
                          : 'https://velog.velcdn.com/images/kyj0206/post/75a8bf3a-fe84-47e5-aa54-fca6f438b599/image.png'
                      }`"
                      alt="디폴트 이미지"
                    />
                  </span>
                  <span class="listInfo">
                    <span>
                      <h2>
                        {{
                          $i18n.localeProperties.code === "ko"
                            ? data.title
                            : data.titleEn
                        }}
                      </h2>
                    </span>
                    <span>
                      <p>
                        {{
                          $i18n.localeProperties.code === "ko"
                            ? data.typeName
                            : data.typeNameEn
                        }}
                      </p>
                    </span>
                    <span class="ddayDiv">{{
                      $dayjs(data.createdDate).format("YYYY-MM-DD")
                    }}</span>
                  </span>
                </nuxt-link>
              </div>
            </span>

            <common-paging :pagingData="pagingData" :movePage="movePage" />
          </div>
        </span>
      </div>
    </div>

    <contact-cta-module />
  </div>
</template>

<script>
import CommonBanner from "~/components/news/CommonBaner.vue";
import CommonPaging from "~/components/paging/paging.vue";
import ContactCtaModule from "~/components/company/partials/contactModule.vue";

export default {
  head: {
    title: "업무현장의 운영 및 관리를 위한 XR 솔루션 공급기업 - VIRNECT",
    htmlAttrs: {
      lang: "ko",
    },
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "버넥트는 스마트한 미래, 행복한 미래, 지속 가능한 저탄소 미래를 추구하는 확장현실(XR) 기술을 활용한 일상의 디지털 트랜스포메이션을 제시합니다. 국내 주요 대기업 및 공공기업에서 버넥트의 XR 솔루션을 이미 사용하고 있으며 혁신적인 솔루션으로 인정받아 기술 및 시장의 리더로서 인정받고 있습니다.",
      },
    ],
  },
  watch: {
    $route() {
      const type = Number(this.$route.query.type) || null;
      this.handleIsType(type);
    },
  },
  data() {
    return {
      isType: null,
      isToggle: false,
      pagingData: {
        currentPage: 1,
        currentSize: 20,
        totalPage: 1,
        totalElements: 1,
        startPage: 1,
        endPage: 1,
      },
      contentList: [],
      isType: Number(this.$route.query.type) || null,
    };
  },
  components: {
    CommonBanner,
    CommonPaging,
    ContactCtaModule,
  },
  methods: {
    async handleIsType(e, isPaging = false) {
      this.isType = e;
      this.$router.push(`?type=${e ? e : ""}`);
      if (!isPaging) this.pagingData = { ...this.pagingData, currentPage: 1 };
      await this.$axios
        .get(
          `admin/news?page=${this.pagingData.currentPage}&size=${
            this.pagingData.currentSize
          }&typeId=${this.isType ? this.isType : ""}`
        )
        .then((res) => {
          this.contentList = res.data.data.newsBoardResponseList;
          this.pagingData = res.data.data.pageMetadataResponse;
        })
        .catch((e) => console.error(e));
      // movePage(currentPage) {
      //   this.pagingData = { ...this.pagingData, currentPage: currentPage };
      //   this.handleIsType(this.isType, true);
      // },
    },
    movePage(currentPage) {
      this.pagingData = { ...this.pagingData, currentPage: currentPage };
      this.handleIsType(this.isType, true);
    },
    newsData() {
      if (this.$i18n.locale === "ko") return <p>게시물이 없습니다.</p>;
    },
  },
  async asyncData({ $axios, route }) {
    const routeType = route.query.type ? route.query.type : null;
    try {
      const data = Promise.all([
        $axios.get(`admin/news/type`),
        $axios.get(
          `admin/news?page=1&size=${21}${
            routeType ? "&typeId=" + routeType : ""
          }`
        ),
      ]);
      const dataJson = await data;
      return {
        typeList: dataJson[0].data.data.newsTypeResponseList,
        contentList: dataJson[1].data.data.newsBoardResponseList,
        pagingData: dataJson[1].data.data.pageMetadataResponse,
      };
    } catch (e) {
      console.error(e);
    }
  },
  // methods: {
  // async handleIsType (e, isPaging = false) {
  //       this.isType = e;
  //       if (!isPaging) this.pagingData = {...this.pagingData, currentPage: 1 };
  //       await this.$axios.get(`admin/news?page=${this.pagingData.currentPage}&size=${this.pagingData.currentSize}&type=${this.isType ? this.isType : ''}`)
  //                         .then(res => {
  //                           this.contentList = res.data.data.newsBoardResponseList;
  //                         })
  //                         .catch(e => console.error(e))
  //   // movePage(currentPage) {
  //   //   this.pagingData = { ...this.pagingData, currentPage: currentPage };
  //   //   this.handleIsType(this.isType, true);
  //   // },
  // },

  // async asyncData({ $axios }) {
  //   try {
  //     const data = Promise.all([
  //       $axios.get(`admin/news/type`),
  //       $axios.get(`admin/news?page=1&size=${20}`),
  //     ]);
  //     const dataJson = await data;
  //     return {
  //       typeList: dataJson[0].data.data.newsTypeResponseList,
  //       contentList: dataJson[1].data.data.newsBoardResponseList,
  //     };
  //   } catch (e) {
  //     console.error(e);
  //   }
  // },
};
</script>

<style lang="scss" scoped>
.newsPress {
  li,
  ul,
  a {
    list-style: none;
    text-decoration: none;
  }
  ul {
    padding-left: 0px;
  }
  margin: 0 auto;
  max-width: 1260px;
  width: 100%;
  padding: 150px 30px;
  .tabCont {
    display: flex;
    gap: 20px;
    // 웹용 어사이드
    .newsPressAside {
      display: flex;
      gap: 30px;
      flex-direction: column;
      max-width: 180px;
      width: 100%;
      span {
        display: flex;
        align-items: center;
        gap: 10px;
        &:hover {
          p {
            text-decoration: underline;
            text-underline-position: under;
            color: #0a51b7;
          }
        }
        p {
          cursor: pointer;
          font-size: 18px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.5;
          letter-spacing: -0.25px;
          color: #121212;
        }
        i {
          cursor: pointer;
          display: flex;
          img {
            max-width: 19px;
            min-width: 19px;
            width: 100%;
          }
        }
      }
    }
    // 모바일용
    .newsPressMbAside {
      display: none;
      max-width: 200px;
      width: 100%;
      border: 1px solid #999;
      font-size: 16px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: normal;
      color: #121212;
      ul {
        max-width: 200px;
        width: 100%;
        border: 1px solid #999;
        position: absolute;
        background: #fff;
        border-top: none;
        margin: 1px 0 0 -1px;
        cursor: pointer;
        li {
          padding: 16.5px 15px;
          background-color: #f7f8f9;
          border-bottom: solid 1px #c5c8cf;
          &:last-child {
            border-bottom: none;
          }
          &:hover {
            background-color: #fff;
            color: #0a51b7;
          }
        }
      }
      .selected {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 15px;
        .selected-icon {
          display: flex;
          align-items: center;
          img {
            max-width: 34px;
          }
        }
        .selected-value {
          display: block;
          width: 100%;
          max-width: 90px;
        }
        .arrow {
          max-width: 19px;
          width: 100%;
          height: 19px;
          background: url("https://velog.velcdn.com/images/kyj0206/post/c30a0983-f07b-4a35-bf95-150eb3f3ab85/image.png")
            no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    // 컨텐츠 리스트
    .newsPressList {
      display: block;
      width: 100%;
      .userBox {
        display: flex;
        flex-direction: column;
        border-bottom: solid 1px #616161;
        .userBoxTit {
          display: flex;
          justify-content: space-between;
          align-items: center;
          p {
            display: block;
            margin-bottom: 30px;
            &:first-child {
              font-size: 24px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.33;
              letter-spacing: -0.3px;
              color: #0a51b7;
            }
            &:last-child {
              cursor: pointer;
              display: flex;
              font-size: 14px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: -0.18px;
              text-align: right;
              color: #9a9da3;
              i {
                margin-left: 7px;
                display: flex;
                padding-top: 1px;
                img {
                  max-width: 12px;
                  width: 100%;
                  height: 12px;
                }
              }
            }
          }
        }
        .userBoxCont {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 70px;
          > div {
            margin-right: 15px;
            display: block;
            cursor: pointer;
            height: 100%;
            padding: 10px;
            border: solid 1px #e6e8eb;
            background-color: #fff;
            max-width: 324px;
            width: calc((100% - 30px) / 3);
            &:first-child {
              margin-right: 15px;
              margin-bottom: 15px;
            }
            &:nth-child(2) {
              margin-right: 15px;
              margin-bottom: 15px;
            }
            &:nth-child(3) {
              margin-right: 0px;
              margin-bottom: 15px;
            }
            &:nth-child(4) {
              margin-right: 15px;
              margin-bottom: 15px;
            }
            &:nth-child(5) {
              margin-right: 15px;
              margin-bottom: 15px;
            }
            &:nth-child(6) {
              margin-right: 0px;
              margin-bottom: 15px;
            }
            a {
              display: flex;
              flex-direction: column;
              max-height: 347px;
              min-height: 347px;
              span {
                &.listImg {
                  flex: 1;
                  display: block;
                  margin-bottom: 16px;
                  img {
                    width: 100%;
                    // aspect-ratio: 16 / 9.7;
                  }
                }
                &.listInfo {
                  flex: 13;
                  display: flex;
                  flex-direction: column;
                  span {
                    &:first-child {
                      h2 {
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        font-size: 20px;
                        font-weight: bold;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.4;
                        letter-spacing: -0.25px;
                        color: #121212;
                        margin-bottom: 12px;
                      }
                    }
                    &:nth-child(2) {
                      max-width: 60px;
                      max-height: 24px;
                      padding: 6px 10px;
                      border-radius: 12px;
                      border: solid 1px #3f97d3;
                      background-color: #fff;
                      p {
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
                    &:last-child {
                      flex: 2;
                      display: flex;
                      align-items: flex-end;
                      gap: 10px;
                      i {
                        img {
                          max-width: 22px;
                        }
                      }
                      u {
                        font-size: 14px;
                        font-weight: 500;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.36;
                        letter-spacing: -0.18px;
                        margin-bottom: 3px;
                        color: #616161;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        .mobileMore {
          display: none;
          text-align: center;
          margin: 30px 0 60px 0;
          button {
            cursor: pointer;
            padding: 10px 30px 9px;
            border: solid 1px #979797;
            background-color: #f7f8f9;
            a {
              font-size: 18px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              text-align: center;
              color: #121212;
            }
          }
        }
      }
      .tutorialBox {
        display: flex;
        flex-direction: column;
        .tutorialBoxTit {
          display: flex;
          justify-content: space-between;
          align-items: center;
          p {
            display: block;
            margin-bottom: 30px;
            margin-top: 60px;
            &:first-child {
              font-size: 24px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.33;
              letter-spacing: -0.3px;
              color: #0a51b7;
            }
            &:last-child {
              cursor: pointer;
              display: flex;
              font-size: 14px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: -0.18px;
              text-align: right;
              color: #9a9da3;
              i {
                margin-left: 7px;
                display: flex;
                padding-top: 1px;
                img {
                  max-width: 12px;
                  width: 100%;
                  height: 12px;
                }
              }
            }
          }
        }
        .tutorialBoxCont {
          display: flex;
          flex-wrap: wrap;
          // justify-content: space-between;
          margin-bottom: 70px;
          > div {
            margin-right: 15px;
            display: block;
            cursor: pointer;
            height: 100%;
            padding: 10px;
            // border: solid 1px #e6e8eb;
            background-color: #fff;
            max-width: 324px;
            width: calc((100% - 50px) / 3);
            //성우추가
            margin-bottom: 15px;
            &:first-child {
              margin-right: 15px;
              margin-bottom: 15px;
            }
            &:nth-child(2) {
              margin-right: 15px;
              margin-bottom: 15px;
            }
            &:nth-child(3) {
              margin-right: 0px;
              margin-bottom: 15px;
            }
            a {
              display: flex;
              flex-direction: column;
              max-height: 300px;
              min-height: 300px;
              span {
                &.listImg {
                  flex: 1;
                  display: block;
                  margin-bottom: 6px;
                  img {
                    width: 100%;
                    // 성우추가
                    aspect-ratio: 16 / 9.7;
                    border: 2px solid #fff;
                    object-fit: cover;
                  }
                }
                &.listInfo {
                  flex: 13;
                  display: flex;
                  flex-direction: column;
                  span {
                    &:first-child {
                      h2 {
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: block;
                        white-space: nowrap;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        font-size: 18px;
                        font-weight: 600;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.4;
                        letter-spacing: -0.25px;
                        color: #121212;
                        margin-bottom: 12px;
                      }
                    }
                    &:nth-child(2) {
                      max-width: 60px;
                      max-height: 24px;
                      padding: 6px 10px;
                      border-radius: 12px;
                      border: solid 1px #3f97d3;
                      background-color: #fff;
                      p {
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
                  }
                }
              }
            }
            // 성우추가
            a:hover {
              display: flex;
              flex-direction: column;
              max-height: 300px;
              min-height: 300px;
              span {
                &.listImg {
                  flex: 1;
                  display: block;
                  margin-bottom: 6px;
                  img {
                    width: 100%;
                    // 성우추가
                    aspect-ratio: 16 / 9.7;
                    border: 2px solid #092e6e;
                    transition: all 0.4s;
                  }
                }
                &.listInfo {
                  flex: 13;
                  display: flex;
                  flex-direction: column;
                  span {
                    &:first-child {
                      h2 {
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: block;
                        white-space: nowrap;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        font-size: 18px;
                        font-weight: 600;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.4;
                        letter-spacing: -0.25px;
                        color: #0a51b7;
                        margin-bottom: 12px;
                      }
                    }
                    &:nth-child(2) {
                      max-width: 60px;
                      max-height: 24px;
                      padding: 6px 10px;
                      border-radius: 12px;
                      border: solid 1px #3f97d3;
                      background-color: #fff;
                      p {
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
                  }
                }
              }
            }
          }
        }
        .mobileMore {
          display: none;
          text-align: center;
          margin: 30px 0 60px 0;
          button {
            cursor: pointer;
            padding: 10px 30px 9px;
            border: solid 1px #979797;
            background-color: #f7f8f9;
            a {
              font-size: 18px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
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
.newsPress .tabCont .newsPressAside .newsTypeActive {
  text-decoration: underline;
  text-underline-position: under;
  color: #0a51b7;
}
.ddayDiv {
  color: #9a9da3;
  font-size: 14px;
  margin-top: 6px;
}
@media screen and (max-width: 1024px) {
  .newsPress .tabCont .newsPressList .userBox .userBoxCont > div,
  .newsPress .tabCont .newsPressList .tutorialBox .tutorialBoxCont > div,
  .newsPress .tabCont .newsPressList .guideBox .guideBoxCont > div {
    max-width: none;
    width: calc((100% - 30px) / 2);
  }

  .newsPress .tabCont .newsPressList .userBox .userBoxCont > div:nth-child(6),
  .newsPress .tabCont .newsPressList .userBox .userBoxCont > div:nth-child(4),
  .newsPress .tabCont .newsPressList .userBox .userBoxCont > div:nth-child(2),
  .newsPress .tabCont .newsPressList .guideBox .guideBoxCont > div:nth-child(2),
  .newsPress
    .tabCont
    .newsPressList
    .tutorialBox
    .tutorialBoxCont
    > div:nth-child(2) {
    margin-right: 0;
  }

  .newsPress .tabCont .newsPressList .userBox .userBoxCont > div:nth-child(3),
  .newsPress
    .tabCont
    .newsPressList
    .tutorialBox
    .tutorialBoxCont
    > div:nth-child(3),
  .newsPress
    .tabCont
    .newsPressList
    .guideBox
    .guideBoxCont
    > div:nth-child(3) {
    margin-right: 15px;
  }

  .newsPress {
    padding: 100px 24px;
  }
}

@media screen and (max-width: 768px) {
  .newsPress .tabCont {
    flex-direction: column;
    gap: 40px;
  }

  .newsPress .tabCont .newsPressAside {
    display: none;
  }

  .newsPress .tabCont .newsPressMbAside {
    display: block;
  }

  .newsPress .tabCont .newsPressList .userBox .userBoxTit,
  .newsPress .tabCont .newsPressList .tutorialBox .tutorialBoxTit {
    justify-content: center;
  }

  .newsPress .tabCont .newsPressList .userBox .userBoxTit p:last-child,
  .newsPress .tabCont .newsPressList .tutorialBox .tutorialBoxTit p:last-child {
    display: none;
  }

  .newsPress .tabCont .newsPressList .userBox .mobileMore,
  .newsPress .tabCont .newsPressList .tutorialBox .mobileMore {
    display: block;
  }

  .newsPress .tabCont .newsPressList .userBox .userBoxCont > div a,
  .newsPress .tabCont .newsPressList .tutorialBox .tutorialBoxCont > div a {
    max-height: none;
  }

  .newsPress .tabCont .newsPressList .userBox .userBoxCont,
  .newsPress .tabCont .newsPressList .tutorialBox .tutorialBoxCont {
    margin-bottom: 0;
  }
}

@media screen and (max-width: 650px) {
  .newsPress .tabCont .newsPressList .tutorialBox .tutorialBoxCont > div,
  .newsPress .tabCont .newsPressList .userBox .userBoxCont > div {
    width: 100%;
    margin-right: 0 !important;
  }

  .newsPress
    .tabCont
    .newsPressList
    .userBox
    .userBoxCont
    > div
    a
    span.listInfo
    span:nth-child(2) {
    margin-bottom: 5px;
  }
  .tutorialBoxCont > div {
    margin-bottom: 15px;
  }
}
</style>