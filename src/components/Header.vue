<template>
    <header>
        <nav>
            <div class="logo">
                <router-link tag="a" to="/">Shopping Cart</router-link>
            </div>
            <ul>
                <li><router-link to="/category/men">Men</router-link></li>
                <li><router-link to="/category/woman">Women</router-link></li>
                <li><router-link to="/category/electronics">Electronics</router-link></li>
                <li><router-link to="/category/jewellery">Jewellery</router-link></li>
            </ul>
            <input type="text" placeholder="Search...">
            <router-link to="/cart">
                <div class="cart">
                    <i class="fa fa-shopping-bag"></i>
                    <span v-if="CartCount > 0" id="cart-count">{{ CartCount }}</span>
                </div>
            </router-link>
        </nav>
    </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(['getCartData']),
        CartCount() {
            return this.getCartData.length
        }
    },
    mounted() {
        this.fetchCart()
    },
    methods: {
        ...mapActions(['fetchCart']),
    }
}
</script>

<style scoped>
header {
    background-color: rgba(33, 20, 153, 1);
    position: sticky;
    top: 0;
}
nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 35px 0;
    width: 85%;
    margin: auto;
    color: #fff;
}
.logo {
    user-select: none;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;
    font-family:'Work sans', sans-serif;
}
.logo a {
    color: #fff;
    text-decoration: none;
}
ul {
    display: inherit;
}
ul li {
    list-style-type: none;
    padding: 0 10px;
    font-size: 1.1rem;
}
ul li a {
    color: #fff;
    text-decoration: none;
}
.fa-heart {
    font-size: 1.8rem;
    margin-right: 10px;
    cursor: pointer;
}
.fa-shopping-bag {
    font-size: 1.8rem;
    cursor: pointer;
}
input {
    height: 2.5em;
    width: 30%;
    padding-left: 10px;
    border-radius: 4px;
    border: none;
    outline: none;
}
.cart {
    position: relative;
    color: #fff;
}
#cart-count {
    position: absolute;
    background-color: red;
    top: 0;
    padding: 3px 6px;
    border-radius: 50%;
    font-size: 10px;
    transform: translate(-10px, 10px);
    cursor: pointer;
}
</style>