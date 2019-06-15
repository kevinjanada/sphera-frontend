<template>
  <v-layout row wrap justify-center>
    <v-flex md8 xs12>
      <v-card>
        <v-card-title>
          <h2>Your Bookings</h2>
        </v-card-title>
        <v-card-text>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex md8 xs12>
      <v-card>
        <v-card-title>
          <h2>Upcoming Games</h2>
        </v-card-title>
        <v-card-text>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    bookings: [],
    upcomingGames: []
  })
}
</script>