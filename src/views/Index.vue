<template>
  <v-layout row wrap>
    <v-flex xs12>
      <card-thread v-for="thread in threads" :key="thread.id" :thread="thread" />
      <!-- <div v-if="threads.length <= 0">There seems to be no sub-reddit you're looking for</div> -->
    </v-flex>
  </v-layout>
</template>

<script>
  import CardThread from '~components/card/Thread'

  export default {
    components: {
      CardThread
    },
    created () {
      this.initSubReddit()
    },
    watch: {
      '$route' (to, from) {
        this.initSubReddit()
      }
    },
    computed: {
      threads: function () {
        return this.$store.state.threads
      }
    },
    methods: {
      initSubReddit () {
        this.$store.dispatch({ 
          type: 'getThreads',
          subReddit: this.$route.params.r ? this.$route.params.r : 'all',
          action: 'init'
        })
      }
    }
  }
</script>
