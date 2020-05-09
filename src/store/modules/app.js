const state = {
  loginVisible: false,
  registerVisible: false,
}

const mutations = {
  SET_LOGINVISIBLE: (state, status) => {
    state.loginVisible = status
  },
  SET_REGISTERVISIBLE: (state, status) => {
    state.registerVisible = status
  }
}

const actions = {
  showLogin({ commit }, status) {
    commit('SET_LOGINVISIBLE', status)
  },
  showRegister({ commit }, status) {
    commit('SET_REGISTERVISIBLE', status)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
