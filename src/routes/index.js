import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from '../components/ProductList'
import Cart from '../components/Cart'
import Men from '../components/category/Men'
import Women from '../components/category/Women'
import Electronics from '../components/category/Electronics'
import Jewellery from '../components/category/Jewellery'

Vue.use(VueRouter)

const Routes = [
    {path: '/', component: ProductList },
    {path: '/cart', component: Cart },
    {path: '/men', component: Men },
    {path: '/women', component: Women },
    {path: '/electronics', component: Electronics},
    {path: '/jewellery', component: Jewellery}
]

export default new VueRouter({
    routes: Routes,
    mode: 'history'
})
