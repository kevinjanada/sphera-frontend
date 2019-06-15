import * as mutationTypes from './types/mutationTypes'
import * as getterTypes from './types/getterTypes'
import createMenu from '../api/createMenu'

const state = {
  appDrawer: true,
  appDrawerMenu: [],
  breadCrumbs: {
    paramMask: null
  }
}

const getters = {
  [getterTypes.GETPARAMMASK]: state => state.breadCrumbs.paramMask
}

const mutations = {
  [mutationTypes.TOGGLEDRAWER] (state) {
    state.appDrawer = !state.appDrawer
  },
  [mutationTypes.SETDRAWER] (state, payload) {
    state.appDrawer = payload
  },
  [mutationTypes.SETDRAWERMENU] (state, payload) {
    const menu = createMenu(payload);
    state.appDrawerMenu = [ ...menu ]
  },
  [mutationTypes.SETPARAMMASK] (state, payload) {
    state.breadCrumbs = { ...state.breadCrumbs, paramMask: payload }
  }
}

export default {
  state,
  getters,
  mutations
}