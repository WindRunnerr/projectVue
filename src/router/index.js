import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const ctx = require.context('../views', true, /route\.js$/)
let routes = [
  {
    path: '/',
    redirect: '/login'
  }
]
ctx.keys().forEach(element => {
  routes = routes.concat(ctx(element).default)
});

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // ...
  const username = sessionStorage.getItem('username')
  // next()
  // if (username) {
  //   next()
  // } else {
  //   next({
  //     name: 'login'
  //   })
  // }
  if (to.name !== 'login' && !username) next({ name: 'login' })
  else next()
})

export default router
