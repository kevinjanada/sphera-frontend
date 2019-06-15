<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card>
        <v-card-title>
          <v-layout>
          <v-flex md4 xs12>
            <v-img
              :src="require('@/assets/venue.jpg')"
              aspect-ratio="2"
            ></v-img>
          </v-flex>
          <v-flex md8 class="px-3">
            <div>
              <h1>{{roomDetails.name}}</h1>
            </div>
            <v-divider></v-divider>
            <div class="px-2 py-2">
              <p>{{roomDetails.address}}</p>
            </div>
            <div>
              <h2>{{ roomDetails.date }}</h2>
              <h3>{{ roomDetails.startTime }} - {{ roomDetails.endTime }}</h3>
            </div>
          </v-flex>
          </v-layout>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mt-4">
          <v-layout row wrap>
            <v-flex class="mb-3" md3 xs4 v-for="n in roomDetails.roomCurrentCapacity" :key="n">
              <v-layout justify-center>
                <v-icon>
                  account_circle
                </v-icon>
              </v-layout>
              <h4 style="text-align:center;">Booked</h4>
            </v-flex>
            <v-flex class="mb-3" md3 xs4 v-for="n in roomDetails.roomCapacity - roomDetails.roomCurrentCapacity" :key="n">
              <v-layout justify-center>
                <v-btn>
                  Book Slot
                </v-btn>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import rooms from '@/api/dummy-data/rooms'
export default {
  data: () => ({
    roomDetails: {
      id: null, 
      roomMaster: null, 
      img: null,
      name: null,
      price:null,
      roomCapacity: null,
      roomCurrentCapacity: null,
      date: null, 
      startTime: null, 
      endTime: null
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
  },
  methods: {
    getDummyRoom () {
      const roomId = this.$route.params.roomId;
      this.roomDetails = rooms.filter(v => v.id === roomId)[0];
    },
  }
}
</script>