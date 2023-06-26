import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from '../components/ProductList'
import Cart from '../components/Cart'
import Category from '../components/category/Category'
import store from '../store'

Vue.use(VueRouter)

const Routes = [
    {path: '/', component: ProductList },
    {path: '/cart', component: Cart },
    {
        path: '/category/:name',
        component: Category,
        props: (route) => {
            const category = route.params.name.toLowerCase();
            let categoryData = [];
      
            switch (category) {
              case 'men':
                categoryData = store.getters.getMenData;
                break;
              case 'women':
                categoryData = store.getters.getWomenData;
                break;
              case 'electronics':
                categoryData = store.getters.getElecData;
                break;
              case 'jewellery':
                categoryData = store.getters.getJewData;
                break;
              default:
                break;
            }
      
            return {
              name: category,
              categoryProducts: categoryData,
            };
          },
    }
]

export default new VueRouter({
    routes: Routes,
    mode: 'history'
})
