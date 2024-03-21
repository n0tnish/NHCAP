import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/../src/views/AboutView.vue',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/../src/views/ContactView.vue',
    name: 'contact',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import (/*djfnnsnfnc*/'../views/ContactView.vue')
  },
  {
    path: '/../src/views/CollectionsView.vue',
    name: 'Collections',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import (/*djfnnsnfnc*/'../views/CollectionsView.vue')
  },
  {
    path: '/../src/views/Collections/JilbabView.vue',
    name: 'Jilbab',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import (/*djfnnsnfnc*/'../views/Collections/JilbabView.vue')
  },
  {
    path: '/../src/views/Collections/PrayerMatsTasbih.vue',
    name: 'PrayerMatsTasbih',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import (/*djfnnsnfnc*/'../views/Collections/PrayerMatsTasbih.vue')
  },
  {
    path: '/../src/views/SigninLogin.vue',
    name: 'SigninLogin',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import (/*djfnnsnfnc*/'../views/ContactView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
