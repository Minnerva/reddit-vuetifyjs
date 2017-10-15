<template>
  <div>

    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">Sub Reddit</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list dense>
      <v-list-tile v-for="(menu, index) in $store.state.drawerMenus"
        :key="index"
        :value="isActive(menu.path)"
        @click="$router.push(menu.path)"
      >
        <v-list-tile-action>
          <v-icon :color="menu.primaryColor">{{ menu.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-if="isActive(menu.path)">
            <b>{{ menu.title }}</b>
          </v-list-tile-title>
          <v-list-tile-title v-else>
            {{ menu.title }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

  </div>
</template>

<script>
  export default {
    methods: {
      isActive (path) {
        if (path.length <= 1) path = this.$store.state.defaultSubReddit
        return this.$store.state.subReddit === path
      }
    }
  }
</script>
