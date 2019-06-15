<template>
  <v-app v-if="!$route.meta.public">
    <app-drawer app></app-drawer>
    <app-toolbar app></app-toolbar>
    <v-content>
      <page-header></page-header>
      <v-container fluid grid-list-lg>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
  <v-app v-else>
    <v-content>
      <v-container fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import AppDrawer from '@/components/AppDrawer'
  import AppToolbar from '@/components/AppToolbar'
  import PageHeader from '@/components/PageHeader'

  export default {
    components: {
      AppDrawer,
      AppToolbar,
      PageHeader
    },
    async mounted() {
    },
    methods: {
    }
  }
</script>

<style>
.v-datatable tbody tr:nth-child(odd){
  background-color: rgba(0, 35, 91, 0.05);
}
.v-datatable tbody td {
  border-right: 1px solid rgb(219, 219, 219);
  border-left: 1px solid rgb(219, 219, 219);
}
/* .v-datatable thead tr {
  background-color: #4973B7;
}
.v-datatable thead th {
  color: white !important;
}
.v-datatable thead th i {
  color: white !important
} */
      /* // diagonalGradientBackground $gradient-start-greenblue $gradient-end-greenblue
      th
        font-size: 1rem
        i */
</style>