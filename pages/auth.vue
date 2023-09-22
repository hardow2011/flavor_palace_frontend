<script setup lang="ts">
  import {useUserStore} from "~/stores/user";

  const userStore = useUserStore()
  const route = useRoute()
  const login_token = route.query.login_token
  userStore.createUserSession(login_token)
</script>

<template>

</template>

<style scoped>

</style>