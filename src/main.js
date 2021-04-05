import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
//引入element组件库
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
//使用element组件库
Vue.use(Element)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
