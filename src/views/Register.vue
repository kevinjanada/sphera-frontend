<template>
  <v-layout justify-center fill-height align-center >
    <v-card class="px-4 py-4 elevation-5" width="40vw">
      <v-layout class="pt-1 display-1 font-weight-black" justify-center id="card-header">
        REGISTER
      </v-layout>
      <v-alert
        type="error"
        dismissible
        transition="scale-transition"
        v-model="alert.show"
      >{{ alert.message }}</v-alert>
      <v-card-text>
          <v-layout row wrap>
            <v-flex xs6>
                <v-img :src="require('@/assets/spheraLogo.png')" class="mr-5"/>
            </v-flex>
            <v-flex xs6>
                <v-form @keyup.enter.native="validateBeforeSubmit">
                    <v-text-field
                        label="Email"
                        prepend-icon="email"
                        color="#0280e0"
                        autocomplete="current-email"
                        data-vv-name="Email"
                        v-validate="'required|email'"
                        :error-messages="errors.collect('Email')"
                        type="email"
                        v-model="model.username"
                    ></v-text-field>
                    <v-text-field
                        label="Telephone"
                        prepend-icon="phone"
                        color="#0280e0"
                        data-vv-name="Telephone"
                        v-validate="'required|digits:12'"
                        :error-messages="errors.collect('Telephone')"
                        type="telephone"
                        v-model="model.telephone"
                    ></v-text-field>
                    <v-text-field
                        label="Password"
                        prepend-icon="lock"
                        color="#0280e0"
                        type="password"
                        data-vv-name="Password"
                        v-validate="'required|min:6'"
                        :error-messages="errors.collect('Password')"
                        v-model="model.password"
                    ></v-text-field>
                    <v-text-field
                        label=" Confirm Password"
                        prepend-icon="lock"
                        color="#0280e0"
                        type="password"
                        data-vv-name="Confirm Password"
                        v-validate="'required|min:6'"
                        :error-messages="errors.collect('Confirm Password')"
                        v-model="model.confirmpass"
                    ></v-text-field>        
                </v-form>
            </v-flex>
          </v-layout>
        <v-layout justify-center row wrap class="py-3">
            <v-btn round large
              id="btn-login"
              class="elevation-5 "
              color="primary"
              @click="validateBeforeSubmit"
              :loading="loading"
            >Register</v-btn>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>

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
      telephone: '',
      confirmpass: ''
    },
    tokenRequest: false,
  })
}
</script>

<style>

</style>