<template>
  <div>

    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">Sub Reddit</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list >
      <template v-for="(menu, index) in $store.state.drawerMenus">
        <v-divider :key="index" v-if="index > 0"></v-divider>
        <v-list-tile :key="index" :value="isActive(menu.r)" @click="$router.push(routePath(menu.r))">
          <v-list-tile-action>
            <v-icon :color="menu.primaryColor">{{ menu.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title >
              <template v-if="isActive(menu.r)">
                <b>{{ menu.title }}</b>
              </template>
              <template v-else>
                 {{ menu.title }}
              </template>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
        
    </v-list>
    <v-divider></v-divider>
    <v-subheader>Languages</v-subheader>
    <v-layout justify-center row wrap>
      <v-btn light  disabled :color="layoutPrimaryColor">EN</v-btn>
      <v-btn light  disabled :color="layoutPrimaryColor">TH</v-btn>
    </v-layout>

  </div>
</template>

<script>
  export default {
    computed: {
      layoutPrimaryColor () {
        return this.$store.state.layoutPrimaryColor
      }
    },
    methods: {
      isActive (r) {
        return r === this.$store.state.subReddit
      },
      routePath (r) {
        return r === this.$store.state.defaultSubReddit ? '/' : '/' + r
      }
    }
  }
</script>
