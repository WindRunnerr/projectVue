import ElementUI from 'element-ui'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css'

// 导航守卫
// router.beforeEach((to, from, next) => {
//   const token = sessionStorage.getItem('username')
//   if (token) {
//     next()
//   } 
//   else {
//     if (to.path === '/') {
//       next('/')
//     } else {
//       next()
//     }
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
