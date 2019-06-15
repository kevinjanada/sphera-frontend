<template>
  <v-layout justify-center fill-height align-center>
    <v-card class="px-4 py-4 elevation-5" width="40vw">
      <v-layout class="pt-1 display-1 font-weight-black" justify-center id="card-header">
        ADD NEW VENUE
      </v-layout>
      <v-alert
        type="error"
        dismissible
        transition="scale-transition"
        v-model="alert.show"
      >{{ alert.message }}</v-alert>
      <v-card-text>
        <v-form @keyup.enter.native="validateBeforeSubmit">
          <v-text-field
            label="Venue Name"
            prepend-icon="perm_identity"
            color="#0280e0"
            autocomplete=""
            data-vv-name="VenueName"
            v-validate="'required'"
            :error-messages="errors.collect('VenueName')"
            type="text"
            v-model="model.VenueName"
          ></v-text-field>
          <v-text-field
            label="Address"
            prepend-icon="home"
            color="#0280e0"
            autocomplete="VenueAddress"
            type="text"
            data-vv-name="VenueAddress"
            v-validate="'required|max:30'"
            :error-messages="errors.collect('VenueAddress')"
            v-model="model.VenueAddress"
          ></v-text-field>
        </v-form>
        <v-layout justify-center row wrap class="py-3">
          <v-btn round large
            id="btn-addVenue"
            class="elevation-5"
            color="primary"
            @click="validateBeforeSubmit"
            :loading="loading"
          >ADD VENUE</v-btn>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
import tokenService from '../common/tokenService'

export default {
  data: () => ({
    loading: false,
    alert: {
      message: null,
      show: false,
    },
    model: {
      VenueName: '',
      VenueAddress: '',
    },
  }),
  methods: {
    async validateBeforeSubmit () {
      // const ownerId = tokenService.getUserId();
      const ownerId = localStorage.getItem('userId');
      const res = await this.$axios.post('/inputVenue', {
        ownerId,
        name: this.model.VenueName,
        address: this.model.VenueAddress
      });
      if (res.data.success) {
        this.$router.push({ name: 'venues' })
      }
    }
  }
}
</script>
