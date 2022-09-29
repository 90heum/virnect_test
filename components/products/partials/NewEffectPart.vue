<template>
  <section class="moduleGuide2RemoteBack">
    <div class="modileWrap">
      <div class="guide2Tit">
        <p>{{ $t(`effectList.effectTit.category`) }}</p>
        <h2 v-html="$t(`effectList.effectTit.title`)"></h2>
        <span v-html="$t(`effectList.effectTit.contents`)"></span>
      </div>
      <div class="guide2Menu">
        <ul>
          <li>
            <p>{{ $t(`effectList.Speedy.title`) }}</p>
            <span v-html="$t(`effectList.Speedy.contents`)"> </span>
          </li>
          <li>
            <p>{{ $t(`effectList.Reliable.title`) }}</p>
            <span v-html="$t(`effectList.Reliable.contents`)"> </span>
          </li>
          <li>
            <p>{{ $t(`effectList.Immediately.title`) }}</p>
            <span v-html="$t(`effectList.Immediately.contents`)"> </span>
          </li>
          <li>
            <p>{{ $t(`effectList.Security.title`) }}</p>
            <span v-html="$t(`effectList.Security.contents`)"> </span>
          </li>
        </ul>
      </div>
    </div>
    <!-- :class="`${listSizeTab === idx ? 'effectActive' : ''}`" 
            @mouseenter="sizeUp(idx)"
        -->
    <!-- <div class="moduleVoiceRemote"> -->
    <!-- <div class="VoiceInner"> -->
    <!-- <div class="voiceSlider"> -->

    <!-- <div class="preNextButton">
                        <span class="pre">
                            <img src="https://velog.velcdn.com/images/kyj0206/post/da614e72-c0b7-4100-b9ec-e347da4ef52f/image.png" alt="PRE">
                        </span>
                        <span class="next">
                            <img src="https://velog.velcdn.com/images/kyj0206/post/7e1793ec-273a-4cb7-9c7f-6312de2f0e1d/image.png" alt="NEXT">
                        </span>
                    </div> -->
    <!-- </div> -->
    <!-- </div> -->
    <!-- </div> -->
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      listSizeTab: 0,
      // options: {
      //     slidesPerView: "1",
      //     loop: true,
      //     spaceBetween: 13,
      //     centeredSlides: true,
      //     pagination: {
      //         // el: ".swiper-pagination"
      //     },
      //     navigation: {
      //     nextEl: ".swiper-button-prev",
      //     prevEl: ".swiper-button-next",
      //     },
      // }
    };
  },
  props: {
    title: Object,
    effectList: Array,
    moduleData: Array,
  },
  methods: {
    sizeUp(e) {
      console.log(e, this.listSizeTab);
      this.listSizeTab = e;
    },
    onSwiperSlideChangeTransitionStart(e) {
      console.log("redied", e);
    },
    onSwiperRedied(swiper) {
      console.log("transtion", swiper);
    },
    onSwiperClickSlide(idx, realIdx) {
      console.log("click", idx, realIdx);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/pages/moduleVoiceRemote.scss";
* {
  word-break: keep-all;
}

*,
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
b,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}

u {
  text-underline-position: under;
}

/* a-style */
  a {
  color: #fff;
  line-height: initial;
  text-decoration: none;
}

a {
  text-decoration: none;
  outline: none;
}
a:hover,
a:active {
  text-decoration: none;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

strong {
  font-weight: bold;
}

pre {
  margin-bottom: 2%;
  white-space: pre-wrap;
  font-size: 14px !important;
  color: #666;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  line-height: 1.7;
}

sup {
  vertical-align: super;
  font-size: smaller;
}
sub {
  vertical-align: sub;
  font-size: smaller;
}

input[type="text"]::-ms-clear {
  display: none;
}
*,
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
b,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}

/* a-style */
  a {
  line-height: initial;
  text-decoration: none;
}

a {
  text-decoration: none;
  outline: none;
}
a:hover,
a:active {
  text-decoration: none;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

strong {
  font-weight: bold;
}

pre {
  margin-bottom: 2%;
  white-space: pre-wrap;
  font-size: 14px !important;
  color: #666;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  line-height: 1.7;
}

sup {
  vertical-align: super;
  font-size: smaller;
}
sub {
  vertical-align: sub;
  font-size: smaller;
}

input[type="text"]::-ms-clear {
  display: none;
}

.moduleGuide2RemoteBack {
  background-image: url("https://velog.velcdn.com/images/kyj0206/post/9a8f43fe-4dbd-4704-aa15-03b0ffa6317b/image.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  z-index: 998;
  width: 100%;
  .modileWrap {
    margin-top: 140px;
    width: 100%;
    /deep/ .guide2Tit {
      padding: 0 30px;
      display: flex;
      align-items: center;
      max-width: 1200px;
      height: 590px;
      width: 100%;
      text-align: center;
      justify-content: center;
      flex-direction: column;
      margin: 0 auto;
      background: transparent;
      > p {
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.23px;
        text-align: center;
        color: #78bbfd;
        margin-bottom: 10px;
      }
      h2 {
        font-size: 44px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.36;
        letter-spacing: -0.55px;
        text-align: center;
        color: #fff;
        margin-bottom: 40px;
        p {
          font-size: 44px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.36;
          letter-spacing: -0.55px;
          text-align: center;
          color: #fff;
        }
      }
      span {
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.75;
        letter-spacing: normal;
        text-align: center;
        color: #e6e8eb;
        p {
          font-size: 16px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.75;
          letter-spacing: normal;
          text-align: center;
          color: #e6e8eb;
        }
      }
    }
    .guide2Menu {
      background: url("https://velog.velcdn.com/images/kyj0206/post/b67ee97b-1bca-4fe4-828f-65522048fba5/image.png");
      background-repeat: no-repeat;
      background-position: top;
      background-size: cover;
      height: 420px;
      ul {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        &::after {
          position: absolute;
          content: "";
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.3);
        }
        li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 25%;
          height: 100%;
          text-align: center;
          // border-right: 1px solid #9a9da3;
          position: relative;
          z-index: 9999;
          padding: 0 20px 0 20px;
          // background-color: rgba(9,16,27,.6);
          // transition: width 0.3s;
          &:last-child {
            border: none;
          }
          > p {
            font-size: 36px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1;
            letter-spacing: -0.45px;
            text-align: center;
            color: #bfdcff;
            margin-bottom: 40px;
          }
          span {
            font-size: 18px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.67;
            letter-spacing: normal;
            text-align: center;
            color: #e6e8eb;
            // opacity: 0;
            p {
              font-size: 18px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.67;
              letter-spacing: normal;
              text-align: center;
              color: #e6e8eb;
            }
          }
        }
        li.effectActive {
          width: 41%;
          background: rgba(9, 16, 27, 0);
          transition: width 0.3s ease-out, background-color 0.3s ease-out;
          span {
            opacity: 1;
          }
        }
      }
    }
  }
}
@media screen and(max-width: 1024px) {
  .moduleGuide2RemoteBack .modileWrap .guide2Tit {
    height: 510px;
  }

  .moduleGuide2RemoteBack .modileWrap .guide2Menu {
    height: 306px;
  }

  .moduleGuide2RemoteBack .modileWrap .guide2Menu ul li > p {
    font-size: 28px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: -0.35px;
    text-align: center;
    color: #bfdcff;
    margin-bottom: 30px;
  }

  .moduleGuide2RemoteBack .modileWrap .guide2Menu ul li span p,
  .moduleGuide2RemoteBack .modileWrap .guide2Menu ul li span {
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: normal;
    text-align: center;
    color: #e6e8eb;
  }
}

@media screen and(max-width: 790px) {
  .moduleGuide2RemoteBack .modileWrap .guide2Menu ul {
    flex-wrap: wrap;
  }
  .moduleGuide2RemoteBack .modileWrap .guide2Menu ul li {
    width: 50% !important;
    height: 225px;
  }
  .moduleGuide2RemoteBack .modileWrap .guide2Menu {
    height: 450px;
  }

  .moduleGuide2RemoteBack .modileWrap .guide2Menu ul li:nth-child(2) {
    border: none;
    border-bottom: 1px solid #9a9da3;
  }

  .moduleGuide2RemoteBack .modileWrap .guide2Menu ul li:first-child {
    border-bottom: 1px solid #9a9da3;
  }

  .moduleGuide2RemoteBack .modileWrap .guide2Tit h2 p {
    font-size: 36px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: -0.45px;
    text-align: center;
    color: #fff;
  }

  .moduleGuide2RemoteBack .modileWrap .guide2Tit h2 {
    font-size: 36px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: -0.45px;
    text-align: center;
    color: #fff;
    margin-bottom: 32px;
  }

  .moduleGuide2RemoteBack .modileWrap .guide2Tit span {
    /* padding: 0 100px; */
  }

  .moduleGuide2RemoteBack .modileWrap .guide2Tit span p,
  .moduleGuide2RemoteBack .modileWrap .guide2Tit span {
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.86;
    letter-spacing: normal;
    text-align: center;
    color: #e6e8eb;
  }

  .moduleGuide2RemoteBack .modileWrap .guide2Tit > p {
    margin-bottom: 15px;
  }

  .moduleGuide2RemoteBack .modileWrap .guide2Tit {
    padding: 0 140px;
  }
}

@media screen and(max-width: 675px) {
  .moduleGuide2RemoteBack .modileWrap .guide2Tit h2 > p,
  .moduleGuide2RemoteBack .modileWrap .guide2Tit h2 {
    font-size: 28px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: -0.35px;
    text-align: center;
    color: #fff;
  }

  .moduleGuide2RemoteBack .modileWrap .guide2Tit {
    padding: 0 52px;
  }

  .modileWrap {
    /* min-width: 600px; */
    min-height: 960px;
    width: 100vw;
    /* height: 100vh; */
    margin-top: 100px;
  }
}
</style>