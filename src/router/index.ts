import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

const router = new Router({
  routes,
  mode: 'hash'
})

// 跳转之前
router.beforeEach((to, from, next) => {
  console.log(from, "====to====")
  next()
})

// 跳转之后
router.afterEach(to => {
  //
})

export default router