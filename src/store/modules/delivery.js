import { getDeliveries } from '@/api/delivery'

const getDefaultState = () => {
  return {
    deliveries: [],
    // page: 0,
    // pageSize: 20
  }
}

const state = getDefaultState()

const mutations = {
  // SET_PAGE: (state, page) => {
  //   state.page = page
  // },
  // SET_PAGESIZE: (state, pageSize) => {
  //   state.pageSize = pageSize
  // },
  SET_DELIVERIES: (state, list) => {
    state.deliveries = list
  }
}

const actions = {
  // 求带列表
  getDeliveries({ commit }, params) {
    // params.page = state.page
    // params.pageSize = state.pageSize
    return new Promise((resolve, reject) => {
      getDeliveries(params).then(response => {
        commit('SET_DELIVERIES', response)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
