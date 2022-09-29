<template>
  <div>
    <head-banner />
    <!-- 배너 More -->
    <section class="bannerMore">
      <div class="bannerMoreInner">
        <span class="leftTit">
          <span>Product Notice</span>
          <span>
            <p>
              {{
                $i18n.localeProperties.code === "ko"
                  ? contentData[0].title
                  : contentData[0].titleEn
              }}
            </p>
            <span>
              <p>
                {{
                  $i18n.localeProperties.code === "ko"
                    ? contentData[0].typeName
                    : contentData[0].typeNameEn
                }}
              </p>
              <p>
                {{ $dayjs(contentData[0].createdDate).format("YYYY-MM-DD") }}
              </p>
            </span>
          </span>
        </span>
        <span class="rightTit">
          <p>
            <nuxt-link
              :to="`/support/notice-detail?id=${contentData[0].id}&type`"
              >{{ $t("productsText.looklook.text") }}</nuxt-link
            >
          </p>
        </span>
      </div>
    </section>
    <section class="subSupportModule">
      <span class="FAQ">
        <span class="FaqTit">
          <p>FAQ</p>
          <span>
            <p>{{ $t("supportText.FAQText.title") }}</p>
            <p>
              <a href="/support/faq">{{ $t("supportText.FAQText.text") }}</a>
              <i>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/5b6d5b4d-eb77-45e8-b225-2bd6c2f328cb/image.png"
                  alt="더보기 아이콘"
                />
              </i>
            </p>
          </span>
        </span>
        <span class="FaqCont">
          <ul>
            <li>
              <a href="/support/faq?category=1">
                <i>
                  <img
                    class="normal"
                    src="https://velog.velcdn.com/images/kyj0206/post/4ede0648-3e85-4ddb-b364-6bdef55e6d5f/image.png"
                    alt="회원"
                  />
                  <img
                    class="hover"
                    src="https://velog.velcdn.com/images/kyj0206/post/6e984fe2-82f5-4a69-b01c-e1ab0ac56447/image.png"
                    alt="회원"
                  />
                </i>
              </a>
            </li>
            <li>
              <a href="/support/faq?category=3">
                <i>
                  <img
                    class="normal"
                    src="https://velog.velcdn.com/images/kyj0206/post/2b9347ce-3af9-485a-bf2c-65c11dcd6659/image.png"
                    alt="제품"
                  />
                  <img
                    class="hover"
                    src="https://velog.velcdn.com/images/kyj0206/post/8c1669fa-f629-4b33-81b3-1612c113f575/image.png"
                    alt="제품"
                  /> </i
              ></a>
            </li>
            <li>
              <a href="/support/faq?category=4">
                <i>
                  <img
                    class="normal"
                    src="https://velog.velcdn.com/images/kyj0206/post/0055f808-b725-4127-831d-03822e75518f/image.png"
                    alt="결제"
                  />
                  <img
                    class="hover"
                    src="https://velog.velcdn.com/images/kyj0206/post/1255077d-bce6-4077-a4a7-51453826f49e/image.png"
                    alt="결제"
                  /> </i
              ></a>
            </li>
            <li>
              <a href="/support/faq?category=2">
                <i>
                  <img
                    class="normal"
                    src="https://velog.velcdn.com/images/kyj0206/post/24ff8a0f-20d7-42a8-a88b-4687002793ca/image.png"
                    alt="서비스"
                  />
                  <img
                    class="hover"
                    src="https://velog.velcdn.com/images/kyj0206/post/c30155a8-72c4-4a2e-8e7d-35d9c927f585/image.png"
                    alt="서비스"
                  /> </i
              ></a>
            </li>
            <li>
              <a href="/support/faq?category=6">
                <i>
                  <img
                    class="normal"
                    src="https://velog.velcdn.com/images/kyj0206/post/e8f17bcc-1187-4191-9ab7-a6e511d1e0ca/image.png"
                    alt="기기"
                  />
                  <img
                    class="hover"
                    src="https://velog.velcdn.com/images/kyj0206/post/351ba2e8-05ba-4aba-ba43-dd07407cca67/image.png"
                    alt="기기"
                  /> </i
              ></a>
            </li>
            <li>
              <a href="/support/faq?category=5">
                <i>
                  <img
                    class="normal"
                    src="https://velog.velcdn.com/images/kyj0206/post/b74a332f-657c-4f01-96d6-6738a3efcf16/image.png"
                    alt="기타"
                  />
                  <img
                    class="hover"
                    src="https://velog.velcdn.com/images/kyj0206/post/eed07edf-dc19-4f89-8eca-045703009745/image.png"
                    alt="기타"
                  /> </i
              ></a>
            </li>
          </ul>
        </span>
      </span>
      <span class="studySenter">
        <span class="studyTit">
          <p>{{ $t("supportText.LearnText.title") }}</p>
          <span>
            <p>{{ $t("supportText.LearnText.contents") }}</p>
            <p>
              <a href="/support/learning-center">{{
                $t("supportText.LearnText.text")
              }}</a>
              <i>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/5b6d5b4d-eb77-45e8-b225-2bd6c2f328cb/image.png"
                  alt="더보기 아이콘"
                />
              </i>
            </p>
          </span>
        </span>
        <span class="studyCont">
          <ul>
            <li>
              <a href="/support/learning-center?category=1">
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/8c8b3c75-71c5-4d77-84d5-261927b93dec/image.png"
                    alt="Remote"
                  />
                </i>
                <p>VIRNECT Remote</p>
              </a>
            </li>
            <li>
              <a href="/support/learning-center?category=2">
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/8f0b0a8c-b4f4-48d7-9bcd-2b15ec79a7a5/image.png"
                    alt="Make"
                  />
                </i>
                <p>VIRNECT Make</p>
              </a>
            </li>
            <li>
              <a href="/support/learning-center?category=3">
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/56c32407-cecd-44ac-8aaa-ec5142d3c367/image.png"
                    alt="View"
                  />
                </i>
                <p>VIRNECT View</p>
              </a>
            </li>
          </ul>
        </span>
      </span>
    </section>
    <ContactCtaModule />
  </div>
</template>

<script>
import HeadBanner from "~/components/support/headBanner.vue";
import SubMenu from "~/components/support/SubMenu.vue";
import AsideMenu from "~/components/support/notice/AsideMenu.vue";
import NoticeContents from "~/components/support/notice/NoticeContents.vue";
import ContactCtaModule from "~/components/company/partials/contactModule.vue";
export default {
  head: {
    title: "Support - VIRNECT",
    htmlAttrs: {
      lang: "ko",
    },
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "다양한 고객 중심의 기술 지원 및 커스터마이징 컨설팅을 만나보세요.서비스 이용에 도움이 되도록 신속하게 해결해 드립니다.",
      },
    ],
  },
  watch: {
    $route(to, from) {
      this.chooseType(Number(this.$route.query.type) || null);
    },
  },
  components: {
    ContactCtaModule,
    HeadBanner,
    SubMenu,
    AsideMenu,
    NoticeContents,
  },
  data() {
    return {
      pagingData: {
        currentPage: 1,
        currentSize: 20,
        totalPage: 1,
        totalElements: 1,
        startPage: 1,
        endPage: 1,
      },
      asideData: [],
      contentData: [],
      isType: Number(this.$route.query.type) || null,
    };
  },
  methods: {
    movePage(currentPage) {
      this.pagingData = { ...this.pagingData, currentPage: currentPage };
      this.chooseType(this.isType, true);
    },
    async chooseType(e, isPaging = false) {
      this.isType = e;
      this.$router.push(`?type=${e ? e : ""}`);
      if (!isPaging) this.pagingData = { ...this.pagingData, currentPage: 1 };
      try {
        const data = await this.$axios.get(
          `admin/support/notice?page=${this.pagingData.currentPage}&size=${
            this.pagingData.currentSize
          }${this.isType ? "&type=" + this.isType : ""}`
        );
        const dataJson = await data;
        this.contentData = dataJson.data.data.supportNoticeResponseList;
        this.pagingData = dataJson.data.data.pageMetadataResponse;
      } catch (e) {
        console.error(e);
      }
    },
  },
  async asyncData({ $axios, route }) {
    const routeType = route.query.type ? route.query.type : null;
    try {
      const data = Promise.all([
        $axios.get("admin/support/notice/type"),
        $axios.get(
          `admin/support/notice?page=1&size=${20}${
            routeType ? "&type=" + routeType : ""
          }`
        ),
      ]);
      const dataJson = await data;
      return {
        asideData: dataJson[0].data.data.noticeType,
        contentData: dataJson[1].data.data.supportNoticeResponseList,
        pagingData: dataJson[1].data.data.pageMetadataResponse,
      };
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/modules/supportSubMain_bannerMore.scss";
.noticeWrap {
  display: flex;
  gap: 20px;
  margin: 0 auto;
  max-width: 1260px;
  width: 100%;
  padding: 150px 30px;
}
@media screen and (max-width: 1024px) {
  .noticeWrap {
    flex-direction: column;
    padding: 100px 24px;
  }
}
</style>