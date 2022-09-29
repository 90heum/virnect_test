<template>
  <div class="bottomBannerRemoteWrapper">
    <div class="ModuleInsight">
      <div class="ModuleInsightWrap">
        <span class="ModuleInsightTit">
          <h2>VIRNECT Insight</h2>
          <span>
            <p>
              버넥트가 전하는 최신 디지털 인사이트를 통해 산업의 혁신 사례를
              발견하세요
            </p>
            <i>
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/e85ae54b-6760-4cd5-84d5-9bd9b86dc00f/image.png"
                alt="더보기"
              />
            </i>
          </span>
        </span>
        <span class="ModuleInsightCont">
          <div>
            <ul>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/1143028d-4bd6-4046-8721-522b0bfff41b/image.jpg"
                  alt="Technology"
                />
              </li>
              <li>
                <p>
                  과기정통부, 디지털트윈 산업 현장 버넥트에서 '디지털 뉴딜반'
                  회의 개최
                </p>
              </li>
              <li>
                <span>
                  <a href="#">Technology</a>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/be0f8c31-e56d-447d-ab3c-2428ea488091/image.png"
                  alt="Market Trend"
                />
              </li>
              <li>
                <p>
                  과기정통부, 디지털트윈 산업 현장 버넥트에서 '디지털 뉴딜반'
                  회의 개최
                </p>
              </li>
              <li>
                <span>
                  <a href="#">Market Trend</a>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/f9df4c22-b235-4372-b68c-d5e96a3ff0cd/image.jpg"
                  alt="VIRNECT Make"
                />
              </li>
              <li>
                <p>
                  과기정통부, 디지털트윈 산업 현장 버넥트에서 '디지털 뉴딜반'
                  회의 개최
                </p>
              </li>
              <li>
                <span>
                  <a href="#">VIRNECT Make</a>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/8d2121e0-1a2d-4eaa-b496-89190df01a34/image.jpg"
                  alt="VIRNECT View"
                />
              </li>
              <li>
                <p>
                  과기정통부, 디지털트윈 산업 현장 버넥트에서 '디지털 뉴딜반'
                  회의 개최
                </p>
              </li>
              <li>
                <span>
                  <a href="#">VIRNECT View</a>
                </span>
              </li>
            </ul>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/css/common.scss";
@import "~assets/css/reset.scss";
.bottomBannerRemoteWrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 90px 0px;
  background: #f7f8f9;
}
.ModuleInsight {
  width: 100%;
  height: 100%;
  max-height: 569px;
  padding: 90px 0;
  background: #f7f8f9;
}
.ModuleInsight .ModuleInsightWrap {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
}
.ModuleInsight .ModuleInsightWrap .ModuleInsightTit h2 {
  font-size: 30px;
  font-weight: bold;
  line-height: 1;
  letter-spacing: -0.38px;
  color: #121212;
  margin-bottom: 16px;
}
.ModuleInsight .ModuleInsightWrap .ModuleInsightTit span {
  display: flex;
  justify-content: space-between;
  margin-bottom: 53px;
  align-items: center;
}
.ModuleInsight .ModuleInsightWrap .ModuleInsightTit span p {
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.2px;
  color: #616161;
}
.ModuleInsight .ModuleInsightWrap .ModuleInsightTit span i img {
  max-width: 19px;
  width: 100%;
}
.ModuleInsight .ModuleInsightWrap .ModuleInsightCont div {
  display: flex;
}
.ModuleInsight .ModuleInsightWrap .ModuleInsightCont div ul {
  margin-right: 18px;
  width: calc(25% - 13px);
}
.ModuleInsight .ModuleInsightWrap .ModuleInsightCont div ul:last-child {
  margin-right: 0;
}
.ModuleInsight .ModuleInsightWrap .ModuleInsightCont div ul li:first-child {
  margin-bottom: 20px;
}
.ModuleInsight .ModuleInsightWrap .ModuleInsightCont div ul li:first-child img {
  width: 100%;
}
.ModuleInsight .ModuleInsightWrap .ModuleInsightCont div ul li:nth-child(2) {
  margin-bottom: 15px;
}
.ModuleInsight .ModuleInsightWrap .ModuleInsightCont div ul li:nth-child(2) p {
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: -0.18px;
  color: #121212;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.ModuleInsight .ModuleInsightWrap .ModuleInsightCont div ul li:last-child {
  display: block;
}
.ModuleInsight .ModuleInsightWrap .ModuleInsightCont div ul li:last-child span {
  display: inline-block;
  border-radius: 17px;
  border: solid 2px #e6e8eb;
  background-color: #fff;
}
.ModuleInsight
  .ModuleInsightWrap
  .ModuleInsightCont
  div
  ul
  li:last-child
  span
  a {
  display: inline-block;
  font-size: 1.2rem;
  letter-spacing: -0.15px;
  line-height: 1;
  text-align: center;
  color: #9a9da3;
  padding: 6px 10px 4px;
}
</style>