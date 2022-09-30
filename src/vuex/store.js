// src/vuex/store.js
//import Vue from 'vue'
import {createApp} from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import App from '../App'

//Vue.use(Vuex)
createApp(App).use(Vuex)

const state = {
  uid: '',
  errorState: '',
  isAuth: false
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})