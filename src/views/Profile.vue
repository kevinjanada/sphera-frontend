<template>
  <v-layout>
    <h2>hehe</h2>
  </v-layout>
</template>

<script>

export default {
  data: () => ({
    loading: false,
    alert: {
      message: null,
      show: false,
    },
    model: {
      username: '',
      password: '',
      confirmpass: '',
    },
    tokenRequest: false,
  })
}
</script>

<style>

</style>