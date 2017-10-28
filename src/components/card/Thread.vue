<template>
  <v-card class="mb-3 mt-3" :color="thread.stickied ? 'deep-purple lighten-4': ''"> <!-- v-card color not working -->
    <v-container fluid >
      <v-layout row>
        <v-flex xs2>    
          <flex-up-vote-down-vote :score="thread.score" />
        </v-flex>
        <v-flex xs10>
          <div>
            <div class="headline cursor-pointer" @click="toDetail">{{ thread.title }}</div>
            <div>
              {{ $t('general.submitted') }} 
              <span-time-form-now :timestamp="thread.created_utc" /> 
              {{ $t('general.by') }} 
              {{ thread.author }} 
              ({{ thread.domain }})
            </div>
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
  import FlexUpVoteDownVote from '~components/flex/UpVoteDownVote'
  import SpanTimeFormNow from '~components/span/TimeFromNow'

  export default {
    components: {
      FlexUpVoteDownVote,
      SpanTimeFormNow
    },
    props: {
      thread: { 
        type: Object,
        default: function () {
          return {
            title: '',
            score: 0,
            author: '',
            created_utc: 0,
            num_comments: 0
          }
        }
      }
    },
    computed: {
      textComments: function () {
        return this.thread.num_comments > 1 ? this.$t('general.comments') : this.$t('general.comment')
      }
    },
    methods: {
      toDetail: function () {
        this.$router.push(this.$store.getters.routeToComments(this.thread.id))
      }
    }
  }
</script>
