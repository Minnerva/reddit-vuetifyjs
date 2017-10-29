<template>
  <v-layout row wrap>
    <v-flex xs12>
      <card-thread-content />
      <v-divider class="mb-3 mt-2" />
      <card-comments :children="this.comments" />
    </v-flex>
  </v-layout>
</template>

<script>
  import CardThreadContent from '~components/card/ThreadContent'
  import CardComments from '~components/card/Comments'

  export default {
    components: {
      CardThreadContent,
      CardComments
    },
    created () {
      this.initComments()
    },
    watch: {
      '$route' (to, from) {
        this.initComments()
      }
    },
    computed: {
      comments () {
        return this.$store.state.comments
      }
    },
    methods: {
      initComments () {
        this.$store.commit({ type: 'setIsDoneRender', isDoneRender: false })
        this.$store.dispatch({ type: 'setLayoutStateFromParams', r: this.$route.params.r })
        this.$store.dispatch({ type: 'getComments', id: this.$route.params.id }).then(() => {
          this.$store.commit({ type: 'setIsDoneRender', isDoneRender: true })               
        })
      }
    }
  }
</script>
