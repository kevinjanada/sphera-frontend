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
                <v-chip v-for="s in pitch.schedule" label outline color="red" :key="s.date" @click="expandSchedule(s)">
                  {{ s.date }}
                </v-chip>
              </v-layout>
              <v-layout v-if="expand">
                <v-flex xs12>
                  <template>
                    <v-data-table
                      :headers="headers"
                      :items="activeSchedule.times"
                      class="elevation-1"
                    >
                      <template v-slot:items="props">
                        <td class="text-xs-right">{{ props.item.startTime }}</td>
                        <td class="text-xs-right">{{ props.item.endTime }}</td>
                        <td class="text-xs-right">
                          <template v-if="props.item.status == 'booked'">
                            {{ props.item.status }}
                          </template>
                          <template v-else>
                            <v-btn @click="showBookDialog">
                              Book
                            </v-btn>
                          </template>
                        </td>
                      </template>
                    </v-data-table>
                  </template>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </template>
    </v-layout>
    <div>
      <v-dialog
      v-model="bookDialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
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
    loadingProcessSchedule: true,
    expand: false,
    headers: [
      { text: 'Start Time', value: 'startTime' },
      { text: 'End Time', value: 'endTime' },
      { text: 'Status', value: 'status' }
    ],
    activeSchedule: [],
    bookDialog: false
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
    expandSchedule (s) {
      if (this.activeSchedule.date !== s.date) {
        this.activeSchedule = s;
        this.expand = true;
      } else {
        this.expand = !this.expand;
      }
    },
    showBookDialog () {
      this.bookDialog = true;
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
              times: [],
              status: ''
            });
            schedule[count].date = p.schedule[i].date
            schedule[count].times.push({
              startTime: p.schedule[i].startTime,
              endTime: p.schedule[i].endTime,
              status: p.schedule[i].status
            })
          } else if (schedule[count].date != p.schedule[i].date) {
            console.log(p.schedule[i].date)
            schedule.push({
              date: '',
              times: [],
              status: ''
            });
            count++
            schedule[count].date = p.schedule[i].date
            schedule[count].times.push({
              startTime: p.schedule[i].startTime,
              endTime: p.schedule[i].endTime,
              status: p.schedule[i].status
            })
          } else {
            console.log(p.schedule[i].date)
            schedule[count].times.push({
              startTime: p.schedule[i].startTime,
              endTime: p.schedule[i].endTime,
              status: p.schedule[i].status
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