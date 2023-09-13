<template>
  <ul>
    <li v-for="product in productStore.products">
      <ProductItem :product="product"></ProductItem>
    </li>
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