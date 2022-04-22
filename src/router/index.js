import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const ctx = require.context('../views', true, /route\.js$/)
let routes = []
ctx.keys().forEach(element => {
  routes = routes.concat(ctx(element).default)
});


const router = new VueRouter({
  routes
})

export default router
