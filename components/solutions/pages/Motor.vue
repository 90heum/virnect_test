<template>
  <section class="motor-section">
    <!-- 에듀 -->
    <section class="EduChallenge">
      <div class="EduChallengeWrap">
        <div class="EduTit">
          <h2>{{ $t("ValueText.educationText.topText.title1") }}</h2>

          <span>
            {{ $t("ValueText.educationText.topText.contents1") }}
            <p>
              {{ $t("ValueText.educationText.topText.contents2") }}
            </p>
          </span>
          <i>
            <img
              src="~/assets/images/pages/value/img_3_big.jpg"
              alt="공공/교육 이미지"
            />
          </i>
        </div>
        <div class="EduContWrap">
          <div class="EduCont">
            <span>
              <span>
                <p>Challenges</p>
              </span>
              <ul>
                <li>
                  <p>
                    {{ $t("ValueText.educationText.challengesText.title1") }}
                  </p>
                  <span>
                    {{ $t("ValueText.educationText.challengesText.contents1") }}
                  </span>
                </li>
                <li>
                  <p>
                    {{ $t("ValueText.educationText.challengesText.title2") }}
                  </p>
                  <span>
                    {{ $t("ValueText.educationText.challengesText.contents2") }}
                  </span>
                </li>
                <li>
                  <p>
                    {{ $t("ValueText.educationText.challengesText.title3") }}
                  </p>
                  <span>
                    {{ $t("ValueText.educationText.challengesText.contents3") }}
                  </span>
                </li>
                <!-- <li>
                  <p>
                    {{ $t("ValueText.educationText.challengesText.title4") }}
                  </p>
                  <span>
                    {{ $t("ValueText.educationText.challengesText.contents4") }}
                  </span>
                </li> -->
              </ul>
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="edu_SE">
      <div class="SE_Wrap">
        <span class="SE_Tit">
          <h2>Solution & Effects</h2>
        </span>
        <span class="SE_Cont">
          <ul>
            <li>
              <p>{{ $t("ValueText.educationText.challengesText.title5") }}</p>
              <span>
                {{ $t("ValueText.educationText.challengesText.contents5") }}
              </span>
            </li>
            <li>
              <p>{{ $t("ValueText.educationText.challengesText.title6") }}</p>
              <span>
                {{ $t("ValueText.educationText.challengesText.contents6") }}
              </span>
            </li>
            <li>
              <p>{{ $t("ValueText.educationText.challengesText.title7") }}</p>
              <span>
                {{ $t("ValueText.educationText.challengesText.contents7") }}
              </span>
            </li>
            <!-- <li>
              <p>{{ $t("ValueText.educationText.challengesText.title8") }}</p>
              <span>
                {{ $t("ValueText.educationText.challengesText.contents8") }}
              </span>
            </li> -->
          </ul>
        </span>
      </div>
    </section>

    <!-- <heading-module
      :category="$t('solutionText.motorText.motorTitle.category')"
      :title="$t('solutionText.motorText.motorTitle.title')"
      :contents="$t('solutionText.motorText.motorTitle.contents')"
    ></heading-module>

    <issue-part
      :image="issueBg"
      :title="$t('solutionText.motorText.issueTitle')"
      :issueArr="$t('solutionText.motorText.issueList')"
      :bannerImg="
        $t('global.myUrl') + `/images/pages/solution/img-solution-motor-top.png`
      "
    ></issue-part> -->
    <bg-normal-part
      :text="$t('solutionText.bgNormalText.text')"
      :boldText="$t('solutionText.bgNormalText.boldText')"
    ></bg-normal-part>

    <!-- 신규모듈 들어갈자리 -->
    <section class="edu_usecase">
      <div class="usecaseWrap">
        <span class="usecaseTit">
          <h2>Use Case</h2>
        </span>
        <span class="usecaseCont">
          <ul class="usecaseList">
            <li @click="showMenu(1)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(1)">
                    {{ $t("ValueText.ValueEduUseCaseText.title1") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/value3-1@2x.png"
                    alt="한밭대학교"
                  />
                  <img
                    class="normal"
                    :src="menu === 1 ? close : open"
                    alt="normal"
                    @click="showMenu(1)"
                  />
                  <img
                    class="hover"
                    :src="(src = menu === 1 ? close : hover)"
                    alt="hover"
                    @click="showMenu(1)"
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 1">
                <li>
                  <ul>
                    <li
                      v-html="$t('ValueText.ValueEduUseCaseText.contents1-1')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueEduUseCaseText.contents1-2')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueEduUseCaseText.contents1-3')"
                    ></li>
                  </ul>
                  <i>
                    <img
                      src="~/assets/images/pages/value/vp3-1.jpg"
                      alt="시범사용"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li @click="showMenu(2)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(2)">
                    {{ $t("ValueText.ValueEduUseCaseText.title2") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/value3-2@2x.png"
                    alt="경기도경제과학진흥원"
                  />
                  <img
                    class="normal"
                    :src="menu === 2 ? close : open"
                    alt="normal"
                    @click="showMenu(2)"
                  />
                  <img
                    class="hover"
                    :src="(src = menu === 2 ? close : hover)"
                    alt="hover"
                    @click="showMenu(2)"
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 2">
                <li>
                  <ul>
                    <li
                      v-html="$t('ValueText.ValueEduUseCaseText.contents2-1')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueEduUseCaseText.contents2-2')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueEduUseCaseText.contents2-3')"
                    ></li>
                  </ul>
                  <i>
                    <img
                      src="~/assets/images/pages/value/vp3-2.jpg"
                      alt="수출상담회"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li @click="showMenu(3)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(3)">
                    {{ $t("ValueText.ValueEduUseCaseText.title3") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/value3-3@2x.png"
                    alt="Kintex"
                  />
                  <img
                    class="normal"
                    :src="menu === 3 ? close : open"
                    alt="normal"
                    @click="showMenu(3)"
                  />
                  <img
                    class="hover"
                    :src="(src = menu === 3 ? close : hover)"
                    alt="hover"
                    @click="showMenu(3)"
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 3">
                <li>
                  <ul>
                    <li
                      v-html="$t('ValueText.ValueEduUseCaseText.contents3-1')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueEduUseCaseText.contents3-2')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueEduUseCaseText.contents3-3')"
                    ></li>
                  </ul>
                  <!-- <i>
                    <img
                      src="~/assets/images/pages/value/edu3.png"
                      alt="도슨트투어"
                    />
                  </i> -->
                </li>
              </ul>
            </li>
            <li @click="showMenu(4)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(4)">
                    {{ $t("ValueText.ValueEduUseCaseText.title4") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/value3-4@2x.png"
                    alt="Kintex"
                  />
                  <img
                    class="normal"
                    :src="menu === 4 ? close : open"
                    alt="normal"
                    @click="showMenu(4)"
                  />
                  <img
                    class="hover"
                    :src="(src = menu === 4 ? close : hover)"
                    alt="hover"
                    @click="showMenu(4)"
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 4">
                <li>
                  <ul>
                    <li
                      v-html="$t('ValueText.ValueEduUseCaseText.contents4-1')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueEduUseCaseText.contents4-2')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueEduUseCaseText.contents4-3')"
                    ></li>
                  </ul>
                  <i>
                    <img
                      src="~/assets/images/pages/value/vp3-4.png"
                      alt="도슨트투어"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li @click="showMenu(5)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(5)">
                    {{ $t("ValueText.ValueEduUseCaseText.title5") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/value3-5@2x.png"
                    alt="Kintex"
                  />
                  <img
                    class="normal"
                    :src="menu === 5 ? close : open"
                    alt="normal"
                    @click="showMenu(5)"
                  />
                  <img
                    class="hover"
                    :src="(src = menu === 5 ? close : hover)"
                    alt="hover"
                    @click="showMenu(5)"
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 5">
                <li>
                  <ul>
                    <li
                      v-html="$t('ValueText.ValueEduUseCaseText.contents5-1')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueEduUseCaseText.contents5-2')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueEduUseCaseText.contents5-3')"
                    ></li>
                  </ul>
                  <i>
                    <img
                      src="~/assets/images/pages/value/vp3-5.png"
                      alt="도슨트투어"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li @click="showMenu(6)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(6)">
                    {{ $t("ValueText.ValueEduUseCaseText.title6") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/value3-6@2x.png"
                    alt="Kintex"
                  />
                  <img
                    class="normal"
                    :src="menu === 6 ? close : open"
                    alt="normal"
                    @click="showMenu(6)"
                  />
                  <img
                    class="hover"
                    :src="(src = menu === 6 ? close : hover)"
                    alt="hover"
                    @click="showMenu(6)"
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 6">
                <li>
                  <ul>
                    <li
                      v-html="$t('ValueText.ValueEduUseCaseText.contents6-1')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueEduUseCaseText.contents6-2')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueEduUseCaseText.contents6-3')"
                    ></li>
                  </ul>
                  <i>
                    <img
                      src="~/assets/images/pages/value/vp3-6.png"
                      alt="도슨트투어"
                    />
                  </i>
                </li>
              </ul>
            </li>
          </ul>
        </span>
      </div>
    </section>

    <!-- <heading-module
      :category="$t('solutionText.motorText.infographicText.category')"
      :title="$t('solutionText.motorText.infographicText.title')"
      :contents="$t('solutionText.motorText.infographicText.contents')"
    ></heading-module>

    <infographic-part
      :image="$t('solutionText.motorText.infographicText.image')"
      :infographicArr="
        $t('solutionText.motorText.infographicText.infographicList')
      "
      :slideList="solutionGellary"
      :btnList="infographicBtn"
    ></infographic-part> -->

    <roi-part
      :text="$t('solutionText.roiText.text')"
      :boldText="$t('solutionText.roiText.boldText')"
    ></roi-part>

    <!-- <div class="example-wrap">
      <section class="divide-section">
        <div class="example-style">
          <heading-module
            :align="exampleAlign"
            :category="$t('solutionText.exampleTitle.category')"
            :title="$t('solutionText.exampleTitle.title')"
            :contents="$t('solutionText.exampleTitle.contents')"
          ></heading-module>

          <div class="divide-contents-section example">
            <example-part
              :exampleArr="$t('solutionText.motorText.exampleList')"
            ></example-part>
          </div>
          <new-module :bannerData="$t('solutionText.motorText.exampleList')"
            :title="`Twin이`"/>
        </div>
      </section>
    </div> -->
    <!-- <bg-slide-part
      :bgExampleArr="$t('solutionText.motorText.bgExampleList')"
    ></bg-slide-part> -->
    <new-bg-slide
      :bannerData="moduleData.motor"
      :title="`Twin이`"
    ></new-bg-slide>
    <offer-part
      :title="$t('solutionText.offerText.title')"
      :contents="$t('solutionText.offerText.contents')"
      :lists="$t('solutionText.offerText.array')"
    ></offer-part>
  </section>
</template>

<script>
import issuePart from "../partials/IssuePart";
import bgNormalPart from "../partials/BgNormalPart";
import infographicPart from "../partials/InfographicPart";
import roiPart from "../partials/RoiPart";
import offerPart from "../partials/OfferPart";

import examplePart from "../../products/partials/ExamplePart";
import bgSlidePart from "../../products/partials/BgSlidePart";

import NewModule from "~/components/products/partials/newModule.vue";
import NewBgSlide from "~/components/products/partials/NewBgSlideMotor.vue";

import headingModule from "../../modules/Heading";
import { filedData, moduleData } from "~/components/products/NewBgPartData.js";
export default {
  head: {
    title: "공공/교육 - VIRNECT",
    htmlAttrs: {
      lang: "ko",
    },
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "공공/교육 분야에 사용되는 기존 교육 방식은 비용 대비 효과가 낮습니다. XR 기술을 활용하면 보다 탁월한 학습효과는 물론 언제 어디서나 접속이 가능합니다.",
      },
    ],
  },
  components: {
    issuePart,
    bgNormalPart,
    infographicPart,
    roiPart,
    offerPart,
    examplePart,
    bgSlidePart,
    headingModule,
    NewModule,
    NewBgSlide,
  },
  data() {
    return {
      menu: 1,
      open: require("~/assets/images/pages/value/icon-plus-close@2x.png"),
      close: require("~/assets/images/pages/value/icon-plus-open@2x.png"),
      hover: require("~/assets/images/pages/value/icon-plus-hover@2x.png"),

      filedData,
      moduleData,
      issueBg: "../images/pages/solution/img-solution-motor-top",
      infographicBtn: [
        [
          {
            name: "VIRNECT Make",
            router: "make",
          },
          {
            name: "VIRNECT View",
            router: "view",
          },
        ],
        [
          {
            name: "VIRNECT Twin",
            router: "twin",
          },
        ],
        [
          {
            name: "VIRNECT Remote",
            router: "remote",
          },
          {
            name: "VIRNECT Twin",
            router: "twin",
          },
        ],
        [
          {
            name: "VIRNECT Make",
            router: "make",
          },
          {
            name: "VIRNECT View",
            router: "view",
          },
        ],
      ],
      exampleAlign: "left",
      solutionGellary: [
        [
          {
            thumb: "../images/pages/solution/info-motor-01-01.png",
            img: "../images/pages/solution/info-motor-01-01@3x.png",
            iconList: ["../images/common/logo-make"],
          },
          {
            thumb: "../images/pages/solution/info-motor-01-02.png",
            img: "../images/pages/solution/info-motor-01-02@3x.png",
            iconList: ["../images/common/logo-make"],
          },
          {
            thumb: "../images/pages/solution/info-motor-01-03.png",
            img: "../images/pages/solution/info-motor-01-03@3x.png",
            iconList: ["../images/common/logo-arsdk"],
          },
          {
            thumb: "../images/pages/solution/info-motor-01-04.png",
            img: "../images/pages/solution/info-motor-01-04@3x.png",
            iconList: ["../images/common/logo-view"],
          },
          {
            thumb: "../images/pages/solution/info-motor-01-05.png",
            img: "../images/pages/solution/info-motor-01-05@3x.png",
            iconList: ["../images/common/logo-view"],
          },
        ],
        [
          {
            thumb: "../images/pages/solution/info-motor-02-01.png",
            img: "../images/pages/solution/info-motor-02-01@3x.png",
            iconList: ["../images/common/logo-view"],
          },
        ],
        [],
        [
          {
            thumb: "../images/pages/solution/info-motor-04-01.png",
            img: "../images/pages/solution/info-motor-04-01@3x.png",
            iconList: ["../images/common/logo-make"],
          },
          {
            thumb: "../images/pages/solution/info-motor-04-03.png",
            img: "../images/pages/solution/info-motor-04-03@3x.png",
            iconList: ["../images/common/logo-make"],
          },
          {
            thumb: "../images/pages/solution/info-motor-04-02.png",
            img: "../images/pages/solution/info-motor-04-02@3x.png",
            iconList: ["../images/common/logo-view"],
          },
        ],
      ],
    };
  },
  methods: {
    showMenu(e) {
      this.menu = e;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~assets/css/pages/products.scss";
@import "~/assets/css/pages/eduChallenges.scss";
@import "~/assets/css/pages/eduS&E.scss";
@import "~/assets/css/pages/edu_Usecase.scss";
</style>
