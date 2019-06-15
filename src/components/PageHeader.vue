<template>
  <div class="align-center pl-3">
    <v-breadcrumbs :items="breadcrumbs" divider="-">
      <template v-slot:item="props">
        <h3>{{ props.item.title }}</h3>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
export default {
  computed: {
    paramMask () {
      return this.$store.state.app.breadCrumbs.paramMask
    }
  },
  data () {
    return {
      breadcrumbs: []
    };
  },
  mounted () {
    this.createBreadCrumbs()
  },
  watch: {
    '$route' () {
      this.createBreadCrumbs()
    },
    paramMask () {
      this.createBreadCrumbs()
    }
  },
  methods: {
    createBreadCrumbs () {
      this.breadcrumbs = this.$route.meta.breadcrumbs
      let param;
      if (this.$route.meta.param) {
        if (this.$route.meta.paramMask) {
          param = this.paramMask;
        } else {
          param = this.$route.params[this.$route.meta.param];
        }
        this.breadcrumbs = [
          ...this.breadcrumbs,
          { title: param }
        ]
      }
    }
  }
};
</script>

<style scoped lang="stylus">
  @media screen and (min-width: 500px)
    .custom-breadcrumb-item
      font-size: 1.2rem !important
  @media screen and (min-width: 650px)
    .custom-breadcrumb-item
      font-size: 1.5rem !important
</style>