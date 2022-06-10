export { default as Footer } from '../../components/footer.vue'
export { default as Header } from '../../components/header.vue'
export { default as GnbCompany } from '../../components/Gnb/Company/index.vue'
export { default as GnbContact } from '../../components/Gnb/Contact/index.vue'
export { default as GnbFreeTrials } from '../../components/Gnb/FreeTrials/index.vue'
export { default as GnbPricing } from '../../components/Gnb/Pricing/index.vue'
export { default as GnbProducts } from '../../components/Gnb/Products/index.vue'
export { default as GnbSolution } from '../../components/Gnb/Solution/index.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
