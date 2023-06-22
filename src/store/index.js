import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    getters: {
        getData: state => state.products,
        getCartData: state => state.cart,
        getMenData: state => state.products.filter(function(item) {
            return item.category == "men's clothing";
        }),
        getWomenData: state => state.products.filter(function(item) {
            return item.category == "women's clothing";
        }),
        getElecData: state => state.products.filter(function(item) {
            return item.category == "electronics";
        }),
        getJewData: state => state.products.filter(function(item) {
            return item.category == "jewelery";
        })
    },
    mutations: {
        SET_DATA(state, data) {
            state.products = data
        },
        GET_CART(state, product) {
            state.cart = product
        },
        removeFromCart(state, itemId) {
            state.cart = state.cart.filter((item) => item.id !== itemId);
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
            .then(product => commit('ADD_TO_CART', product))
        },
        removeCart({commit}, product) {
            fetch(`http://localhost:3000/cart${product}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
                .then(res => res.json())
                .then(product => commit('RemoveFromCart', product))
            })
        }
    },
})