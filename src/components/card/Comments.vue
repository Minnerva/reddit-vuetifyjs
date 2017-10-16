<template >
  <div>
    <v-card class="mb-2 mt-2" v-for="comment in comments" :key="comment.data.id">
      <v-container fluid >
        <v-layout row >
          <v-flex>
            <div>
              <div v-html="unescapeHTML(comment.data.body_html)"></div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
  export default {
    computed: {
      comments () {
        return this.$store.state.comments
      }
    },
    methods: {
      unescapeHTML (html) {
        return _.unescape(html)
      }
    }
  }
</script>
