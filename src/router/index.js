import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Story from '../components/Story.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
   {
    path: '/Story',
    name: 'Story',
    component: Story
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
