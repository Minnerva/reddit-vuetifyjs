<template>
  <span>
    {{ createSince }}
  </span>
</template>

<script>
  import moment from 'moment'
  export default {
    props: {
      timestamp: { type: Number, default: 0 }
    },
    computed: {
      createSince () {
        let localeText = ''
        let singular = false
        let momentText = moment(this.timestamp + '000', 'x').fromNow()
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
      }
    }
  }
</script>
