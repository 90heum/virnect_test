<template>
  <section class="oil-section">
    <!-- 제조 -->
    <!-- <heading-module
      :category="$t('solutionText.oilText.oilTitle.category')"
      :title="$t('solutionText.oilText.oilTitle.title')"
      :contents="$t('solutionText.oilText.oilTitle.contents')"
    ></heading-module> -->

    <!-- <issue-part
      :image="issueBg"
      :title="$t('solutionText.oilText.issueTitle')"
      :issueArr="$t('solutionText.oilText.issueList')"
      :bannerImg="
        $t('global.myUrl') +
        `/images/pages/solution/img-solution-chemical-top.png`
      "
    ></issue-part> -->
    <section class="ProduceChallenge">
      <div class="ProduceChallengeWrap">
        <div class="ProduceTit">
          <h2>
            {{ $t("ValueText.OilProduceText.topText.title1") }}
            <!-- <p>{{ $t("ValueText.OilProduceText.topText.title2") }}</p> -->
          </h2>
          <span>
            {{ $t("ValueText.OilProduceText.topText.contents1") }}
            <p>
              {{ $t("ValueText.OilProduceText.topText.contents2") }}
            </p>
            <p>
              {{ $t("ValueText.OilProduceText.topText.contents3") }}
            </p>
          </span>
          <i>
            <img
              src="~/assets/images/pages/solution/img-solution-chemical-top.png"
              alt="인프라 이미지"
            />
          </i>
        </div>
        <div class="ProduceContWrap">
          <div class="ProduceCont">
            <span>
              <span>
                <p>Challenges</p>
              </span>
              <ul>
                <li>
                  <p>
                    {{ $t("ValueText.OilProduceText.challengesText.title1") }}
                  </p>
                  <span>
                    {{
                      $t("ValueText.OilProduceText.challengesText.contents1")
                    }}
                  </span>
                  <span>
                    {{
                      $t("ValueText.OilProduceText.challengesText.contents1-2")
                    }}
                  </span>
                </li>
                <li>
                  <p>
                    {{ $t("ValueText.OilProduceText.challengesText.title2") }}
                  </p>
                  <span>
                    {{
                      $t("ValueText.OilProduceText.challengesText.contents2")
                    }}
                  </span>
                </li>
                <li>
                  <p>
                    {{ $t("ValueText.OilProduceText.challengesText.title3") }}
                  </p>
                  <span>
                    {{
                      $t("ValueText.OilProduceText.challengesText.contents3")
                    }}
                  </span>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="produce_SE">
      <div class="SE_Wrap">
        <span class="SE_Tit">
          <h2>Solution & Effects</h2>
        </span>
        <span class="SE_Cont">
          <ul>
            <li>
              <p>
                {{ $t("ValueText.OilProduceText.challengesText.title4") }}
              </p>
              <span>
                {{ $t("ValueText.OilProduceText.challengesText.contents4") }}
              </span>
            </li>
            <li>
              <p>
                {{ $t("ValueText.OilProduceText.challengesText.title5") }}
              </p>
              <span>
                {{ $t("ValueText.OilProduceText.challengesText.contents5") }}
              </span>
            </li>
            <li>
              <p>
                {{ $t("ValueText.OilProduceText.challengesText.title6") }}
              </p>
              <span>
                {{ $t("ValueText.OilProduceText.challengesText.contents6") }}
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

    <!-- <heading-module
      :category="$t('solutionText.oilText.infographicText.category')"
      :title="$t('solutionText.oilText.infographicText.title')"
      :contents="$t('solutionText.oilText.infographicText.contents')"
    ></heading-module> -->
    <!-- 
    <infographicPart
      :image="$t('solutionText.oilText.infographicText.image')"
      :infographicArr="
        $t('solutionText.oilText.infographicText.infographicList')
      "
      :slideList="solutionGellary"
      :btnList="infographicBtn"
    ></infographicPart> -->

    <!-- 신규모듈 자리 -->
    <section class="produce_usecase">
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
                    {{ $t("ValueText.ValueOilUseCaseText.title1") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/value2-1@2x.png"
                    alt="kt"
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
                      v-html="$t('ValueText.ValueOilUseCaseText.contents1-1')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueOilUseCaseText.contents1-2')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueOilUseCaseText.contents1-3')"
                    ></li>
                  </ul>
                  <!-- <i>
                    <img
                      src="~/assets/images/pages/value/oil1x.png"
                      alt="지원솔루션"
                    />
                  </i> -->
                </li>
              </ul>
            </li>
            <li @click="showMenu(2)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(2)">
                    {{ $t("ValueText.ValueOilUseCaseText.title2") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/value2-2@2x.png"
                    alt="삼성sds"
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
                      v-html="$t('ValueText.ValueOilUseCaseText.contents2-1')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueOilUseCaseText.contents2-2')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueOilUseCaseText.contents2-3')"
                    ></li>
                  </ul>
                  <!-- <i>
                    <img
                      src="~/assets/images/pages/value/oil2.png"
                      alt="지원솔루션"
                    />
                  </i> -->
                </li>
              </ul>
            </li>
            <li @click="showMenu(3)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(3)">
                    {{ $t("ValueText.ValueOilUseCaseText.title3") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/value2-3@2x.png"
                    alt="스마트제조혁신센터"
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
                      v-html="$t('ValueText.ValueOilUseCaseText.contents3-1')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueOilUseCaseText.contents3-2')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueOilUseCaseText.contents3-3')"
                    ></li>
                  </ul>

                  <i>
                    <img
                      src="~/assets/images/pages/value/vp2-3.png"
                      alt="연동시각화"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li @click="showMenu(4)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(4)">
                    {{ $t("ValueText.ValueOilUseCaseText.title4") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/value2-4@2x.png"
                    alt="오토모티브"
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
                      v-html="$t('ValueText.ValueOilUseCaseText.contents4-1')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueOilUseCaseText.contents4-2')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueOilUseCaseText.contents4-3')"
                    ></li>
                  </ul>
                  <i>
                    <img
                      src="~/assets/images/pages/value/vp2-4.png"
                      alt="기술지원"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li @click="showMenu(5)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(5)">
                    {{ $t("ValueText.ValueOilUseCaseText.title5") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/value2-5@2x.png"
                    alt="엔지니어링디자인"
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
                      v-html="$t('ValueText.ValueOilUseCaseText.contents5-1')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueOilUseCaseText.contents5-2')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueOilUseCaseText.contents5-3')"
                    ></li>
                  </ul>
                  <!-- <i>
                    <img
                      src="~/assets/images/pages/value/oil5.png"
                      alt="어플리케이션 개발"
                    />
                  </i> -->
                </li>
              </ul>
            </li>
            <li @click="showMenu(6)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(6)">
                    {{ $t("ValueText.ValueOilUseCaseText.title6") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/value2-6@2x.png"
                    alt="엔지니어링디자인"
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
                      v-html="$t('ValueText.ValueOilUseCaseText.contents6-1')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueOilUseCaseText.contents6-2')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueOilUseCaseText.contents6-3')"
                    ></li>
                  </ul>
                  <!-- <i>
                    <img
                      src="~/assets/images/pages/value/oil5.png"
                      alt="어플리케이션 개발"
                    />
                  </i> -->
                </li>
              </ul>
            </li>
            <li @click="showMenu(7)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(7)">
                    {{ $t("ValueText.ValueOilUseCaseText.title7") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/value2-7@2x.png"
                    alt="엔지니어링디자인"
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
                      v-html="$t('ValueText.ValueOilUseCaseText.contents7-1')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueOilUseCaseText.contents7-2')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueOilUseCaseText.contents7-3')"
                    ></li>
                  </ul>
                  <i>
                    <img
                      src="~/assets/images/pages/value/vp2-7.png"
                      alt="어플리케이션 개발"
                    />
                  </i>
                </li>
              </ul>
            </li>
            <li @click="showMenu(8)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(8)">
                    {{ $t("ValueText.ValueOilUseCaseText.title8") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/value2-8@2x.png"
                    alt="엔지니어링디자인"
                  />
                  <img
                    class="normal"
                    :src="menu === 8 ? close : open"
                    alt="normal"
                    @click="showMenu(8)"
                  />
                  <img
                    class="hover"
                    :src="(src = menu === 8 ? close : hover)"
                    alt="hover"
                    @click="showMenu(8)"
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 8">
                <li>
                  <ul>
                    <li
                      v-html="$t('ValueText.ValueOilUseCaseText.contents8-1')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueOilUseCaseText.contents8-2')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueOilUseCaseText.contents8-3')"
                    ></li>
                  </ul>
                  <!-- <i>
                    <img
                      src="~/assets/images/pages/value/oil5.png"
                      alt="어플리케이션 개발"
                    />
                  </i> -->
                </li>
              </ul>
            </li>
            <li @click="showMenu(9)">
              <div class="listWrap">
                <span>
                  <p @click="showMenu(9)">
                    {{ $t("ValueText.ValueOilUseCaseText.title9") }}
                  </p>
                </span>
                <i>
                  <img
                    src="~/assets/images/pages/value/value2-9@2x.png"
                    alt="엔지니어링디자인"
                  />
                  <img
                    class="normal"
                    :src="menu === 9 ? close : open"
                    alt="normal"
                    @click="showMenu(9)"
                  />
                  <img
                    class="hover"
                    :src="(src = menu === 9 ? close : hover)"
                    alt="hover"
                    @click="showMenu(9)"
                  />
                </i>
              </div>
              <ul class="listInner" v-if="menu === 9">
                <li>
                  <ul>
                    <li
                      v-html="$t('ValueText.ValueOilUseCaseText.contents9-1')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueOilUseCaseText.contents9-2')"
                    ></li>
                    <li
                      v-html="$t('ValueText.ValueOilUseCaseText.contents9-3')"
                    ></li>
                  </ul>
                  <!-- <i>
                    <img
                      src="~/assets/images/pages/value/oil5.png"
                      alt="어플리케이션 개발"
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

    <new-bg-slide :bannerData="moduleData.oil" :title="`Twin이`"></new-bg-slide>
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
import infographicPart from "~/components/solutions/partials/InfographicPart";
import roiPart from "../partials/RoiPart";
import offerPart from "../partials/OfferPart";
import bgSlidePart from "../../products/partials/BgSlidePart";
import headingModule from "../../modules/Heading";
import NewBgSlide from "~/components/products/partials/NewBgSlideOil.vue";
import { filedData, moduleData } from "~/components/products/NewBgPartData.js";
export default {
  head: {
    title: "제조/건설 - VIRNECT",
    htmlAttrs: {
      lang: "ko",
    },
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "XR 솔루션은 실시간으로 현장 정보를 원격으로 확인하면서 커뮤니케이션이 가능합니다. 복잡한 공정이나 협의도 출장없이 원격으로 의사결정이 가능하여 비용 감소에 효과적입니다.",
      },
    ],
  },
  components: {
    issuePart,
    bgNormalPart,
    infographicPart,
    roiPart,
    offerPart,
    bgSlidePart,
    headingModule,
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
      issueBg: "../images/pages/solution/img-solution-chemical-top",
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
          {
            name: "VIRNECT Twin",
            router: "twin",
          },
        ],
      ],
      exampleAlign: "left",
      solutionGellary: [
        [],
        [
          {
            thumb: "../images/pages/solution/info-chemical-02-01.png",
            img: "../images/pages/solution/info-chemical-02-01@3x.png",
            iconList: ["../images/common/logo-make"],
          },
        ],
        [],
        [
          {
            thumb: "../images/pages/solution/info-chemical-02-02.png",
            img: "../images/pages/solution/info-chemical-02-02@3x.png",
            iconList: ["../images/common/logo-remote"],
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
@import "~/assets/css/pages/produceChallenges.scss";
@import "~/assets/css/pages/produceS&E.scss";
@import "~/assets/css/pages/produce_Usecase.scss";
</style>
