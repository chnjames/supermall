import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//push
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: () => import('../views/home/Home'),
    meta: {
      showTab: true
    }
  }, {
    path: '/category',
    component: () => import('../views/category/Category'),
    meta: {
      showTab: true
    }
  }, {
    path: '/cart',
    component: () => import('../views/cart/Cart'),
    meta: {
      showTab: true
    }
  }, {
    path: '/profile',
    component: () => import('../views/profile/Profile'),
    meta: {
      showTab: true
    }
  }, {
    path: '/goodsDetail/:id',
    component: () => import('../views/goodsDetail/goodsDetail')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
