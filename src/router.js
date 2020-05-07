import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './components/index'
import ShopAddress from './components/shopAddress'
import AboutUs from './components/aboutUs'
import Faq from './components/faq'
import UserCenter from './components/userCenter'
import UserProfile from './components/userProfile'
import UserOrder from './components/userOrder'
import FeedBack from './components/feedBack'
import AccountSafe from './components/accountSafe'
import Fee from './components/fee'
import Search from './components/search'
// import UserOrders from './components/userCenter'

Vue.use(VueRouter)

export const constantRoutes = [
	{path: '/', meta: {title: '脚递ashibro—寄国际快递，上脚递'},component: Index},
	{path: '/shopaddress', component: ShopAddress},
	{path: '/aboutus', component: AboutUs},
	{path: '/fee', component: Fee},
	{path: '/faq', component: Faq},
	{path: '/search', component: Search},
	{
		path: '/usercenter', 
		component: UserCenter,
		children: [
			{
				// 当 /user/:id/profile 匹配成功，
				// UserProfile 会被渲染在 User 的 <router-view> 中
				path: 'profile',
				component: UserProfile
			},
			{
				// 当 /user/:id/posts 匹配成功
				// UserPosts 会被渲染在 User 的 <router-view> 中
				path: 'order',
				component: UserOrder
			},
			{
				path: 'feedback',
				component: FeedBack
			},
			{
				path: 'accountsafe',
				component: AccountSafe
			},
		]
	}
]

const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router