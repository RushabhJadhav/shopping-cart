import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Store from './store'
import Router from './routes'
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
Vue.use(Toast);
Vue.use(VueRouter)
Vue.config.productionTip = false


new Vue({
  store: Store,
  router: Router,
  render: h => h(App),
}).$mount('#app')
