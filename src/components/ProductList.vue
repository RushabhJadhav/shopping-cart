<template>
  <div>
    <header-cont @filterSearch="filterItems($event)"></header-cont>
    <div class="product-cont">
      <div class="product-item" v-for="product in getData" :key="product.id">
        <h2 class="title">{{ product.title.slice(0, 50) }}</h2>
        <img class="product-img" :src="product.image">
        <div class="desc">{{ product.description.slice(0, 130) + "..." }}</div>
        <div class="price">${{ product.price }}</div>
        <button @click="addItemToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    'header-cont': Header
  },
  computed: {
    ...mapGetters(['getData'])
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions(['fetchData', 'addToCart']),
    addItemToCart(product) {
      this.addToCart(product)
    }
  }
}
</script>

<style scoped>
.product-cont {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin: 50px 0;
}
.product-item {
  border: 1px solid rgba(84, 83, 82, .3);
  width: 300px;
  height: 450px;
  gap: 20px;
  display: inherit;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
  padding: 40px 20px;
  transition: box-shadow .5s ease-in-out;
}
.product-item:hover {
  box-shadow: 6px 6px 20px #aaaaaa;
}
.title {
  font-size: 1rem;}
.desc {
  text-align: justify;
  font-size: .8rem;
  /* overflow: hidden;
  text-overflow: ellipsis;
  height: 150px; */
}
.product-img {
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
</style>