import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const ctx = require.context('../views', true, /route\.js$/)
let routes = []
ctx.keys().forEach(element => {
  routes = routes.concat(ctx(element).default)
});
// router.beforeEach((to, from, next) => {
//   const token = store.state.username
//   if (token) {
//     next()
//   } else {
//     if (to.path === '/main') {
//       next('/')
//     } else {
//       next()
//     }
//   }
// })
const router = new VueRouter({
  routes
})

export default router
