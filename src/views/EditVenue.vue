<template>
  <v-layout row wrap justify-center>
    <v-flex xs12>
      <v-card>
        <v-img
          :src="require('@/assets/venue.jpg')"
          aspect-ratio="2.75"
        ></v-img>
        <h1 class="text-xs-center">{{ venueDetails.name }}</h1>
        <h2 class="text-xs-center">{{ venueDetails.address }}</h2>
        <v-card-text>
          <v-layout justify-center>
            <v-flex xs6>
              <v-btn @click="gotoInsertLapangan" style="width: 100%;">
                Add Lapangan
              </v-btn>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12 v-for="lap in lapangan" :key="lap.id">
              <v-layout row wrap align-center>
                <v-flex md4 xs12>
                  <v-img
                    :src="require('@/assets/pitch.jpg')"
                    aspect-ratio="2.75"
                  ></v-img>
                </v-flex>
                <v-flex md4 xs12>
                  <h2 class="text-xs-center">{{lap.price}} / hour</h2>
                </v-flex>
                <v-flex md4 xs12>
                  <v-btn style="width: 100%;">
                    Edit Jadwal
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    venueDetails: {
      name: null,
      address: null,
    },
    lapangan: []
  }),
  watch: {
    lapangan () {
      this.$forceUpdate();
    }
  },
  mounted() {
    this.getVenueDetails();
    this.getLapangan();
  },
  methods: {  
    async getVenueDetails () {
      const venueId = this.$route.params.venueId;
      const res = await this.$axios.post('/getVenueById', { venueId });
      console.log(res)
      this.venueDetails = res.data.data;
    },
    gotoInsertLapangan () {
      this.$router.push({ name: 'InsertLapangan', params: { venueId: this.venueDetails.id } })
    },
    async getLapangan() {
      const venueId = this.$route.params.venueId;
      const res = await this.$axios.post('/getLapanganByVenueId', { venueId });
      console.log(res);
      this.lapangan = res.data.data;
    }
  }
}
</script>