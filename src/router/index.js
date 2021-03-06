import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/menu/Home.vue'
import Dashboard from '../views/home/Dashboard.vue'
import HomePage from '../views/home/HomePage.vue'

// import Order from '../views/order/Order.vue'
// import UserManger from '../views/userManger/UserManger.vue'
// import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/',
    name: 'home',
    // redirect: 'login',
    // redirect: 'login',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: '仪表盘'
        },
        component: Dashboard
      },
      {
        path: '/homePage',
        name: 'homePage',
        meta: {
          title: '首页详情'
        },
        component: HomePage
      },
      {
        path: '/order',
        name: 'order',
        meta: {
          title: '订票详情',
          keepAlive: true
        },
        component: () => import('../views/order/Order.vue')
      },
      {
        path: '/orderList',
        name: 'OrderList',
        meta: {
          title: '订票详情'
        },
        component: () => import('../views/order/OrderList.vue')
      },
      {
        path: '/userManger',
        name: 'userManger',
        meta: {
          title: '用户管理'
        },
        // component: UserManger
        component: () => import('@/views/userManger/UserManger.vue')
      },
      {
        path: '/isComponent',
        name: 'isComponent',
        meta: {
          title: '动态组件',
          keepAlive: true
        },
        // component: UserManger
        component: () => import('@/views/isComponent/index.vue')
      },
      {
        path: '/isKeepAlive',
        name: 'isKeepAlive',
        meta: {
          title: '缓存组件',
          keepAlive: true
        },
        // component: UserManger
        component: () => import('@/views/isKeepAlive/Table.vue')
      },
      {
        path: '/keepAliveDetail',
        name: 'keepAliveDetail',
        meta: {
          title: '列表详情'
        },
        // component: UserManger
        component: () => import('@/views/isKeepAlive/Detail.vue')
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
