<template>
  <v-navigation-drawer app enable-resize-watcher persistent v-model="drawer"> 
    <list-navigation-drawer />
  </v-navigation-drawer>
</template>

<script>
  import ListNavigationDrawer from '~components/list/NavigationDrawer'
  export default {
    components: {
      ListNavigationDrawer
    },
    computed: {
      drawer: {
        get () {
          return this.$store.state.drawerOpen
        },
        set (isOpen) {
          this.$store.commit('setDrawerOpen', { isOpen })
        }
      }
    }
  }
</script>
