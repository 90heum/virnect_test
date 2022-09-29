import { http } from '../../components/api/axios'

/**
 * 컨텐츠 리스트 API
 * @param {Object} params
 */
async function getNewsList(params = {}) {
  try {
    const { data } = await http.get('/admin/resources', {
      params: {
        filter: 'pr',
        page: 1,
        size: 9,
        sort: 'id,desc',
        ...params,
      },
    })
    return data.data.resourcesInfoResponseList
  } catch (e) {
    console.error(e)
  }
}

async function getNewsVisualList() {
  try {
    const { data } = await http.get('/admin/resources', {
      params: {
        filter: 'pr',
        page: 1,
        size: 3,
        sort: 'top,desc',
      },
    })
    return data.data.resourcesInfoResponseList.map(res => {
      return {
        id: res.resourcesId,
        img: res.thumbnailImage,
        imgEng: res.thumbnailImageEng,
        title: res.title,
        titleEng: res.titleEng,
        top: res.top,
      }
    })
  } catch (e) {
    console.error(e)
  }
}

async function getNewsDetail(params = {}) {
  try {
    const { data } = await http.get(`/admin/resources/${params.resourcesId}`)
    return data.data
  } catch (e) {
    console.error(e)
  }
}

export default {
  state: {
    newsList: [],
    newsVisualList: [],
    newsDetail: {},
  },
  getters: {
    getNewsList(state) {
      return state.newsList
    },
    getNewsVisualList(state) {
      return state.newsVisualList
    },
    getNewsDetail(state) {
      return state.newsDetail
    },
  },
  mutations: {
    NEWS_LIST(state, value) {
      state.newsList = value
    },
    NEWS_VISUAL_LIST(state, value) {
      state.newsVisualList = value
    },
    NEWS_DETAIL(state, value) {
      state.newsDetail = value
    },
  },
  actions: {
    async NEWS_LIST(context, params = {}) {
      const list = await getNewsList(params)
      context.commit('NEWS_LIST', list)
      return list
    },
    async NEWS_VISUAL_LIST(context, params = {}) {
      const list = await getNewsVisualList(params)
      context.commit('NEWS_VISUAL_LIST', list)
      return list
    },
    async NEWS_DETAIL(context, params = {}) {
      const data = await getNewsDetail(params)
      context.commit('NEWS_DETAIL', data)
      return data
    },
  },
}
