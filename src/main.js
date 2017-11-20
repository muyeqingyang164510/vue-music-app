import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload' // 懒加载插件

import 'common/stylus/index.styl'
fastclick.attach(document.body)
Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})
/* eslint-disable no-new */
// 其实只是简写的方式。注释
// 如果不涉及使用this的话下面这个也是等价的
// {
//     render: function (h) {
//         return h(App)  h 为 createElement 函数
//     }
// }
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
