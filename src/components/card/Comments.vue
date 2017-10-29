<template >
  <div>
    <div v-for="child in children" :key="child.data.id">
      <v-flex v-bind="cardOffSet">
        <v-card>
          <v-container fluid >
            
            <v-layout row v-if="child.kind === 't1'">
              <v-flex xs2>
                <up-vote-down-vote :score="child.data.score" />
              </v-flex>
              <v-flex xs10 class="has-left-border">
                <div v-html="unescapeHTML(child.data.body_html)"></div>
                <v-divider class="mb-3 mt-2" />
                <div>
                  {{ $t('general.submitted') }}  
                  <time-from-now :timestamp="child.data.created_utc" /> 
                  {{ $t('general.by') }} {{ child.data.author }}
                </div>
              </v-flex>
            </v-layout>

            <v-layout row v-else>
              <a href="#" @click.prevent="openMoreReply(child)">
                <i>{{ child.data.count }} {{ getLangReply(child) }}...</i>
              </a>
            </v-layout>

          </v-container>
        </v-card>
      </v-flex>
      <card-comments :children="getReplies(child)" />
    </div>
  </div>
</template>

<script>
  import CardComments from '~components/card/Comments' // self-call
  import UpVoteDownVote from '~components/flex/UpVoteDownVote'
  import TimeFromNow from '~components/span/TimeFromNow'

  export default {
    name: 'card-comments',
    components: {
      CardComments,
      UpVoteDownVote,
      TimeFromNow
    },
    props: {
      children: { type: Array, default: [] }
    },
    computed: {
      thread () {
        return this.$store.state.threadContent
      },
      childDept () {
        return this.children.length > 0 ? this.children[0].data.depth : 0
      },
      cardOffSet () {
        return {
          ['offset-xs' + this.childDept]: true
        }
      }
    },
    methods: {
      unescapeHTML (html) {
        return _.unescape(html)
      },
      getReplies (child) {
        return  _.isObject(child.data.replies) ? child.data.replies.data.children : []
      },
      getLangReply (child) {
        return child.data.count <= 1 ? this.$t('general.moreReply') : this.$t('general.moreReplies')
      },
      getParentId (child) {
        return child.data.parent_id.replace(/(t[0-9]*_)/g, '')
      },
      openMoreReply (child) {
        window.open('https://reddit.com' + this.thread.permalink + this.getParentId(child))
      }
    }
  }
</script>
