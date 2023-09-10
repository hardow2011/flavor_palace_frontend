<template>
  <ProductForm :product="product" @publish-product="createProduct" />
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