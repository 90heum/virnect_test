<template>
  <div class="termsWrapper">
    <div class="termsInnerWrapper">
      <div class="termsTypeWrapper">
        <span
          v-for="(data, idx) of termsType"
          :key="idx"
          :class="`termsTypeBox ${type === data.id ? 'active' : ''}`"
          @click="pushLocation(data.id)"
        >
          {{ data.name }}
        </span>
      </div>
      <article
        v-html="
          $i18n.localeProperties.code === 'ko' ? contentBody : contentBodyEn
        "
      >
        <!-- <h1>서비스 이용 약관</h1>
            <h2>제 1장 총칙</h2>
            <h3>제 1조 (목적)</h3>
            <p>본 약관은 주식회사 버넥트(이하 '회사’라 한다.)가 제공하는 VIRNECT 제품과 관련하여, 회사와 회원간에 제품의 이용조건 및 절차, 회사와 회원간의 권리와 의무사항 및 기타 필요한 제반사항의 규정을 목적으로 합니다.</p> -->
      </article>
      <!-- <article>
            <h3>부칙</h3>
            <ul>
                <li v-for="(data, idx) of termsHistory"
                    :key="idx">본 약관은 {{$dayjs(data.noticeDate).format("YYYY년 MM월 DD일")}}부터 시행합니다.</li>
            </ul>
        </article> -->

      <div class="termsSelectWrapper">
        <input
          type="text"
          readonly="readonly"
          autocomplete="off"
          class="termsSelectInput"
          :value="
            $dayjs(termsHistory[dateIdx].noticeDate).format('YYYY년 MM월 DD일')
          "
          @click="handleToggle()"
          v-click-outside="handleToggleOutside"
        />
        <span class="termsSelectInputArrow">
          <span class="termsSelectInputInnerArrow">
            <i><img src="~/assets/volog/downIconfooter01.png" /></i>
          </span>
        </span>
        <ul class="termsSelectBody" v-if="toggle">
          <li
            v-for="(data, idx) of termsHistory"
            :key="idx"
            @click="fetchData(idx, data.id)"
          >
            {{ $dayjs(data.noticeDate).format("YYYY년 MM월 DD일") }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import Markdown from "@nuxt/markdown";
export default {
  directives: {
    ClickOutside,
  },
  methods: {
    pushLocation(e) {
      const routePath =
        e === 1 ? "/terms" : e === 2 ? "/Policy" : e === 3 ? "/payment" : "";
      this.$router.push(`${routePath}`);
    },
    handleToggle() {
      this.toggle = !this.toggle;
    },
    handleToggleOutside() {
      if (!this.toggle) return;
      this.toggle = false;
    },
    fetchData(idx, id) {
      this.dateIdx = idx;
      this.requestData(id);
      this.toggle = false;
    },
    // $i18n.localeProperties.code === "ko" ? res.data.data.content : res.data.data.contentEn
    async requestData(e) {
      this.$axios
        .get(`admin/terms/2?termsId=${e}`)
        .then(async (res) => {
          this.contentData = res.data.data;
          const md = new Markdown({ toc: false, sanitize: false });
          const contents = await md.toMarkup(res.data.data.content);
          const contentsEn = await md.toMarkup(res.data.data.contentEn);
          this.contentBody = contents.html;
          this.contentBodyEn = contentsEn.html;
        })
        .catch((e) => console.error(e));
    },
  },
  data() {
    return {
      type: 2,
      toggle: false,
      dateIdx: 0,
      contentData: null,
    };
  },
  async asyncData({ $axios }) {
    try {
      const md = new Markdown({ toc: false, sanitize: false });
      const data = Promise.all([
        $axios.get(`/admin/terms/type`),
        $axios.get(`/admin/terms?typeId=2`),
        $axios.get(`/admin/terms/2`),
      ]);
      const dataJson = await data;
      const contents = await md.toMarkup(dataJson[2].data.data.content);
      const contentsEn = await md.toMarkup(dataJson[2].data.data.contentEn);
      return {
        termsType: dataJson[0].data.data.termsTypeResponseList,
        termsHistory: dataJson[1].data.data.termsResponseList,
        contentData: dataJson[2].data.data,
        contentBody: contents.html,
        contentBodyEn: contentsEn.html,
      };
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style lang="scss" scoped>
.termsWrapper {
  display: flex;
  justify-content: center;
  padding: 150px 20px;
  /deep/ .termsInnerWrapper {
    .termsSelectWrapper {
      margin-top: 30px;
      position: relative;
      font-size: 14px;
      display: inline-block;
      .termsSelectBody {
        border: 1px solid #dcdcdc;
        margin-top: 2px;
        padding-left: 0px;
        li {
          padding: 10px 20px 10px 20px;
          width: auto;
          margin: 0px;
          cursor: pointer;
        }
        li:hover {
          background-color: #f5f7fa;
        }
      }
      .termsSelectInput {
        height: 52px;
        font-size: 15px;
        text-indent: 10px;
        border: 2px solid #e6e9ee;
        transition: 0.3s;
        cursor: pointer;
        padding: 0;
        color: #111;
        font-weight: 500;
      }
      .termsSelectInputArrow {
        position: absolute;
        height: 100%;
        right: 5px;
        top: 0;
        text-align: center;
        color: #c0c4cc;
        transition: all 0.3s;
        pointer-events: none;
        .termsSelectInputInnerArrow {
          pointer-events: all;
          i {
            color: #c0c4cc;
            font-size: 14px;
            transition: transform 0.3s;
            transform: rotate(180deg);
            cursor: pointer;
            margin-top: -1px;
            margin-right: 6px;
            color: #000000;
            font-weight: 700;
            width: 25px;
            line-height: 48px;
            img {
              width: 20px;
              transform: translateY(5px);
            }
          }
          // i::after {
          //     content: "";
          //     height: 100%;
          //     width: 0;
          //     display: inline-block;
          //     vertical-align: middle;
          // }
        }
      }
    }

    .termsTypeWrapper {
      display: flex;
    }
    .termsTypeBox {
      display: inline-block;
      padding: 17px 60px;
      color: #979fae;
      font-size: 16px;
      background: #fff;
      border: 1px solid #eaedf3;
      cursor: pointer;
    }
    .active {
      color: #fafbfc;
      background: #0d2a58;
      border-color: #0d2a58;
    }
    max-width: 1200px;
    width: 100%;
    word-break: keep-all;
    h1 {
      margin-bottom: 32px;
      font-weight: 700;
      font-size: 40px;
      color: #0d2a58;
    }
    h2 {
      font-weight: 700;
      margin-bottom: 20px;
      font-size: 24px;
    }
    h3 {
      margin-bottom: 20px;
      font-weight: 700;
      color: #0d2a58;
    }
    p {
      margin-top: 20px;
      color: #0d2a58;
    }
    li {
      margin-left: 13px;
      text-indent: -13px;
      margin-top: 16px;
      color: #0d2a58;
    }
  }

  @media screen and (max-width: 1200px) {
    .termsTypeWrapper {
      overflow-x: scroll;
      position: fixed;
      width: 100%;
      max-width: 450px;
      top: 77px;
    }
    .termsTypeWrapper .termsTypeBox {
      z-index: 99;
      padding: 12px 20px;
      font-size: 14px;
      border-bottom: 0;
      min-width: 150px;
      cursor: pointer;
    }
  }
}
</style>