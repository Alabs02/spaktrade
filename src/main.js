/* eslint-disable no-unused-labels */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from '../firebase';

Vue.config.productionTip = false

let app = "";

// eslint-disable-next-line no-unused-vars
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    new Vue({
      router,
      store,
      vuetify,
      firebase,

      data() {
        stripe_public_key: process.env.STRIPE_PUBLIC_KEY
        stripe_secret_key: process.env.STRIPE_SECRET_KEY
      },

      created() {
        console.log(this.stripe_public_key, this.stripe_secret_key);
      },

      render: h => h(App)
    }).$mount('#app')
  }
})


