import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from './modules/auth'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    version: '1.0.0'
  },
  modules: {
    auth
  },
  strict: process.env.NODE_ENV === 'development'
})
