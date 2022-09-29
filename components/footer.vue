<template>
  <div class="footer">
    <div class="footerWrap">
      <span class="footerTop">
        <span class="footerNavWeb">
          <div class="upButton" @click="scrollToTop">
            <a>
              <img
                class="upup"
                src="../assets/images/common/topbut@2x.png"
                alt="upButton"
              />
              <!--  //NOTE - 내일 무조건 보자 -->

              <img
                class="upHover"
                src="~/assets/images/pages/epc/footerTop12.png"
                alt="upButton"
              />
            </a>
          </div>
          <ul>
            <li>
              <nuxt-link to="/value/infra_energy">Value</nuxt-link>
              <ul>
                <li>
                  <nuxt-link to="/value/infra_energy">{{
                    $t(`footer.value.title1`)
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/value/manufacture_construction">{{
                    $t(`footer.value.title2`)
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/value/public_education">{{
                    $t(`footer.value.title3`)
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/value/culture_exhibition">{{
                    $t(`footer.value.title4`)
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/value/health_care">{{
                    $t(`footer.value.title5`)
                  }}</nuxt-link>
                </li>
              </ul>
            </li>
            <li>
              <nuxt-link to="/products/productsMain">Products</nuxt-link>
              <ul>
                <li>
                  <nuxt-link to="/products/remote">VIRNECT Remote</nuxt-link>
                </li>
                <li><nuxt-link to="/products/make">VIRNECT Make</nuxt-link></li>
                <li><nuxt-link to="/products/view">VIRNECT View</nuxt-link></li>
                <li><nuxt-link to="/products/twin">VIRNECT Twin</nuxt-link></li>
                <li>
                  <nuxt-link to="/products/track">VIRNECT Track</nuxt-link>
                </li>
                <li><nuxt-link to="/products/ms">XR Devices</nuxt-link></li>
              </ul>
            </li>
            <li>
              <nuxt-link to="/support/supportSubMain">Support</nuxt-link>
              <ul>
                <li><nuxt-link to="/support/notice">Notice</nuxt-link></li>
                <li><nuxt-link to="/support/faq">FAQ</nuxt-link></li>
                <li>
                  <nuxt-link to="/support/learning-center">{{
                    $t(`footer.support.tit1`)
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/support/inquiry" :target="blank">{{
                    $t(`footer.support.tit2`)
                  }}</nuxt-link>
                </li>
              </ul>
            </li>
            <li>
              <nuxt-link to="/news/news-press">News</nuxt-link>
              <ul>
                <li>
                  <nuxt-link to="/news/main">News & press</nuxt-link>
                </li>
                <!-- <li><a href="#">People & Culture</a></li>
                <li><a href="#">Insight</a></li>
                <li><a href="#">ESG</a></li> -->
              </ul>
            </li>
            <li>
              <nuxt-link to="/company/about">Company</nuxt-link>
              <ul>
                <li>
                  <nuxt-link to="/company/about">About VIRNECT</nuxt-link>
                </li>
                <li v-if="$i18n.localeProperties.code === 'ko'">
                  <nuxt-link to="/company/talent">인재채용</nuxt-link>
                </li>
                <li v-if="$i18n.localeProperties.code === 'ko'">
                  <nuxt-link to="/company/ir">IR</nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </span>
        <span class="footerNavMb">
          <span class="infoLogoMb">
            <img
              src="~/assets/images/pages/epc/footerlogologo.png"
              alt="infoLogo"
            />
          </span>
          <ul>
            <li>
              <nuxt-link to="/products/remote">
                <i
                  ><img
                    src="~/assets/images/pages/epc/footerimage2311.png"
                    alt="Remote"
                /></i>
                <p>VIRNECT Remote</p>
                <i
                  ><img
                    src="~/assets/images/pages/epc/footer1245.png"
                    alt="tap아이콘"
                /></i>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/products/make">
                <i><img src="~/assets/volog/asdf23df.png" alt="Make" /></i>
                <p>VIRNECT Make</p>
                <i
                  ><img src="~/assets/volog/asasdfwrfgh.png" alt="tap아이콘"
                /></i>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/products/view">
                <i
                  ><img src="~/assets/volog/footericon1121.png" alt="View"
                /></i>
                <p>VIRNECT View</p>
                <i
                  ><img src="~/assets/volog/asasdfwrfgh.png" alt="tap아이콘"
                /></i>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/products/twin">
                <i><img src="~/assets/volog/footericon02.png" alt="Twin" /></i>
                <p>VIRNECT Twin</p>
                <i
                  ><img src="~/assets/volog/asasdfwrfgh.png" alt="tap아이콘"
                /></i>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/products/track">
                <i><img src="~/assets/volog/footericon03.png" alt="Track" /></i>
                <p>VIRNECT Track</p>
                <i
                  ><img src="~/assets/volog/asasdfwrfgh.png" alt="tap아이콘"
                /></i>
              </nuxt-link>
            </li>
          </ul>
        </span>
        <span class="footerInfo">
          <span class="infoLeft">
            <span class="infoLogoWeb">
              <img src="~/assets/volog/footerlogo.png" alt="infoLogo" />
            </span>
            <span class="infoList">
              <p>
                {{ $t(`footer.infolink.contents1`)
                }}<a>{{ $t(`footer.infolink.contents2`) }}</a>
              </p>
              <p>
                {{ $t(`footer.infolink.contents12`)
                }}<a>{{ $t(`footer.infolink.contents13`) }}</a>
              </p>
              <p>
                {{ $t(`footer.infolink.contents3`) }}
                <a href="mailto:contact@virnect.com" target="blank"
                  ><u>{{ $t(`footer.infolink.contents4`) }}</u>
                </a>
              </p>
              <p>
                {{ $t(`footer.infolink.contents5`) }}
                <a href="mailto:support@virnect.com" target="blank"
                  ><u>{{ $t(`footer.infolink.contents6`) }}</u></a
                >
              </p>
            </span>
            <span class="infoButton">
              <span class="buttonWrap">
                <!-- 서비스선택 박스 -->
                <div
                  class="serviceSelect"
                  @click="[showServiceMenu(), toggle(), (showEarth = false)]"
                  v-click-outside="serviceHide"
                  v-if="isWeb"
                >
                  <div class="select" v-bind:style="showStyle">
                    <div class="selected">
                      <div class="selected-value" v-bind:style="showText">
                        <a>VIRNECT Service</a>
                      </div>
                      <div class="arrow">
                        <img
                          class="downIcon6"
                          src="~/assets/volog/downIconfooter01.png"
                          alt="다운아이콘"
                          v-if="!isServiceMenu"
                        />
                        <img
                          class="upIcon6"
                          src="~/assets/volog/upiconhehehe.png"
                          alt="업아이콘"
                          v-if="isServiceMenu"
                        />
                      </div>
                    </div>
                    <ul v-if="isServiceMenu" v-show="serviceOpen">
                      <!-- <li class="option">
                        <a
                          href="https://console.virnect.com/?continue=https%3A%2F%2Fvirnect.com%2F"
                          target="blank"
                        >
                          <p v-html="$t(`service.text1`)"></p>

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
                      </li> -->
                      <li class="option">
                        <a
                          href="https://workstation.virnect.com/start"
                          target="blank"
                        >
                          <p>Workstation</p>

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
                      <li class="option">
                        <a
                          href="https://remote.virnect.com/home"
                          target="blank"
                        >
                          <p>Remote</p>

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
                      <li class="option">
                        <a
                          href="https://download.virnect.com/remote"
                          target="blank"
                        >
                          <p v-html="$t(`service.text2`)"></p>

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
                <button>
                  <a href="/support/inquiry" target="_blank">{{
                    $t(`footer.infolink.contents7`)
                  }}</a>
                </button>
              </span>
              <com-modal :comModal="comModal" :comPopup="comPopup" />
              <span class="downLoad">
                <span @click="comModal()">
                  <a>
                    <i class="downIcon"
                      ><img
                        src="~/assets/volog/companyDownload21.png"
                        alt="회사소개서 다운로드"
                    /></i>
                    <i class="downHoverIcon"
                      ><img
                        src="~/assets/volog/downhoverload.png"
                        alt="다운로드호버"
                    /></i>
                    <u>{{ $t(`footer.infolink.contents8`) }}</u>
                  </a>
                </span>
                <span @click="modal()">
                  <a>
                    <i class="downIcon"
                      ><img
                        src="~/assets/volog/companyDownload21.png"
                        alt="제품소개서 다운로드"
                    /></i>
                    <i class="downHoverIcon"
                      ><img
                        src="~/assets/volog/downhoverload.png"
                        alt="다운로드호버"
                    /></i>
                    <u>{{ $t(`footer.infolink.contents9`) }}</u>
                  </a>
                </span>
                <pro-modal :modal="modal" :popup="popup" />
              </span>
            </span>
          </span>
          <span class="infoRight">
            <span>
              <p>{{ $t(`footer.infolink.contents10`) }}</p>
            </span>
            <span>
              <!-- <input type="text" placeholder="email을 입력하세요" /> -->
              <button @click="handleModal()">
                <a>{{ $t(`footer.infolink.contents11`) }}</a>
              </button>
            </span>
          </span>
        </span>
      </span>
      <span class="footerBottom">
        <div class="footerBottomInner">
          <div class="bottomInnerLeft">
            <span>
              <u
                ><nuxt-link to="/terms">{{
                  $t(`footer.service.title1`)
                }}</nuxt-link></u
              >
              <u
                ><nuxt-link to="/Policy">{{
                  $t(`footer.service.title2`)
                }}</nuxt-link></u
              >
              <u
                ><nuxt-link to="/payment">{{
                  $t(`footer.service.title3`)
                }}</nuxt-link></u
              >
            </span>
            <span>
              <p>©VIRNECT Co., Ltd. All rights reserved.</p>
            </span>
          </div>
          <div class="bottomInnerRight">
            <span>
              <a href="https://www.youtube.com/virnect%E2%80%8B" target="blank">
                <i class="iconOn iconOn1"
                  ><img src="~/assets/volog/utubeicon1.png" alt="유튜브"
                /></i>
                <i class="iconHover iconHover1"
                  ><img src="~/assets/volog/utuobeicon000.png" alt="유튜브"
                /></i>
              </a>
            </span>
            <span>
              <a href="https://blog.naver.com/virnect" target="blank">
                <i class="iconOn iconOn2"
                  ><img src="~/assets/volog/blogicon1.png" alt="블로그"
                /></i>
                <i class="iconHover iconHover2"
                  ><img src="~/assets/volog/blogIcon010101.png" alt="블로그"
                /></i>
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/company/virnect/"
                target="blank"
              >
                <i class="iconOn iconOn3"
                  ><img src="~/assets/volog/inIconheum.png" alt="링크드인"
                /></i>
                <i class="iconHover iconHover3"
                  ><img src="~/assets/volog/iconinhi.png" alt="링크드인"
                /></i>
              </a>
            </span>
            <span>
              <a href="https://www.facebook.com/virnectkorea" target="blank">
                <i class="iconOn iconOn4"
                  ><img src="~/assets/volog/facebookaa.png" alt="페이스북"
                /></i>
                <i class="iconHover iconHover4"
                  ><img src="~/assets/volog/faceiconbook.png" alt="페이스북"
                /></i>
              </a>
            </span>
            <span>
              <a href="https://pf.kakao.com/_qxhxaPj" target="blank">
                <i class="iconOn iconOn4"
                  ><img src="~/assets/volog/kakaoicon.png" alt="카카오톡"
                /></i>
                <i class="iconHover iconHover4"
                  ><img src="~/assets/volog/kakaoHoverIcon.png" alt="카카오톡"
                /></i>
              </a>
            </span>
            <span
              @click="[(lang = true), langlang()]"
              v-if="isWeb"
              v-click-outside="langHide"
            >
              <i
                ><img src="~/assets/volog/langugeChoice12.png" alt="언어선택"
              /></i>
              <div>
                <span>{{
                  $i18n.localeProperties.code === "ko" ? "KOR" : "ENG"
                }}</span>
                <i
                  ><img
                    src="~/assets/volog/downfooter5a4sdf.png"
                    alt="다운아이콘"
                /></i>
              </div>
              <!-- <div class="tabLang" v-if="showEarth">
                <span
                  v-for="locale in availableLocales"
                  :key="locale.code"
                  @click.prevent.stop="$i18n.setLocale(locale.code)"
                  @click="langlang()"
                >
                  <a href="#">{{ locale.name }}</a>
                </span>
              </div> -->
              <div class="tabLang" v-if="showEarth">
                <p>
                  <a href="https://virnect.com/en" target="_parent">English</a>
                </p>
                <p>
                  <a href="https://virnect.com/" target="_parent">Korean</a>
                </p>
              </div>
            </span>
          </div>
          <span class="mobileInfo">
            <p>©VIRNECT Co., Ltd. All rights reserved.</p>
          </span>
        </div>
      </span>
    </div>
    <modal-component :handleModal="handleModal" :isModal="isModal" />
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";
import ModalComponent from "~/components/subscription/modal.vue";
import ProModal from "./subscription/proModal.vue";
import ComModal from "./subscription/comModal.vue";

export default {
  components: {
    ModalComponent,
    ProModal,
    ComModal,
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },
    data() {
      return {
        visible: false,
      };
    },
  },
  data: () => ({
    lang: false,
    isWeb: true,
    showEarth: false,
    isServiceMenu: false,
    serviceOpen: false,
    showStyle: {},
    showText: {},
    isModal: false,
    popup: false,
    comPopup: false,
  }),
  directives: {
    ClickOutside,
  },
  methods: {
    handleModal() {
      this.isModal = !this.isModal;
    },
    modal() {
      this.popup = !this.popup;
    },
    comModal() {
      this.comPopup = !this.comPopup;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    langlang() {
      this.showEarth = !this.showEarth;
    },
    langHide() {
      if (!this.showEarth) return;
      this.showEarth = false;
    },
    showServiceMenu() {
      this.isServiceMenu = !this.isServiceMenu;
      /* this.showStyle.backgroundColor = "#fff";
      this.showText.color = "#000"; */
    },
    toggle() {
      this.serviceOpen = true;
    },
    serviceHide() {
      this.serviceOpen = false;
      this.isServiceMenu = false;
    },
    /* showServiceMenu () {
      if (isServiceMenu == true) {
          this.select.backgroundColor="#0a51b7";/images/kyj0206/post/3ab14d47-45c9-4f4c-aaa0-ead413260671/image.png
      } else if(isServiceMenu == false) { 
          this.select.backgroundColor="#121212";
      }
    }, */
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/pages/footer.scss";
@import "~/assets/css/reset.scss";
@import "~/assets/css/common.scss";
</style>