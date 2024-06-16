import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('@/views/ProductView.vue')
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('@/views/ActivityView.vue')
    },
    {//活動詳細頁面
      path: '/activity/:id',
      name: 'activitydetail',
      component: () => import('@/views/ActivityDetail.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('@/views/NewsView.vue')
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: () => import('@/views/QuizView.vue')
    },
    {//關於我們-品牌故事
      path: '/aboutstory',
      name: 'aboutstory',
      component: () => import('@/views/AboutStory.vue')
    },
    {
      path: '/memberdiscount',
      name: 'memberdiscount',
      component: () => import('@/views/MemberDiscount.vue')
    },
    { // 會員_個人資料
      path: '/memberinfo',
      name: 'memberinfo',
      component: () => import('@/views/MemberInfo.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/CartView.vue')
    },
    {
      path: '/checkout_activity',
      name: 'checkout_activity',
      component: () => import('@/views/CheckOut-Activity.vue')
    },
    {
      path: '/product/:id',
      name: 'singleproduct',
      component: () => import('@/views/SingleProductView.vue')
    },
  ]
})

export default router
