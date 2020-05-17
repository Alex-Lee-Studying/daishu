import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'
import './style/reset.css'
import './style/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/element-variables.scss'
import './style/common.css'
import globalVariable from './config.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueI18n from 'vue-i18n' //多语言包 ISO-639标准标识


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI);
Vue.use(VueAxios, axios)
Vue.use(VueI18n)

Vue.prototype.GLOBAL = globalVariable

// Vue.directive('title', {
//   inserted: function (el, binding) {
//     document.title = el.dataset.title
//   }
// })
const i18n = new VueI18n({
    locale: 'zh',  // 语言标识
    messages: {
        'zh': require('./common/zh'),
        'en': require('./common/en')
    }
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }

  var viewWidth = document.documentElement.clientWidth
  if (viewWidth > 1280) {
    viewWidth = 1280
  }
  document.documentElement.style.fontSize = viewWidth / 12.8 + 'px'
  var a = document.getElementsByTagName('a')
  for (var i = 0; i < a.length; i++) {
    a[i].addEventListener('touchstart', function () {}, false)
  }

  next()
})
new Vue({
	router,
  store,
	i18n,
  render: h => h(App),
}).$mount('#app')

