<template>
  <v-flex class="text-xs-center">
    <v-icon :color="upvoteColor">arrow_upward</v-icon>
    <div>{{ score }}</div>
    <v-icon :color="downvoteColor">arrow_downward</v-icon>
  </v-flex>
</template>

<script>
  export default {
    props: {
      score: { type: Number, default: 0 }
    },
    computed: {
      upvoteColor () {
        return this.score > 0 ? 'green' : ''
      },
      downvoteColor () {
        return this.score < 0 ? 'red' : ''
      }
    }
  }
</script>
