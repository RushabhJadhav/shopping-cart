import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
        cart: [],
    },
    getters: {
        getData: state => state.products,
        getCartData: state => state.cart,
    },
    mutations: {
        SET_DATA(state, data) {
            state.products = data
        },
        GET_CART(state, product) {
            state.cart = product
        },
        ADD_TO_CART(state, product) {
            state.cart.push(product)
        }
    },
    actions: {
        fetchData({commit}) {
            fetch('http://localhost:3000/items')
            .then(res => res.json())
            .then(data => commit('SET_DATA', data))
        },
        fetchCart({commit}) {
            fetch('http://localhost:3000/cart')
            .then(res => res.json())
            .then(product => commit('GET_CART', product))
        },
        addToCart({commit}, product) {
            fetch('http://localhost:3000/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            })
            .then(res => res.json)
            .then(product => {
                commit('ADD_TO_CART', product)
            })
        },
    },
})