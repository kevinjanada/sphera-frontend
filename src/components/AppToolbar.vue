<template>
  <v-toolbar
    fixed
    dark
    app
    color="primary"
    >
    <v-toolbar-title class="ml-0">
      <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
      <v-btn large flat slot="activator">
        <v-avatar size="30px" color="white">
          <img class="img-logo" :src="require('@/assets/user-not-found.png')" alt="FUTSAL"/>
        </v-avatar>
      </v-btn>
      <v-list class="pa-0">
        <v-list-tile v-for="(item,index) in items" :to="!item.href ? { name: item.name } : null" :href="item.href" @click="item.click" ripple="ripple" :disabled="item.disabled" :target="item.target" rel="noopener" :key="index">
          <v-list-tile-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon> 
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="text-xs-center">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
<script>
/* eslint-disable */
import { mapActions, mapMutations, mapGetters } from 'vuex'
import * as mutationTypes from '@/store/types/mutationTypes'
import * as actionTypes from '@/store/types/actionTypes'

export default {
  name: 'app-toolbar',
  created() {
    window.appToolbar = this
  },
  data: () => ({
    items: [
      {
        title: 'Log Out',
        click: () => {
          window.appToolbar.handleLogOut()
        }
      }
    ],
    userInfo: ''
  }),
  mounted: function() {
  },
  computed: {
  },
  methods: {
    ...mapMutations({
      toggleDrawer: mutationTypes.TOGGLEDRAWER
    }),
    ...mapActions({
      logOut: actionTypes.LOGOUT
    }),
    ...mapGetters(['getRole']),
    async handleLogOut () {
      localStorage.clear();
      this.$router.push('/login')
    }
  }
};
</script>
<style>
  .v-menu__content {
    border-radius: 10px;
  }
  .img-logo {
    object-fit: contain;
  }
</style>
