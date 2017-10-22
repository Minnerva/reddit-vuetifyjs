<template>
  <v-btn v-bind="buttonAttrs" @click="changeLang(lang)" :color="layoutPrimaryColor">{{ langText }}</v-btn>
</template>

<script>
  export default {
    props: {
      lang: { type: String, default: 'en' }
    },
    computed: {
      buttonAttrs () {
        return {
          dark: this.currentLang !== this.lang,
          light: this.currentLang === this.lang,
          disabled: this.currentLang === this.lang
        }
      },
      langText () {
        return this.lang.toUpperCase()
      },
      layoutPrimaryColor () {
        return this.$store.state.layoutPrimaryColor
      },
      drawer () {
        return this.$store.state.drawerOpen
      },
      currentLang () {
        return this.$i18n.locale
      }
    },
    methods: {
      changeLang (lang) {
        this.$i18n.locale = lang
        this.$store.commit('setDrawerOpen', { isOpen: !this.drawer })
      }
    }
  }
</script>
