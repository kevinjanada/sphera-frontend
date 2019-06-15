<template>
  <v-layout justify-center fill-height align-center>
    <v-card class="px-4 py-4 elevation-5" width="40vw">
       <v-layout class="pt-1 display-1 font-weight-black" justify-center id="card-header">
           ADD NEW SCHEDULE
      </v-layout>
      <v-alert
        type="error"
        dismissible
        transition="scale-transition"
        v-model="alert.show"
      >{{ alert.message }}</v-alert>
      <v-card-text>
        <v-form @keyup.enter.native="validateBeforeSubmit">
        <!--Owner Name tolong diambil dari session dong :)-->
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
          <v-select
          :items="items"
          label="Choose Day"
          prepend-icon="home"
          color="#0280e0"
          v-validate="'required'"
          :error-messages="errors.collect('ScheduleDay')"
          v-model="model.ScheduleDay"
          ></v-select>
          <v-flex md12 lg6>
            <h3>START TIME</h3>
            <v-time-picker
                v-model="time"
                :allowed-hours="allowedHours"
                :allowed-minutes="allowedMinutes"
                class="mt-3"
                format="24hr"
                scrollable
                min="07:00"
                max="21:00"
            ></v-time-picker>
        </v-flex>
        
        <v-flex md12 lg6>
            <h3>END TIME</h3>
            <v-time-picker
                v-model="timeStep"
                :allowed-hours="allowedHours"
                :allowed-minutes="allowedMinutes"
                class="mt-3"
                format="24hr"
                scrollable
                min="07:00"
                max="21:00"
            ></v-time-picker>
        </v-flex>
        </v-form>
        <v-flex>
        <v-layout justify-center row wrap class="py-3">
          <v-btn round large
            id="btn-addField"
            class="elevation-5"
            color="primary"
            @click="validateBeforeSubmit"
            :loading="loading"
          >ADD SCHEDULE</v-btn>
        </v-layout>
        </v-flex>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
import tokenService from '../common/tokenService'

export default {
  data: () => ({
    //ini nanti didapat dari db sesuai OwnerID
    items: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    loading: false,
    alert: {
      message: null,
      show: false,
    },
    model: {
      OwnerName: '',
      FieldName: '',
      FieldFee:'',
      password:''
    },
    tokenRequest: false,
  }),
  methods: {

  }
}
</script>