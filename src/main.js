import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Store from './store'
import Router from './routes'
Vue.use(VueRouter)
Vue.config.productionTip = false


new Vue({
  store: Store,
  router: Router,
  render: h => h(App),
}).$mount('#app')
