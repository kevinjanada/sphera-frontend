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
          <v-select
            :items="fieldTypes"
            label="Field Type"
            prepend-icon="home"
            color="#0280e0"
            v-validate="'required'"
            data-vv-name="FieldType"
            :error-messages="errors.collect('FieldType')"
            v-model="model.fieldType"
          ></v-select>
          <v-text-field
            label="Field Fee per Hour"
            prepend-icon="attach_money"
            color="#0280e0"
            autocomplete="FieldFee"
            type="number"
            data-vv-name="FieldFee"
            v-validate="'required'"
            :error-messages="errors.collect('FieldFee')"
            v-model="model.price"
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
    fieldTypes: ['cement', 'grass'],
    loading: false,
    alert: {
      message: null,
      show: false,
    },
    model: {
      venueId: null,
      fieldType: null,
      price: null,
    },
    tokenRequest: false,
  }),
  mounted () {
    this.model.venueId = this.$route.params.venueId;
  },
  methods: {
    async validateBeforeSubmit () {
      const res = await this.$axios.post('/inputLapangan', {
        venueId: this.model.venueId,
        fieldType: this.model.fieldType,
        price: this.model.price,
      })
      if (res.data.success) {
        console.log(res.data)
        this.$router.push({ name: 'edit-venue', params: { venueId: this.model.venueId } })
      } 
    }
  }
}
</script>