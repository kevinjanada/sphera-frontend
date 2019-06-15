<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-layout justify-start>
        <v-btn @click="gotoAddVenue">
          Add Venue
        </v-btn>
      </v-layout>
    </v-flex>
    <v-flex xs12>
      <v-layout row wrap>
        <template v-for="v in venues">
          <v-flex md4 sm6 xs12 :key="v.id">
            <router-link :to="{ name: 'edit-venue', params: { venueId: v.id } }">
              <VenueCard
                :img="v.img"
                :name="v.name"
                :address="v.address"
              ></VenueCard>
            </router-link>
          </v-flex>
        </template>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import VenueCard from '@/components/VenueCard';

export default {
  components: {
    VenueCard
  },
  data: () => ({
    venues: []
  }),
  mounted () {
    this.getVenues();
  },
  methods: {
    gotoAddVenue () {
      this.$router.push({ name: 'InsertVenue' })
    },
    async getVenues () {
      const ownerId = localStorage.getItem('userId');
      const res = await this.$axios.get('/getVenuesByOwnerId');

      this.venues = res.data.data;
    }
  }
}
</script>