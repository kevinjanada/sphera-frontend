<template>
<v-card>
    <v-img
      :src="require('@/assets/venue.jpg')"
      aspect-ratio="2.75"
    ></v-img>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ name }}</h3>
        <h3>{{ currentCapacity }} / {{ capacity }} Players</h3>
      </div>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <h3>{{ date }}</h3>
      <h4>{{ startTime }} - {{ endTime }}</h4>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    img: String,
    name: String,
    price: String,
    capacity: Number,
    currentCapacity: Number,
    date: String,
    startTime: String,
    endTime: String,
  }
}
</script>