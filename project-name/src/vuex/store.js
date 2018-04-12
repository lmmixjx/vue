import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    message: '',
    pagetitle: null,
    username: ''
  },
  mutations: {
    setTitle (state, payload) {
      state.pagetitle = payload
    },
    delTitle (state, payload) {
      console.log(state)
      state.pagetitle = null
    },
    setUsername (state, payload) {
      state.username = payload
    }
  }
})

export default store
