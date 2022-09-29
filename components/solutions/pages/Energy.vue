<template>
  <section class="energy-section">
    <section class="infraChallenge">
      <div class="infraChallengeWrap">
        <div class="infraTit">
          <h2>
            {{ $t("ValueText.infraText.topText.title") }}
            <!-- <p>{{ $t("ValueText.infraText.topText.title2") }}</p> -->
          </h2>
          <span>
            {{ $t("ValueText.infraText.topText.contents") }}
            <p>
              {{ $t("ValueText.infraText.topText.contents2") }}
            </p>
            <p>
              {{ $t("ValueText.infraText.topText.contents3") }}
            </p>
          </span>
          <i>
            <img
              src="~/assets/images/pages/solution/img-solution-energy-top.png"
              alt="인프라 이미지"
            />
          </i>
        </div>
        <div class="infraContWrap">
          <div class="infraCont">
            <span>
              <span>
                <p>Challenges</p>
              </span>
              <ul>
                <li>
                  <p>{{ $t("ValueText.infraText.challengesText.title1") }}</p>
                  <span>
                    {{ $t("ValueText.infraText.challengesText.contents1") }}
                  </span>
                </li>
                <li>
                  <p>{{ $t("ValueText.infraText.challengesText.title2") }}</p>
                  <span>
                    {{ $t("ValueText.infraText.challengesText.contents2") }}
                  </span>
                </li>
                <li>
                  <p>{{ $t("ValueText.infraText.challengesText.title3") }}</p>
                  <span>
                    {{ $t("ValueText.infraText.challengesText.contents3") }}
                  </span>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="infra_SE">
      <div class="SE_Wrap">
        <span class="SE_Tit">
          <h2>Solution & Effects</h2>
        </span>
        <span class="SE_Cont">
          <ul>
            <li>
              <p>{{ $t("ValueText.infraText.challengesText.title4") }}</p>
              <span>
                {{ $t("ValueText.infraText.challengesText.contents4") }}
              </span>
            </li>
            <li>
              <p>{{ $t("ValueText.infraText.challengesText.title5") }}</p>
              <span>
                {{ $t("ValueText.infraText.challengesText.contents5") }}
              </span>
            </li>
            <li>
              <p>{{ $t("ValueText.infraText.challengesText.title6") }}</p>
              <span>
                {{ $t("ValueText.infraText.challengesText.contents6") }}
              </span>
            </li>
          </ul>
        </span>
      </div>
    </section>

    <bg-normal-part
      :text="$t('solutionText.bgNormalText.text')"
      :boldText="$t('solutionText.bgNormalText.boldText')"
    ></bg-normal-part>
    <section class="intra_usecase">
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
                    {{ $t("ValueText.ValueUseCaseText.title1") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/value1-1@2x.png"
                    alt="협업솔루션"
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
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 1">
                <li>
                  <ul>
                    <li
                      v-html="$t('ValueText.ValueUseCaseText.contents1-1')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueUseCaseText.contents1-2')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueUseCaseText.contents1-3')"
                    ></li>
                  </ul>
                  <i>
                    <img
                      src="~/assets/images/pages/value/vp1-1.png"
                      alt="협업솔루션"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li @click="showMenu(7)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(7)">
                    {{ $t("ValueText.ValueUseCaseText.title7") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/img-value-4@2x.png"
                    alt="시스템개발"
                  />

                  <img
                    class="normal"
                    :src="menu === 7 ? close : open"
                    alt="normal"
                    @click="showMenu(7)"
                  />
                  <img
                    class="hover"
                    :src="(src = menu === 7 ? close : hover)"
                    alt="hover"
                    @click="showMenu(7)"
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 7">
                <li>
                  <ul>
                    <li
                      v-html="$t('ValueText.ValueUseCaseText.contents7-1')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueUseCaseText.contents7-2')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueUseCaseText.contents7-3')"
                    ></li>
                  </ul>
                  <i>
                    <img
                      src="~/assets/images/pages/value/VIp1-7.jpg"
                      alt="협업솔루션"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li @click="showMenu(2)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(2)">
                    {{ $t("ValueText.ValueUseCaseText.title2") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/value1-2@2x.png"
                    alt="시스템개발"
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
                      v-html="$t('ValueText.ValueUseCaseText.contents2-1')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueUseCaseText.contents2-2')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueUseCaseText.contents2-3')"
                    ></li>
                  </ul>
                  <i>
                    <img
                      src="~/assets/images/pages/value/vp1-2.jpg"
                      alt="협업솔루션"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li @click="showMenu(3)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(3)">
                    {{ $t("ValueText.ValueUseCaseText.title3") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/value1-3@2x.png"
                    alt="검증솔루션"
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
                      v-html="$t('ValueText.ValueUseCaseText.contents3-1')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueUseCaseText.contents3-2')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueUseCaseText.contents3-3')"
                    ></li>
                  </ul>
                  <i>
                    <img
                      src="~/assets/images/pages/value/vp1-3.png"
                      alt="협업솔루션"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li @click="showMenu(4)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(4)">
                    {{ $t("ValueText.ValueUseCaseText.title4") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/value1-4@2x.png"
                    alt="검증용역"
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
                      v-html="$t('ValueText.ValueUseCaseText.contents4-1')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueUseCaseText.contents4-2')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueUseCaseText.contents4-3')"
                    ></li>
                  </ul>
                  <!-- <i>
                    <img
                      src="~/assets/images/pages/value/valueB-4@2x.png"
                      alt="협업솔루션"
                    />
                  </i> -->
                </li>
              </ul>
            </li>
            <li @click="showMenu(5)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(5)">
                    {{ $t("ValueText.ValueUseCaseText.title5") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/value1-5@2x.png"
                    alt="기능개선"
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
                      v-html="$t('ValueText.ValueUseCaseText.contents5-1')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueUseCaseText.contents5-2')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueUseCaseText.contents5-3')"
                    ></li>
                  </ul>
                  <i>
                    <img
                      src="~/assets/images/pages/value/vp1-5.png"
                      alt="협업솔루션"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li @click="showMenu(6)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(6)">
                    {{ $t("ValueText.ValueUseCaseText.title6") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/value1-6@2x.png"
                    alt="기능개선"
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
                      v-html="$t('ValueText.ValueUseCaseText.contents6-1')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueUseCaseText.contents6-2')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueUseCaseText.contents6-3')"
                    ></li>
                  </ul>
                  <!-- <i>
                    <img
                      src="~/assets/images/pages/value/valueB-5@2x.png"
                      alt="협업솔루션"
                    />
                  </i> -->
                </li>
              </ul>
            </li>
          </ul>
        </span>
      </div>
    </section>

    <roi-part
      :text="$t('solutionText.roiText.text')"
      :boldText="$t('solutionText.roiText.boldText')"
    ></roi-part>

    <new-bg-slide
      :bannerData="moduleData.energy"
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
import issuePart from "../partials/IssuePart.vue";
import bgNormalPart from "../partials/BgNormalPart";
import infographicPart from "../partials/InfographicPart";
import roiPart from "../partials/RoiPart";
import offerPart from "../partials/OfferPart";

import examplePart from "../../products/partials/ExamplePart.vue";
import bgSlidePart from "../../products/partials/BgSlidePart.vue";
import NewModule from "~/components/products/partials/newModule.vue";
import NewBgSlide from "~/components/products/partials/NewBgSlideinfra.vue";

import headingModule from "../../modules/Heading";

import { filedData, moduleData } from "~/components/products/NewBgPartData.js";

export default {
  head: {
    title: "인프라/에너지 - VIRNECT",
    htmlAttrs: {
      lang: "ko",
    },
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "인프라/에너지 산업은 복잡한 설비와 어려운 작업지침으로 인해 현장 파악 및 문제점 해결이 어렵습니다. XR 기술은 사업장 내에 복잡하고 체험이 어려운 교육이나 원격협업에 적용 가능합니다.",
      },
    ],
  },
  props: {
    functionArr: Array,
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
      issueBg:
        "https://virnect.com/images/pages/solution/img-solution-energy-top",
      infographicBtn: [
        [
          {
            name: "VIRNECT Twin",
            router: "twin",
          },
        ],
        [
          {
            name: "VIRNECT Twin",
            router: "twin",
          },
          {
            name: "VIRNECT View",
            router: "view",
          },
        ],
        [
          {
            name: "VIRNECT Remote",
            router: "remote",
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
            thumb:
              "https://virnect.com/images/pages/solution/info-energy-01-01.png",
            img: "https://virnect.com/images/pages/solution/info-energy-01-01@3x.png",
            iconList: ["https://virnect.com/images/common/logo-arsdk"],
          },
          {
            thumb:
              "https://virnect.com/images/pages/solution/info-energy-01-02.png",
            img: "https://virnect.com/images/pages/solution/info-energy-01-02@3x.png",
            iconList: ["https://virnect.com/images/common/logo-twin"],
          },
          {
            thumb:
              "https://virnect.com/images/pages/solution/info-energy-01-03.png",
            img: "https://virnect.com/images/pages/solution/info-energy-01-03@3x.png",
            iconList: ["https://virnect.com/images/common/logo-twin"],
          },
        ],
        [
          {
            thumb:
              "https://virnect.com/images/pages/solution/info-energy-02-01.png",
            img: "https://virnect.com/images/pages/solution/info-energy-02-01@3x.png",
            iconList: ["https://virnect.com/images/common/logo-make"],
          },
          {
            thumb:
              "https://virnect.com/images/pages/solution/info-energy-02-02.png",
            img: "https://virnect.com/images/pages/solution/info-energy-02-02@3x.png",
            iconList: ["https://virnect.com/images/common/logo-make"],
          },
          {
            thumb:
              "https://virnect.com/images/pages/solution/info-energy-02-03.png",
            img: "https://virnect.com/images/pages/solution/info-energy-02-03@3x.png",
            iconList: ["https://virnect.com/images/common/logo-view"],
          },
          {
            thumb:
              "https://virnect.com/images/pages/solution/info-energy-02-04.png",
            img: "https://virnect.com/images/pages/solution/info-energy-02-04@3x.png",
            iconList: ["https://virnect.com/images/common/logo-remote"],
          },
        ],
        [
          {
            thumb:
              "https://virnect.com/images/pages/solution/info-energy-03-01.png",
            img: "https://virnect.com/images/pages/solution/info-energy-03-01@3x.png",
            iconList: ["https://virnect.com/images/common/logo-remote"],
          },
        ],
        [
          {
            thumb:
              "https://virnect.com/images/pages/solution/info-energy-04-01.png",
            img: "https://virnect.com/images/pages/solution/info-energy-04-01@3x.png",
            iconList: ["https://virnect.com/images/common/logo-view"],
          },
        ],
      ],
    };
  },
  methods: {
    showMenu(e) {
      this.menu = e;
    },

    /* slideDown(idx) {
      if (this.activeIdx == idx) return (this.activeIdx = null);
      else return (this.activeIdx = idx);
    }, */
  },
};
</script>
<style lang="scss" scoped>
@import "~assets/css/pages/products.scss";
@import "~/assets/css/pages/infraChallenges.scss";
@import "~/assets/css/pages/infraS&E.scss";
@import "~/assets/css/pages/intra_Usecase.scss";
</style>
