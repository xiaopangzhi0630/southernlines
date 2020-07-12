import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/menu/Home.vue'
import Dashboard from '../views/home/Dashboard.vue'
import HomePage from '../views/home/HomePage.vue'

import Order from '../views/order/Order.vue'
import UserManger from '../views/userManger/UserManger.vue'
// import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Home',
    component: Home,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: '/homePage',
        name: 'homePage',
        component: HomePage
      },
      {
        path: '/order',
        name: 'order',
        component: Order
      },
      {
        path: '/userManger',
        name: 'userManger',
        component: UserManger
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/about/About.vue')
  }
]

// 解决重复点击菜单栏报错误信息
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return (originalPush.call(this, location)).catch((err) => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
