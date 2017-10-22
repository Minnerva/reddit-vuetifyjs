<template>
  <v-layout row wrap>
    <v-flex xs12>
      <!-- <div v-if="threads.length <= 0">There seems to be no sub-reddit you're looking for</div>       -->
      <card-thread v-for="thread in threads" :key="thread.id" :thread="thread" />
      <v-btn :loading="isLoadingMore" v-show="isShowLoadMore" @click="loadMore" block color="secondary" dark>Load More</v-btn>
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
      },
      isShowLoadMore: function () {
        return this.$store.state.isShowLoadMore
      },
      isLoadingMore: function () {
        return this.$store.state.isLoadingMore
      }
    },
    methods: {
      initSubReddit () {
        this.$store.dispatch({ type: 'setLayoutStateFromParams', r: this.$route.params.r })
        this.$store.dispatch({ type: 'getThreads', action: 'init' }).then(() => {
          this.$store.commit({ type: 'setIsShowLoadMore', isShowLoadMore: true })
        })
      },
      loadMore () {
        this.$store.dispatch({ type: 'getMoreThreads' })
      }
    }
  }
</script>
