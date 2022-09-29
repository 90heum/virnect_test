<template>
  <section class="offer-part">
    <!-- <p class="title" v-html="title"></p>
    <p class="contents" v-html="contents"></p>
    <ul>
       <li
        v-for="(list, idx) of lists"
        :key="idx"
        :class="{ active: active == idx }"
        @click="
          $router.push({ name: list.router });
          scrollReset();
        "
        @mouseenter="active = idx"
      > 
      <li
        v-for="(list, idx) of lists"
        :key="idx"
        :class="{ active: active == idx }"
        @mouseenter="active = idx"
      >
        <p v-html="list.text"></p>
        <img
          :src="`http://13.209.200.75:8080/static/assets/images/pages/solution/logo${[
            idx,
          ]}.png`"
        />
      </li>
    </ul> -->
    <div class="productModule">
      <div class="productModuleWrap">
        <div class="proModuleTit">
          <h2>VIRNECT Product</h2>
          <!-- <span>
            <a href="#">
              <p>자세히보기</p>
              <i
                ><img
                  src="https://velog.velcdn.com/images/kyj0206/post/1e22c531-f750-418a-ac13-bfaa72de33a6/image.png"
                  alt="자세히보기"
              /></i>
            </a>
          </span> -->
        </div>
        <div class="proModuleCont">
          <span class="proModuleCont1">
            <span class="proModuleContTit">
              <p>산업 현장을 위해 최적화된 제품을 만나보세요</p>
            </span>
            <ul class="proModuleContBox">
              <li>
                <nuxt-link to="/products/remote">
                  <span class="imgPull">
                    <i>
                      <img
                        class="contBoxNormal"
                        src="https://5878418.fs1.hubspotusercontent-na1.net/hubfs/5878418/VIRNECT%20image/VIRNECT%20BI/RemoteBlack.png"
                        alt="Remote"
                      />
                      <img
                        class="contBoxHover"
                        src="https://5878418.fs1.hubspotusercontent-na1.net/hubfs/5878418/VIRNECT%20image/VIRNECT%20BI/RemoteBIWhite.png"
                        alt="Remote"
                      />
                    </i>
                  </span>
                  <p v-html="$t('valueBannerModule.text1')"></p>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/products/make">
                  <span>
                    <i>
                      <img
                        class="contBoxNormal"
                        src="https://5878418.fs1.hubspotusercontent-na1.net/hubfs/5878418/VIRNECT%20image/VIRNECT%20BI/MakeBIBlackT.png"
                        alt="Make"
                      />
                      <img
                        class="contBoxHover"
                        src="https://5878418.fs1.hubspotusercontent-na1.net/hubfs/5878418/VIRNECT%20image/VIRNECT%20BI/MakeBIWhiteT.png"
                        alt="Make"
                      />
                    </i>
                  </span>
                  <p v-html="$t('valueBannerModule.text2')"></p>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/products/view">
                  <span>
                    <i>
                      <img
                        class="contBoxNormal"
                        src="https://5878418.fs1.hubspotusercontent-na1.net/hubfs/5878418/VIRNECT%20image/VIRNECT%20BI/ViewBIBlackT.png"
                        alt="View"
                      />
                      <img
                        class="contBoxHover"
                        src="https://5878418.fs1.hubspotusercontent-na1.net/hubfs/5878418/VIRNECT%20image/VIRNECT%20BI/ViewBIWhiteT.png"
                        alt="View"
                      />
                    </i>
                  </span>
                  <p v-html="$t('valueBannerModule.text3')"></p>
                </nuxt-link>
              </li>
            </ul>
          </span>
          <span class="proModuleCont2">
            <span class="proModuleContTit">
              <p>
                XR 및 디지털 트윈 기술을 바탕으로 미래 산업 현장을 만들어갑니다
              </p>
            </span>
            <ul class="proModuleContBox">
              <li>
                <nuxt-link to="/products/twin">
                  <span>
                    <i>
                      <img
                        class="contBoxNormal"
                        src="https://5878418.fs1.hubspotusercontent-na1.net/hubfs/5878418/VIRNECT%20image/VIRNECT%20BI/TwinBIBlackT.png"
                        alt="Twin"
                      />
                      <img
                        class="contBoxHover"
                        src="https://5878418.fs1.hubspotusercontent-na1.net/hubfs/5878418/VIRNECT%20image/VIRNECT%20BI/TwinBIWhiteT.png"
                        alt="Twin"
                      />
                    </i>
                  </span>
                  <p v-html="$t('valueBannerModule.text4')"></p>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/products/track">
                  <span>
                    <i>
                      <img
                        class="contBoxNormal"
                        src="https://5878418.fs1.hubspotusercontent-na1.net/hubfs/5878418/VIRNECT%20image/VIRNECT%20BI/TrackBIBlack.png"
                        alt="Track"
                      />
                      <img
                        class="contBoxHover"
                        src="https://5878418.fs1.hubspotusercontent-na1.net/hubfs/5878418/VIRNECT%20image/VIRNECT%20BI/TrackBIWhite.png"
                        alt="Track"
                      />
                    </i>
                  </span>
                  <p v-html="$t('valueBannerModule.text5')"></p>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/products/ms">
                  <span>
                    <i>
                      <img
                        class="contBoxNormal"
                        src="https://5878418.fs1.hubspotusercontent-na1.net/hubfs/5878418/VIRNECT%20image/VIRNECT%20BI/XRBlack1.png"
                        alt="XRDevices"
                      />
                      <img
                        class="contBoxHover"
                        src="https://5878418.fs1.hubspotusercontent-na1.net/hubfs/5878418/VIRNECT%20image/VIRNECT%20BI/XRWhite1.png"
                        alt="XRDevices"
                      />
                    </i>
                  </span>
                </nuxt-link>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import mixin from 'mixins/mixin'
export default {
  // mixins: [mixin],
  props: {
    title: String,
    contents: String,
    lists: Array,
  },
  data() {
    return {
      active: 0,
      isMobile: false,
    };
  },
  computed: {
    isMobile() {
      let arr = [];
      // for (let val of this.lists) {
      //   if (!this.checkMobile()) {
      //     arr.push(val.image)
      //   } else {
      //     arr.push(`${val.image}-m@2x`)
      //   }
      // }
      return arr;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/modules/ProductCtaModule.scss";
// @import "~assets/css/pages/products.scss";
// .offer-part {
//   margin-top: 180px;
//   text-align: center;
//   @include area-flex(1280px);
//   @include default-text(#222, 38px);
//   .title {
//     margin-bottom: 16px;
//     font-weight: bold;
//     font-family: $noto;
//     line-height: 1.51;
//   }
//   .contents {
//     font-size: 16px;
//     line-height: 1.78;
//   }
//   ul {
//     display: flex;
//     flex-wrap: wrap;
//     margin-top: 40px;
//     text-align: left;
//     li {
//       position: relative;
//       width: calc(100% / 3 - 28px);
//       height: 160px;
//       margin: 14px;
//       padding: 20px 24px;
//       border: 1px solid #e7eaef;
//       border-radius: 1px;
//       cursor: pointer;
//       &.active {
//         border: 1px solid rgba(255, 255, 255, 0);
//         box-shadow: 0 2px 14px 0 rgba(220, 225, 232, 0.7);
//       }
//     }
//     p {
//       font-weight: 500;
//       font-size: 17px;
//       font-family: $noto;
//       line-height: 1.43;
//       color: black;
//     }
//   }
//   img {
//     position: absolute;
//     right: 24px;
//     bottom: 14px;
//     width: 202px;
//   }
//   @media (max-width: 760px) {
//     margin-top: 120px;
//     .contents {
//       font-size: 15px;
//     }
//     ul {
//       margin: 0 -6px;
//       margin-top: 32px;
//       li {
//         width: calc(50% - 12px);
//         margin: 6px;
//         padding: 12px 16px;
//         border: 1px solid rgba(255, 255, 255, 0);
//         box-shadow: 0 2px 14px 0 rgba(220, 225, 232, 0.7);
//       }
//       p {
//         font-size: 14px;
//       }
//     }
//     img {
//       right: auto;
//       bottom: 10px;
//       width: calc(100% - 32px);
//     }
//   }
// }
</style>
