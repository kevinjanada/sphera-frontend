<template>
  <v-layout row wrap justify-center>
    <v-flex md8 xs12>
      <v-text-field
        prepend-icon="search"
        label="Search Venue"
      >
      </v-text-field>
    </v-flex>
    <v-flex xs12>
      <v-layout row wrap>
        <template v-for="v in venues">
          <v-flex md4 sm6 xs12 :key="v.name">
            <router-link :to="{ name: 'venue-details', params: { venueId: v.id } }">
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
import venues from '@/api/dummy-data/venues'


export default {
  components: {
    VenueCard,
  },
  data: () => ({
    venues: []
  }),
  mounted () {
    this.addDummyVenues()
  },
  methods: {
    addDummyVenues () {
      this.venues = venues;
    }
  }
}
</script>