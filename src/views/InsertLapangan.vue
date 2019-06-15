<template>
  <v-layout justify-center fill-height align-center>
    <v-card class="px-4 py-4 elevation-5" width="40vw">
       <v-layout class="pt-1 display-1 font-weight-black" justify-center id="card-header">
           ADD NEW FIELD
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
          label="Venue Name"
          prepend-icon="home"
          color="#0280e0"
          v-validate="'required'"
          :error-messages="errors.collect('VenueName')"
          v-model="model.VenueName"
          ></v-select>
          <v-text-field
            label="Field Name"
            prepend-icon="home"
            color="#0280e0"
            autocomplete="FieldName"
            type="text"
            data-vv-name="FieldName"
            v-validate="'required|min:30'"
            :error-messages="errors.collect('FieldName')"
            v-model="model.FieldName"
          ></v-text-field>
          <v-text-field
            label="Field Fee per Hour"
            prepend-icon="attach_money"
            color="#0280e0"
            autocomplete="FieldFee"
            type="number"
            data-vv-name="FieldFee"
            v-validate="'required|min:6'"
            :error-messages="errors.collect('Password')"
            v-model="model.FieldFiee"
          ></v-text-field>
        </v-form>
        <v-layout justify-center row wrap class="py-3">
          <v-btn round large
            id="btn-addField"
            class="elevation-5"
            color="primary"
            @click="validateBeforeSubmit"
            :loading="loading"
          >ADD FIELD</v-btn>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
import tokenService from '../common/tokenService'

export default {
  data: () => ({
    //ini nanti didapat dari db sesuai OwnerID
    items: ['Venue A','Venue B','Venue C'],
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