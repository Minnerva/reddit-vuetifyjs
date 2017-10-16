<template>
  <v-app>
    <v-navigation-drawer app enable-resize-watcher persistent v-model="drawer">
      <list-navigation-drawer />
    </v-navigation-drawer>
    <v-toolbar :class="primaryLayoutClass" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
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
  import ListNavigationDrawer from '~components/list/NavigationDrawer'
  import DialogLoading from '~components/dialog/Loading'

  export default {
    components: {
      ListNavigationDrawer,
      DialogLoading
    },
    data: function () {
      return {
        drawer: true,
        dialog: true
      }
    },
    computed: {
      toolbarTitle: function () {
        return this.$store.getters.toolbarTitle
      },
      primaryLayoutClass: function () {
        return this.$store.state.layoutPrimaryColor
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
</style>