import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'//引入路由指定文件

//引入定义的页面
import Login from './views/Login.vue'
import Index from './views/Index.vue'

Vue.config.productionTip = false

new Vue({
  router,//实例化，表示会使用
  Login,
  Index,
  App,
  render: h => h(App),
}).$mount('#app')
