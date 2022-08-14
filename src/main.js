import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less' // 引入全局样式
import Vant from 'vant'
import 'vant/lib/index.css' // 引入vant样式
import 'amfe-flexible' // 引入移动端rem适配工具

Vue.config.productionTip = false
Vue.use(Vant) // 挂载vant

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
