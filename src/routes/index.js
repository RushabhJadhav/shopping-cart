import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from '../components/ProductList'
import Cart from '../components/Cart'
import Category from '../components/category/Category'

Vue.use(VueRouter)

const Routes = [
    {path: '/', component: ProductList },
    {path: '/cart', component: Cart },
    {path: '/category/:name', component: Category, props: true}
]

export default new VueRouter({
    routes: Routes,
    mode: 'history'
})
