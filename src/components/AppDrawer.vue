<template>
  <v-navigation-drawer
    id="appDrawer"
    :mini-variant.sync="mini"
    fixed
    :dark="$vuetify.dark"
    app
    v-model="drawer"
    width="260"
    >
    <v-toolbar color="primary" dark>
      <!-- <img src="@/assets/jcm-logo-white.png" class="img-fluid" alt="Logo JCM"> -->
      <h1 class="logo">FUTSAL</h1>
    </v-toolbar>
    <vue-perfect-scrollbar class="drawer-menu--scroll" :settings="scrollSettings">
      <v-list dense class="pb-4">
        <template v-for="(item, i) in menu">
            <!--group with subitems-->
            <v-list-group v-model="item.active" v-if="item.subMenu" :key="item.title" :group="item.group" :prepend-icon="item.icon" no-action="no-action">
              <v-list-tile slot="activator" ripple="ripple">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <template v-for="(subItem, i) in item.subMenu">
                <!--sub group-->
                <v-list-group v-if="subItem.subMenu" :key="subItem.name" :group="subItem.group" sub-group="sub-group">
                  <v-list-tile slot="activator" ripple="ripple">
                    <v-list-tile-content>
                      <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile v-for="(grand, i) in subItem.subMenu" :key="i" :to="grand.href" :href="grand.href" ripple="ripple">
                    <v-list-tile-content>
                      <v-list-tile-title>{{ grand.title }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list-group>
                <!--child item-->
                <v-list-tile v-else :key="i" :to="{ name: subItem.routeName }" :disabled="subItem.disabled" :target="subItem.target" ripple="ripple" replace>
                  <v-list-tile-content>
                    <v-list-tile-title><span>{{ subItem.title }}</span></v-list-tile-title>
                  </v-list-tile-content>
                  <!-- <v-circle class="white--text pa-0 circle-pill" v-if="subItem.badge" color="red" disabled="disabled">{{ subItem.badge }}</v-circle> -->
                  <v-list-tile-action v-if="subItem.action">
                    <v-icon :class="[subItem.actionClass || 'success--text']">{{ subItem.action }}</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
              </template>
            </v-list-group>
            <v-subheader v-else-if="item.header" :key="i">{{ item.header }}</v-subheader>
            <v-divider v-else-if="item.divider" :key="i"></v-divider>
            <!--top-level link-->
            <v-list-tile v-else :to="!item.href ? { name: item.routeName } : null" :href="item.href" ripple="ripple" :disabled="item.disabled" :target="item.target" rel="noopener" :key="item.name">
              <v-list-tile-action v-if="item.icon">
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
              <!-- <v-circle class="white--text pa-0 chip--x-small" v-if="item.badge" :color="item.color || 'primary'" disabled="disabled">{{ item.badge }}</v-circle> -->
              <v-list-tile-action v-if="item.subAction">
                <v-icon class="success--text">{{ item.subAction }}</v-icon>
              </v-list-tile-action>
              <!-- <v-circle class="caption blue lighten-2 white--text mx-0" v-else-if="item.chip" label="label" small="small">{{ item.chip }}</v-circle> -->
            </v-list-tile>
        </template>
      </v-list>
    </vue-perfect-scrollbar>
  </v-navigation-drawer>
</template>

<script>
  import VuePerfectScrollbar from 'vue-perfect-scrollbar';
  // import tokenServices from '@/common/tokenServices'
  import { mapMutations } from 'vuex';
  import * as mutationTypes from '@/store/types/mutationTypes';
import tokenService from '../common/tokenService';

  export default {
    components: {
      VuePerfectScrollbar,
    },
    data: () => ({
      mini: false,
      scrollSettings: {
        maxScrollbarLength: 160
      }
    }),
    computed: {
      drawer: {
        get () {
          return this.$store.state.app.appDrawer;
        },
        set (val) {
          this.setDrawer(val)
        }
      },
      menu () {
        return this.$store.state.app.appDrawerMenu;
      },
      computeGroupActive () {
        return true;
      },
      computeLogo () {
        return '@/assets/jcm-logo-white.png';
      },
      sideToolbarColor () {
        return this.$vuetify.options.extra.sideNav;
      }
    },
    mounted() {
      // const role = tokenServices.getRole();
      // FIXME: role masi di hardcode
      let role = localStorage.getItem('role');
      console.log(role);
      if (role == '1') {
        role = 'owner'
      }
      if (role == '2') {
        role = 'user'
      }
      this.setDrawerMenu(role);
    },
    methods: {
      ...mapMutations({
        setDrawer: mutationTypes.SETDRAWER,
        setDrawerMenu: mutationTypes.SETDRAWERMENU
      }),
    }
  }
</script>

<style>

</style>