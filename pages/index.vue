<template>
  <ul>
    <li v-for="product in productStore.products">
      <ProductItem :product="product"></ProductItem>
    </li>
  </ul>
</template>

<script setup>
  import {useProductStore} from "~/stores/product";

  const productStore = useProductStore()
  productStore.setProducts()
</script>