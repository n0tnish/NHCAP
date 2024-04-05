import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import CollectionsView from '../views/CollectionsView.vue'
import SignUpRegister from '../views/SignUpRegister.vue'
import SigninLogin from '../views/SigninLogin.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/collections',
    name: 'collections',
    component: CollectionsView
  },
  {
    path: '/signup',
    name: 'SignUpRegister',
    component: SignUpRegister
  },
  {
    path: '/signin',
    name: 'SigninLogIn',
    component: SigninLogin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router