import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import login from './modules/login'
import home from './modules/home'
import user from './modules/user'




export default new Vuex.Store({
  modules: {
	  login,
	  home,
	  user,
  }
});