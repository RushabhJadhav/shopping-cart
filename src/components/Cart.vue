<template>
    <div>
        <header-cont></header-cont>
        <div class="cart-cont">
          <div class="cart-item-cont">
              <div v-for="item in getCartData" :key="item.id" class="cart-item">
                  <h2 class="title">{{ item.title }}</h2>
                  <img class="cart-img" :src="item.image">
                  <p class="desc">{{ item.description}}</p>
                  <p class="price">${{ item.price }}</p>
                  <button @click="removeItem(item.id), openBottom()">Remove from cart</button>
              </div>
          </div>
          <div class="total-cont">
            <h2 v-if="totalPrice > 0">Total : ${{ totalPrice }}</h2>
            <h2 id="empty-cart" v-if="totalPrice == 0">
              Your cart is empty <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </h2>
          </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Header from './Header.vue'

export default {
    data() {
      return {}
    },
    components: {
        'header-cont': Header
    },
    mounted() {
      this.fetchCart()
    },
    computed: {
        ...mapGetters(['getCartData'], ['getTotalPrice']),
        totalPrice() {
          return this.getCartData.reduce((acc, item) => acc + item.price, 0).toFixed(2);
        },
      },
      methods: {
        ...mapActions(['fetchCart']),
        ...mapMutations(['GET_CART']),
        openBottom(){
          this.$toast('Item deleted from the cart');
    },
    removeItem(itemId) {
      fetch(`http://localhost:3000/cart/${itemId}`, {
        method: 'DELETE'
      })
      .then(response => {
        if (response.ok) {
          const updatedCart = this.getCartData.filter(item => item.id !== itemId);
          this.GET_CART(updatedCart);
        } else {
          throw new Error('Item deletion failed.');
        }
      })
    }
  }
}
</script>

<style scoped>
.cart-cont {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  margin: 80px auto;
  row-gap: 10px;
}
.cart-item-cont {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.cart-item {
  border: 1px solid grey;
  border-bottom: none;
  width: 100%;
  gap: 20px;
  display: inherit;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
}
.cart-item:last-of-type {
  border-bottom: 1px solid grey;
}
.title {
  font-size: 1rem;
}
.desc {
  text-align: center;
  font-size: 1rem;
}
.cart-img {
  width: 80%;
  height: 150px;
  object-fit: contain;
}
.price {
  font-weight: bold;
}
button {
  padding: 15px 30px;
  border: none;
  border-radius: 30px;
  background-color: rgba(19, 133, 240, 1);
  color: #fff;
  user-select: none;
  cursor: pointer;
}
button:hover {
  background-color: rgba(19, 133, 240, .7);
}
.total-cont {
  border: 1px solid grey;
  width: 100%;
}
.total-cont h2 {
  text-align: left;
  margin: 20px;
}
#empty-cart {
  text-align: center;
}
</style>