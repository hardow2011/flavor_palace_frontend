<template>
  <ProductForm :product="product" @publish-product="createProduct" @add-product-option="addProductOption" />
</template>

<script>
  import {useProductStore} from "~/stores/product";

  export default {
    setup() {
      const productStore = useProductStore()
      const product = productStore.resetProduct
      return { productStore, product }
    },
    methods: {
      createProduct() {
        this.productStore.createProduct()
      },
      addProductOption() {
        this.productStore.addProductOption()
      },
    }
  }
</script>