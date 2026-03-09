import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import HiringMinibus from '../views/HiringMinibus.vue'
import Membership from '../views/Membership.vue'
import Volunteering from '../views/Volunteering.vue'
import Fleet from '../views/Fleet.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/',             component: Home },
  { path: '/about',        component: About },
  { path: '/hire',         component: HiringMinibus },
  { path: '/membership',   component: Membership },
  { path: '/volunteering', component: Volunteering },
  { path: '/fleet',        component: Fleet },
  { path: '/contact',      component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
