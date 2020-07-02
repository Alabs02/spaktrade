import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Traders from '../views/Traders.vue';
import Tool from '../views/Trade.vue';
import Combos from '../views/Combos.vue';
import Tutorials from '../views/TradingTutorials.vue';
import Login from '../components/users/Login.vue';
import Forgot from '../components/users/ForgotPassword.vue';
import Signup from '../components/users/Signup.vue';
import User from '../components/users/Settings.vue';
import SubLogin from '../components/partials/SubLogin.vue';
import Welcome from '../components/partials/Welcome.vue';
import Calendar from '../components/partials/Calendar.vue';
import firebase from 'firebase';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      
    ]
    },
    {
      path: '/tutorials',
      name: 'Tutorials',
      component: Tutorials,
      meta: { requiresAuth: true }
    },
    {
      path: '/tool',
      name: 'Tool',
      component: Tool,
      meta: { requiresAuth: true }
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
      component: Traders,
      meta: { requiresAuth: true }
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
      meta: { requiresAuth: true }
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
      path: '/reset',
      name: 'Forgot',
      component: Forgot
    },
    {
      path: '/signup',
      name: 'Signjup',
      component: Signup
    },
    {
      path: '/account-details',
      name: 'SubLogin',
      component: SubLogin,
      meta: { requiresAuth: true }
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      meta: { requiresAuth: true }
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome,
      meta: { requiresAuth: true }
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
    next('/login')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router
