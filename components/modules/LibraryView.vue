<template>
  <section id="newsDetailSection" class="news-view">
    <div class="view-head">
      <p class="category" v-if="boardContents.resourcesType">
        {{ boardContents.resourcesType }}
        <span class="date">{{ setDateFormat(boardContents.createdDate) }}</span>
      </p>
      <p class="title">
        {{ boardContents.title }}
      </p>
    </div>

    <!-- body -->
    <div class="view-body area-flex-inner">
      <div class="view-download" v-if="boardContents.files.length > 0">
        <!-- download info -->
        <div class="download-info">
          <p @click="openDownloadInfo">
            {{ $t('global.boardText.attachedFiles') }}(<b>{{
              boardContents.files.length
            }}</b
            >)
          </p>
          <img
            src="~assets/images/pages/support/icon-arrow-down-black.png"
            alt="arrow img"
            :class="{ active: arrowActive === isOpen }"
            @click="openDownloadInfo"
          />
        </div>

        <!-- download open -->
        <div v-if="isOpen" class="download-open">
          <!-- download row 01 -->
          <div
            v-for="(data, i) of boardContents.files"
            :key="i"
            class="download-row"
          >
            <!-- left -->
            <a class="left" :href="data" target="blank">
              <p>{{ i + 1 }}. {{ setFileName(data) }}</p>
            </a>

            <!-- right -->
            <a class="right" @click="downloadItem(data)">
              <img
                src="~assets/images/pages/support/icon-download.png"
                alt="download img"
              />
            </a>
          </div>

          <!-- download all -->
          <div class="download-all">
            <button
              @click="downloadAll(boardContents.files, boardContents.title)"
            >
              {{ $t('global.boardText.downloadAll') }}
            </button>
          </div>
        </div>
      </div>
      <div class="view-body-text">
        <div v-html="setHtml()"></div>
      </div>
    </div>

    <!-- foot -->
    <div class="view-foot">
      <button
        class="prev-btn page-btn"
        @click="
          prev(boardContents.prevId)
          scrollContent(snbTop)
        "
      >
        <p class="direction">
          {{ $t('global.boardText.prev') }}
        </p>
        <p class="title">{{ prevData(boardContents.prevTitle) }}</p>
        <p class="date">
          {{
            boardContents.prevCreatedDate === null
              ? ''
              : setDateFormat(boardContents.prevCreatedDate)
          }}
        </p>
      </button>
      <button
        class="next-btn page-btn"
        @click="
          next(boardContents.nextId)
          scrollContent(snbTop)
        "
      >
        <p class="direction">
          {{ $t('global.boardText.next') }}
        </p>
        <p class="title">{{ nextData(boardContents.nextTitle) }}</p>
        <p class="date">
          {{
            boardContents.nextCreatedDate === null
              ? ''
              : setDateFormat(boardContents.nextCreatedDate)
          }}
        </p>
      </button>
    </div>

    <!-- link -->
    <div class="align-center">
      <button
        class="list-btn"
        @click="
          $router.push({ name: 'resources_library' })
          scrollContent(snbTop)
        "
      >
        {{ $t('global.listText') }}
      </button>
    </div>
  </section>
</template>

<script>
// import JSzip from 'jszip'
// import fileSaver from 'file-saver'
// import axios from 'axios'

// import files from 'lib/files'
// import mixin from 'mixins/mixin'

export default {
  // mixins: [mixin],
  data() {
    return {
      snbTop: 480,
      isOpen: false,
      arrowActive: true,
    }
  },
  props: {
    boardContents: Object,
  },
  computed: {
    thumbnail() {
      let result
      const imgArr = this.$props.boardContents.files
      for (let val of imgArr) {
        if (/jpg|png|gif|jpeg/.test(val)) {
          // return val
          result = val
          // break
        } else {
          result = false
          // return false
        }
      }
      return result
    },
  },
  methods: {
    setFileName(file) {
      const split_name = `${file.slice(0, file.lastIndexOf('_'))}${file.slice(
        file.lastIndexOf('.'),
      )}`
      return split_name.substring(split_name.lastIndexOf('/') + 1)
    },
    setHtml() {
      let html = this.$props.boardContents.contents
      let multiple = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&apos;': '`',
      }
      for (let i in multiple) {
        let before = i
        let after = multiple[i]
        let pattern = new RegExp(before, 'g')
        html = html.replace(pattern, after)
      }
      if (html.indexOf('<iframe') !== -1) {
        const videoStart = html.indexOf('<iframe')
        const videoEnd = html.indexOf('/iframe>') + 8
        const replaceVideo = `${html.slice(
          0,
          videoStart,
        )}<div class="ratio-box">${html.slice(
          videoStart,
          videoEnd,
        )}</div>${html.slice(videoEnd, html.length)}`
        // console.log(replaceVideo)
        return replaceVideo
      } else {
        return html
      }
    },
    prev(id) {
      if (id !== null) {
        setTimeout(() => {
          this.$router.push('/')
        }, 100)
        setTimeout(() => {
          this.$router.push({
            name: 'resources_library_Detail',
            params: { id: id },
          })
        }, 200)
      }
    },
    next(id) {
      if (id !== null) {
        setTimeout(() => {
          this.$router.push('/')
        }, 100)
        setTimeout(() => {
          this.$router.push({
            name: 'resources_library_Detail',
            params: { id: id },
          })
        }, 200)
      }
    },
    nextData(data) {
      if (data === null) {
        return this.$t('global.boardText.nextNodata')
      } else {
        return data
      }
    },
    prevData(data) {
      if (data === null) {
        return this.$t('global.boardText.prevNodata')
      } else {
        return data
      }
    },
    // downloadItem(url) {
    //   files.downloadItem(url)
    // },
    // downloadAll(fileArr, fileName) {
    //   files.downloadAll(fileArr, fileName)
    // },
    openDownloadInfo() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/modules/board.scss';
.right-align {
  text-align: right;
}
.category {
  font-size: 18px !important;
}
.view-body {
  margin: 0;
  padding-top: 0px;
  padding-bottom: 122px !important;

  .view-body-thumb {
    margin-bottom: 60px;
    text-align: center;
    img {
      max-width: 900px;
      margin-bottom: 40px;
    }
  }
  .view-body-text {
    margin: 0 64px;
    padding-top: 60px;
  }
  /* download */
  .view-download {
    display: contents;
    flex-wrap: wrap;
    justify-content: flex-end;
    width: 100%;
    background-color: transparent;
    /* download info */
    .download-info {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 24px;

      p {
        color: #31313b;
        font-weight: 500;
        font-size: 16px;
        line-height: 1.25;
        text-decoration: underline;
        cursor: pointer;

        b {
          color: #1655bf;
        }
      }

      img {
        // width: 28px;
        margin-left: 4px;
        cursor: pointer;

        &.active {
          transform: rotate(-180deg);
          transition: transform 0.2s;
        }
      }
    }

    /* download open */
    .download-open {
      width: 100%;
      /* download row */
      .download-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        // height: 68px;
        padding: 20px 28px 20px 32px;
        border: solid 1px #d4d9e1;
        border-bottom: 0;

        /* left */
        .left {
          cursor: pointer;
          p {
            overflow: hidden;
            color: #31313b;
            font-weight: 500;
            font-size: 16px;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }

        /* right */
        .right {
          display: flex;
          align-items: center;
          width: 26px;

          img {
            // height: 26px;
            cursor: pointer;
          }
        }
      }

      /* download all */
      .download-all {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 68px;
        padding-right: 22px;
        background-color: rgba(212, 217, 225, 0.5);
        border: solid 1px #d4d9e1;

        button {
          width: 140px;
          height: 42px;
          color: #31313b;
          font-weight: bold;
          font-size: 16px;
          background-color: #ffffff;
          border: solid 1px #d4d9e1;
        }
      }
    }
  }
}
@media (max-width: $mobile) {
  .list-btn {
    border-radius: 25px;
  }
  .category {
    font-size: 14px !important;
  }
  .view-head {
    margin-bottom: 0px;
  }
  .view-body {
    .view-download {
      .download-info {
        padding: 17px 12px 15px;
        p {
          font-weight: 500;
          font-size: 12px;
        }
        img {
          width: 20px;
          height: 21px;
          margin-right: 0px;
        }
      }
      .download-open {
        .download-row {
          // height: 47px;
          padding: 14px 16px;
          .left {
            width: 100%;
            p {
              overflow: hidden;
              font-weight: 500;
              font-size: 12px;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
          .right {
            width: 16px;
            img {
              // height: 16px;
              margin-right: 0px;
            }
          }
        }
        .download-all {
          height: 47px;
          padding: 6px;
          button {
            width: 100%;
            height: 36px;
            font-weight: bold;
            font-size: 12px;
          }
        }
      }
    }
    .view-body-text {
      margin: 0;
      padding-top: 28px;
    }
    .view-body-thumb img {
      width: 100%;
      margin: 0;
    }
  }
}
</style>
