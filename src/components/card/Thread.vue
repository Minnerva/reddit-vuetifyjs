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
            <div>{{ $t('general.submitted') }} {{ createSince }} {{ $t('general.by') }} {{ thread.author }} ({{ thread.domain }})</div>
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
        let localeText = ''
        let singular = false
        let momentText = moment(this.thread.created_utc + '000', 'x').fromNow()
        let splitText = momentText.split(' ')
        if (['a', 'an'].indexOf(splitText[0]) > -1) {
          singular = true
        }
        if (singular) {
          if (this.$i18n.locale === 'th') {
            localeText += 'หนึ่ง'
          }
          localeText += this.$t('time.' + _.camelCase(splitText[0] + ' ' + splitText[1]))
        } else {
          localeText += splitText[0] + ' ' + this.$t('time.' + splitText[1])
        }
        if (this.$i18n.locale === 'en') {
          localeText += ' '
        }
        localeText += this.$t('time.ago')
        return localeText
      },
      upvoteColor: function () {
        return this.thread.score > 0 ? 'green' : ''
      },
      downvoteColor: function () {
        return this.thread.score < 0 ? 'red' : ''
      },
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
