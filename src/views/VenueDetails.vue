<template>
  <v-layout row wrap>
    <v-flex md4 xs12>
      <v-img
        :src="require('@/assets/user-not-found.png')"
        aspect-ratio="2"
      ></v-img>
    </v-flex>
    <v-flex md8 class="px-3">
      <div>
        <h1>{{venueDetails.name}}</h1>
      </div>
      <v-divider></v-divider>
      <div class="px-2 py-2">
        <p>{{venueDetails.address}}</p>
      </div>
    </v-flex>

    <v-layout row wrap class="mt-5">
      <template v-for="(pitch, index) in venueDetails.pitches">
        <v-flex xs12 :key="index">
          <v-card>
            <v-card-title>
              <v-flex md6 xs12>
                <v-img
                  :src="require('@/assets/pitch.jpg')"
                  aspect-ratio="2.75"
                >
                </v-img>
              </v-flex>
              <v-flex md6 xs12>
                <h2>Lapangan {{ index }}</h2>
                <h4>Price: {{ pitch.price }}</h4>
              </v-flex>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <h4>Schedules</h4>
              <v-layout style="overflow-x: auto;">
                
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </template>
    </v-layout>
  </v-layout>
</template>

<script>
import venues from '@/api/dummy-data/venues'
export default {
  data: () => ({
    venueDetails: {
      img: null,
      name: null,
      pitches: [
        {
          id: null, 
          img: null, 
          name: null, 
          address: null, 
          schedule: [
            { date: null, startTime: null, endTime: null }
          ]
        }
      ]
    }
  }),
  mounted() {
    this.getDummyVenue();
  },
  methods: {
    getDummyVenue () {
      const venueId = this.$route.params.venueId;
      this.venueDetails = venues.filter(v => v.id === venueId)[0];
    },
    processSchedule () {
      let schedule = []
      let currentScheduleObj = {
        date: ''
      }
      this.venueDetails.pitches.forEach(p => {
        for (let i = 0; i < p.schedule; i++) {
          if(currentScheduleObj.date != p.schedule[i].date) {
            currentScheduleObj.date = p.schedule[i].date;
            
          }
        }
      })
    }
  }
}
</script>