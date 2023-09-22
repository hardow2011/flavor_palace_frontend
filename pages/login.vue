<template>
  <form>
    <input type="email" v-model="user.email">
    <button @click.prevent="login">Log in</button>
  </form>
</template>

<script setup>

  import {useUserStore} from "~/stores/user";

  const userStore = useUserStore()
  const user = userStore.user

  function login() {
    userStore.authenticateUser()
  }

  definePageMeta({
    layout: false,
  })

</script>

<style scoped>

</style>
