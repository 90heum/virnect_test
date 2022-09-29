<template>
  <div class="useCase">
    <div class="useCaseWrap">
      <div class="useCaseTit">
        <p>Value</p>
        <h2>{{$t(`landing.solutionText.solutionTitle.title`)}}</h2>
        <span>
          <p v-html="$t(`landing.solutionText.solutionTitle.contents`)">
          </p>
        </span>
      </div>
      <div class="useCaseCont">
        <!-- 인프라/지원 -->
        <div class="energyWrap">
          <span class="energy">
            <span>
              <p>{{$t(`landing.solutionText.solutionBenefitLists[0].title`)}}</p>
              <i>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/794db5e1-e499-4536-bf8e-26e2332b3c26/image.png"
                  alt="usecase아이콘"
                />
              </i>
            </span>
            <span>
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/820aa8e2-ce41-4320-959e-f7b8d9e232b0/image.png"
                alt="에너지/자원 이미지"
              />
            </span>
          </span>
          <!-- 인프라/지원 호버 -->
          <span class="energyHover">
            <nuxt-link to="/value/infra_energy">
              <span>
                <p>{{$t(`landing.solutionText.solutionBenefitLists[0].title`)}}</p>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/dd0c8817-ecab-4fd9-95ef-8bd1e1764746/image.png"
                    alt="usecase호버아이콘"
                  />
                </i>
              </span>
              <span>
                <p>
                  {{$t(`landing.solutionText.solutionBenefitLists[0].contents`)}}
                </p>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/820aa8e2-ce41-4320-959e-f7b8d9e232b0/image.png"
                  alt="에너지/자원 이미지"
                />
              </span>
            </nuxt-link>
          </span>
        </div>

        <!-- 정유/화학/배터리 -->
        <div class="oilWrap">
          <span class="oil">
            <span>
              <p>{{$t(`landing.solutionText.solutionBenefitLists[1].title`)}}</p>
              <i>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/794db5e1-e499-4536-bf8e-26e2332b3c26/image.png"
                  alt="usecase아이콘"
                />
              </i>
            </span>
            <span>
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/01f0cb48-24c0-4b7f-859c-09b55be3daeb/image.png"
                alt="정유/화학/배터리 이미지"
              />
            </span>
          </span>
          <!-- 정유/화학/배터리 호버 -->
          <span class="oilHover">
            <nuxt-link to="/value/manufacture_construction">
              <span>
                <p>{{$t(`landing.solutionText.solutionBenefitLists[1].title`)}}</p>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/dd0c8817-ecab-4fd9-95ef-8bd1e1764746/image.png"
                    alt="usecase호버아이콘"
                  />
                </i>
              </span>
              <span>
                <p>
                  {{$t(`landing.solutionText.solutionBenefitLists[1].contents`)}}
                </p>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/01f0cb48-24c0-4b7f-859c-09b55be3daeb/image.png"
                  alt="정유/화학/배터리 이미지"
                />
              </span>
            </nuxt-link>
          </span>
        </div>

        <!-- 공공/교육 -->
        <div class="partsWrap">
          <span class="parts">
            <span>
              <p>{{$t(`landing.solutionText.solutionBenefitLists[2].title`)}}</p>
              <i>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/794db5e1-e499-4536-bf8e-26e2332b3c26/image.png"
                  alt="usecase아이콘"
                />
              </i>
            </span>
            <span>
              <img
                src="~/assets/images/common/value3.png"
                alt="공공/교육 이미지"
              />
            </span>
          </span>
          <!-- 공공/교육 호버 -->
          <span class="partsHover">
            <nuxt-link to="/value/public_education">
              <span>
                <p>{{$t(`landing.solutionText.solutionBenefitLists[2].title`)}}</p>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/dd0c8817-ecab-4fd9-95ef-8bd1e1764746/image.png"
                    alt="usecase호버아이콘"
                  />
                </i>
              </span>
              <span>
                <p>
                  {{$t(`landing.solutionText.solutionBenefitLists[2].contents`)}}
                </p>
                <img
                  src="~/assets/images/common/value3.png"
                  alt="공공/교육 이미지"
                />
              </span>
            </nuxt-link>
          </span>
        </div>

        <!-- 엔터테인먼트 -->
        <div class="airLineWrap">
          <span class="airLine">
            <span>
              <p>{{$t(`landing.solutionText.solutionBenefitLists[3].title`)}}</p>
              <i>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/794db5e1-e499-4536-bf8e-26e2332b3c26/image.png"
                  alt="usecase아이콘"
                />
              </i>
            </span>
            <span>
              <img
                src="~/assets/images/common/value4.png"
                alt="엔터테인먼트 이미지"
              />
            </span>
          </span>
          <!-- 엔터테인먼트 호버 -->
          <span class="airLineHover">
            <nuxt-link to="/value/culture_exhibition">
              <span>
                <p>{{$t(`landing.solutionText.solutionBenefitLists[3].title`)}}</p>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/dd0c8817-ecab-4fd9-95ef-8bd1e1764746/image.png"
                    alt="usecase호버아이콘"
                  />
                </i>
              </span>
              <span>
                <p>
                  {{$t(`landing.solutionText.solutionBenefitLists[3].contents`)}}
                </p>
                <img
                  src="~/assets/images/common/value4.png"
                  alt="엔터테인먼트 이미지"
                />
              </span>
            </nuxt-link>
          </span>
        </div>

        <!-- 기타 -->
        <div class="EPCWrap">
          <span class="epc">
            <span>
              <p>{{$t(`landing.solutionText.solutionBenefitLists[4].title`)}}</p>
              <i>
                <img
                  src="https://velog.velcdn.com/images/kyj0206/post/794db5e1-e499-4536-bf8e-26e2332b3c26/image.png"
                  alt="usecase아이콘"
                />
              </i>
            </span>
            <span>
              <img src="~/assets/images/common/value5.png" alt="기타 이미지" />
            </span>
          </span>
          <!-- health_care 호버 -->
          <span class="epcHover">
            <nuxt-link to="/value/health_care">
              <span>
                <p>{{$t(`landing.solutionText.solutionBenefitLists[4].title`)}}</p>
                <i>
                  <img
                    src="https://velog.velcdn.com/images/kyj0206/post/dd0c8817-ecab-4fd9-95ef-8bd1e1764746/image.png"
                    alt="usecase호버아이콘"
                  />
                </i>
              </span>
              <span>
                <p>
                  {{$t(`landing.solutionText.solutionBenefitLists[4].contents`)}}
                </p>
                <img
                  src="~/assets/images/common/value5.png"
                  alt="기타 이미지"
                />
              </span>
            </nuxt-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

.<style lang="scss" scoped>
.useCase {
  width: 100%;

  .useCaseWrap {
    max-width: 1260px;
    width: 100%;
    display: flex;
    padding: 149px 30px 228px;
    flex-direction: column;
    margin: 0 auto;
    .useCaseTit {
      text-align: center;

      > p {
        font-size: 18px;
        font-weight: bold;
        letter-spacing: -0.23px;
        color: #0a51b7;
        margin-bottom: 20px;
      }

      h2 {
        font-size: 44px;
        font-weight: bold;
        letter-spacing: -0.55px;
        color: #121212;
        margin-bottom: 42px;
      }

      span {
        display: block;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: -0.2px;
        color: #616161;
        line-height: 1.75;
        margin-bottom: 94px;
      }
    }

    .useCaseCont {
      display: flex;
      gap: 24px 24px;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      height: auto;
      transition: all 0.4s;
      a {
        text-decoration: none;
      }
      .energyWrap {
        .energyHover {
          transition: all 0.4s;
          background-color: #022158;
          display: none;
          a {
            height: 100%;
            display: block;
            color: #fff;
            span {
              &:last-child {
                width: 100%;
                height: 180px;
                opacity: 0.9;
                position: relative;
                &::after {
                  content: "";
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  opacity: 0.85;
                  background-color: #092e6e;
                }

                p {
                  position: absolute;
                  padding: 51px 40px;
                  z-index: 9999;
                  font-size: 14px;
                  font-weight: bold;
                  line-height: 1.86;
                  letter-spacing: -0.18px;
                  color: #f7f8f9;
                }
              }
            }
          }
        }
      }

      .oilWrap {
        .oilHover {
          background-color: #022158;
          display: none;
          a {
            height: 100%;
            display: block;
            color: #fff;

            span {
              &:last-child {
                width: 100%;
                height: 180px;
                opacity: 0.9;
                position: relative;
                &::after {
                  content: "";
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  opacity: 0.85;
                  background-color: #092e6e;
                }

                p {
                  position: absolute;
                  padding: 51px 40px;
                  z-index: 9999;
                  font-size: 14px;
                  font-weight: bold;
                  line-height: 1.86;
                  letter-spacing: -0.18px;
                  color: #f7f8f9;
                }
              }
            }
          }
        }
      }

      .partsWrap {
        .partsHover {
          background-color: #022158;
          display: none;
          a {
            height: 100%;
            display: block;
            color: #fff;

            span {
              &:last-child {
                width: 100%;
                height: 180px;
                opacity: 0.9;
                position: relative;
                &::after {
                  content: "";
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  opacity: 0.85;
                  background-color: #092e6e;
                }

                p {
                  position: absolute;
                  padding: 51px 40px;
                  z-index: 9999;
                  font-size: 14px;
                  font-weight: bold;
                  line-height: 1.86;
                  letter-spacing: -0.18px;
                  color: #f7f8f9;
                }
              }
            }
          }
        }
      }

      .airLineWrap {
        .airLineHover {
          background-color: #022158;
          display: none;
          a {
            height: 100%;
            display: block;
            color: #fff;

            span {
              &:last-child {
                width: 100%;
                height: 180px;
                opacity: 0.9;
                position: relative;
                &::after {
                  content: "";
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  opacity: 0.85;
                  background-color: #092e6e;
                }

                p {
                  position: absolute;
                  padding: 51px 40px;
                  z-index: 9999;
                  font-size: 14px;
                  font-weight: bold;
                  line-height: 1.86;
                  letter-spacing: -0.18px;
                  color: #f7f8f9;
                }
              }
            }
          }
        }
      }

      .EPCWrap {
        .epcHover {
          background-color: #022158;
          display: none;
          a {
            height: 100%;
            display: block;
            color: #fff;

            span {
              &:last-child {
                width: 100%;
                height: 180px;
                opacity: 0.9;
                position: relative;
                &::after {
                  content: "";
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  opacity: 0.85;
                  background-color: #092e6e;
                }

                p {
                  position: absolute;
                  padding: 51px 40px;
                  z-index: 9999;
                  font-size: 14px;
                  font-weight: bold;
                  line-height: 1.86;
                  letter-spacing: -0.18px;
                  color: #f7f8f9;
                }
              }
            }
          }
        }
      }

      > div {
        cursor: pointer;
        max-width: 384px;
        width: 100%;
        border: 1px solid #c5c8cf;
        background-color: #f7f8f9;
        &:hover {
          .energy,
          .oil,
          .parts,
          .airLine,
          .epc {
            display: none;
          }

          .energyHover,
          .oilHover,
          .partsHover,
          .airLineHover,
          .epcHover {
            display: block;
          }
        }
        span {
          span {
            &:first-child {
              display: block;
              display: flex;
              width: 100%;
              padding: 30px 40px;
              p {
                width: 100%;
                font-size: 22px;
                height: 25px;
                line-height: 30px;
              }

              i {
                display: flex;
                align-items: center;

                img {
                  max-height: 19px;
                  height: 100%;
                }
              }
            }

            &:last-child {
              display: block;
              width: 100%;
              height: 180px;

              img {
                max-width: 384px;
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and(max-width:1024px) {
  .useCase .useCaseWrap {
    padding: 120px 30px 150px;
  }

  .useCase .useCaseWrap .useCaseCont > div {
    max-width: 470px;
    width: calc(50% - 12px);
  }

  .useCase .useCaseWrap .useCaseCont > div span span:last-child img {
    max-width: none;
  }

  .useCase .useCaseWrap .useCaseCont {
    justify-content: flex-start;
  }
  .useCase .useCaseWrap .useCaseCont > div:last-child::after {
    content: "";
    display: block;
    width: 100%;
  }
}

@media screen and(max-width:768px) {
  .useCase .useCaseWrap {
    padding: 120px 24px 150px;
  }

  .useCase .useCaseWrap .useCaseTit span {
    display: block;
  }

  .useCase .useCaseWrap .useCaseTit span p:nth-child(n + 2) {
    display: inline;
  }
}

@media screen and(max-width:585px) {
  .useCase .useCaseWrap {
    padding: 80px 24px 64px;
  }

  .useCase .useCaseWrap .useCaseTit span {
    margin-bottom: 50px;
  }

  .useCase .useCaseWrap .useCaseTit span p:nth-child(n + 2) {
    display: inline;
  }

  .useCase .useCaseWrap .useCaseTit h2 {
    font-size: 34px;
  }

  .useCase .useCaseWrap .useCaseCont {
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 1px;
  }

  .useCase .useCaseWrap .useCaseCont::-webkit-scrollbar {
    display: none;
  }

  .useCase .useCaseWrap .useCaseCont > div {
    min-width: 348px;
    max-height: none;
  }
}
</style>