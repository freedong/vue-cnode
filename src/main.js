// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
// 报着两个错误是因为在这儿没有配置好vuex,不能用vuex这个变量名字
// Cannot read property 'state' of undefined
// Cannot read property 'dispatch' of undefined

// 引用基础样式
import '../static/reset.less'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
