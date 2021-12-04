import Vue from 'vue'
import Router from 'vue-router'//引入路由配置的模块
import VueResource from 'vue-resource'//引入vue-resource插件http请求
//下面这种方法引用也可以
// import HelloWorld from '../components/HelloWorld'//引入需要路由转址的路径
// import Home from '../components/Home'//引入需要路由转址的路径
//路由导航冗余报错（路由重复）

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
return originalPush.call(this, location).catch(err => err)
}




Vue.use(Router)//声明引用，全局使用
Vue.use(VueResource)//声明引用，全局使用

export default new Router({

  // 注意当有多个路由的时候默认使用第一个路由地址
  routes: [//注意routers是一个对象数组
    {
        path: '/',
        name: 'Login',
        component: () => import('../views/Login.vue'),
    },
    {//需要跳转的组件需要import引进
      //路由的地址，此时表示根路径。注意第二个路由地址这里需要添加上组件名
      path: '/Login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
    },
    {//需要跳转的组件需要import引进
      //路由的地址，此时表示根路径。注意第二个路由地址这里需要添加上组件名
      path: '/Index',
      name: 'Index',
      component: () => import('../views/Index.vue'),
    }
  ],
  mode:"history"//去掉url链接中的#符号
})
