<template>
  <section>
    <div class="containerSolutions">
      <div class="titleBox">
        <p>Solutions</p>
        <h1>{{ $t("energeMainText1") }}</h1>
        <h1>{{ $t("energeMainText2") }}</h1>
        <p>{{ $t("energeMainText3") }}</p>
        <p>{{ $t("energeMainText4") }}</p>
      </div>
    </div>
    <div class="container"></div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.containerSolutions {
  width: 100%;
  height: 700px;
  background-color: darkblue;
}
.titleBox {
  text-align: center;
}
</style>