import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Post from '../views/Post.vue'
import ErrorPage from '../views/ErrorPage.vue'
import Dash from '../views/Dash.vue'

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
    path: '/post/:id',
    name: 'Post',
    component: Post
  },
  {
    path: '/error',
    name: 'Error',
    component: ErrorPage
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'CatchAll',
    component: ErrorPage
  },
  {
    path: '/dashboard',
    name: 'Dasboard',
    component: Dash
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
