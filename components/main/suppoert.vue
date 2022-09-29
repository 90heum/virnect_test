<template>
  <div class="SupportBanner">
    <div class="SupportBannerWrap">
      <span class="SupportTit">
        <div>
          <h2>Support</h2>
        </div>
        <div>
          <p v-html="$t('newMainText.supportText.contents')"></p>
          <span @click="() => $router.push('/support/supportSubMain')">
            <p v-html="$t(`supportText.headBannerText.text`)"></p>
            <p>
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/d405b250-9807-41de-91f7-677076876929/image.png"
                alt="바로가기"
              />
            </p>
          </span>
        </div>
      </span>
      <span class="SupportCont">
        <div>
          <a href="#">
            <span>
              <p>Product Notice</p>
              <p>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/55729d34-c916-4922-97a2-ac8213bbeab6/image.png"
                  alt="Product Notice 더보기"
                />
              </p>
            </span>
            <span>
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/aa1205a9-43bc-4e94-bc29-a550cb7210ad/image.png"
                alt="Product Notice 이미지"
              />
            </span>
          </a>
        </div>
        <div>
          <a href="#">
            <span>
              <p>FAQ</p>
              <p>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/55729d34-c916-4922-97a2-ac8213bbeab6/image.png"
                  alt="FAQ 더보기"
                />
              </p>
            </span>
            <span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </a>
        </div>
        <div>
          <a href="#">
            <span>
              <p>{{$t(`newMainText.supportInfo.text1`)}}</p>
              <p>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/55729d34-c916-4922-97a2-ac8213bbeab6/image.png"
                  alt="학습센터 더보기"
                />
              </p>
            </span>
            <span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </a>
        </div>
      </span>
      <span class="SupportBottomTit">
        <div>
          <p>
            궁금한 사항이 있으신가요? 신속하게 답변 드리겠습니다.
          </p>
        </div>
        <div>
          <i>
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/c469bca8-6475-42c6-bb90-4d54edec3e7a/image.png"
              alt="문의하기"
            />
          </i>
          <p>070.7733.2025</p>
        </div>
        <div>
          <nuxt-link to="/support/inquiry">{{$t(`newMainText.supportInfo.text2`)}}</nuxt-link>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.SupportBanner {
  display: flex;
  align-items: center;
  max-width: 2400px;
  width: 100%;
  min-height: 920px;
  background-image: url("https://velog.velcdn.com/images/kyj0206/post/994912db-5d75-420f-ac1b-0c70c251909e/image.png");
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;
  .SupportBannerWrap {
    display: flex;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    padding: 0 30px;
    box-sizing: border-box;
    .SupportTit {
      width: 100%;
    }
    .SupportCont {
    }
    .SupportBottomTit {
    }
  }
}
</style>