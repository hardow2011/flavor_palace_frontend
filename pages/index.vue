<template>
  <ul>
    <li v-for="product in productStore.products"><NuxtLink :to="'products/'+`${product.permalink}`+'/update'">{{ product.name }}</NuxtLink></li>
  </ul>
</template>

<script>

  import { useProductStore } from "~/stores/product";

  export default {
    setup() {
      const productStore = useProductStore()
      productStore.setProducts()
      return { productStore }
    }
  }

</script>