import Vue from 'vue'
import VueRouter from 'vue-router'

// 1,安装插件
Vue.use(VueRouter)

const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Cart = () => import('views/cart/Cart.vue')
const Profile = () => import('views/profile/Profile.vue')

const routes = [
{
   path: '',
   redirect:'/home',
 },
 {
   path:'/home',
   component: Home,
   meta: {
     title: '首页'
   }
 },
 {
   path: '/category',
   component: Category,
   meta: {
     title: '分类'
   }
 },
 {
   path: '/cart',
   component: Cart,
   meta: {
     title: '购物车'
   }
 },
 {
   path: '/profile',
   component: Profile,
   meta: {
     title: '我的'
   }
 }
]

// 2,创建router
const router = new VueRouter({
    routes,
    mode:'history'
})

export default router
