<template>
  <v-layout justify-center fill-height>
    <!-- <v-card class="px-4 pt-4 pb-2 elevation-5" min-width="420"> -->
      <v-layout align-center justify-center column fill-height>
        <div style="width: 128px; height: 100px">
          <!-- <v-img :src="require('@/assets/')" max-width="128"/> -->
          <h1>FUTSAL</h1>
        </div>
        <div>
          <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </div>
        <div style="padding-top: 48px">
          <h3>Logging in</h3>
        </div>
        <div style="height: 200px"></div>
      </v-layout>
  </v-layout>
</template>

<script>

</script>