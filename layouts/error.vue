<template>
  <div>
    <section class="error404" v-if="error.statusCode === 404">
      <div class="error404Wrap">
        <span>
          <i
            ><img
              src="https://velog.velcdn.com/images/kyj0206/post/66b26342-d744-4494-b73a-039184f555ce/image.png"
              alt="404"
          /></i>
        </span>
        <span>
          <button>
            <a href="https://virnect.com/"> 처음으로 이동 </a>
          </button>
        </span>
      </div>
    </section>
    <section class="error500" v-if="error.statusCode === 500">
      <div class="error500Wrap">
        <span>
          <i
            ><img
              src="https://velog.velcdn.com/images/kyj0206/post/a6d387ba-7769-4e4e-b843-8032de1335c6/image.png"
              alt="500"
          /></i>
        </span>
        <span>
          <button>
            <a href="https://virnect.com/"> 처음으로 이동 </a>
          </button>
        </span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>

<style lang="scss" scoped>
.error404 {
  padding: 222px 24px 0;
  width: 100%;
  .error404Wrap {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    span {
      &:first-child {
        i {
          display: flex;
          justify-content: center;
          width: 100%;
          height: 100%;
          margin: 0 auto;
          img {
            max-width: 583px;
            width: 100%;
          }
        }
      }
      &:last-child {
        padding: 105px 0;
        margin: 0 auto;
        button {
          max-width: 282px;
          max-height: 85px;
          width: 100%;
          height: 100%;
          border: solid 1px #0a51b7;
          background-color: #0a51b7;
          a {
            white-space: nowrap;
            display: block;
            padding: 25px 70px;
            font-size: 22px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            color: #fff;
          }
        }
      }
    }
  }
}
.error500 {
  padding: 222px 24px 0;
  width: 100%;
  .error500Wrap {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    span {
      &:first-child {
        i {
          display: flex;
          justify-content: center;
          width: 100%;
          height: 100%;
          margin: 0 auto;
          img {
            max-width: 583px;
            width: 100%;
          }
        }
      }
      &:last-child {
        padding: 105px 0;
        margin: 0 auto;
        button {
          max-width: 282px;
          max-height: 85px;
          width: 100%;
          height: 100%;
          border: solid 1px #0a51b7;
          background-color: #0a51b7;
          a {
            white-space: nowrap;
            display: block;
            padding: 25px 70px;
            font-size: 22px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>