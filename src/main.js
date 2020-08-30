import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'

Vue.config.productionTip = false

// vue中原是没有事件总线$bus的，需要使用原型来设置一个vue实例作为事件总线
Vue.prototype.$bus = new Vue()
// 安装toast插件
Vue.use(toast)

// 解决移动端300ms延迟

// 使用懒加载的插件
Vue.use(
  VueLazyLoad,{
    //加载中的图片
  loading: require('./assets/img/common/placeholder.png'),
  //错误时的图片
  error:""
//其他属性
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
