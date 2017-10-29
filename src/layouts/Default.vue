<template>
  <v-app>
    <navigation-drawer />
    <v-toolbar :color="primaryLayoutColor" dark fixed app>
      <v-toolbar-side-icon @click.stop="toggleDrawer()"></v-toolbar-side-icon>
      <v-toolbar-title>{{ toolbarTitle }}</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fill-height fluid grid-list-lg>
          <layout-progress v-show="!isDoneRender" />
          <router-view v-show="isDoneRender"></router-view>
        </v-container>
      </v-content>
    </main>
    <v-footer :color="primaryLayoutColor" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>

  </v-app>
  
</template>

<script>
  import NavigationDrawer from '~components/navigation/Drawer'
  import LayoutProgress from '~components/layout/Progress'

  export default {
    components: {
      NavigationDrawer,
      LayoutProgress
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
      primaryLayoutColor () {
        return this.$store.state.layoutPrimaryColor
      },
      isDoneRender () {
        return this.$store.state.isDoneRender
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