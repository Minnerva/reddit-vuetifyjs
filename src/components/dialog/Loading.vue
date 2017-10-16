<template>
  <v-dialog v-model="isOpen" persistent :fullscreen="true">
    <v-container fill-height>
      <v-layout row wrap align-center>
        <v-flex class="text-xs-center">
          <v-progress-circular indeterminate :size="125" :width="2" :color="layoutPrimaryColor" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-dialog>
</template>

<script>
  export default {
    computed: {
      layoutPrimaryColor () {
        return this.$store.state.layoutPrimaryColor
      },
      isOpen () {
        return this.$store.state.isMainContentLoading
      }
    }
  }
</script>
