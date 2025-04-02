import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmployeeList from '@/views/EmployeeList.vue'
import EmployeeInfo from '@/views/EmployeeInfo.vue'
import EmployeeAdd from '@/views/EmployeeAdd.vue'
import EmployeeUpdate from '@/views/EmployeeUpdate.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {    
    path: '/list',
    name: 'list',
    component: EmployeeList
  },
  {    
    path: '/info',
    name: 'info',
    component: EmployeeInfo
  },
  {    
    path: '/add',
    name: 'add',
    component: EmployeeAdd
  },
  {    
    path: '/update/:id',
    name: 'update',
    component: EmployeeUpdate
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
