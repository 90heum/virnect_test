import { http } from '../../components/api/axios'

/**
 * 컨텐츠 리스트 API
 * @param {Object} params
 */
async function getCareerCount() {
  try {
    const response = await http.get('/career/count')
    return response.data
  } catch (e) {
    console.error(e)
  }
}
async function getCareerList(params = {}) {
  try {
    const response = await http.get('/admin/career', {
      params: {
        field: params.field,
        page: params.page || 1,
        size: params.size || 8,
        sort: 'createdDate,desc',
      },
    })
    return response.data
  } catch (e) {
    console.error(e)
  }
}
export default {
  state: {
    careerCount: {},
    careerList: {},
  },
  getters: {
    getCareerCountResponse(state) {
      return state.careerCount
    },
    getCareerListResponse(state) {
      return state.careerList
    },
  },
  mutations: {
    CAREER_COUNT_RESPONSE(state, value) {
      state.careerCount = value
    },
    CAREER_LIST_RESPONSE(state, value) {
      state.careerList = value
    },
  },
  actions: {
    async CAREER_COUNT_RESPONSE(context, params = {}) {
      const res = await getCareerCount(params)
      context.commit('CAREER_COUNT_RESPONSE', res.data)
      return res
    },
    async CAREER_LIST_RESPONSE(context, params = {}) {
      const res = await getCareerList(params)
      context.commit('CAREER_LIST_RESPONSE', res.data)
      return res
    },
  },
}
