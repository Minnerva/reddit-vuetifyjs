<template>
  <div>
    <card-thread-content />
    <v-divider class="mb-3 mt-2" />
    <card-comments :children="this.comments" />
  </div>
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
        this.$store.dispatch({ type: 'setLayoutStateFromParams', r: this.$route.params.r }).then(() => {
          this.$store.dispatch({ type: 'getComments', id: this.$route.params.id })          
        })
      }
    }
  }
</script>
