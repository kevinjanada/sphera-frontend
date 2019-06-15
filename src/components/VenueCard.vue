<template>
  <v-card>
    <v-img
      :src="require('@/assets/venue.jpg')"
      aspect-ratio="2.75"
    ></v-img>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ name }}</h3>
        <div class="text-truncate">{{ address }}</div>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    img: String,
    name: String,
    address: String,
  },
  mounted() {
    
  }
}
</script>