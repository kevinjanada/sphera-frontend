<template>
  <v-layout>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    venueDetails: null
  }),
  mounted() {
    this.getVenueDetails();
  },
  methods: {  
    async getVenueDetails () {
      const venueId = this.$route.params.venueId;
      // const res = await this.$axios.
    }
  }
}
</script>