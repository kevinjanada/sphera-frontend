<template>
  <v-layout justify-center fill-height align-center>
    <v-card class="px-4 py-4 elevation-5">
      <v-layout class="pt-1" justify-center id="card-header">
        <img src="">
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
            label="Owner Name"
            prepend-icon="perm_identity"
            color="#0280e0"
            autocomplete=""
            data-vv-name="OwnerName"
            v-validate="'required'"
            :error-messages="errors.collect('OwnerName')"
            type="text"
            v-model="model.OwnerName"
          ></v-text-field>
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
            data-vv-name="Password"
            v-validate="'required|max:30'"
            :error-messages="errors.collect('VenueAddress')"
            v-model="model.VenueAddress"
          ></v-text-field>
          <v-text-field
            label="Owner Password"
            prepend-icon="lock"
            color="#0280e0"
            autocomplete="current-password"
            type="password"
            data-vv-name="Password"
            v-validate="'required|min:6'"
            :error-messages="errors.collect('Password')"
            v-model="model.password"
          ></v-text-field>
        </v-form>
        <v-layout justify-center row wrap class="py-3">
          <v-btn
            id="btn-addVenue"
            class="elevation-5"
            dark
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
      username: '',
      password: '',
    },
    tokenRequest: false,
  }),
  methods: {
    
  }
}
</script>
