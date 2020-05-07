import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  getters: {
    token: state => state.user.token,
    userinfo: state => state.user.user
  },
  modules: {
    user: user
  }
})

export default store
