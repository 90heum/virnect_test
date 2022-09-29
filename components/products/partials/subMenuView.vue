<template>
  <div class="subMenuReal" v-click-outside="onClickOutside">
    <div class="SubMenu">
      <div class="SubMenuWrap">
        <span class="MenuSub" @click="handleMenuToggle()">
          <ul @click="handleMenuToggle()">
            <p>
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/a399d00f-30c2-4645-bf16-2a5641ac082a/image.png"
                alt="메뉴토글온아이콘"
              />
              <img
                src="https://velog.velcdn.com/images/kyj0206/post/4783b946-5539-42b0-ad96-c0b9d63a8590/image.png"
                alt="메뉴토글아이콘"
                @click="handleMenuToggle()"
              />
            </p>
            <li
              class="MenuSubActive"
              v-if="isToggleNum === 1 || isToggleOn"
              @click="handleMenuToggle(1)"
            >
              <nuxt-link :to="'/products/view'">
                <p>
                  <img
                    src="https://5878418.fs1.hubspotusercontent-na1.net/hubfs/5878418/VIRNECT%20image/VIRNECT%20BI/ViewBI1.png"
                    alt="View"
                  />
                </p>
              </nuxt-link>
            </li>
            <li
              v-if="isToggleNum === 3 || isToggleOn"
                @click="handleMenuToggle(3)"
            >
                <nuxt-link :to="'/products/remote'">
                  <p>
                    <img
                        src="https://5878418.fs1.hubspotusercontent-na1.net/hubfs/5878418/VIRNECT%20image/VIRNECT%20BI/RemoteBI.png"
                      alt="Remote"
                    />
                  </p>
                  <p>
                    <img src="" alt="" />
                  </p>
                </nuxt-link>
            </li>
            <li
              v-if="isToggleNum === 2 || isToggleOn"
              @click="handleMenuToggle(2)"
            >
              <nuxt-link :to="'/products/make'">
                <p>
                  <img
                    src="https://5878418.fs1.hubspotusercontent-na1.net/hubfs/5878418/VIRNECT%20image/VIRNECT%20BI/MakeBI1.png"
                    alt="Make"
                  />
                </p>
                <p>
                  <img src="" alt="" />
                </p>
              </nuxt-link>
            </li>
            <li
              v-if="isToggleNum === 4 || isToggleOn"
              @click="handleMenuToggle(4)"
            >
              <nuxt-link :to="'/products/twin'">
                <p>
                  <img
                    src="https://5878418.fs1.hubspotusercontent-na1.net/hubfs/5878418/VIRNECT%20image/VIRNECT%20BI/TwinBI1.png"
                    alt="Twin"
                  />
                </p>
                <p>
                  <img src="" alt="" />
                </p>
              </nuxt-link>
            </li>
            <li
              v-if="isToggleNum === 5 || isToggleOn"
              @click="handleMenuToggle(5)"
            >
              <nuxt-link :to="'/products/track'">
                <p>
                  <img
                    src="https://5878418.fs1.hubspotusercontent-na1.net/hubfs/5878418/VIRNECT%20image/VIRNECT%20BI/TrackBI1.png"
                    alt="Track"
                  />
                </p>
                <p>
                  <img src="" alt="" />
                </p>
              </nuxt-link>
            </li>
            <li
              v-if="isToggleNum === 6 || isToggleOn"
              @click="handleMenuToggle(6)"
            >
              <nuxt-link :to="'/products/ms'">
                <p>
                  <img
                    src="https://5878418.fs1.hubspotusercontent-na1.net/hubfs/5878418/sungwoo/icon-product-xrdevice.png"
                    alt="XR Devices"
                  />
                </p>
                <p>XR Devices</p>
                <p>
                  <img src="" alt="" />
                </p>
              </nuxt-link>
            </li>
          </ul>
        </span>

        <sub-menu-nav />
      </div>
    </div>
  </div>
</template>

<script>
import SubMenuNav from "~/components/products/partials/navi.vue";
import vClickOutside from 'v-click-outside'
export default {
  data() {
    return {
      isToggleNum: 1,
      isToggleOn: false,
    };
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  components: {
    SubMenuNav,
  },
  data() {
    return {
      isToggleNum: 1,
      isToggleOn: false,
      navActive: 1,
    };
  },
  methods: {
 handleMenuToggle(e) {
      this.isToggleOn = !this.isToggleOn;
      if (e) this.isToggleNum = e;
    },
      onClickOutside (event) {
    this.isToggleOn = false
  },
  },
};
</script>

<style lang="scss" scoped>
.subMenuReal {
  margin-top: 80px;
  position: relative;
}
.SubMenu {
  position: fixed;
  z-index: 999;
  li,
  a {
    text-decoration: none;
    list-style: none;
  }
  background-color: #f7f8f9;
  box-shadow: 4px 0 10px 0 rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 62px;
  .SubMenuWrap {
    position: relative;
    display: flex;
    justify-content: space-between;
    max-width: 1580px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    .MenuSub {
      ul {
        background-color: #fff;
        position: absolute;
        padding-left: 0px;
        height: 62px;
        > p {
          cursor: pointer;
          img {
            max-width: 19px;
            width: 100%;
            position: absolute;
            right: 15px;
            top: 20px;
          }
        }
        li {
          height: 62px;
          padding-right: 19px;
          background-color: #fff;
          border: 1px solid transparent;
          border-left: solid 1px #e6e8eb;
          border-right: solid 1px #e6e8eb;
          border-bottom: 1px solid #c5c8cf;
          min-width: 202px;
          &:hover {
            // border: solid 1px #0a51b7;
            background-color: #fff;
          }
          &.MenuSubActive {
            background-color: #fff;
          }
          &:nth-child(n + 3) {
            // display: none;
            box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.261);
          }
          &:first-child,
          &:last-child {
            border-bottom: none;
          }
          a {
            height: 59px;
            display: flex;
            align-items: center;
            p {
              &:first-child {
                img {
                  display: flex;
                  // 원영 수정
                  // max-width: 58px;
                  width: 100%;
                  padding: 13px 10px 13px 23px;
                  max-height: 50px;
                }
              }
              &:nth-child(2) {
                margin-right: 36px;
                font-size: 16px;
                font-weight: bold;
                line-height: initial;
                letter-spacing: normal;
                color: #092e6e;
              }
            }
          }
        }
      }
    }
    .MenuSubSub {
      ul {
        height: 100%;
        display: flex;
        align-items: center;
        li {
          border-right: 1px solid #c5c8cf;
          &:last-child {
            border-right: none;
          }
          a {
            font-size: 14px;
            font-weight: bold;
            line-height: 1;
            letter-spacing: -0.26px;
            color: #616161;
            margin: 0 20px;
            &:hover,
            &.SubSubActive {
              color: #121212;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 720px) {
  .SubMenu .SubMenuWrap .MenuSubSub ul {
    display: none;
  }

  .SubMenu .SubMenuWrap .MenuSub ul {
    width: 100%;
  }
}
</style>