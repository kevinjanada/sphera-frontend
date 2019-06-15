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
            <VenueCard
              :img="v.img"
              :name="v.name"
            ></VenueCard>
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
      this.venues = [
        {
          img: '@/assets/',
          name: 'Venue A'
        },
        {
          img: '@/assets/',
          name: 'Venue B'
        },
        {
          img: '@/assets/',
          name: 'Venue C'
        }
      ]
    }
  }
}
</script>