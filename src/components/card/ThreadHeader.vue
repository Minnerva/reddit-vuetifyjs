<template>
  <div>
    <div>
      <span class="headline cursor-pointer" @click="onTitleClick">{{ thread.title }}</span>
      <span>({{ thread.domain }})</span>
    </div>
    <div>{{ $t('general.submitted') }}  <time-from-now :timestamp="thread.created_utc" /></div>
    <div>{{ $t('general.by') }} {{ thread.author }} </div>
  </div>
</template>

<script>
  import TimeFromNow from '~components/span/TimeFromNow'

  export default {
    components: {
      TimeFromNow
    },
    props: {
      onTitleClick: {
        type: Function,
        default () {
          return false
        }
      },
      thread: {
        type: Object,
        default () {
          return {
            title: '',
            domain: '',
            created_utc: 0,
            author: '',
            url: ''
          }
        }
      }
    }
  }
</script>