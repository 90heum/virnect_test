<template>
  <section>
    <div class="featuresRemote">
      <div class="featuresWrap">
        <span class="title">
          <p>{{ $t("productsText.remotePropertyTitle.title") }}</p>
        </span>
        <div class="contents">
          <span class="featuresTit">
            <h2>
              {{ $t("productsText.remotePropertyTitle.contents") }}
              <p></p>
            </h2>
            <ul>
              <li>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                    alt="리스트1"
                /></i>
                <p>
                  {{ $t("productsText.remotePropertyText.multiple") }}
                </p>
              </li>
              <li>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                    alt="리스트2"
                /></i>
                <p>{{ $t("productsText.remotePropertyText.translation") }}</p>
              </li>
              <li>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                    alt="리스트3"
                /></i>
                <p>{{ $t("productsText.remotePropertyText.images") }}</p>
              </li>
              <li>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                    alt="리스트4"
                /></i>
                <p>{{ $t("productsText.remotePropertyText.secured") }}</p>
              </li>
              <li>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                    alt="리스트4"
                /></i>
                <p>{{ $t("productsText.remotePropertyText.autoStart") }}</p>
              </li>
              <li>
                <i
                  ><img
                    src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                    alt="리스트4"
                /></i>
                <p>
                  {{ $t("productsText.remotePropertyText.personalization") }}
                </p>
              </li>
            </ul>
          </span>
          <span class="featuresCont">
            <img
              src="~/assets/images/pages/products/group-13-en@2x.png"
              alt="features"
            />
            <span id="headingModuleBottom" />
          </span>
        </div>
      </div>
    </div>
  </section>
  <!-- <div class="productPropertyWrapper">
    <div class="features">
      <div class="featuresWrap">
        <span class="featuresTit">
          <p>
            {{ $t("productsText.productPropertyTitle.title") }}
          </p>
          <h2>
            {{ $t("productsText.productPropertyTitle.contents") }}
          </h2>
          <ul>
            <li>
              <i
                ><img
                  src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                  alt="리스트1"
              /></i>
              <p>
                {{ $t("productsText.productPropertyText.multiple") }}
              </p>
            </li>
            <li>
              <i
                ><img
                  src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                  alt="리스트2"
              /></i>
              <p>
                {{ $t("productsText.productPropertyText.translation") }}
              </p>
            </li>
            <li>
              <i
                ><img
                  src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                  alt="리스트3"
              /></i>
              <p>
                {{ $t("productsText.productPropertyText.images") }}
              </p>
            </li>
            <li>
              <i
                ><img
                  src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                  alt="리스트4"
              /></i>
              <p>
                {{ $t("productsText.productPropertyText.secured") }}
              </p>
            </li>
            <li>
              <i
                ><img
                  src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                  alt="리스트5"
              /></i>
              <p>
                {{ $t("productsText.productPropertyText.autoStart") }}
              </p>
            </li>
            <li>
              <i
                ><img
                  src="https://velog.velcdn.com/images/kyj0206/post/6ee9bae6-3d0a-4c24-9868-c8a3af3759a9/image.png"
                  alt="리스트6"
              /></i>
              <p>
                {{ $t("productsText.productPropertyText.personalization") }}
              </p>
            </li>
          </ul>
        </span>
        <span class="featuresCont">
          <img
            src="https://velog.velcdn.com/images/kyj0206/post/1dc714b8-20fb-4609-b92b-1f1472ed777b/image.jpg"
            alt="features"
          />
        </span>
      </div>
    </div>
  </div> -->
</template>


<script>
export default {
  data() {
    return {
      xrSolutionWrapperPosition: 0,
    };
  },
  methods: {
    positionSetting() {
      if (process.client)
        window.scrollTo({
          left: 0,
          top: Number(divPosition.get(e.target).getAttribute("class")) - 250,
          behavior: "smooth",
        });
      Number(ids.getBoundingClientRect().top + window.pageYOffset);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/css/common.scss";
@import "~assets/css/reset.scss";
@import "~/assets/css/pages/FeaturesRemote.scss";
</style>