import { http } from '../../components/api/axios'
import mixin from '../../components/mixins/mixin.js'

const { setDateFormat } = mixin.methods

/**
 * 컨텐츠 리스트 API
 * @param {Object} params
 */
async function getIrListResponse(params = {}) {
  try {
    const { data } = await http.get('/admin/resources', {
      params: {
        filter: 'ir',
        page: 1,
        sort: 'createdDate,desc',
        ...params,
      },
    })
    return {
      pageMeta: data.data.pageMetadataResponse,
      list: data.data.resourcesInfoResponseList.map(res => {
        return {
          id: res.resourcesId,
          img: res.thumbnailImage,
          title: res.title,
          titleEng: res.titleEng,
          contents: res.contents,
          contentsEng: res.contentsEng,
          date: setDateFormat(res.createdDate),
        }
      }),
    }
  } catch (e) {
    console.error(e)
  }
}

async function getIrDetali(params = {}) {
  try {
    const { data } = await http.get(`/admin/resources/${params.resourcesId}`)
    return data.data
  } catch (e) {
    console.error(e)
  }
}

export default {
  state: {
    irList: {},
    irDetail: {},
  },
  getters: {
    getIrListResponse(state) {
      return state.irList
    },
    getIrDetail(state) {
      return state.irDetail
    },
  },
  mutations: {
    IR_LIST_RESPONSE(state, value) {
      state.irList = value
    },
    IR_DETAIL(state, value) {
      state.irDetail = value
    },
  },
  actions: {
    async IR_LIST_RESPONSE(context, params = {}) {
      const res = await getIrListResponse(params)
      context.commit('IR_LIST_RESPONSE', res)
      return res
    },
    async IR_DETAIL(context, params = {}) {
      const data = await getIrDetali(params)
      context.commit('IR_DETAIL', data)
      return data
    },
  },
}
