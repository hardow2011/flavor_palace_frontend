<template>
  <div>
    <ProductForm :product="productStore.getProduct" @publish-product="updateProduct" @add-product-option="addProductOption" />
  </div>
</template>

<script>
  import { useProductStore } from "~/stores/product";

  export default {
    setup() {
      const { permalink } = useRoute().params
      const productStore = useProductStore()
      productStore.setProductByPermalink(permalink)
      const product = productStore.getProduct
      return { productStore, product }
    },
    methods: {
      updateProduct() {
        this.productStore.updateProduct()
      },
      addProductOption() {
        this.productStore.addProductOption()
      }
    }
  }

</script>