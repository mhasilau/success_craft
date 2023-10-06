import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/pages/HomePage.vue'
import AboutPage from '@/components/pages/About.vue'
import FrameworksPage from '@/components/pages/Frameworks.vue'
import AppsPage from '@/components/pages/Applications.vue'
import ContactPage from '@/components/pages/Contacts.vue'

const routes = [
  { path: '/', component: HomePage, alias: '/home' },
  { path: '/about', component: AboutPage},
  { path: '/frameworks', component: FrameworksPage},
  { path: '/applications', component: AppsPage},
  { path: '/contact', component: ContactPage},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
