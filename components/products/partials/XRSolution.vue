<template>
  <section>
    <span id="headingModuleTop" />
    <div class="overViewRemote">
      <div class="overViewWrap">
        <span class="overViewTit">
          <p>{{ $t("productsText.remoteTitle.category") }}</p>
          <h2>{{ $t("productsText.remoteTitle.title") }}</h2>
          <span>
            {{ $t("productsText.remoteTitle.contents") }}
          </span>
        </span>
        <span class="overViewCont">
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/5717ee9b-9468-4e91-8027-0591305062f8/image.png"
                alt="Save Time and Cost"
            /></i>
            <p>Save Time and Cost</p>
            <p>{{ $t("productsText.remoteSubText.TimeCost") }}</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/780b6479-d53a-48db-a89d-321a74ed6d5a/image.png"
                alt="Inform Quicky and ccurately"
            /></i>
            <p>Inform Quickly and Accurately</p>
            <p>{{ $t("productsText.remoteSubText.Quicky") }}</p>
          </span>
          <span>
            <i
              ><img
                src="https://velog.velcdn.com/images/kyj0206/post/4e8a8d7e-2792-4e74-9618-7d03cbaa6b99/image.png"
                alt="Reduce Industry Risks"
            /></i>
            <p>Reduce Industry Risks</p>
            <p>
              {{ $t("productsText.remoteSubText.Risks") }}
            </p>
          </span>
        </span>
        <span class="overViewBox">
          <ul>
            <li>
              <p>63+</p>
              <p>{{ $t("productsText.subBox.current") }}</p>
            </li>
            <li>
              <p>1,357+</p>
              <p>{{ $t("productsText.subBox.download") }}</p>
            </li>
            <li>
              <p>120+</p>
              <p>{{ $t("productsText.subBox.prject") }}</p>
            </li>
          </ul>
          <span id="featuresWrapId" />
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// @import "~assets/css/common.scss";
@import "~assets/css/reset.scss";
@import "~/assets/css/pages/overviewRemote.scss";
</style>