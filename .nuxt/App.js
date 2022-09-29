import Vue from 'vue'
import { decode, parsePath, withoutBase, withoutTrailingSlash, normalizeURL } from 'ufo'

import { getMatchedComponentsInstances, getChildrenComponentInstancesUsingFetch, promisify, globalHandleError, urlJoin, sanitizeComponent } from './utils'
import NuxtError from '../layouts/error.vue'
import NuxtLoading from './components/nuxt-loading.vue'
import NuxtBuildIndicator from './components/nuxt-build-indicator'

import '../node_modules/swiper/dist/css/swiper.css'

import '../node_modules/nuxt-video-player/src/assets/css/main.css'

import '../node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import _04a999c7 from '../layouts/common/Main.vue'
import _301b735c from '../layouts/common/SubVisual.vue'
import _04acc85e from '../layouts/common/Tail.vue'
import _6f6c098b from '../layouts/default.vue'
import _352b576c from '../layouts/modules/Banner.vue'
import _a6d403f0 from '../layouts/modules/Board.vue'
import _560068cd from '../layouts/modules/BoardView.vue'
import _083a9928 from '../layouts/modules/CalculatorPopup.vue'
import _749e93ee from '../layouts/modules/Dialog-Mobile.vue'
import _edf96ca2 from '../layouts/modules/Dropdown.vue'
import _5f7b7418 from '../layouts/modules/Gallery.vue'
import _0b5d4ca4 from '../layouts/modules/Heading.vue'
import _34441946 from '../layouts/modules/Library.vue'
import _14f3aba2 from '../layouts/modules/LibraryView.vue'
import _43911ad7 from '../layouts/modules/Newsletter.vue'
import _a5490064 from '../layouts/modules/Popup.vue'
import _e2b989dc from '../layouts/modules/PopupConfirm.vue'
import _e1215566 from '../layouts/modules/PopupVideo.vue'
import _4bf48d6f from '../layouts/modules/RequiredPopup.vue'
import _33dc2d09 from '../layouts/modules/Snb.vue'
import _13d6c140 from '../layouts/modules/YoutubeFullscreen.vue'
import _2d283996 from '../layouts/post.vue'

const layouts = { "_common/Main": sanitizeComponent(_04a999c7),"_common/SubVisual": sanitizeComponent(_301b735c),"_common/Tail": sanitizeComponent(_04acc85e),"_default": sanitizeComponent(_6f6c098b),"_modules/Banner": sanitizeComponent(_352b576c),"_modules/Board": sanitizeComponent(_a6d403f0),"_modules/BoardView": sanitizeComponent(_560068cd),"_modules/CalculatorPopup": sanitizeComponent(_083a9928),"_modules/Dialog-Mobile": sanitizeComponent(_749e93ee),"_modules/Dropdown": sanitizeComponent(_edf96ca2),"_modules/Gallery": sanitizeComponent(_5f7b7418),"_modules/Heading": sanitizeComponent(_0b5d4ca4),"_modules/Library": sanitizeComponent(_34441946),"_modules/LibraryView": sanitizeComponent(_14f3aba2),"_modules/Newsletter": sanitizeComponent(_43911ad7),"_modules/Popup": sanitizeComponent(_a5490064),"_modules/PopupConfirm": sanitizeComponent(_e2b989dc),"_modules/PopupVideo": sanitizeComponent(_e1215566),"_modules/RequiredPopup": sanitizeComponent(_4bf48d6f),"_modules/Snb": sanitizeComponent(_33dc2d09),"_modules/YoutubeFullscreen": sanitizeComponent(_13d6c140),"_post": sanitizeComponent(_2d283996) }

export default {
  render (h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })

    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter (el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [templateEl])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      h(NuxtBuildIndicator),
      transitionEl
    ])
  },

  data: () => ({
    isOnline: true,

    layout: null,
    layoutName: '',

    nbFetching: 0
    }),

  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this

    if (process.client) {
      // add to window so we can listen when ready
      window.$nuxt = this

      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
    // Add $nuxt.context
    this.context = this.$options.context
  },

  async mounted () {
    this.$loading = this.$refs.loading
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline () {
      return !this.isOnline
    },

    isFetching () {
      return this.nbFetching > 0
    },
  },

  methods: {
    refreshOnlineStatus () {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    async refresh () {
      const pages = getMatchedComponentsInstances(this.$route)

      if (!pages.length) {
        return
      }
      this.$loading.start()

      const promises = pages.map((page) => {
        const p = []

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context))
        }
        if (page.$fetch) {
          p.push(page.$fetch())
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch())
          }
        }

        if (page.$options.asyncData) {
          p.push(
            promisify(page.$options.asyncData, this.context)
              .then((newData) => {
                for (const key in newData) {
                  Vue.set(page.$data, key, newData[key])
                }
              })
          )
        }

        return Promise.all(p)
      })
      try {
        await Promise.all(promises)
      } catch (error) {
        this.$loading.fail(error)
        globalHandleError(error)
        this.error(error)
      }
      this.$loading.finish()
    },
    errorChanged () {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err)
          }
          if (this.$loading.finish) {
            this.$loading.finish()
          }
        }

        let errorLayout = (NuxtError.options || NuxtError).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context)
        }

        this.setLayout(errorLayout)
      }
    },

    setLayout (layout) {
      if(layout && typeof layout !== 'string') {
        throw new Error('[nuxt] Avoid using non-string value as layout property.')
      }

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    },
  },

  components: {
    NuxtLoading
  }
}
