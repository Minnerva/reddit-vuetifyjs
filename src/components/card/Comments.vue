<template >
  <div>
    <div v-for="child in children" :key="child.data.id">
      <v-flex v-bind="cardOffSet">
        <v-card  class="mb-2 mt-2" >
          <v-container fluid >
            <v-layout row >
              <v-flex>
                <div v-if="child.kind === 't1'">
                  <div v-html="unescapeHTML(child.data.body_html)"></div>
                </div>
                <div v-else>
                  <div>
                    <a href="#" @click.prevent="openMoreReply(child)">
                      <i>{{ child.data.count }} more {{ getLangReply(child) }}...</i>
                    </a>
                  </div>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <card-comments :children="getReplies(child)" />
    </div>
  </div>
</template>

<script>
  import CardComments from '~components/card/Comments'

  export default {
    name: 'card-comments',
    components: {
      CardComments
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
        return child.data.count <= 1 ? 'reply' : 'replies'
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
