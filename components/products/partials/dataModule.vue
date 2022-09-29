<template>
  <section>
    <!-- 데이타모듈 -->
    <ul class="dataModule">
      <li>
        <span>
          {{ $t("productsText.data.battery") }}
          <p>(mAh/min)</p>
        </span>
        <span>
          <p>35%</p>
          <p>
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/7997fb47-0a01-462e-889e-fa2b2baf5726/image.png"
              alt="하락아이콘"
            />
          </p>
        </span>
      </li>
      <li>
        <span>
           {{ $t("productsText.data.temperature") }}
          <p>(℃)</p>
        </span>
        <span>
          <p>22%</p>
          <p>
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/7997fb47-0a01-462e-889e-fa2b2baf5726/image.png"
              alt="하락아이콘"
            />
          </p>
        </span>
      </li>
      <li>
        <span>
          {{ $t("productsText.data.cpu") }}
          <p>(%)</p>
        </span>
        <span>
          <p>65%</p>
          <p>
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/7997fb47-0a01-462e-889e-fa2b2baf5726/image.png"
              alt="하락아이콘"
            />
          </p>
        </span>
      </li>
      <li>
        <span>
          {{ $t("productsText.data.memory") }}
          <p>(KB)</p>
        </span>
        <span>
          <p>58%</p>
          <p>
            <img
              src="https://velog.velcdn.com/images/kyj0206/post/7997fb47-0a01-462e-889e-fa2b2baf5726/image.png"
              alt="하락아이콘"
            />
          </p>
        </span>
      </li>
    </ul>
    <!-- 데이타모듈 -->
    <!-- 0811 추가 텍스트 -->
    <div class="dataTextCOCO">
      VIRNECT Remote 타사 대비 성능비교
      <p>(스마트폰 디바이스 : 녹화 / 1:1협업 / 다중협업 평균 기준)</p>
    </div>
  </section>
</template>


<script>
</script>

<style lang="scss" scoped>
@import "~assets/css/common.scss";
@import "~assets/css/reset.scss";
@import "~/assets/css/modules/dataModule.scss";

.dataTextCOCO{
    display: flex;
    text-align: center;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    flex-direction: column;
    padding: 30px 30px 20px;
    font-size: 12px;
    color: #616161;
    font-weight: bold;
}
</style>