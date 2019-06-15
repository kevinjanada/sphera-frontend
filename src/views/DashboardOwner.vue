<template>
  <v-layout row wrap justify-center>
    <v-flex md8 xs12>
      <v-card>
        <v-card-title>
          <h2>Your Bookings</h2>
        </v-card-title>
        <v-card-text>
          <v-layout v-if="bookings.length === 0" justify-center>
            <p>You currently have no bookings</p>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    bookings: [],
  })
}
</script>