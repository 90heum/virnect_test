import { http } from '../../components/api/axios'

async function postCalculator(params = {}) {
  try {
    const response = await http.post('/admin/calculator', params)
    return response.data
  } catch (e) {
    console.log(e)
  }
}

export default {
  state: {
    calculator: {},
    mail: {},
  },
  getters: {
    postCalculatorResponse(state) {
      return state.Calculator
    },
  },
  mutations: {
    CALCULATOR_RESPONSE(state, value) {
      state.calculator = value
    },
  },
  actions: {
    async CALCULATOR_RESPONSE(context, params = {}) {
      const res = await postCalculator(params)
      context.commit('CALCULATOR_RESPONSE', res)
      return res
    },
  },
}
