import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ './views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ './views/ContactView.vue')
  },
  {
    path: '/collections',
    name: 'collections',
    component: () => import(/* webpackChunkName: "collections" */ './views/CollectionsView.vue')
  },
  {
    path: '/signup',
    name: 'SignUpRegister',
    component: () => import(/* webpackChunkName: "signup" */ './views/SignUpRegister.vue')
  },
  {
    path: '/signin',
    name: 'SigninLogIn',
    component: () => import(/* webpackChunkName: "signin" */ './views/SigninLogin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router