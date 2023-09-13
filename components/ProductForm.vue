<template>
  <form>
    <label for="product_name">Name</label>
    <input id="product_name" v-model="product.name">
    <br>
    <div v-for="(product_option, index) in product.product_options_attributes">
      <label for="product_description">Description</label>
      <input id="product_description" v-model="product_option.description">
      <br>
      <label for="product_price">Price</label>
      <input id="product_price" type="number" step="0.1" v-model="product_option.price">
      <br>
      <label for="product_quantity">Quantity</label>
      <input id="product_quantity" type="number" step="1" v-model="product_option.quantity">
      <br>
      <label for="product_media">Media</label>
      <input id="product_media" type="file" ref="file" @change="uploadFile($event, index)" alt="">
      {{ product_option }}
    </div>
    <label for="product_hidden">Hidden</label>
    <input
        id="product_hidden"
        type="checkbox"
        v-model="product.hidden"
        true-value="true"
        false-value="false"/>
    <button @click.prevent="$emit('publishProduct')">Create product</button>
  </form>
</template>

<script setup>

  const { product } = defineProps(['product'])

  function uploadFile(event, product_option_index) {
    let formData = new FormData();
    let file = event.target.files[0]

    formData.append('media', file)
    formData.append('order', 1)

    product.product_options_attributes[product_option_index].image = formData
  }

</script>