import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '@/views/DataBinding.vue'
import IfBinding from '@/views/IfBinding.vue'
import OnEvent from '@/views/OnEvent.vue'
import ComputedWatch from '@/views/ComputedWatch.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, {
    path: '/data',
    name: 'data',
    component: DataBinding
  },
  {
    path: '/list',
    name: 'list',
    component: () => import( /* webpackChunkName: "about" */ '@/views/ListBinding.vue')
  },
  {
    path: '/if',
    name: 'if',

    component: IfBinding
  },
  {
    path: '/event',
    name: 'event',
    component: OnEvent
  },
  {
    path: '/computedWatch',
    name: 'computedWatch',
    component: ComputedWatch
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router