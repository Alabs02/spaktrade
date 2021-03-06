import Vue from 'vue'
import Vuex from 'vuex'
// eslint-disable-next-line no-unused-vars
const fb = require('../firebaseConfig')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
    currentUserEmail: "",
    showLoginBtn: true,
    userProfile: {},
    userName: null,
    userNumber: null,
  },
  mutations: {
    SETCURRENTUSER(state, payload) {
      state.currentUser = payload
    },
    SETUSERPROFILE(state, payload) {
      state.userProfile = payload
    },
    async SETUSEREMAIL(state, val) {
      state.currentUserEmail = await val
    },
    SHOWLOGINBTN(state, payload) {
      state.showLoginBtn = payload
    },
    USERNAME(state, val) {
      state.userName = val
    },
    GETUSERNUMB(state, val) {
      state.userNumber = val
    }
  },
  actions: {
    fetchUserProfile({ commit, state }) {
      fb.userCollection.doc(state.currentUser.uid).get().then(res => {
        commit('SETUSERPROFILE', res.data())
      }).catch(err => {
        console.error(err)
      })
    },
    getUserNumb({ commit }, val) {
      commit('GETUSERNUMB', val)
    }
  },
  modules: {
  }
})
