<template>
  <div class="SubMenuUse">
    <ul class="SubMenuNav">
      <li class="subMenu">
        <nuxt-link to="/terms"> 서비스 이용약관 </nuxt-link>
      </li>
      <li class="subMenu">
        <nuxt-link to="/Policy"> 개인정보처리방침 </nuxt-link>
      </li>
      <li class="SubUseNavActive subMenu">
        <nuxt-link to="/payment"> 유료상품 이용약관 </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.SubMenuUse {
  margin-bottom: 100px;
  margin-top: 80px;

  background-color: #e6e8eb;
  .SubMenuNav {
    position: relative;
    display: flex;
    max-width: 1200px;
    width: 100%;
    height: 100%;
    justify-content: center;
    margin: 0 auto;
    li {
      a {
        text-decoration: none;
      }
      display: block;
      max-width: 241px;
      min-height: 66px;
      width: 100%;
      height: 100%;
      &:nth-child(1) {
        a {
          &::after {
            display: none;
          }
        }
      }
      a {
        display: block;
        padding: 24px 0;
        font-size: 16px;
        font-weight: bold;
        line-height: 1;
        letter-spacing: -0.2px;
        text-align: center;
        color: #9a9da3;

        &::after {
          position: absolute;
          content: "";
          display: block;
          height: 25px;
          top: 50%;
          border-right: 1px solid #c5c8cf;
          transform: translateY(-50%);
        }
      }
      &.SubUseNavActive,
      &:hover {
        background: #fff;
        a {
          color: #0a51b7;
        }
      }
    }
  }
}
</style>