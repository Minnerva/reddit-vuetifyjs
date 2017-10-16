<template>
  <v-card class="mb-3 mt-3" :color="thread.stickied ? 'blue-grey darken-2': ''"> <!-- v-card color not working -->
    <v-container fluid >
      <v-layout row >
        <v-flex xs2 class="text-xs-center">
          <v-layout row align-center fill-height>
            <v-flex class="text-xs-center">
              <v-icon :color="upvoteColor">arrow_upward</v-icon>
              <div>{{ thread.score }}</div>
              <v-icon :color="downvoteColor">arrow_downward</v-icon>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs10>
          <div>
            <div class="headline cursor-pointer" @click="toDetail">{{ thread.title }}</div>
            <div>Submitted {{ createSince }}</div>
            <div>by {{ thread.author }}</div>
          </div>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="orange darken-2" dark @click="toDetail">
              <v-icon dark left>question_answer</v-icon>{{ thread.num_comments }} {{ textComments }}
            </v-btn>
          </v-card-actions>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    props: {
      thread: { 
        type: Object,
        default: function () {
          return {
            title: '',
            score: 0,
            author: '',
            created_utc: 0,
            num_comments: 0,

          }
        }
      }
    },
    computed: {
      createSince: function () {
        return this.thread.created_utc > 0 ? moment(this.thread.created_utc + '000', 'x').fromNow() : 'N/A'
      },
      upvoteColor: function () {
        return this.thread.score > 0 ? 'green' : ''
      },
      downvoteColor: function () {
        return this.thread.score < 0 ? 'red' : ''
      },
      textComments: function () {
        return this.thread.num_comments > 1 ? 'comments' : 'comment'
      }
    },
    methods: {
      toDetail: function () {
        this.$router.push(this.$store.getters.routeToComments(this.thread.id))
      }
    }
  }
</script>
