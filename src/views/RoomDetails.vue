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
      <template v-for="(rooms, index) in RoomDetails.rooms">
        <v-flex xs12 :key="index">
          <v-card>
            <v-card-title>
              <v-flex md6 xs12>
                <v-img
                  :src="require('@/assets/rooms.jpg')"
                  aspect-ratio="2.75"
                >
                </v-img>
              </v-flex>
              <v-flex md6 xs12>
                <h2>Room {{ index }}</h2>
                <h4>Room Master: {{ rooms.roomMaster }}</h4>
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
import rooms from '@/api/dummy-data/rooms'
export default {
  data: () => ({
    RoomDetails: {
      img: null,
      name: null,
      price:null,
      room: [
        {
          id: null, 
          roomMaster: null, 
          name: null, 
          roomCapacity: null,
          roomCurrentCapacity: null,
          date: null, 
          startTime: null, 
          endTime: null 
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
    this.getDummyRoom()
      .then(RoomDetails => {
        this.RoomDetails = RoomDetails;
        this.processSchedule();
        // console.log(this.venueDetails);
      })
  },
  methods: {
    getDummyRoom () {
      return new Promise((resolve) => {
        const venueId = this.$route.params.venueId;
        resolve(venues.filter(v => v.id === venueId)[0]);
      })
    },
    processSchedule () {
      this.loadingProcessSchedule = true;
      this.RoomDetails.rooms.forEach(p => {
        let count = 0;
        console.log(p)
        p.rooms = rooms
        schedule = []
        count = 0
      })
      this.loadingProcessSchedule = false;
    }
  }
}
</script>