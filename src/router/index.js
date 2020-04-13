import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:resolve => require(['../views/Home.vue'], resolve),
  },
  {
    path: '/Information',
    name: 'Information',
    component:resolve => require(['../views/information.vue'], resolve),
  }
]

const router = new VueRouter({
  routes
})

export default router
