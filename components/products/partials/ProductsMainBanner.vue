<template>
  <section>
    <!-- COMPANY -->
    <div class="NewsBanner">
      <div class="NewsBannerInner">
        <p>Products</p>
        <h2>{{$t(`productsText.mainBanner.title`)}}</h2>
        <span v-html="$t(`productsText.mainBanner.text`)">
        </span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  head: {
    title: 'VIRNECT Products - 버넥트 XR 솔루션 소개',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '업무 현장의 운영 및 관리를 위한 버넥트 XR 솔루션을 소개합니다.확장현실(XR) 원천기술을 보유하여 현장 업무 효율화 및 고객의 이슈 해결을 위한 맞춤형 솔루션 제공 및 기술지원이 가능합니다.고객중심의 컨설팅 및 커스터마이징으로 비즈니스의 성공을 이루어 내세요.'
      }
    ],
  },
}
</script>
<style lang="scss" scoped>
@import "~/assets/css/modules/productsBanner.scss";
</style>