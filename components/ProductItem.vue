<template>
  <NuxtLink :to="'products/'+`${product.permalink}`+'/update'">{{ product.name }}</NuxtLink>
  <img :src="productImageSrc" alt="" srcset="">
</template>

<script setup>
  const { product } = defineProps(['product'])

  // const productImageSrc = computed(() => product.product_options_attributes[0].images[0].media_url)
  const productImageSrc = computed(function() {

    try {
      return product.product_options_attributes[0].images[0].media_url
    }catch (err) {
      return null
    }
  })

</script>