import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // beforeEnter: (to, from) => {
    //   // reject the navigation
    //   console.log(to, from);

    //   return false
    // },
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/User/:aaa',
    name: 'about',
    // props: true,
    props: route => {
      console.log(route);
      return { bbb: route.params.aaa }
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),

  },
  { path: '/redirect', name: 'redirect', redirect: '/about' },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]
const router = new VueRouter({
  // mode: 'history',
  routes,
  scrollBehavior() {
    return { x: 99990, y: 99990 }
  }

})
router.beforeEach((to, from, next) => {
  // ...
  // 返回 false 以取消导航
  next()
})
router.beforeResolve((to, from, next) => {
  next()
})

export default router
