
<template>
  <section id="mainSection" class="main-section">
    <div class="container">
      <div class="titleBox">
        <h1>{{ $t("mainPost") }}</h1>
        <h1>{{ $t("mainSolve") }}</h1>
      </div>
    </div>

    <div class="container2">
      <div class="titleBox2">
        <p class="middleT">{{ $t("mainBetterText") }}</p>
        <p class="middleTitle">{{ $t("mainVirnectText") }}</p>
        <p class="middleP">
          {{ $t("mainARandText1") }}
        </p>
        <p class="middleP">
          {{ $t("mainARandText2") }}
        </p>
        <p class="middleP">{{ $t("mainARandText3") }}​</p>
      </div>
      <div class="threeD">
        <div class="threeDchild">
          <div class="threeDchildchild">
            <p>Saving</p>
            <p>
              {{ $t("mainSaving") }}
            </p>
          </div>
        </div>
        <div class="threeDchild">
          <div class="threeDchildchild">
            <p>Safety</p>
            <p>
              {{ $t("mainSafety") }}
            </p>
          </div>
        </div>
        <div class="threeDchild">
          <div class="threeDchildchild">
            <p>Smart</p>
            <p>
              {{ $t("mainSmart") }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container3">
      <div class="titleBox2">
        <p class="middleT">Solutions</p>
        <p class="middleTitle">{{ $t("mainClear") }}</p>
        <p class="middleP">
          {{ $t("mainVernecthasText1") }}
        </p>
        <p class="middleP">
          {{ $t("mainVernecthasText2") }}
        </p>
        <p class="middleP">
          {{ $t("mainVernecthasText3") }}
        </p>
      </div>
    </div>
    <div class="containerSolutions">
      <div></div>
    </div>
    <div class="containerProducts">
      <div class="titleBox2">
        <p class="middleT">Products</p>
        <h1 class="middleTitle">산업문제를해결할~~~~</h1>
        <p class="middleP">제품들을 산업현장의</p>
        <p class="middleP">ar원천기술과~~~~</p>
      </div>
    </div>
    <div class="containerCredibility">
      <div class="credibilityBox">
        <p>Credibility</p>
        <h2>버넥트는 다양한 어워즈에서 입상하여~</h2>
        <h2>버넥트는 다양한 어워즈에서 입상하여~</h2>
      </div>
      <div class="brandBox"></div>
    </div>
    <div class="containerNews">
      <div class="titleBox2">
        <p class="middleT">News</p>
        <h1 class="middleTitle">Virnect의최신 뉴스를 확인하세요</h1>
        <p class="middleP">전체보기</p>
      </div>
    </div>
    <div class="containerArdt">
      <h2>현장의 혁신 지금바로시작</h2>
      <p>CONTACT</p>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },
  },
};
</script>

<style>
.container {
  width: 100%;
  height: 850px;
  background-color: black;
}
.titleBox {
  padding: 150px;
}
.titleBox > h1 {
  color: white;
  font-size: 50px;
}
.container2 {
  height: 800px;
  width: 100%;
  background: darkgray;
}
.titleBox2 {
  text-align: center;
}
.middleT {
  font-weight: bold;
  color: royalblue;
  padding-top: 130px;
  margin-bottom: 30px;
}
.middleTitle {
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 30px;
}
.middleP {
  margin: 5px;
}
.threeDchild {
  height: 450px;
  width: 400px;
  background-color: hotpink;
  margin: 15px;
  position: relative;
  padding-left: 20px;
}
.threeD {
  margin-top: 60px;
  display: flex;
  flex-direction: row; /*수평 정렬*/
  justify-content: center;
}
.threeDchildchild {
  width: 100%;
  height: 200px;
  background-color: blanchedalmond;
  position: absolute;
  bottom: 0px;
}

.containerSolutions {
  width: 100%;
  height: 700px;
  background-color: blue;
}
.containerProducts {
  width: 100%;
  height: 800px;
  background-color: aquamarine;
}
.credibilityBox {
  text-align: center;
}
.brandBox {
  width: 100%;
  height: 800px;
  background-color: bisque;
}
.containerNews {
  width: 100%;
  height: 700px;
  background-color: aquamarine;
}
.containerArdt {
  width: 100%;
  height: 300px;
  text-align: center;
  background-color: darkslategrey;
}
</style>
