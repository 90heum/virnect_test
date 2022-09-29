<template>
  <div class="CtaModule">
    <div class="CtaCont">
      <h2>{{ $t(`supportText.supModule.subtitle`) }}</h2>
      <p>{{ $t(`supportText.supModule.subtitle2`) }}</p>
      <span>
        <button>
          <a href="/support/demo" target="blank">{{
            $t(`supportText.supModule.btnText1`)
          }}</a>
        </button>
        <button>
          <a href="/support/inquiry" target="blank">
            {{ $t(`supportText.supModule.btnText2`) }}</a
          >
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.CtaModule {
  display: flex;
  width: 100%;
  /* max-width: 2400px; */
  height: 479px;
  background-image: url("~/assets/images/pages/module/make-kv-200220-ext@2x.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: center;
  padding-right: 11%;
  .CtaCont {
    max-width: 906px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 0 0px;

    h2 {
      font-size: 48px;
      color: #fff;
      margin-bottom: 11px;
      line-height: 1.28;
    }
    p {
      font-size: 24px;
      font-weight: 500;
      color: #bfdcff;
      margin-bottom: 64px;
    }
    span {
      display: flex;
      gap: 12px;
      button {
        border: none;
        transition: all 0.4s;
        a {
          height: 100%;
          line-height: 1.5;
          display: block;
          padding: 13px 48.87px;
          font-size: 18px;
          font-weight: bold;
          white-space: nowrap;
        }
        &:first-child {
          background: #0a51b7;
          a {
            color: #fff;
          }
        }
        &:last-child {
          background: #f7f8f9;
          a {
            color: #121212;
          }
        }
      }
      // 조성우추가
      button:hover {
        border: none;
        a {
          height: 100%;
          line-height: 1.5;
          display: block;
          padding: 13px 48.87px;
          font-size: 18px;
          font-weight: bold;
        }
        &:first-child {
          background: #fff;
          a {
            color: #000;
          }
        }
        &:last-child {
          background: #092e6e;
          a {
            color: #fff;
          }
        }
      }
      // 조성우추가 끝
    }
  }
}

// 0716조성우 추가
@media screen and (max-width: 1440px) {
  .CtaModule {
    display: flex;
    width: 100%;
    /* max-width: 2400px; */
    height: 479px;
    background-image: url("~/assets/images/pages/module/make-kv-200220-ext@2x.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    justify-content: center;
    padding-right: 23%;
    padding-left: 30px;
  }
}
// 조성우 추가 끝

@media screen and (max-width: 1024px) {
  .CtaModule {
    padding: 0;
  }

  .CtaModule .CtaCont {
    padding: 0 25px;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .CtaModule .CtaCont span {
    justify-content: center;
  }
}
@media screen and (max-width: 768px) {
  .CtaModule .CtaCont h2 {
    font-size: 27px;
    line-height: 1.28;
  }
  .CtaModule {
    padding: 0;
  }

  .CtaModule .CtaCont p {
    font-size: 18px;
  }
}

@media screen and (max-width: 475px) {
  .CtaModule .CtaCont {
    padding: 0 24px;
  }

  .CtaModule .CtaCont span button a{
    font-size: 14px;
    font-weight: 700;
  }
}
</style>