import { http } from '../../components/api/axios'

async function getTermsList() {
  try {
    const response = await http.get('/admin/terms')
    return response.data
  } catch (e) {
    console.error(`${e.code}: ${e.message}`)
  }
}

async function getTerms(params = {}) {
  try {
    const response = await http.get(`/admin/terms/${params.uuid}`)
    return response.data
  } catch (e) {
    console.error(`${e.code}: ${e.message}`)
  }
}

export default {
  state: {
    termsList: {},
  },
  getters: {
    getTermsList(state) {
      return state.termsList
    },
  },
  mutations: {
    GET_TERMS_LIST(state, value) {
      state.termsList = value
    },
  },
  actions: {
    async GET_TERMS_LIST(context, params = {}) {
      const { data } = await getTermsList(params)
      context.commit('GET_TERMS_LIST', data.revisedTermsInfoListResponse)
      return data.revisedTermsInfoListResponse ? true : false
    },
  },
}
