// /src/router/module/home.js
export const home = [
    {
		path: '/',
		component: () => import('@/views/Main.vue')
	},
	{
		path: '/home',
		component: () => import('@/views/Home.vue')
	},
    {
		path: '/a1/:id',
        props: true,
		component: () => import('@/views/AAA.vue')
	},
    {
		path: '/a2/:id',
        props: true,
		component: () => import('@/views/AAA.vue')
	},
    {
		path: '/a3/:id',
        props: true,
		component: () => import('@/views/AAA.vue')
	},
]
const module = [...home]

import VueRouter from 'vue-router'
import Vue from 'vue'

// 使用VueRouter
Vue.use(VueRouter)

const routes = [
	...module
]

const router = new VueRouter({
	mode: 'history',
	base: '/',
	routes
})

export default router
