import Vue from 'vue';
import Vuex from 'vuex';

import HomePageStore from './modules/HomePageStore';

Vue.use(Vuex)

export default new Vuex.Store({

  // state: {
  //   count: 0
  // },

  modules: {
    HomePageStore
  }

})
