/* eslint-disable no-unused-labels */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
const fb = require('./firebaseConfig')
import VueFirestore from 'vue-firestore'

Vue.config.productionTip = false

Vue.use(VueFirestore);

let app;

// eslint-disable-next-line no-unused-vars
fb.auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})


