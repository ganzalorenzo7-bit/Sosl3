import { createRouter, createWebHistory } from 'vue-router'
import Home from '../vue/home.vue'
import About from './about.vue'
import Images from './images.vue'
import Contact from './contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/images',
      component: Images
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
})
export default router
