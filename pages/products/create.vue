<template>
  <form>
    <label for="product_name">Name</label>
    <input id="product_name" v-model="product.name">
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