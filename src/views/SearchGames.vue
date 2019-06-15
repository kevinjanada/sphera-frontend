<template>
  <v-layout row wrap justify-center>
    <v-flex md8 xs12>
      <v-text-field
        prepend-icon="search"
        label="Search Games"
      >
      </v-text-field>
    </v-flex>
    <v-flex xs12>
      <v-layout row wrap>
        <template v-for="r in rooms">
          <v-flex md4 sm6 xs12 :key="r.id">
            <router-link :to="{ name: 'room-details', params: { roomId: r.id } }">
              <RoomCard
                :img="r.img"
                :name="r.name"
                :capacity="r.roomCapacity"
                :currentCapacity="r.roomCurrentCapacity"
                :startTime="r.startTime"
                :endTime="r.endTime"
                :date="r.date"
              ></RoomCard>
            </router-link>
          </v-flex>
        </template>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import RoomCard from '@/components/RoomCard';
import rooms from '@/api/dummy-data/rooms'


export default {
  components: {
    RoomCard
  },
  data: () => ({
    rooms: []
  }),
  mounted () {
    this.addDummyRooms()
  },
  methods: {
    addDummyRooms () {
      this.rooms = rooms;
    }
  }
}
</script>