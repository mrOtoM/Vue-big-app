import mutations from './mutations.js';
import actions from './actions';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations,
  actions,
  getters,
};
