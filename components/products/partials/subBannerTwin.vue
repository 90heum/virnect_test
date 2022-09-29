<template>
  <div class="SubProductsBannerTwin">
    <div class="SubProductsWrap">
      <span>
        <i>
          <img
            src="https://velog.velcdn.com/images/akwjdgma/post/902a9c35-21a6-4e74-9d59-745cdd5e8a00/image.png"
            alt="VIRNECT Remote"
          />
        </i>
        <p>VIRNECT Twin</p>
        <h2>{{ $t("productsText.twinBanner.title") }}</h2>
        <span class="subExplanation">
          {{ $t("productsText.twinBanner.contents") }}
        </span>
        <span>
          <button @click="more()">
            <a>
              <p>{{ $t("productsText.subButton.know") }}</p>
              <p>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/ede40cab-2b1a-47ff-a338-ad93d68b93f4/image.png"
                  alt=""
                />
              </p>
            </a>
          </button>
          <button>
            <a href="/support/inquiry" target="blank">
              {{ $t("productsText.subButton.free") }}
            </a>
          </button>
        </span>
      </span>
      <div class="video_cont">
        <img
          src="../../../assets/images/common/mov-bg-default@2x.png"
          alt="배경"
        />
        <video autoplay muted style="object-fit: cover" playsinline>
          <source
            src="https://player.vimeo.com/external/427961630.hd.mp4?s=eec1985e7a7433cb42d2ae0127ba956bc8ae024a&profile_id=175"
          />
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    more() {
      if (process.client)
        document
          .querySelector("#twinId")
          .scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>

.SubProductsBannerTwin {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 875px;
  background-image: url("https://velog.velcdn.com/images/kyj0206/post/6a090db9-cd30-42a5-95f5-1dc04c915ab1/image.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .SubProductsWrap {
    justify-content: center;
    align-items: center;
    width: 100%;
    p,
    a,
    span,
    div,
    button {
      text-decoration: none;
    }
    display: flex;
    padding: 0 30px;
    gap: 74px;
    > span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 560px;
      min-width: 560px;
      width: 50%;
      i {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        img {
          max-width: 110px;
        }
      }
      > p {
        font-size: 20px;
        font-weight: bold;
        letter-spacing: -0.25px;
        margin-bottom: 40px;
        text-align: center;
        color: #bfdcff;
      }
      h2 {
        font-size: 40px;
        font-weight: bold;
        letter-spacing: -0.6px;
        text-align: center;
        color: #fff;
        margin-bottom: 24px;
        line-height: 1.5;
        p {
          display: inline;
        }
      }
      span {
        font-size: 20px;
        line-height: 1.58;
        letter-spacing: -0.3px;
        color: #fff;
        &.subExplanation {
          display: block;
          margin-bottom: 40px;
          text-align: center;
          p {
            font-size: 24px;
            line-height: 1.58;
            letter-spacing: -0.3px;
            color: #fff;
            display: block;
          }
        }
        &:last-child {
          display: flex;
          justify-content: center;
          gap: 10px;
          align-items: center;
          button {
            cursor: pointer;
            &:first-child {
              border: solid 1px #fff;
              background: #fff;
              a {
                white-space: nowrap;
                display: flex;
                gap: 20px;
                padding: 10px 16px;
                color: #121212;
                p {
                  font-size: 16px;
                  font-weight: bold;
                  &:first-child {
                    line-height: initial;
                  }
                  &:last-child {
                    display: flex;
                    align-items: flex-start;
                    img {
                      display: flex;
                      align-items: center;
                      max-width: 15px;
                      min-width: 15px;
                      max-height: 15px;
                      width: 100%;
                      height: 100%;
                    }
                  }
                }
              }
            }
            &:last-child {
              border: solid 1px #bfdcff;
              background-color: #bfdcff;
              a {
                white-space: nowrap;
                display: block;
                font-size: 16px;
                font-weight: bold;
                padding: 10px 42px;
                color: #121212;

                p {
                  font-size: 16px;
                  font-weight: bold;
                }
              }
            }
          }
        }
      }
    }
    .video_cont {
      position: relative;
      max-width: 951px;
      width: 100%;
      min-height: 442px;
      border: solid 2px #bfdcff;
      img {
        position: absolute;
        top: 0;
        left: 0;
        max-width: 951px;
        width: 100%;
        height: 100%;
      }
      video {
        position: absolute;
        top: 0;
        left: 0;
        max-width: 951px;
        width: 100%;
        height: 100%;
      }
    }
  }
}

@media screen and (max-width: 1700px) {
  .SubProductsBannerTrack .SubProductsWrap .video,
  .SubProductsBannerTwin .SubProductsWrap video,
  .SubProductsBannerView .SubProductsWrap video,
  .SubProductsBannerMake .SubProductsWrap video,
  .SubProductsBannerRemote .SubProductsWrap video {
    width: 50%;
  }
}

@media screen and (max-width: 1360px) {
  .SubProductsBannerTrack .SubProductsWrap > span:first-child,
  .SubProductsBannerTwin .SubProductsWrap > span,
  .SubProductsBannerView .SubProductsWrap > span,
  .SubProductsBannerMake .SubProductsWrap > span,
  .SubProductsBannerRemote .SubProductsWrap > span {
    max-width: 338px;
  }
  .SubProductsBannerTrack .SubProductsWrap > span > p,
  .SubProductsBannerTwin .SubProductsWrap > span > p,
  .SubProductsBannerView .SubProductsWrap > span > p,
  .SubProductsBannerMake .SubProductsWrap > span > p,
  .SubProductsBannerRemote .SubProductsWrap > span > p {
    font-size: 16px;
    margin-bottom: 50px;
  }
  .SubProductsBannerTrack .SubProductsWrap > span h2,
  .SubProductsBannerTwin .SubProductsWrap > span h2,
  .SubProductsBannerView .SubProductsWrap > span h2,
  .SubProductsBannerMake .SubProductsWrap > span h2,
  .SubProductsBannerRemote .SubProductsWrap > span h2 {
    font-size: 32px;
    margin-bottom: 18px;
    line-height: 1.31;
  }
  .SubProductsBannerTrack .SubProductsWrap > span h2 p,
  .SubProductsBannerTwin .SubProductsWrap > span h2 p,
  .SubProductsBannerView .SubProductsWrap > span h2 p,
  .SubProductsBannerMake .SubProductsWrap > span h2 p,
  .SubProductsBannerRemote .SubProductsWrap > span h2 p {
    display: block;
  }
  .SubProductsBannerTrack .SubProductsWrap > span span.subExplanation,
  .SubProductsBannerTrack .SubProductsWrap > span span.subExplanation p,
  .SubProductsBannerTwin .SubProductsWrap > span span.subExplanation,
  .SubProductsBannerTwin .SubProductsWrap > span span.subExplanation p,
  .SubProductsBannerView .SubProductsWrap > span span.subExplanation,
  .SubProductsBannerView .SubProductsWrap > span span.subExplanation p,
  .SubProductsBannerMake .SubProductsWrap > span span.subExplanation,
  .SubProductsBannerMake .SubProductsWrap > span span.subExplanation p,
  .SubProductsBannerRemote .SubProductsWrap > span span.subExplanation,
  .SubProductsBannerRemote .SubProductsWrap > span span.subExplanation p {
    font-size: 16px;
    display: inline;
  }
  .SubProductsBannerTrack .SubProductsWrap > span span.subExplanation,
  .SubProductsBannerTwin .SubProductsWrap > span span.subExplanation,
  .SubProductsBannerView .SubProductsWrap > span span.subExplanation,
  .SubProductsBannerMake .SubProductsWrap > span span.subExplanation,
  .SubProductsBannerRemote .SubProductsWrap > span span.subExplanation {
    margin-bottom: 44px;
  }
  .SubProductsBannerTrack
    .SubProductsWrap
    > span
    span:last-child
    button:first-child
    a
    p,
  .SubProductsBannerTwin
    .SubProductsWrap
    > span
    span:last-child
    button:first-child
    a
    p,
  .SubProductsBannerView
    .SubProductsWrap
    > span
    span:last-child
    button:first-child
    a
    p,
  .SubProductsBannerMake
    .SubProductsWrap
    > span
    span:last-child
    button:first-child
    a
    p,
  .SubProductsBannerRemote
    .SubProductsWrap
    > span
    span:last-child
    button:first-child
    a
    p {
    font-size: 16px;
  }
  .SubProductsBannerTrack .SubProductsWrap,
  .SubProductsBannerTwin .SubProductsWrap,
  .SubProductsBannerView .SubProductsWrap,
  .SubProductsBannerMake .SubProductsWrap,
  .SubProductsBannerRemote .SubProductsWrap {
    gap: 63.9px;
  }

  .SubProductsBannerTwin .SubProductsWrap video,
  .SubProductsBannerView .SubProductsWrap video,
  .SubProductsBannerMake .SubProductsWrap video,
  .SubProductsBannerRemote .SubProductsWrap video {
    width: 50%;
  }
  .SubProductsBannerTrack .SubProductsWrap .video {
    width: 100%;
  }
}

@media screen and (max-width: 1260px) {
  .SubProductsBannerTrack .SubProductsWrap > span:first-child,
  .SubProductsBannerTwin .SubProductsWrap > span,
  .SubProductsBannerView .SubProductsWrap > span,
  .SubProductsBannerMake .SubProductsWrap > span,
  .SubProductsBannerRemote .SubProductsWrap > span {
    min-width: 338px;
  }
  .SubProductsBannerTrack .SubProductsWrap > span span.subExplanation p,
  .SubProductsBannerTwin .SubProductsWrap > span span.subExplanation p,
  .SubProductsBannerView .SubProductsWrap > span span.subExplanation p,
  .SubProductsBannerMake .SubProductsWrap > span span.subExplanation p,
  .SubProductsBannerRemote .SubProductsWrap > span span.subExplanation p {
    display: inline;
  }
  .SubProductsBannerMake .SubProductsWrap video,
  .SubProductsBannerTwin .SubProductsWrap video,
  .SubProductsBannerView .SubProductsWrap video,
  .SubProductsBannerMake .SubProductsWrap video,
  .SubProductsBannerRemote .SubProductsWrap video {
    width: 64%;
  }
}

@media screen and (max-width: 1180px) {
  .SubProductsBannerTrack .SubProductsWrap,
  .SubProductsBannerTwin .SubProductsWrap,
  .SubProductsBannerView .SubProductsWrap,
  .SubProductsBannerMake .SubProductsWrap,
  .SubProductsBannerRemote .SubProductsWrap {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 112px 24px 120px;
  }

  .SubProductsBannerTrack .SubProductsWrap > span,
  .SubProductsBannerTrack .SubProductsWrap .video,
  .SubProductsBannerTwin .SubProductsWrap > span,
  .SubProductsBannerTwin .SubProductsWrap video,
  .SubProductsBannerView .SubProductsWrap > span,
  .SubProductsBannerView .SubProductsWrap video,
  .SubProductsBannerMake .SubProductsWrap > span,
  .SubProductsBannerMake .SubProductsWrap video,
  .SubProductsBannerRemote .SubProductsWrap > span,
  .SubProductsBannerRemote .SubProductsWrap video {
    width: 100%;
  }
}
.subExplanation {
  span {
    padding-top: 3px;
  }
}
</style>
