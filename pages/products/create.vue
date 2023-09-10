<template>
  <form>
    <label for="product_name">Name</label>
    <input id="product_name" v-model="product.name">
    <br>
    <label for="product_description">Description</label>
    <input id="product_description" v-model="product.description">
    <br>
    <label for="product_price">Price</label>
    <input id="product_price" type="number" step="0.1" v-model="product.price">
    <br>
    <label for="product_quantity">Quantity</label>
    <input id="product_quantity" type="number" step="1" v-model="product.quantity">
    <br>
    <label for="product_hidden">Hidden</label>
    <input
        id="product_hidden"
        type="checkbox"
        v-model="product.hidden"
        true-value="true"
        false-value="false" />
    <br>
    <button @click.prevent="createProduct">Create product</button>
  </form>
</template>

<script>
  import {useProductStore} from "~/stores/product";

  export default {
    setup() {
      const productStore = useProductStore()
      const product = productStore.product
      return { productStore, product }
    },
    methods: {
      createProduct() {
        this.productStore.createProduct()
      }
    }
  }
</script>