import Vue from 'vue'
import Vuex from 'vuex'

import state from './state.js' //状态
import getters from './getters.js' //状态计算
import mutations from './mutations.js' //突变
import actions from './actions.js' //方法(触发突变的)

Vue.use(Vuex);
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
