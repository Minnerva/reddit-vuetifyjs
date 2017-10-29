<template>
  <v-card class="mb-3 mt-3" :color="thread.stickied ? 'deep-purple lighten-4': ''"> <!-- v-card color not working -->
    <thread-image :data="thread" :on-image-click="toDetail" />
    <v-container fluid >
      <v-layout row>
        <v-flex xs2>    
          <up-vote-down-vote :score="thread.score" />
        </v-flex>
        <v-flex xs10 class="has-left-border">
          <thread-header :thread="thread" :on-title-click="toDetail" />
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
  import ThreadImage from '~components/card/ThreadImage'
  import ThreadHeader from '~components/card/ThreadHeader'
  import UpVoteDownVote from '~components/flex/UpVoteDownVote'

  export default {
    components: {
      ThreadImage,
      ThreadHeader,
      UpVoteDownVote
    },
    props: {
      thread: { 
        type: Object,
        default () {
          return {
            id: '',
            stickied: false,
            score: 0,
            num_comments: 0
          }
        }
      }
    },
    computed: {
      textComments () {
        return this.thread.num_comments > 1 ? this.$t('general.comments') : this.$t('general.comment')
      }
    },
    methods: {
      toDetail () {
        this.$router.push(this.$store.getters.routeToComments(this.thread.id))
      }
    }
  }
</script>
