import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Traders from '../views/Traders.vue';
import Combos from '../views/Combos.vue';
import Login from '../components/users/Login.vue';
import Signup from '../components/users/Signup.vue';
import User from '../components/users/Settings.vue';
import SubLogin from '../components/partials/SubLogin.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/traders/all',
      name: 'Traders',
      component: Traders
    },
    {
      path: '/combos',
      name: 'Combos',
      component: Combos
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signjup',
      component: Signup
    },
    {
      path: '/account-details',
      name: 'SubLogin',
      component: SubLogin
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
