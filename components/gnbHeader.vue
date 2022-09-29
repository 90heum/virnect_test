<template>
  <header>
    <div class="headerInner">
      <div class="logo">
        <nuxt-link to="/">
          <img
            src="https://velog.velcdn.com/images/kyj0206/post/9ebd4dfa-26bb-4b50-bb22-9350ed0089b7/image.png"
            alt="알트텍스트로 글로벌 No.1 확장현실(XR) 플랫폼 기업 VIRNECT - 버넥트"
            @click="hidebox()"
          />
        </nuxt-link>
      </div>

      <div class="navWrap">
        <!-- 네비메뉴 박스 -->
        <nav>
          <ul>
            <li v-for="(list, idx) of navList" :key="idx">
              <a class="navTab container2">
                {{ list.title }}
                <i>
                  <img
                    class="downIcon2"
                    src="~/assets/volog/downIconfooter01.png"
                    alt="다운아이콘"
                  />
                  <img
                    class="upIcon2"
                    src="https://velog.velcdn.com/images/kyj0206/post/098c0636-bb17-46f5-91c2-f255ae31982a/image.png"
                    alt="업아이콘"
                  />
                </i>
              </a>
            </li>
          </ul>
        </nav>
        <!-- 데모신청 박스 -->
        <div class="demo">
          <a href="/support/demo" target="blank"> 데모신청 </a>
        </div>
        <!-- 서비스선택 박스 -->
        <div class="serviceSelect" @click="showServiceMenu">
          <div class="select">
            <div class="selected">
              <div class="selected-value"><a>VIRNECT Service</a></div>
              <div class="arrow">
                <img
                  class="downIcon6"
                  src="~/assets/volog/downIconfooter01.png"
                  alt="다운아이콘"
                />
                <img
                  class="upIcon6"
                  src="~/assets/volog/upiconhehehe.png"
                  alt="업아이콘"
                />
              </div>
            </div>
            <ul v-if="showMenu">
              <li
                v-for="(list, idx) of optionList"
                :key="idx"
                class="option"
                @click="showServiceMenu"
              >
                <a href="#">
                  <p>
                    {{ list.title }}
                  </p>

                  <i>
                    <img
                      class="subBottomMenuIconOpen"
                      src="~/assets/volog/suboptionmenuicon1.png"
                      alt="서브옵션메뉴아이콘"
                    />
                    <img
                      class="subBottomMenuIconClose"
                      src="~/assets/volog/suboptionmenicon0303.png"
                      alt="서브옵션메뉴아이콘"
                    />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 언어선택 박스 -->
        <!-- <div class="language" @click="langlang()">
          <i>
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/3904dc78-e6ec-44d2-8bc0-f6e4c0c7c3a0/image.png"
              alt="글로벌이미지"
            />
          </i>
          <div class="languageWrapWeb" v-if="showEarth">
            <span
              v-for="locale in availableLocales"
              :key="locale.code"
              @click.prevent.stop="$i18n.setLocale(locale.code)"
              @click="langlang()"
            >
              <a>{{ locale.name }}</a>
            </span>
          </div>
        </div> -->
         <div
          class="language"
          @click="
             langlang('ko')
          " 
        >
          <i>
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/3904dc78-e6ec-44d2-8bc0-f6e4c0c7c3a0/image.png"
              alt="글로벌이미지"
            />
          </i>
          <div class="languageWrap" v-if="showEarth">
            <p><a href="https://virnect.com/en" target="_parent">English</a></p>
            <p><a href="https://virnect.com/" target="_parent">Korean</a></p>
          </div>
        </div>
        <!-- 햄버거 버튼 [모바일 메뉴] -->
        <div class="MbHam">
          <!-- 햄버거 -->
          <span class="MbOpen">
            <a>
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/9c806d74-c1f9-4601-8649-04e69f9613b4/image.png"
                alt="모바일메뉴 열기 버튼"
              />
            </a>
          </span>
          <!-- 닫기버튼 -->
          <span class="MbClose">
            <a>
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/dc69153c-beb3-4a1f-85f3-ccded373ae9a/image.png"
                alt="모바일메뉴 닫기 버튼"
              />
            </a>
          </span>
        </div>
      </div>
    </div>
    <!-- ********************************************************************************************* -->
    <!-- 서브메뉴 모듈 -->
    <!-- 유즈케이스 서브메뉴 박스 -->
    <div class="subNavi subNavSolutions">
      <div class="subNavSolutionsInner">
        <div>
          <span>
            <span
              class="subNavSolutionsTit"
              v-html="$t(`solutionText.visualText.title`)"
            ></span>
            <sub-solution-menu
              :snbArr="$t('gnb[0].array')"
              :name="`subNavSolutionsMenu`"
            />
          </span>
        </div>
        <span class="asideInfoLink">
          <span class="asideInfoLinkTit">
            더 많은 디지털 인사이트를 발견하세요.
          </span>
          <span class="Cont">
            <p>
              <a href="#"> <u>Technology</u> () </a>
            </p>
            <p>
              <a href="#"> <u>Market Trend</u> () </a>
            </p>
            <p>
              <a href="#"> <u>Virnect Products 관련</u> () </a>
            </p>
          </span>
          <div>
            <a href="#">
              모든 인사이트 보기
              <i>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/6d82fca8-fda9-4286-9b2b-597c38cda81f/image.png"
                  alt="#"
                />
              </i>
            </a>
          </div>
        </span>
      </div>
    </div>

    <!-- 프로덕트 서브메뉴 박스 -->
    <div class="subNavi subNavProducts">
      <div class="subNavProductsInner">
        <div>
          <span>
            <span
              class="subNavProductsTit"
              v-html="$t(`productsText.visualText.title`)"
            ></span>
            <sub-solution-menu
              :snbArr="
                $t('gnb[1].array').filter((e, idx) => {
                  if (idx < 3) return e;
                })
              "
              :name="`subNavProductsMenu`"
            />
          </span>
          <span>
            <span
              class="subNavProductsTit"
              v-html="$t(`productsText.exampleTitle.title`)"
            ></span>
            <sub-solution-menu
              :snbArr="
                $t('gnb[1].array').filter((e, idx) => {
                  if (idx > 2) return e;
                })
              "
              :name="`subNavProductsMenu`"
            />
          </span>
        </div>
        <span class="asideInfoLink">
          <span class="asideInfoLinkTit">
            준비된 기술 컨설턴트가 직접 도움을 드립니다.
          </span>
          <span class="asideInfoLinkCont">
            <p>대표전화 : 070-7733-2025</p>
            <p>
              구매 및 제휴 문의 :
              <a href="mailto:" contact@virnect.com target="blank">
                <u>contact@virnect.com</u>
              </a>
            </p>
            <p>
              제품 사용 및 기술 지원 :
              <a href="mailto:" support@virnect.com target="blank">
                <u>support@virnect.com</u>
              </a>
            </p>
          </span>
          <div class="BtnWrap">
            <button>
              <a href="#"> 지금 사용해보기 </a>
            </button>
            <button>
              <a href="#"> 문의하기 </a>
            </button>
          </div>
        </span>
      </div>
    </div>

    <!-- 서포트 서브메뉴 박스 -->
    <div class="subNavi subNavSupport">
      <div class="subNavSupportInner">
        <div>
          <span>
            <span class="subNavSupportTit">
              서비스 이용에 도움이 되도록
              <br class="modile-show">
              빠르고 친절하게 해결해 드리겠습니다.
            </span>
            <div class="subNavSupportMenu">
              <span>
                <ul>
                  <li>
                    <nuxt-link to=“/support/notice”><span>Product Notice</span></nuxt-link>
                  </li>
                  <li>
                    <a href="#"><u>-{{$t("gnbInnerText.SupportText.noteText1")}}</u></a>
                  </li>
                  <li>
                    <a href="#"><u>-{{$t("gnbInnerText.SupportText.noteText2")}}</u></a>
                  </li>
                </ul>
              </span>
              <span>
                <ul>
                  <li>
                    <nuxt-link to=“/support/faq”><span>FAQ</span></nuxt-link>
                  </li>
                  <div class="FAQWrap">
                    <li>
                      <a href="#"><u>-{{$t("gnbInnerText.SupportText.faqText1")}}</u></a>
                    </li>
                    <li>
                      <a href="#"><u>-{{$t("gnbInnerText.SupportText.faqText2")}}</u></a>
                    </li>
                    <li>
                      <a href="#"><u>-{{$t("gnbInnerText.SupportText.faqText3")}}</u></a>
                    </li>
                    <li>
                      <a href="#"><u>-{{$t("gnbInnerText.SupportText.faqText4")}}</u></a>
                    </li>
                    <li>
                      <a href="#"><u>-{{$t("gnbInnerText.SupportText.faqText5")}}</u></a>
                    </li>
                    <li>
                      <a href="#"><u>-{{$t("gnbInnerText.SupportText.faqText6")}}</u></a>
                    </li>
                  </div>
                </ul>
              </span>
              <span>
                <ul>
                  <li>
                    <nuxt-link to=“/support/center”><span>학습센터</span></nuxt-link>
                  </li>
                  <li>
                    <a href="#"><u>-VIRNECT Remote</u></a>
                  </li>
                  <li>
                    <a href="#"><u>-VIRNECT Make</u></a>
                  </li>
                  <li>
                    <a href="#"><u>-VIRNECT View</u></a>
                  </li>
                </ul>
              </span>
              <span>
                <ul>
                  <li>
                    <nuxt-link to=“/support/inquiry”><span>문의하기</span></nuxt-link>
                  </li>
                </ul>
              </span>
            </div>
          </span>
        </div>
        <span class="asideInfoLink">
          <a href="https://virnect.com/support/notice">
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/aa1205a9-43bc-4e94-bc29-a550cb7210ad/image.png"
              alt="서포트이미지"
            />
          </a>
        </span>
      </div>
    </div>

    <!-- 뉴스 서브메뉴 박스 -->
    <div class="subNavi subNavNewsrooom">
      <div class="subNavNewsrooomInner">
        <div>
          <span>
            <p class="subNavNewsrooomTit" v-html="$t('newsRoom.gnbHeaderText.text')">
       
            </p>
            <div class="subNavNewsrooomMenu">
              <span>
                <a href="#"> News & Press </a>
              </span>
              <span>
                <a href="#"> People & Culture </a>
              </span>
              <span>
                <a href="#"> Insight </a>
              </span>
            </div>
          </span>
        </div>
        <span class="asideInfoLink">
          <a href="#">
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/5eeeaef0-66f2-47e9-b36d-6a193a7412d8/image.png"
              alt="뉴스룸 이미지"
            />
          </a>
        </span>
      </div>
    </div>

    <!-- 컴퍼니 서브메뉴 박스 -->
    <div class="subNavi subNavCompany">
      <div class="subNavCompanyInner">
        <div>
          <span>
            <span class="subNavCompanyTit">
              글로벌 No.1 XR 플랫폼 기업으로
              <p>도약을 준비하고 있습니다.</p>
            </span>
            <div class="subNavCompanyMenu">
              <span>
                <!-- <Nuxt-link to="/company/about"> About VIRNECT aa </Nuxt-link> -->
              </span>
              <span>
                <!-- <Nuxt-link to="/company/talent"> 인재채용 </Nuxt-link> -->
              </span>
              <span>
                <!-- <Nuxt-link to="/company/ir"> IR </Nuxt-link> -->
              </span>
            </div>
          </span>
        </div>
        <span class="asideInfoLink">
          <span class="asideInfoLinkTit">
            산업별 XR / DT 해답.
            <p>VIRNECT가 알려드립니다.</p>
          </span>
          <a href="#">
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/f1f9bdfc-bd63-42a8-8083-72003e7bfbd4/image.png"
              alt="컴퍼니 이미지"
            />
          </a>
        </span>
      </div>
    </div>
  </header>
</template>

<script>
import Solution from "./Gnb/Solution/index.vue";
import Products from "./Gnb/Products/index.vue";
import Pricing from "./Gnb/Pricing/index.vue";
import Company from "./Gnb/Company/index.vue";
import Contact from "./Gnb/Contact/index.vue";
import FreeTrials from "./Gnb/FreeTrials/index.vue";
import snbSection from "../components/modules/Snb.vue";
import SubSolutionMenu from "./modules/SubSolutionMenu.vue";

const navList = [
  { title: "Use Case" },
  { title: "Products" },
  { title: "Support" },
  { title: "News" },
  { title: "Company" },
];
const optionList = [
  { title: "서비스 로그인" },
  { title: "다운로드 센터" },
  { title: "Workstation 2.0" },
  { title: "Remote 2.0" },
];
// let windowWidth = 0;
// if (process.client) {
//     windowWidth = window.innerWidth;
// }

export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },
  },
  created() {
    if (process.client) {
      window.addEventListener("scroll", this.handleReactiveView);
    }
  },
  beforeDestroy() {
    if (process.client)
      window.removeEventListener("scroll", this.handleReactiveView);
    // window.removeEventListener('scroll', this.hasScrolled)
  },
  components: {
    Solution,
    Products,
    Pricing,
    Company,
    Contact,
    FreeTrials,
    snbSection,
    SubSolutionMenu,
  },

  data: () => ({
    showEarth: false,
    master: false,
    test: false,
    show: false,
    solutionShow: false,
    productsShow: false,
    companyShow: false,
    pricingShow: false,
    contactShow: false,
    freeTrialsShow: false,
    showMenu: false,
    navList,
    optionList,
    windowWidth: windowWidth,
    isWeb: true,
  }),
  methods: {
    showServiceMenu() {
      this.showMenu = !this.showMenu;
    },
    langlang() {
      this.showEarth = !this.showEarth;
    },
    handleReactiveView() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth > 1025) {
        this.isWeb = true;
      } else {
        this.isWeb = false;
      }
      console.log(this.isWeb);
    },

    hidebox() {
      if (this.show == true) {
        this.solutionShow = false;
        this.productsShow = false;
        this.companyShow = false;
        this.pricingShow = false;
        this.contactShow = false;
        this.freeTrialsShow = false;
        this.show = false;
      }
    },

    foo() {
      if (this.show == false) {
        this.show = true;
      }
    },
    solutionShowF() {
      this.solutionShow = false;
      this.productsShow = false;
      this.companyShow = false;
      this.pricingShow = false;
      this.contactShow = false;
      this.freeTrialsShow = false;
      if (this.solutionShow == false) {
        this.solutionShow = true;
      }
    },
    productsShowF() {
      this.solutionShow = false;
      this.productsShow = false;
      this.companyShow = false;
      this.pricingShow = false;
      this.contactShow = false;
      this.freeTrialsShow = false;
      if (this.productsShow == false) {
        this.productsShow = true;
      }
    },
    pricingShowF() {
      this.solutionShow = false;
      this.productsShow = false;
      this.companyShow = false;
      this.pricingShow = false;
      this.contactShow = false;
      this.freeTrialsShow = false;
      if (this.pricingShow == false) {
        this.pricingShow = true;
      }
    },
    companyShowF() {
      this.solutionShow = false;
      this.productsShow = false;
      this.companyShow = false;
      this.pricingShow = false;
      this.contactShow = false;
      this.freeTrialsShow = false;
      if (this.companyShow == false) {
        this.companyShow = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/css/pages/header.scss";
</style>