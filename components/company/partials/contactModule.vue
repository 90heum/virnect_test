<template>
  <div class="ContactCtaModule">
    <div class="ContactCtaCont">
      <span>
        <h2>{{ $t("supportText.supModule.title") }}</h2>
        <p>{{ $t("supportText.supModule.subtitle") }}</p>
      </span>
      <span>
        <button>
          <a href="/support/inquiry" target="_blank">{{ $t("supportText.supModule.now") }}</a>
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/css/modules/ContactCtaModule.scss";
</style>