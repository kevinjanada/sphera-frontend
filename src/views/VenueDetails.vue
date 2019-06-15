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
                <v-chip v-for="s in pitch.schedule" label outline color="red" :key="s.date">
                  {{ s.date }}
                </v-chip>
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
    },
    loadingProcessSchedule: true
  }),
  watch: {
    loadingProcessSchedule (status) {
      this.$forceUpdate();
    }
  },
  mounted() {
    this.getDummyVenue()
      .then(venueDetails => {
        this.venueDetails = venueDetails;
        this.processSchedule();
        // console.log(this.venueDetails);
      })
  },
  methods: {
    getDummyVenue () {
      return new Promise((resolve) => {
        const venueId = this.$route.params.venueId;
        resolve(venues.filter(v => v.id === venueId)[0]);
      })
    },
    processSchedule () {
      this.loadingProcessSchedule = true;
      this.venueDetails.pitches.forEach(p => {
        let schedule = []
        let count = 0;
        console.log(p)
        for (let i = 0; i < p.schedule.length; i++) {
          console.log(p.schedule[i]);
          if (schedule.length == 0) {
            schedule.push({
              date: '',
              times: []
            });
            schedule[count].date = p.schedule[i].date
            schedule[count].times.push({
              startTime: p.schedule[i].startTime,
              endTime: p.schedule[i].endTime
            })
          } else if (schedule[count].date != p.schedule[i].date) {
            console.log(p.schedule[i].date)
            schedule.push({
              date: '',
              times: []
            });
            count++
            schedule[count].date = p.schedule[i].date
            schedule[count].times.push({
              startTime: p.schedule[i].startTime,
              endTime: p.schedule[i].endTime
            })
          } else {
            console.log(p.schedule[i].date)
            schedule[count].times.push({
              startTime: p.schedule[i].startTime,
              endTime: p.schedule[i].endTime
            })
          }
        }
        p.schedule = schedule
        schedule = []
        count = 0
      })
      this.loadingProcessSchedule = false;
    }
  }
}
</script>