<template>
  <div class="SupportBanner">
    <div class="SupportBannerWrap">
      <span class="SupportTit">
        <div>
          <h2>Support</h2>
        </div>
        <div>
          <p v-html="$t(`newMainText.supportText.contents`)"></p>
          <span @click="() => $router.push('/support/supportSubMain')">
            <p v-html="$t(`supportText.headBannerText.text`)"></p>
            <p>
              <img
                src="~/assets/images/pages/epc/arrow-heum.png"
                alt="바로가기"
              />
            </p>
          </span>
        </div>
      </span>
      <span class="SupportCont">
        <div>
          <div>
            <nuxt-link to="/support/notice">
              <span>
                <p>Product Notice</p>
                <p>
                  <img
                    src="~/assets/images/pages/epc/addbtn.png"
                    alt="Product Notice 더보기"
                  />
                </p>
              </span>
            </nuxt-link>
            <span>
              <a href="https://virnect.com/support/notice">
                <img
                  src="~/assets/images/pages/module/mainsupportimg.png"
                  alt="Product Notice 이미지"
                />
              </a>
            </span>
          </div>
          <div>
            <nuxt-link to="/support/faq">
              <span>
                <p>FAQ</p>
                <p>
                  <img
                    src="~/assets/images/pages/epc/addbtn.png"
                    alt="FAQ 더보기"
                  />
                </p>
              </span>
            </nuxt-link>
            <span>
              <span>
                <nuxt-link to="/support/faq?category=1">
                  <img
                    src="~/assets/images/pages/epc/people124a.png"
                    alt="회원"
                  />
                </nuxt-link>
              </span>
              <span>
                <nuxt-link to="/support/faq?category=3">
                  <img
                    src="~/assets/images/pages/epc/productImage1sd.png"
                    alt="제품"
                  />
                </nuxt-link>
              </span>
              <span>
                <nuxt-link to="/support/faq?category=4">
                  <img
                    src="~/assets/images/pages/epc/paygood12.png"
                    alt="결제"
                  />
                </nuxt-link>
              </span>
              <span>
                <nuxt-link to="/support/faq?category=2">
                  <img
                    src="~/assets/images/pages/epc/service12sad.png"
                    alt="서비스"
                  />
                </nuxt-link>
              </span>
              <span>
                <nuxt-link to="/support/faq?category=6">
                  <img
                    src="~/assets/images/pages/epc/deviceaa1234.png"
                    alt="기기"
                  />
                </nuxt-link>
              </span>
              <span>
                <nuxt-link to="/support/faq?category=5">
                  <img
                    src="~/assets/images/pages/epc/etcaa1453sz.png"
                    alt="기타"
                  />
                </nuxt-link>
              </span>
            </span>
          </div>
        </div>
        <div>
          <nuxt-link to="/support/learning-center">
            <span>
              <p>{{ $t(`newMainText.supportInfo.text1`) }}</p>
              <p>
                <img
                  src="~/assets/images/pages/epc/addbtn.png"
                  alt="학습센터 더보기"
                />
              </p>
            </span>
          </nuxt-link>
          <span>
            <span>
              <nuxt-link to="/support/learning-center?category=1">
                <img
                  src="~/assets/images/pages/epc/remoteicon11aav.png"
                  alt="Remote"
                />
              </nuxt-link>
            </span>
            <span>
              <nuxt-link to="/support/learning-center?category=2">
                <img
                  src="~/assets/images/pages/epc/makeIcon1aasdf.png"
                  alt="Make"
                />
              </nuxt-link>
            </span>
            <span>
              <nuxt-link to="/support/learning-center?category=3">
                <img
                  src="~/assets/images/pages/epc/viewiconhihi.png"
                  alt="View"
                />
              </nuxt-link>
            </span>
          </span>
        </div>
      </span>
      <span class="SupportBottomTit">
        <div>
          <p>{{ $t(`newMainText.supportmodulText.kokacktext1`) }}</p>
          <p>{{ $t(`newMainText.supportmodulText.kokacktext2`) }}</p>
        </div>
        <div>
          <div>
            <i>
              <img
                src="~/assets/images/pages/epc/phoncall1azc.png"
                alt="문의하기"
              />
            </i>
            <p>070.7733.2025</p>
          </div>
          <div>
            <nuxt-link to="/support/inquiry">{{
              $t(`newMainText.supportInfo.text2`)
            }}</nuxt-link>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~/assets/css/modules/Support.scss";
</style>