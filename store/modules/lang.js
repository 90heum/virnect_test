import Cookies from 'js-cookie'
export default {
  state: {
    lang: null,
  },
  getters: {
    getLang(state) {
      return state.lang
    },
  },
  mutations: {
    CHANGE_LANG(state, lang) {
      state.lang = lang
      if (lang === 'ko') {
        document.documentElement.lang = 'ko'
        document.title = 'VIRNECT | 산업용 AR 전문기업'
      } else {
        document.documentElement.lang = 'en'
        document.title =
          'VIRNECT | Virtual Connect to Improve Industrial Safety and Work Efficiency'
      }
    },
  },
  actions: {
    async CHANGE_LANG({ commit }, lang) {
      const cookieOption = {
        domain:
          location.hostname.split('.').length === 3
            ? location.hostname.replace(/.*?\./, '')
            : location.hostname,
      }
      // let lang = Cookies.get('lang', cookieOption)
      if (!lang) {
        if (navigator.language.substr(0, 2) !== 'ko') {
          lang = 'en'
        } else if (
          navigator.userLanguage &&
          navigator.userLanguage.substr(0, 2) !== 'ko'
        ) {
          lang = 'en'
        } else if (
          navigator.systemLanguage &&
          navigator.systemLanguage.substr(0, 2) !== 'ko'
        ) {
          lang = 'en'
        } else {
          lang = 'ko'
        }
      }
      Cookies.set('lang', lang, cookieOption)
      commit('CHANGE_LANG', lang)
    },
  },
}
