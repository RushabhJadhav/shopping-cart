import Vue from 'vue'
import App from './App.vue'
import Store from './store/store'
import VueRouter from 'vue-router'
import Routes from './routes/routes'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  store: Store,
  router: router,
  render: h => h(App),
}).$mount('#app')
