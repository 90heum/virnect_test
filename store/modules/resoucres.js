import { http } from '../../components/api/axios'

/**
 * 컨텐츠 리스트 API
 * @param {Object} params
 */
async function getResoucres(params = {}) {
  try {
    const response = await http.get('/admin/resources', {
      params: {
        filter: 'all',
        page: params.page,
        size: params.size,
        sort: params.sort,
      },
    })
    // console.log(response)
    return response.data
  } catch (e) {
    console.error(e)
  }
}
async function getResoucresInfo(params = {}) {
  try {
    const response = await http.get(`/admin/resources/${params.resourcesId}`)
    return response.data
  } catch (e) {
    console.error(e)
  }
}

export default {
  state: {
    resourcesList: {},
    resourcesInfo: {},
  },
  getters: {
    getResoucresResponse(state) {
      return state.resourcesList
    },
    getResoucresInfoResponse(state) {
      return state.resourcesInfo
    },
  },
  mutations: {
    RESOURCES_LIST_RESPONSE(state, value) {
      state.resourcesList = value
    },
    RESOURCES_INFO_RESPONSE(state, value) {
      state.resourcesInfo = value
    },
  },
  actions: {
    async RESOURCES_LIST_RESPONSE(context, params = {}) {
      const res = await getResoucres(params)
      context.commit('RESOURCES_LIST_RESPONSE', res.data)
      return res
    },
    async RESOURCES_INFO_RESPONSE(context, params = {}) {
      const res = await getResoucresInfo(params)
      context.commit('RESOURCES_INFO_RESPONSE', res.data)
      return res
    },
  },
}
