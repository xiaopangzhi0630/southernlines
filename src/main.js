import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'

import './assets/css/base.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)



// 路由对应的title
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next()
})


Vue.config.productionTip = false


new Vue({
  router,
  store:store,
  render: h => h(App)
}).$mount('#app')


