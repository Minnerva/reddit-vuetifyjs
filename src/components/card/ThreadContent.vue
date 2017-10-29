<template>
  <v-card>
    <thread-image :data="thread" :on-image-click="toExternalURL" />
    <v-container fluid >
      <v-layout row >
        <v-flex xs2>    
          <up-vote-down-vote :score="thread.score" />
        </v-flex>
        <v-flex xs10>
          <div>
            <thread-header :thread="thread" :on-title-click="toExternalURL" />

            <v-divider class="mb-3 mt-2" />

            <template v-if="thread.domain === 'youtube.com'">
              <iframe width="100%" height="300px" :src="youtubeEmbedUrl(thread.url)" frameborder="0" allowfullscreen></iframe>
            </template>
            <template v-else-if="thread.domain === 'self.' + $route.params.r">
              <div v-html="unescapeHTML(thread.selftext_html)"></div>                
            </template>
            <template v-else>
              <div></div>
            </template>
          </div>
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
    data () {
      return {
        youtubeRegExp: new RegExp('v=([A-Za-z0-9]*)&?', 'ig')
      }
    },
    computed: {
      thread () {
        return this.$store.state.threadContent
      }
    },
    methods: {
      toExternalURL () {
        window.open(this.thread.url)
      },
      unescapeHTML (html) {
        return _.unescape(html)
      },
      youtubeEmbedUrl (url) {
        return 'https://www.youtube.com/embed/' + this.youtubeRegExp.exec(url)[1]
      }
    }
  }
</script>
