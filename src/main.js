import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/base.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 路由对应的title
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next()
})