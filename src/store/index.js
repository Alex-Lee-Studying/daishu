import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  getters: {
    loginVisible: state => state.app.loginVisible,
    registerVisible: state => state.app.registerVisible,
    token: state => state.user.token,
    userinfo: state => state.user.user
  },
  modules: {
    user: user,
    app: app
  }
})

export default store
