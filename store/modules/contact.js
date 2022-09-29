import { http } from '../../components/api/axios'

async function postContact(params = {}) {
  try {
    const response = await http.post('/admin/contact', {
      category: params.category,
      content: params.content,
      customerInfo: params.customerInfo,
      mailRequest: params.mailRequest,
      requiryInfo: params.requiryInfo,
      title: params.title,
    })
    return response.data
  } catch (e) {
    console.error(e)
    return e
    // if (e) {
    // 	alert('등록된 이메일 입니다.')
    // }
  }
}

export default {
  state: {
    contact: {},
    mail: {},
  },
  getters: {
    postContactResponse(state) {
      return state.contact
    },
  },
  mutations: {
    CONTACT_RESPONSE(state, value) {
      state.contact = value
    },
  },
  actions: {
    async CONTACT_RESPONSE(context, params = {}) {
      const res = await postContact(params)
      context.commit('CONTACT_RESPONSE', res)
      return res
    },
  },
}
