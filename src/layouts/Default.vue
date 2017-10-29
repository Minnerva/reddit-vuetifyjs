<template>
  <v-app>
    <navigation-drawer />
    <v-toolbar :class="primaryLayoutClass" dark fixed app>
      <v-toolbar-side-icon @click.stop="toggleDrawer()"></v-toolbar-side-icon>
      <v-toolbar-title>{{ toolbarTitle }}</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid grid-list-lg>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>
    <v-footer :class="primaryLayoutClass" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>

    <!-- <dialog-loading /> -->

  </v-app>
  
</template>

<script>
  import NavigationDrawer from '~components/navigation/Drawer'
  import DialogLoading from '~components/dialog/Loading'

  export default {
    components: {
      NavigationDrawer,
      DialogLoading
    },
    data () {
      return {
        dialog: true
      }
    },
    computed: {
      drawer () {
        return this.$store.state.drawerOpen
      },
      toolbarTitle () {
        return this.$store.getters.toolbarTitle
      },
      primaryLayoutClass () {
        return this.$store.state.layoutPrimaryColor
      }
    },
    methods: {
      toggleDrawer () {
        this.$store.commit('setDrawerOpen', { isOpen: !this.drawer })
      }
    },
    props: {
      source: String
    }
  }
</script>

<style>
  .cursor-pointer {
    cursor: pointer;
  }
  .has-left-border {
    border-left: 1px solid black
  }
</style>