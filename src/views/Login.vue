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
        <v-layout justify-center>
          <h1>SPHERA</h1>
        </v-layout>
        <v-form @keyup.enter.native="validateBeforeSubmit">
          <v-text-field
            label="Username"
            prepend-icon="perm_identity"
            color="#0280e0"
            autocomplete=""
            data-vv-name="Username"
            v-validate="'required'"
            :error-messages="errors.collect('Username')"
            type="text"
            v-model="model.username"
          ></v-text-field>
          <v-text-field
            label="Password"
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
          <v-btn round Large
            id="btn-login"
            class="elevation-5"
            color="primary"
            @click="validateBeforeSubmit"
            :loading="loading"
          >Log In</v-btn>
        </v-layout>
      </v-card-text>
      <v-layout id="card-footer" align-center column>
        <v-flex>
          <p>Don't have an account?</p>
        </v-flex>
        <v-flex>
          <v-layout justify-space-between>
            <v-btn flat id="btn-signup" @click="registerUser">
              Sign Up as User
            </v-btn>
            <v-btn flat id="btn-signup" @click="registerOwner">
              Sign Up as Owner
            </v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
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
    async validateBeforeSubmit () {
      const { username, password } = this.model;
      const res = await this.$axios.post('/login', {
        username, password
      });
      if (res.data.success) {
        const { token, role, playerId, ownerId } = res.data;
        tokenService.setRole(role);
        tokenService.setToken(token);
        if (playerId) { 
          tokenService.setUserId(playerId)
          this.$router.push({ name: 'dashboard' });
        }
        if (ownerId) { 
          tokenService.setUserId(ownerId)
          this.$router.push({ name: 'dashboard-owner' });
        }
      }
    },
    forgetPassword () {
      
    },
    registerUser () {
      this.$router.push({ name: 'register-user' })
    },
    registerOwner () {
      this.$router.push({ name: 'register-owner' })
    }
  }
}
</script>