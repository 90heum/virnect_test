import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _35003522 = () => interopDefault(import('../pages/payment.vue' /* webpackChunkName: "pages/payment" */))
const _096498f9 = () => interopDefault(import('../pages/Policy.vue' /* webpackChunkName: "pages/Policy" */))
const _49e914b0 = () => interopDefault(import('../pages/terms.vue' /* webpackChunkName: "pages/terms" */))
const _3c3e23a4 = () => interopDefault(import('../pages/company/about.vue' /* webpackChunkName: "pages/company/about" */))
const _25a44c2c = () => interopDefault(import('../pages/company/aboutSub.vue' /* webpackChunkName: "pages/company/aboutSub" */))
const _6863bfa2 = () => interopDefault(import('../pages/company/ir.vue' /* webpackChunkName: "pages/company/ir" */))
const _f8f88be8 = () => interopDefault(import('../pages/company/ir-detail.vue' /* webpackChunkName: "pages/company/ir-detail" */))
const _4c2ab165 = () => interopDefault(import('../pages/company/talent.vue' /* webpackChunkName: "pages/company/talent" */))
const _2d95b276 = () => interopDefault(import('../pages/news/detail.vue' /* webpackChunkName: "pages/news/detail" */))
const _1f824b1e = () => interopDefault(import('../pages/news/main.vue' /* webpackChunkName: "pages/news/main" */))
const _1957af30 = () => interopDefault(import('../pages/policy/Payment.vue' /* webpackChunkName: "pages/policy/Payment" */))
const _a417ada6 = () => interopDefault(import('../pages/policy/persnal.vue' /* webpackChunkName: "pages/policy/persnal" */))
const _060b4a9e = () => interopDefault(import('../pages/policy/Terms.vue' /* webpackChunkName: "pages/policy/Terms" */))
const _2b42f63c = () => interopDefault(import('../pages/products/make.vue' /* webpackChunkName: "pages/products/make" */))
const _2eae179a = () => interopDefault(import('../pages/products/ms.vue' /* webpackChunkName: "pages/products/ms" */))
const _4f491cb1 = () => interopDefault(import('../pages/products/productsMain.vue' /* webpackChunkName: "pages/products/productsMain" */))
const _3a76243a = () => interopDefault(import('../pages/products/remote.vue' /* webpackChunkName: "pages/products/remote" */))
const _4417fe87 = () => interopDefault(import('../pages/products/track.vue' /* webpackChunkName: "pages/products/track" */))
const _4a64f8dc = () => interopDefault(import('../pages/products/twin.vue' /* webpackChunkName: "pages/products/twin" */))
const _2f3b8619 = () => interopDefault(import('../pages/products/view.vue' /* webpackChunkName: "pages/products/view" */))
const _6610880a = () => interopDefault(import('../pages/support/demo.vue' /* webpackChunkName: "pages/support/demo" */))
const _39de4a64 = () => interopDefault(import('../pages/support/demo_success.vue' /* webpackChunkName: "pages/support/demo_success" */))
const _9e9b3882 = () => interopDefault(import('../pages/support/faq.vue' /* webpackChunkName: "pages/support/faq" */))
const _70ec9d20 = () => interopDefault(import('../pages/support/inquiry.vue' /* webpackChunkName: "pages/support/inquiry" */))
const _76d58398 = () => interopDefault(import('../pages/support/inquiry_success.vue' /* webpackChunkName: "pages/support/inquiry_success" */))
const _2097560d = () => interopDefault(import('../pages/support/learning-center.vue' /* webpackChunkName: "pages/support/learning-center" */))
const _9d47ada0 = () => interopDefault(import('../pages/support/learning-manual-detail.vue' /* webpackChunkName: "pages/support/learning-manual-detail" */))
const _68584eca = () => interopDefault(import('../pages/support/learning-video-detail.vue' /* webpackChunkName: "pages/support/learning-video-detail" */))
const _6cbd96bf = () => interopDefault(import('../pages/support/notice.vue' /* webpackChunkName: "pages/support/notice" */))
const _7a3c184f = () => interopDefault(import('../pages/support/notice-detail.vue' /* webpackChunkName: "pages/support/notice-detail" */))
const _7a3a5131 = () => interopDefault(import('../pages/support/supportSubMain.vue' /* webpackChunkName: "pages/support/supportSubMain" */))
const _48749a45 = () => interopDefault(import('../pages/value/culture_exhibition.vue' /* webpackChunkName: "pages/value/culture_exhibition" */))
const _67e7419f = () => interopDefault(import('../pages/value/health_care.vue' /* webpackChunkName: "pages/value/health_care" */))
const _dde1d948 = () => interopDefault(import('../pages/value/infra_energy.vue' /* webpackChunkName: "pages/value/infra_energy" */))
const _42016f94 = () => interopDefault(import('../pages/value/manufacture_construction.vue' /* webpackChunkName: "pages/value/manufacture_construction" */))
const _15f51e52 = () => interopDefault(import('../pages/value/public_education.vue' /* webpackChunkName: "pages/value/public_education" */))
const _304bd8a4 = () => interopDefault(import('../pages/company/subCompany/Brand.vue' /* webpackChunkName: "pages/company/subCompany/Brand" */))
const _c029530a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/payment",
    component: _35003522,
    name: "payment"
  }, {
    path: "/Policy",
    component: _096498f9,
    name: "Policy"
  }, {
    path: "/terms",
    component: _49e914b0,
    name: "terms"
  }, {
    path: "/company/about",
    component: _3c3e23a4,
    name: "company-about"
  }, {
    path: "/company/aboutSub",
    component: _25a44c2c,
    name: "company-aboutSub"
  }, {
    path: "/company/ir",
    component: _6863bfa2,
    name: "company-ir"
  }, {
    path: "/company/ir-detail",
    component: _f8f88be8,
    name: "company-ir-detail"
  }, {
    path: "/company/talent",
    component: _4c2ab165,
    name: "company-talent"
  }, {
    path: "/news/detail",
    component: _2d95b276,
    name: "news-detail"
  }, {
    path: "/news/main",
    component: _1f824b1e,
    name: "news-main"
  }, {
    path: "/policy/Payment",
    component: _1957af30,
    name: "policy-Payment"
  }, {
    path: "/policy/persnal",
    component: _a417ada6,
    name: "policy-persnal"
  }, {
    path: "/policy/Terms",
    component: _060b4a9e,
    name: "policy-Terms"
  }, {
    path: "/products/make",
    component: _2b42f63c,
    name: "products-make"
  }, {
    path: "/products/ms",
    component: _2eae179a,
    name: "products-ms"
  }, {
    path: "/products/productsMain",
    component: _4f491cb1,
    name: "products-productsMain"
  }, {
    path: "/products/remote",
    component: _3a76243a,
    name: "products-remote"
  }, {
    path: "/products/track",
    component: _4417fe87,
    name: "products-track"
  }, {
    path: "/products/twin",
    component: _4a64f8dc,
    name: "products-twin"
  }, {
    path: "/products/view",
    component: _2f3b8619,
    name: "products-view"
  }, {
    path: "/support/demo",
    component: _6610880a,
    name: "support-demo"
  }, {
    path: "/support/demo_success",
    component: _39de4a64,
    name: "support-demo_success"
  }, {
    path: "/support/faq",
    component: _9e9b3882,
    name: "support-faq"
  }, {
    path: "/support/inquiry",
    component: _70ec9d20,
    name: "support-inquiry"
  }, {
    path: "/support/inquiry_success",
    component: _76d58398,
    name: "support-inquiry_success"
  }, {
    path: "/support/learning-center",
    component: _2097560d,
    name: "support-learning-center"
  }, {
    path: "/support/learning-manual-detail",
    component: _9d47ada0,
    name: "support-learning-manual-detail"
  }, {
    path: "/support/learning-video-detail",
    component: _68584eca,
    name: "support-learning-video-detail"
  }, {
    path: "/support/notice",
    component: _6cbd96bf,
    name: "support-notice"
  }, {
    path: "/support/notice-detail",
    component: _7a3c184f,
    name: "support-notice-detail"
  }, {
    path: "/support/supportSubMain",
    component: _7a3a5131,
    name: "support-supportSubMain"
  }, {
    path: "/value/culture_exhibition",
    component: _48749a45,
    name: "value-culture_exhibition"
  }, {
    path: "/value/health_care",
    component: _67e7419f,
    name: "value-health_care"
  }, {
    path: "/value/infra_energy",
    component: _dde1d948,
    name: "value-infra_energy"
  }, {
    path: "/value/manufacture_construction",
    component: _42016f94,
    name: "value-manufacture_construction"
  }, {
    path: "/value/public_education",
    component: _15f51e52,
    name: "value-public_education"
  }, {
    path: "/company/subCompany/Brand",
    component: _304bd8a4,
    name: "company-subCompany-Brand"
  }, {
    path: "/",
    component: _c029530a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
