import { http } from '../../components/api/axios'

async function postSubscribe(params = {}) {
  try {
    const response = await http.post('/admin/subscribe', {
      email: params.email || 'test@test.test',
    })
    return response.data
  } catch (e) {
    console.log(e.response)
    if (e) {
      console.log(e)
    }
  }
}
export default {
  state: {
    subscribe: {},
  },
  getters: {
    postSubscribeResponse(state) {
      return state.subscribe
    },
  },
  mutations: {
    SUBSCRIBE_RESPONSE(state, value) {
      state.subscribe = value
    },
  },
  actions: {
    async SUBSCRIBE_RESPONSE(context, params = {}) {
      const res = await postSubscribe(params)
      context.commit('SUBSCRIBE_RESPONSE', res)
      return res
    },
  },
}
