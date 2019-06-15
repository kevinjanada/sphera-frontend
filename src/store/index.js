import Vue from 'vue'
import Vuex from 'vuex'
import app from './app.module'
import auth from './auth.module'

Vue.use(Vuex)

// const getDefaultState = () => ({})

export default new Vuex.Store({
  modules: {
    app,
    auth
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
