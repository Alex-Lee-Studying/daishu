import { getTravels } from '@/api/travel'

const getDefaultState = () => {
  return {
    travels: [],
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
  SET_TRAVELS: (state, list) => {
    state.travels = list
  }
}

const actions = {
  // 行程列表
  getTravels({ commit }, params) {
    // params.page = state.page
    // params.pageSize = state.pageSize
    return new Promise((resolve, reject) => {
      getTravels(params).then(response => {
        commit('SET_TRAVELS', response)
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
