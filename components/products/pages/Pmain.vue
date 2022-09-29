<template>
  <section>
    <div class="productsSubMain">
      <section class="proSubMainList">
        <div class="proSubMainListInner">
          <div>
            <span class="proSubRemote">
              <div class="subRemoteInner">
                <span>
                  <i>
                    <img
                      src="~/assets/images/pages/epc/remotea1zf.png"
                      alt="remote"
                    />
                  </i>
                  <p class="popTit">VIRNECT Remote</p>
                  <span v-html="$t(`productsText.remoteBanner.title`)"></span>
                  <span
                    class="popInfo"
                    v-html="$t(`productsText.remoteBanner.contents`)"
                  >
                  </span>
                  <button>
                    <nuxt-link to="/products/remote">{{
                      $t(`productsText.remoteinfo.text1`)
                    }}</nuxt-link>
                  </button>
                </span>
              </div>
            </span>
            <span class="proSubMake">
              <div class="subMakeInner">
                <span>
                  <i>
                    <img
                      src="~/assets/images/pages/epc/remote2adsf12.png"
                      alt="make"
                    />
                  </i>
                  <p class="popTit">VIRNECT Make</p>
                  <span v-html="$t(`productsText.makeBanner.title`)"> </span>
                  <span
                    class="popInfo"
                    v-html="$t(`productsText.makeBanner.contents`)"
                  >
                  </span>
                  <button>
                    <a href="/products/make">{{
                      $t(`productsText.remoteinfo.text1`)
                    }}</a>
                  </button>
                </span>
              </div>
            </span>
            <span class="proSubView">
              <div class="subViewInner">
                <span>
                  <i>
                    <img
                      src="~/assets/images/pages/epc/adsf112asdf.png"
                      alt="remote"
                    />
                  </i>
                  <p class="popTit">VIRNECT View</p>
                  <span v-html="$t(`productsText.viewBanner.title`)"> </span>
                  <span
                    class="popInfo"
                    v-html="$t(`productsText.viewBanner.contents`)"
                  >
                  </span>
                  <button>
                    <a href="/products/view">{{
                      $t(`productsText.remoteinfo.text1`)
                    }}</a>
                  </button>
                </span>
              </div>
            </span>
          </div>
        </div>
      </section>
      <section class="xrBanner">
        <div class="xrBannerInner">
          <div class="xrBannerWrap">
            <span class="xrBannerTit">
              <h2 v-html="$t('OfferPartdigital.text')"></h2>
            </span>
            <span class="xrBannerCont">
              <span>
                <i>
                  <img
                    src="~/assets/images/pages/epc/adsf121212.png"
                    alt="Twin"
                  />
                </i>
                <p class="popTit">VIRNECT Twin</p>
                <span v-html="$t(`productsText.twinBanner.title`)"> </span>
                <span
                  class="popInfo"
                  v-html="$t(`productsText.twinBanner.contents`)"
                >
                </span>
                <button>
                  <a href="/products/twin">{{
                    $t(`productsText.remoteinfo.text1`)
                  }}</a>
                </button>
              </span>
              <span>
                <i>
                  <img
                    src="~/assets/images/pages/epc/12sdfadsf234ddd.png"
                    alt="Track"
                  />
                </i>
                <p class="popTit">VIRNECT Track</p>
                <span v-html="$t(`productsText.trackBanner.title`)"></span>
                <span
                  class="popInfo"
                  v-html="$t(`productsText.trackBanner.contents`)"
                >
                </span>
                <button>
                  <a href="/products/track">{{
                    $t(`productsText.remoteinfo.text1`)
                  }}</a>
                </button>
              </span>
            </span>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import "~assets/css/reset.scss";
@import "~assets/css/PMain.scss";
</style>