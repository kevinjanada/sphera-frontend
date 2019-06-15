<template>
   <v-layout>
    <v-flex xs12>
      <v-card>
        <v-img
          src="https://wallpapercave.com/wp/1CVyLnt.jpg"
          position="center"
          height="60vh"
        ></v-img>

        <v-card-title primary-title>
          <div class="profileCircle">
            <div id="circle"><img/></div>
          </div>
        </v-card-title>

        <v-card-actions>
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
        </v-card-actions>
      </v-card>
    </v-flex>
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
      confirmpass: '',
    },
    tokenRequest: false,
  })
}
</script>

<style>
.profileCircle{
  display: flex;
  position:relative;
  width:100vw;
  border:solid 4px blue;
  height: 170px;
}

#circle{
  position:absolute;
  height:40px;
  width:40px;
  top:40px;
}
</style>
