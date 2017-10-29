<template>
  <v-layout row wrap align-center>
    <v-flex class="text-xs-center">
      <v-progress-circular indeterminate :size="125" :width="2" :color="primaryLayoutColor" />
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    computed: {
      primaryLayoutColor () {
        return this.$store.state.layoutPrimaryColor
      }
    }
  }
</script>
