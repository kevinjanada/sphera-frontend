/* eslint-disable */
import * as actionTypes from './types/actionTypes';
import * as mutationTypes from './types/mutationTypes';
// import tokenServices from '../common/tokenService';

const state = {
}

const getters = {
}

const actions = {
  [actionTypes.LOGIN] : async ({ commit }, payload) => {
  },
  [actionTypes.LOGOUT] ({ commit }) {
  }
}

const mutations = {
  [mutationTypes.SETROLE] (state, payload) {
    state.isAuthenticated = true;
    const { role } = payload;
    state.role = role;
  },
  [mutationTypes.PURGEAUTH] (state) {
    state.isAuthenticated = false;
    state.role = null;
    // tokenServices.destroy();
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
