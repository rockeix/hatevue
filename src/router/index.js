import { createRouter, createWebHistory } from 'vue-router'
import main from '../views/main.vue'
import adminUserInfo from '../views/adminUserInfo.vue'
import adminGoodsList from '../views/adminGoodsList.vue'
import adminGoodsUpdate from '../views/adminGoodsUpdate.vue'
import adminGoodsAdd from '../views/adminGoodsAdd.vue'
import adminOrderM from '../views/adminOrderM.vue'
import login from '../views/login.vue'
import find from '../views/find.vue'
import productList from '../views/productList.vue'
import cart from '../views/cart.vue'
import event from '../views/event.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  
  {
    path: '/adminUserInfo',
    name: adminUserInfo,
    component: adminUserInfo
  },
  {
    path: '/adminGoodsList',
    name: adminGoodsList,
    component: adminGoodsList
  },
  {
    path: '/adminGoodsUpdate',
    name: adminGoodsUpdate,
    component: adminGoodsUpdate
  },
  {
    path: '/adminGoodsAdd',
    name: adminGoodsAdd,
    component: adminGoodsAdd,
  },
  {
    path: '/adminOrderM',
    name: adminOrderM,
    component: adminOrderM,
  },
  {
    path: '/',
    name: main,
    component: main
  },
  {
    path: '/find',
    name: find,
    component: find,
  },
  {
    path: '/login',
    name: login,
    component: login,
  },
  {
    path: '/productList',
    name: productList,
    component: productList,
  },
  {
    path: '/cart',
    name: cart,
    component: cart,
  },
  {
    path: '/event',
    name: event,
    component: event
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
