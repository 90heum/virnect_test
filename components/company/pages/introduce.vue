<template>
  <section class="energy-section">
    <!-- <subVisualSection
      class="sm"
      :image="visualText.image"
      :category="visualText.category"
      :title="
        $route.name === 'company-about'
          ? $t('virtualConnect.title')
          : $t('companyText.visualText.title')
      "
      :contents="
        $route.name === 'company-about'
          ? $t('virtualConnect.visualContents')
          : $t('companyText.visualText.contents')
      "
    ></subVisualSection> -->
    <!-- <snbSection
      v-if="$route.name === 'company-about'"
      :snbArr="
        $t('gnb[4].array[0].depth').filter((d) => d.page !== 'company-about')
      "
    ></snbSection> -->

    <!-- <heading-module
      :title="$t('companyText.summaryText.summaryTitle.title')"
      :contents="$t('companyText.summaryText.summaryTitle.contents')"
    ></heading-module> -->

    <div class="aboutVirnect">
      <section class="aboutVirnect">
        <div class="aboutVirnectInner">
          <span class="aboutVirnectTit">
            <!-- {{ $t("productsText.remoteSubTitle.title") }}  -->

            <h2>{{ $t("aboutVirnectTitle.title") }}</h2>
            <span>
              {{ $t("aboutVirnectTitle.content") }}
            </span>
          </span>
          <span class="aboutVirnectCont">
            <ul class="no1Cont">
              <li>
                <span> Mission </span>
                <span>
                  {{ $t("aboutVirnectContent.mission") }}
                </span>
              </li>
              <li>
                <span> Vision </span>
                <span>
                  {{ $t("aboutVirnectContent.vision") }}
                </span>
              </li>
            </ul>
            <ul class="no2Cont">
              <li>
                <p>{{ $t("no2Content.year") }}</p>
                <span>{{ $t("no2Content.yearValue") }}</span>
              </li>
              <li>
                <p>{{ $t("no2Content.employee") }}</p>
                <span>{{ $t("no2Content.employeeValue") }} +</span>
              </li>
              <li>
                <p>{{ $t("no2Content.property") }}</p>
                <span>{{ $t("no2Content.propertyValue") }}</span>
              </li>
              <li>
                <p>{{ $t("no2Content.project") }}</p>
                <span>{{ $t("no2Content.projectValue") }}</span>
              </li>
              <li>
                <p>{{ $t("no2Content.awards") }}</p>
                <span>{{ $t("no2Content.awardsValue") }}</span>
              </li>
            </ul>
          </span>
        </div>
      </section>
      <!-- <company-awards /> -->
      <!-- 인증 및 수상 모듈 -->
      <company-awards />

      <section class="aboutHistory">
        <div class="aboutHistoryInner">
          <span class="aboutHistoryTit">
            <h2>{{ $t("aboutHistoryTitle.title") }}</h2>
            <p>{{ $t("aboutHistoryTitle.content") }}</p>
          </span>
          <span class="aboutHistoryCont">
            <span
              class="aboutHistoryContTabWrapper"
              @click="() => (historyToggle = !historyToggle)"
            >
              <span class="aboutHistoryContTabTitle">{{
                yearsData[HistoryTab - 1].years
              }}</span>
              <ul
                :class="`aboutHistoryContTab ${
                  historyToggle ? 'historyActive' : ''
                }`"
              >
                <li
                  :class="HistoryTab === idx + 1 ? 'active' : ''"
                  @click="handleHisrotyTab(idx + 1)"
                  v-for="(data, idx) of yearsData"
                  :key="idx"
                >
                  {{ data.years }}
                </li>
              </ul>
            </span>
            <ul class="aboutHistoryContCont" id="2021" v-if="HistoryTab === 1">
              <li class="HisLeft">
                <div>
                  <span>{{ $t("aboutHistory2021.title") }}</span>
                  <p>{{ $t("aboutHistory2021.content") }}</p>
                </div>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/bec8bd74-3437-4927-8e7b-d61903a4fa1a/image.png"
                    alt="연혁2021"
                  />
                </i>
              </li>
              <li class="HisRight">
                <ul>
                  <li>{{ $t("aboutHistory2021.list1") }}</li>
                  <li>{{ $t("aboutHistory2021.list2") }}</li>
                  <li>{{ $t("aboutHistory2021.list3") }}</li>
                  <li>{{ $t("aboutHistory2021.list4") }}</li>
                  <li>{{ $t("aboutHistory2021.list5") }}</li>
                  <li>{{ $t("aboutHistory2021.list6") }}</li>
                  <li>{{ $t("aboutHistory2021.list7") }}</li>
                  <li>{{ $t("aboutHistory2021.list8") }}</li>
                </ul>
              </li>
            </ul>
            <ul class="aboutHistoryContCont" id="2020" v-if="HistoryTab === 2">
              <li class="HisLeft">
                <div>
                  <span>{{ $t("aboutHistory2020.title") }}</span>
                  <p>{{ $t("aboutHistory2020.content") }}</p>
                </div>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/92c4317e-3153-4e50-b234-6f87795588c8/image.png"
                    alt="연혁2020"
                  />
                </i>
              </li>
              <li class="HisRight">
                <ul>
                  <li>{{ $t("aboutHistory2020.list1") }}</li>
                  <li>{{ $t("aboutHistory2020.list2") }}</li>
                  <li>{{ $t("aboutHistory2020.list3") }}</li>
                  <li>{{ $t("aboutHistory2020.list4") }}</li>
                  <li>{{ $t("aboutHistory2020.list5") }}</li>
                  <li>{{ $t("aboutHistory2020.list6") }}</li>
                  <li>{{ $t("aboutHistory2020.list7") }}</li>
                </ul>
              </li>
            </ul>
            <ul class="aboutHistoryContCont" id="2019" v-if="HistoryTab === 3">
              <li class="HisLeft">
                <div>
                  <span>{{ $t("aboutHistory2019.title") }}</span>
                  <p>{{ $t("aboutHistory2019.content") }}</p>
                </div>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/c1023645-90e2-4352-97ed-99302a7448d6/image.png"
                    alt="연혁2019"
                  />
                </i>
              </li>
              <li class="HisRight">
                <ul>
                  <li>{{ $t("aboutHistory2019.list1") }}</li>
                  <li>{{ $t("aboutHistory2019.list2") }}</li>
                  <li>{{ $t("aboutHistory2019.list3") }}</li>
                  <li>{{ $t("aboutHistory2019.list4") }}</li>
                </ul>
              </li>
            </ul>
            <ul
              class="aboutHistoryContCont"
              id="2017~2018"
              v-if="HistoryTab === 4"
            >
              <li class="HisLeft">
                <div>
                  <span>{{ $t("aboutHistory2017_2018.title") }}</span>
                  <p>{{ $t("aboutHistory2017_2018.content") }}</p>
                </div>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/0ed0ed40-900d-44d7-b65b-d21b74dc51cd/image.png"
                    alt="연혁2017~2018"
                  />
                </i>
              </li>
              <li class="HisRight">
                <ul>
                  <li>{{ $t("aboutHistory2017_2018.list1") }}</li>
                  <li>{{ $t("aboutHistory2017_2018.list2") }}</li>
                  <li>{{ $t("aboutHistory2017_2018.list3") }}</li>
                  <li>{{ $t("aboutHistory2017_2018.list4") }}</li>
                  <li>{{ $t("aboutHistory2017_2018.list5") }}</li>
                  <li>{{ $t("aboutHistory2017_2018.list6") }}</li>
                </ul>
              </li>
            </ul>
            <ul class="aboutHistoryContCont" id="2016" v-if="HistoryTab === 5">
              <li class="HisLeft">
                <div>
                  <span>{{ $t("aboutHistory2016.title") }}</span>
                </div>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/4ea0f11e-7bd7-43f3-b177-1342a88a13f8/image.png"
                    alt="연혁2016"
                  />
                </i>
              </li>
              <li class="HisRight">
                <ul>
                  <li>{{ $t("aboutHistory2016.list1") }}</li>
                  <!-- <li>{{ $t("aboutHistory2016.list2") }}</li> -->
                </ul>
              </li>
            </ul>
          </span>
        </div>
      </section>

      <section class="customers">
        <div class="customersInner">
          <span class="customersTit">
            <div class="marginRanger"></div>
            <h2>CUSTOMERS</h2>
            <p>{{ $t("customersContent.content") }}</p>
          </span>
          <span class="customersCont">
            <span
              class="customersContTitleWrapper"
              @click="() => (customerToggle = !customerToggle)"
            >
              <span class="customersContTitle">{{
                CustomerTab === 1 ? "공공" : CustomerTab === 2 ? "민간" : "교육"
              }}</span>
              <ul
                :class="`customerContTab ${
                  customerToggle ? 'customerActive' : ''
                }`"
              >
                <li
                  :class="CustomerTab === 1 ? 'active' : ''"
                  @click="handleCustomerTab(1)"
                >
                  {{ $t("newCompany.tab3king.title1") }}
                </li>
                <li
                  :class="CustomerTab === 2 ? 'active' : ''"
                  @click="handleCustomerTab(2)"
                >
                  {{ $t("newCompany.tab3king.title2") }}
                </li>
                <li
                  :class="CustomerTab === 3 ? 'active' : ''"
                  @click="handleCustomerTab(3)"
                >
                  {{ $t("newCompany.tab3king.title3") }}
                </li>
              </ul>
            </span>
            <!-- 공공 -->
            <ul v-if="CustomerTab === 1" class="customerContCont">
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/1699289f-7c7e-411f-bc7d-587f891e3b34/image.png"
                  alt="한국전력공사"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/627b6ebc-8ac5-47a0-9004-a4572a7c42e5/image.png"
                  alt="전력연구원"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/0d4f8fcd-e45c-4e92-94e1-17cd1c7f94f6/image.png"
                  alt="국립문화재연구소"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/9a6da9ad-ea39-47a2-8ed4-60377f58ebda/image.png"
                  alt="한국서부발전"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/c4cc7bc5-9080-4c15-96cb-e8549b19a2be/image.png"
                  alt="한국과학기술정보연구원"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/17a784f3-1e9e-4443-a23f-43b38174f0b5/image.png"
                  alt="한국전자기술연구원"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/4e92b83c-a19a-4b40-a1e6-e33c56461494/image.png"
                  alt="조달청"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/853b1ab4-6fcd-4cd1-9c34-f3c0c4c1387b/image.png"
                  alt="한전kdn"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/e14e7f4d-cc10-45d9-aeb9-4965daa4e0ae/image.png"
                  alt="한국가스공사"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/06e6fb89-98b7-49aa-90ad-55212ad796ea/image.png"
                  alt="해양경찰청"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/f79de897-3336-4c22-a2ed-751064103bba/image.png"
                  alt="한국원자력환경공단"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/d8dd0000-f094-4a24-9db6-7958acaf5da4/image.png"
                  alt="서울창조경제혁신센터"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/9408bb9c-fe24-4ce7-97ed-d6d61efd0064/image.png"
                  alt="부산현대미술관"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/259b1c50-7ef2-46cc-ac88-49a00627f316/image.png"
                  alt="중소벤처기업진흥공단"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/b22c1179-b10f-4232-977d-3ad882ee6f6d/image.png"
                  alt="한국공항공사"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/b834cb61-3561-4143-9224-72a39b17d24d/image.png"
                  alt="한국원자력연구원"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/22d3c3ab-e503-498c-bf78-3d622f7634f4/image.png"
                  alt="한국도로공사"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/8c536493-1115-47a8-9809-22fb019a081e/image.png"
                  alt="한국철도기술연구원"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/f89b3702-657e-4dce-b38e-bf866d3913a4/image.png"
                  alt="한국과학기술정보연구원"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/ed8929f6-e816-4491-9f53-7d54863c6434/image.png"
                  alt="부산광역시교육청"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/9adc7aaf-7ae6-4762-aebb-0c395f9eb54e/image.png"
                  alt="경기도경제과학진흥원"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/02cfb563-3bfd-4a4d-98a0-aef5ef09aca4/image.png"
                  alt="충북테크노파크"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/0542ecfc-12b9-4273-82f9-10d58451ef89/image.png"
                  alt="울산정보산업진흥원"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/addf17de-b76f-46bf-9d0d-cb225ecf783c/image.png"
                  alt="KEA"
                />
              </li>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/4d765d3f-28de-4517-8775-65f009b619d4/image.png"
                  alt="서울기술연구원"
                />
              </li>
            </ul>

            <!-- 민간 -->
            <ul v-if="CustomerTab === 2" class="customerContCont">
              <li>
                <img
                  src="~/assets/images/brand/minkan/hanhwabuild.png"
                  alt="kt"
                />
              </li>

              <li>
                <img
                  src="~/assets/images/brand/minkan/HanwhaTotal@2x.png"
                  alt="kt"
                />
              </li>

              <li>
                <img
                  src="~/assets/images/brand/minkan/hanwhawSolution.png"
                  alt="kt"
                />
              </li>

              <li>
                <img
                  src="~assets/images/brand/minkan/hundaijungkongup.png"
                  alt="kt"
                />
              </li>

              <li>
                <img
                  src="~/assets/images/brand/minkan/hyundaiengine.png"
                  alt="kt"
                />
              </li>

              <li>
                <img
                  src="~/assets/images/brand/minkan/hyundaijosuan.png"
                  alt="kt"
                />
              </li>

              <li>
                <img
                  src="~/assets/images/brand/minkan/hyundaijung.png"
                  alt="kt"
                />
              </li>

              <li>
                <img
                  src="~/assets/images/brand/minkan/koreajosun.png"
                  alt="kt"
                />
              </li>

              <li>
                <img
                  src="~/assets/images/brand/minkan/KT commerce@2x.png"
                  alt="kt"
                />
              </li>

              <li>
                <img src="~/assets/images/brand/minkan/KT@2x.png" alt="kt" />
              </li>

              <li>
                <img src="~/assets/images/brand/minkan/LGCNS@2x.png" alt="kt" />
              </li>

              <li>
                <img
                  src="~/assets/images/brand/minkan/LGdisplayx.png"
                  alt="kt"
                />
              </li>

              <li>
                <img src="~/assets/images/brand/minkan/lgEnergy.png" alt="kt" />
              </li>

              <li>
                <img
                  src="~/assets/images/brand/minkan/lginotech.png"
                  alt="kt"
                />
              </li>

              <li>
                <img src="~/assets/images/brand/minkan/lgjeonja.png" alt="kt" />
              </li>

              <li>
                <img src="~/assets/images/brand/minkan/lglife.png" alt="kt" />
              </li>

              <li>
                <img src="~/assets/images/brand/minkan/lgwhahak.png" alt="kt" />
              </li>

              <li>
                <img
                  src="~/assets/images/brand/minkan/Ls Metal@2x.png"
                  alt="kt"
                />
              </li>

              <li>
                <img src="~/assets/images/brand/minkan/lsauto.png" alt="kt" />
              </li>

              <li>
                <img
                  src="~/assets/images/brand/minkan/LSElectric@2x.png"
                  alt="kt"
                />
              </li>

              <li>
                <img src="~/assets/images/brand/minkan/lsmtron.png" alt="kt" />
              </li>

              <li>
                <img src="~/assets/images/brand/minkan/S&I@2x.png" alt="kt" />
              </li>

              <li>
                <img
                  src="~/assets/images/brand/minkan/samsungJ2x.png"
                  alt="kt"
                />
              </li>

              <li>
                <img
                  src="~/assets/images/brand/minkan/samsungM2x.png"
                  alt="kt"
                />
              </li>

              <li>
                <img
                  src="~/assets/images/brand/minkan/samsungS2x.png"
                  alt="kt"
                />
              </li>

              <li>
                <img src="~/assets/images/brand/minkan/SK@2x.png" alt="kt" />
              </li>

              <li>
                <img src="~/assets/images/brand/minkan/skbuild.png" alt="kt" />
              </li>

              <li>
                <img
                  src="~/assets/images/brand/minkan/skcamical.png"
                  alt="kt"
                />
              </li>

              <li>
                <img src="~/assets/images/brand/minkan/skcnc.png" alt="kt" />
              </li>

              <li>
                <img
                  src="~/assets/images/brand/minkan/SKecoplant@2x.png"
                  alt="kt"
                />
              </li>

              <li>
                <img src="~/assets/images/brand/minkan/skenergy.png" alt="kt" />
              </li>
              <li>
                <img
                  src="~/assets/images/brand/minkan/sktelecom.png"
                  alt="kt"
                />
              </li>
              <li>
                <img src="~/assets/images/brand/minkan/SMC@2x.png" alt="kt" />
              </li>
            </ul>
            <!-- 교육 -->
            <ul v-if="CustomerTab === 3" class="customerContCont">
              <li>
                <img
                  src="~/assets/images/brand/education/3DFIA@2x.png"
                  alt="서울기술연구원"
                />
              </li>
              <li>
                <img
                  src="~/assets/images/brand/education/dentalunivercity.png"
                  alt="서울기술연구원"
                />
              </li>
              <li>
                <img
                  src="~/assets/images/brand/education/hanbatunivercity.png"
                  alt="서울기술연구원"
                />
              </li>
              <li>
                <img
                  src="~/assets/images/brand/education/hansinuniverctity.png"
                  alt="서울기술연구원"
                />
              </li>
              <li>
                <img
                  src="~/assets/images/brand/education/Kaist@2x.png"
                  alt="서울기술연구원"
                />
              </li>
              <li>
                <img
                  src="~/assets/images/brand/education/kisulunivercity.png"
                  alt="서울기술연구원"
                />
              </li>
              <li>
                <img
                  src="~/assets/images/brand/education/koreahospital.png"
                  alt="서울기술연구원"
                />
              </li>
              <li>
                <img
                  src="~/assets/images/brand/education/korearesource.png"
                  alt="서울기술연구원"
                />
              </li>
              <li>
                <img
                  src="~/assets/images/brand/education/koreauniverciticar.png"
                  alt="서울기술연구원"
                />
              </li>
              <li>
                <img
                  src="~/assets/images/brand/education/mokfounivercity.png"
                  alt="서울기술연구원"
                />
              </li>
              <li>
                <img
                  src="~/assets/images/brand/education/Multicampus@2x.png"
                  alt="서울기술연구원"
                />
              </li>
              <li>
                <img
                  src="~/assets/images/brand/education/radoscience.png"
                  alt="서울기술연구원"
                />
              </li>
            </ul>
          </span>
        </div>
      </section>
      <section class="customers">
        <div class="customersInner">
          <span class="customersTit">
            <h2>PARTNERS</h2>
            <span class="customersCont">
              <ul class="customerContTab"></ul>
              <ul class="customerContCont">
                <li>
                  <img
                    src="~/assets/images/pages/epc/partners-1@2x.png"
                    alt="kt"
                  />
                </li>
                <li>
                  <img
                    src="~/assets/images/pages/epc/partners-2@2x.png"
                    alt="kt"
                  />
                </li>
                <li>
                  <img
                    src="~/assets/images/pages/epc/partners-3@2x.png"
                    alt="kt"
                  />
                </li>
                <li>
                  <img
                    src="~/assets/images/pages/epc/partners-4@2x.png"
                    alt="kt"
                  />
                </li>
              </ul>
            </span>
          </span>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import subVisualSection from "~/layouts/common/SubVisual.vue";
import snbSection from "~/components/modules/Snb";
import headingModule from "../../modules/Heading";
import companyAwards from "~/components/main/companyAwards.vue";
import SubVisual from "~/layouts/common/SubVisual.vue";
import { awardData } from "~/components/dummy/award.js";

const historyData = [
  {
    years: "2021",
  },
  {
    years: "2020",
  },
  {
    years: "2019",
  },
  {
    years: "2017 ~ 2018",
  },
  {
    years: "2016",
  },
];
export default {
  components: {
    subVisualSection,
    snbSection,
    headingModule,
    companyAwards,
    SubVisual,
  },

  data() {
    return {
      CustomerTab: 1,
      HistoryTab: 1,
      yearsData: historyData,
      awardIdx: {
        start: 0,
        end: 6,
      },
      award: awardData,
      historyToggle: false,
      customerToggle: false,
    };
  },
  created() {
    if (process.client) {
      window.addEventListener("resize", this.handleReactiveView);
    }
  },
  beforeDestroy() {
    if (process.client)
      window.removeEventListener("resize", this.handleReactiveView);
  },
  methods: {
    handleReactiveView() {
      if (window.innerWidth > 1025) {
        this.awardIdx = { ...this.awardIdx, end: 6 };
        // this.plus = 6;
        // this.minus = 6;
      } else if (window.innerWidth < 1025) {
        this.awardIdx = { ...this.awardIdx, end: 3 };
        // this.plus = 3;
        // this.minus = 3;
      }
    },
    handleCustomerTab(e) {
      this.CustomerTab = e;
    },
    handleHisrotyTab(e) {
      this.HistoryTab = e;
    },
  },
};
</script>
<style lang="scss" scoped>
//@import "~assets/css/pages/products.scss";
@import "~assets/css/modules/aboutVirnect.scss";
.aboutHistoryContTabTitle,
.customersContTitle {
  display: none;
}
.company {
  display: block;
  overflow: hidden;
  .companyWrap {
    // 회사 배너
    .companyBanner {
      display: block;
      width: 100%;
      margin: 0 auto;
      height: 1010px;
      overflow: hidden;
      background-image: url("https://velog.velcdn.com/images/kyj0206/post/06ebae19-89fa-4331-a600-f572bc8273d6/image.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      object-fit: cover;
      .companyBannerInner {
        gap: 200px;
        height: 440px;
        box-sizing: border-box;
        align-items: center;
        display: flex;
        transform: translate(17%, 55%);
        max-width: 2400px;

        margin: 0 auto;
        width: 100%;
        color: #fff;
        .companyBannerTit {
          min-width: 558px;
          > p {
            font-size: 18px;
            font-weight: bold;
            letter-spacing: -0.23px;
            color: #bfdcff;
            margin-bottom: 16px;
          }
          h2 {
            font-size: 44px;
            font-weight: bold;
            letter-spacing: -0.55px;
            color: #fff;
            margin-bottom: 32px;
          }
          span {
            display: block;
            &:nth-child(3) {
              margin-bottom: 75px;
              > p {
                font-size: 16px;
                line-height: 1.75;
                letter-spacing: -0.2px;
                color: #e6e8eb;
              }
            }
          }
          div {
            display: flex;
            flex-direction: column;
            span {
              &:first-child {
                font-size: 18px;
                font-weight: bold;
                letter-spacing: -0.23px;
                color: #e6e8eb;
                margin-bottom: 10px;
              }
              &:last-child {
                display: flex;
                gap: 14px;
                p {
                  &:first-child {
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 2;
                    letter-spacing: -0.2px;
                    color: #bfdcff;
                  }
                  &:last-child {
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 1.72;
                    letter-spacing: -0.23px;
                    color: #f7f8f9;
                  }
                }
              }
            }
          }
        }
        .companyBannerCont {
          display: block;
          gap: 140px;
          height: 100%;
          span {
            img {
              min-width: 660px;
              width: 100%;
            }
            p {
              &:nth-child(2) {
                font-size: 24px;
                font-weight: bold;
                line-height: 1;
                letter-spacing: normal;
                color: #fff3bb;
                margin-top: 26px;
                margin-bottom: 12px;
              }
              &:last-child {
                font-size: 16px;
                font-weight: normal;
                line-height: 1;
                letter-spacing: -0.2px;
                color: #bfdcff;
              }
            }
          }
        }
      }
    }

    // 회사소개 모듈
    .companyVirnect {
      display: flex;
      position: absolute;
      box-shadow: 8px 8px 10px 0 rgba(0, 0, 0, 0.14);
      background-color: #fff;
      box-sizing: border-box;
      left: 50%;
      transform: translatex(-50%);
      top: -90px;
      div {
        display: block;
        min-width: 401px;
        width: 100%;
        position: relative;
        a {
          display: block;
          img {
            display: block;
            max-width: 401px;
            width: 100%;
            height: 100%;
          }
        }
        &.virnectModule1 {
          a {
            div {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 51%;
              transform: translateY(-50%);
              display: flex;
              padding: 0px 30px 0 67px;
              justify-content: space-between;
              align-items: center;
              > span {
                font-size: 18px;
                font-weight: bold;
                letter-spacing: -0.23px;
                text-align: center;
                color: #092e6e;
                img {
                  max-width: 19px;
                  min-width: 19px;
                  width: 100%;
                }
                &:last-child {
                  transform: translateY(-260%);
                }
              }
            }
          }
        }
        &.virnectModule2 {
          a {
            div {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 51%;
              transform: translateY(-50%);
              display: flex;
              padding: 0px 30px 0 67px;
              justify-content: space-between;
              align-items: center;
              > span {
                font-size: 18px;
                font-weight: bold;
                letter-spacing: -0.23px;
                color: #f7f8f9;
                img {
                  max-width: 19px;
                  min-width: 16px;
                  width: 100%;
                }
                &:last-child {
                  transform: translateY(-300%);
                }
              }
            }
          }
        }
        &.virnectModule3 {
          a {
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: center;
            height: 100%;
            gap: 10px;
            > span {
              font-size: 14px;
              font-weight: 500;
              line-height: 1.36;
              letter-spacing: -0.18px;
              color: #092e6e;
              &:first-child {
                u {
                  display: block;
                  height: 100%;
                }
              }
              img {
                max-width: 22px;
                width: 100%;
              }
            }
          }
        }
      }
    }

    // 버넥트 뉴스 모듈
    .companyNews {
      position: relative;
      display: block;
      width: 100%;
      border-bottom: 1px solid #c5c8cf;
      .companyNewsWrap {
        margin: 0 auto;
        display: block;
        max-width: 1200px;
        box-sizing: unset;
        padding: 180px 30px 70px;
        li,
        ul {
          list-style: none;
        }
        ul {
          padding-left: 0px;
        }
        > span {
          display: flex;
          width: 100%;
          &:first-child {
            justify-content: space-between;
            margin-bottom: 30px;
            > p {
              font-size: 18px;
              font-weight: bold;
              letter-spacing: -0.23px;
              color: #121212;
            }
            span {
              a {
                display: flex;
                gap: 6px;
                p {
                  font-size: 14px;
                  font-weight: bold;
                  font-stretch: normal;
                  letter-spacing: -0.18px;
                  text-align: right;
                  color: #9a9da3;
                }
                i {
                  img {
                    max-width: 13px;
                    width: 100%;
                  }
                }
              }
            }
          }
          &:last-child {
            display: block;
            // border-bottom: ;
            ul {
              display: flex;
              gap: 24px;
              li {
                max-width: 281px;
                width: calc(100% / 4);
                a {
                  display: flex;
                  flex-direction: column;
                  span {
                    &:first-child {
                      margin-bottom: 18px;
                      img {
                        width: 100%;
                      }
                    }
                    &:nth-child(2) {
                      font-size: 14px;
                      font-weight: 500;
                      margin-bottom: 14px;
                      letter-spacing: -0.18px;
                      color: #121212;
                      line-height: 1.3;
                      overflow: hidden;
                      // 말줄임
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                    }
                    &:last-child {
                      border: solid 1px #c5c8cf;
                      max-width: max-content;
                      padding: 2.25px 10px;
                      font-size: 12px;
                      font-weight: bold;
                      letter-spacing: -0.15px;
                      text-align: center;
                      &.news {
                        color: #0a51b7;
                      }
                      &.people {
                        color: #d88318;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        ul li a {
          text-decoration: none;
        }
      }
    }
    // 인증 및 수상 모듈
    .companyAwards {
      display: block;
      width: 100%;
      background-color: #f7f8fa;
      .awardsWrap {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 42px;
        max-width: 1200px;
        box-sizing: unset;
        padding: 69px 0 100px;
        div > .SliderList {
          font-size: 10px;
          span:nth-child(2) {
            height: 36px;
          }
        }
        div {
          &:first-child {
            p {
              font-size: 18px;
              font-weight: bold;
              letter-spacing: -0.23px;
              color: #121212;
            }
          }
          &:last-child {
            display: flex;
            flex-wrap: wrap;
            gap: 40px;
            .SliderList {
              width: calc(100% / 7 - 40px);
              span {
                position: relative;
                max-width: 160px;
                &:first-child {
                  img {
                    max-width: 160px;
                    margin-bottom: 6px;
                  }
                  &::after {
                    display: block;
                    position: absolute;
                    content: "";
                    width: 100%;
                    border-bottom: 1px solid #c5c8cf;
                    left: 0;
                    bottom: 0;
                  }
                }
                &:last-child {
                  width: 100%;
                  display: block;
                  text-align: center;
                  font-size: 12px;
                  margin: 14px 19px 0 15px;
                  color: #9b9da3;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media screen and(max-width: 1970px) {
  .company .companyWrap .companyBanner .companyBannerInner {
    gap: 5%;
  }
}

@media screen and(max-width: 1630px) {
  .company .companyWrap .companyBanner .companyBannerInner {
    gap: 5%;
    left: 60%;
  }
}

@media screen and(max-width: 1450px) {
  .company .companyWrap .companyBanner .companyBannerInner {
    gap: 5%;
    left: 55%;
    top: 50%;
  }
}

@media screen and(max-width: 1370px) {
  .company .companyWrap .companyBanner .companyBannerInner {
    left: 53%;
  }
}

@media screen and(max-width: 1350px) {
  .company .companyWrap .companyBanner .companyBannerInner .companyBannerCont {
    gap: 70px;
  }

  .company .companyWrap .companyBanner {
    height: 1326px;
    background-image: url(https://velog.velcdn.com/images/kyj0206/post/78d93c8e-931f-4655-82c3-2f174608c229/image.jpg);
    background-size: 100% 100%;
  }
  .company .companyWrap .companyBanner .companyBannerInner {
    flex-direction: column;
  }

  .company .companyWrap .companyBanner .companyBannerInner {
    height: auto;
  }

  .company .companyWrap .companyBanner .companyBannerInner {
    align-items: flex-start;
    transform: translate(5%, 20%);
    gap: 142px;
  }

  .company .companyWrap .companyBanner .companyBannerInner .companyBannerTit {
    text-align: center;
    max-width: 768px;
    width: 100%;
    margin: 0 auto;
    padding-right: 70px;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerTit
    span:nth-child(3) {
    margin-bottom: 103px;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerTit
    span:nth-child(3)
    > p {
    display: inline;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerTit
    div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 65%;
    margin: 0 auto;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerTit
    div
    span:last-child {
    justify-content: flex-start;
  }

  .company .companyWrap .companyVirnect {
    position: static;
    transform: translateX(0);
  }

  .company .companyWrap .companyVirnect div > a > img {
    max-width: none;
    min-height: 176px;
    max-height: 176px;
    object-fit: cover;
  }

  .company .companyWrap .companyVirnect {
    flex-wrap: wrap;
  }

  .company .companyWrap .companyVirnect div {
    width: 50%;
  }
  .company .companyWrap .companyVirnect div.virnectModule1 {
    height: 176px;
  }
  .company .companyWrap .companyVirnect div.virnectModule2 {
    height: 176px;
  }
  .company .companyWrap .companyVirnect div.virnectModule3 {
    width: 100%;
    height: 80px;
  }

  .company .companyWrap .companyNews .companyNewsWrap {
    padding: 68px 30px 70px;
  }
}

@media screen and(max-width: 1024px) {
  .company
    .companyWrap
    .companyAwards
    .awardsWrap
    div:last-child
    .SliderList
    span:first-child
    img {
    width: 100%;
    max-width: 226px;
  }
  .company .companyWrap .companyAwards .awardsWrap div:last-child {
    gap: 25px;
  }

  .company .companyWrap .companyAwards .awardsWrap div:last-child .SliderList {
    width: calc(100% / 4 - 19px);
  }

  .company .companyWrap .companyBanner {
    height: 1326px;
    background-image: url(https://velog.velcdn.com/images/kyj0206/post/78d93c8e-931f-4655-82c3-2f174608c229/image.jpg);
    background-size: auto 100%;
  }
  .company .companyWrap .companyVirnect div {
    min-width: auto;
  }
}

@media screen and(max-width: 768px) {
  .aboutHistoryContTabTitle,
  .customersContTitle {
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    color: #121212;
  }

  .customersContTitleWrapper {
    height: 50px;
    margin: 30px 24px 75px;
    padding: 16px 16px 15px 19px;
    border: solid 1px #c5c8cf;
    background-color: #fff;
    position: relative;
    display: block;
  }
  .aboutVirnect .customers .customersInner .customersCont .customerContTab {
    position: absolute;
    display: none;
    top: 50px;
    width: 100%;
    padding-left: 0px;
    left: 0px;
    border: 1px solid #c5c8cf;
    border-radius: 15px;
    background: #fff;
  }
  .aboutVirnect
    .customers
    .customersInner
    .customersCont
    .customerContTab
    li.active {
    color: #9a9da3;
  }
  .aboutVirnect
    .customers
    .customersInner
    .customersCont
    .customerContTab
    li.active,
  .aboutVirnect
    .customers
    .customersInner
    .customersCont
    .customerContTab
    li:hover {
    border: 0;
    color: #0a51b7;
  }
  .aboutVirnect .customers .customersInner .customersCont .customerActive {
    display: block;
  }

  .company
    .companyWrap
    .companyAwards
    .awardsWrap
    div:last-child
    .SliderList
    span:first-child
    img {
    width: 100%;
    max-width: 226px;
  }
  .company .companyWrap .companyAwards .awardsWrap div:last-child {
    gap: 28px;
  }

  .company .companyWrap .companyAwards .awardsWrap div:last-child .SliderList {
    width: calc(100% / 3 - 19px);
  }

  .company .companyWrap .companyBanner .companyBannerInner {
    transform: translate(0%, 10%);
    gap: 122px;
    padding-left: 24px;
  }

  .company .companyWrap .companyBanner .companyBannerInner .companyBannerTit {
    min-width: auto;
    padding-right: 24px;
  }

  .company .companyWrap .companyBanner {
    height: 1274px;
    background-image: url(https://velog.velcdn.com/images/kyj0206/post/78d93c8e-931f-4655-82c3-2f174608c229/image.jpg);
    background-size: auto 100%;
  }

  .company .companyWrap .companyNews .companyNewsWrap > span:last-child ul {
    flex-wrap: wrap;
    gap: 19px;
    justify-content: space-between;
  }

  .company .companyWrap .companyNews .companyNewsWrap > span:last-child ul li {
    width: calc(95% / 2);
    max-width: none;
  }
  .aboutHistoryContTabWrapper {
    height: 50px;
    margin: 30px 24px 75px;
    padding: 16px 16px 15px 19px;
    border: solid 1px #c5c8cf;
    background-color: #fff;
    position: relative;
  }
  .aboutVirnect
    .aboutHistory
    .aboutHistoryInner
    .aboutHistoryCont
    .aboutHistoryContTab {
    position: absolute;
    display: none;
    width: 100%;
    left: 0px;
    top: 50px;
    border: 1px solid #c5c8cf;
    background: #fff;
    border-radius: 15px;
    z-index: 10;
  }
  .aboutVirnect
    .aboutHistory
    .aboutHistoryInner
    .aboutHistoryCont
    .historyActive {
    display: block;
  }
  .aboutVirnect
    .aboutHistory
    .aboutHistoryInner
    .aboutHistoryCont
    .aboutHistoryContTab
    li.active {
    border: 0;
    color: #9a9da3;
  }
  .aboutVirnect
    .aboutHistory
    .aboutHistoryInner
    .aboutHistoryCont
    .aboutHistoryContTab
    li:hover {
    border: 0;
    color: #092e6e;
  }
}
.prevBtn,
.nextBtn {
  width: 42px;
  height: 42x;
  cursor: pointer;
  margin-left: 0;
}
.awardsSlider {
  display: flex;
  align-items: center;
}
@media screen and(max-width: 735px) {
  .company .companyWrap .companyBanner .companyBannerInner {
    gap: 99px;
  }

  .company .companyWrap .companyBanner .companyBannerInner .companyBannerCont {
    gap: 50px;
  }

  .company .companyWrap .companyBanner {
    height: 1090px;
    background-image: url(https://velog.velcdn.com/images/kyj0206/post/78d93c8e-931f-4655-82c3-2f174608c229/image.jpg);
    background-size: auto 100%;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerCont
    span
    img {
    min-width: 377px;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerTit
    div {
    margin: 0;
    width: 100%;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerTit
    > p {
    margin-bottom: 36px;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerTit
    h2 {
    margin-bottom: 26px;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerTit
    span:nth-child(3) {
    margin-bottom: 39px;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerTit
    div
    span:last-child
    p:last-child {
    text-align: left;
  }
  .company .companyWrap .companyBanner .companyBannerInner .companyBannerTit {
    padding-right: 24px;
  }

  .company .companyWrap .companyVirnect div.virnectModule1 a div,
  .company .companyWrap .companyVirnect div.virnectModule2 a div {
    padding: 0 24px;
  }
}

@media screen and(max-width: 455px) {
  .company .companyWrap .companyNews .companyNewsWrap > span:last-child ul li {
    width: calc(100% / 1);
    max-width: none;
  }

  .company .companyWrap .companyNews .companyNewsWrap > span:last-child ul {
    gap: 38px;
  }
}

@media screen and(max-width: 425px) {
  .company .companyWrap .companyAwards .awardsWrap div:last-child {
    gap: 38px;
  }

  .company .companyWrap .companyAwards .awardsWrap div:last-child .SliderList {
    width: calc(100% / 2 - 19px);
  }

  .company .companyWrap .companyBanner {
    height: 1090px;
    background-image: url(https://velog.velcdn.com/images/kyj0206/post/78d93c8e-931f-4655-82c3-2f174608c229/image.jpg);
    background-size: auto 100%;
  }

  .company
    .companyWrap
    .companyBanner
    .companyBannerInner
    .companyBannerCont
    span
    img {
    min-width: 377px;
  }
}
.CompanyBottomBanner {
  width: 100%;
  overflow: hidden;
  top: 0px;
  /* background-color: #000; */

  .bannerWrap {
    position: relative;

    // 실제사용 모듈용 css 구역!!!!!!!!!!!!!!
    .bannerMoule {
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 35%);
      padding: 0 30px;

      .banner1024 {
        display: block;
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        a {
          display: block;

          img {
            width: 100%;
          }
        }
      }

      .banner768 {
        display: none;

        a {
          display: block;

          img {
            width: 100%;
          }
        }
      }
    }

    // 실제사용 모듈용 css 구역 여기까지!!!!!!!!!!!
  }
}
:root {
  --shadow: rgba(0, 0, 0, 0.8);
}
.CompanyBottomBannerSlide {
  margin-right: 15px;
  max-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1rem;
  img {
    width: 100%;
    max-width: 660px;
  }
}
.CompanyBottomBanner .CompanyBottomBannerSlider-container {
  display: inline-flex;
  overflow: hidden;
  scrollbar-width: none;
  transform: translateX(0);
  will-change: transform;
  transition: transform 0.3s ease-out;
  cursor: grab;
}

@media (min-width: 1200px) {
  .CompanyBottomBanner .slide {
    padding: 3rem;
  }
}

.CompanyBottomBanner .slide img {
  max-width: 100%;
  width: 80%;
  transition: transform 0.3s ease-in-out;
  box-shadow: 5px 5px 50px -1px var(--shadow);
  border-radius: 4px;
  user-select: none;
}

.CompanyBottomBanner .CompanyGrabbing {
  cursor: grabbing;
}

.CompanyBottomBanner .CompanyGrabbing .slide img {
  transform: scale(0.9);
  box-shadow: 5px 5px 40px -1px var(--shadow);
}

@media screen and(max-width:768px) {
  .CompanyBottomBanner .banner .bannerWrap .bannerMoule .banner1024 {
    display: none;
  }

  .CompanyBottomBanner .banner .bannerWrap .bannerMoule .banner768 {
    display: block;
  }

  .CompanyBottomBanner .banner .bannerWrap .bannerMoule {
    padding: 0 24px;
    transform: translate(-50%, 60%);
  }
}
</style>
