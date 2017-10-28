import './css'

import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'

import stores from '~stores/index'
import routes from './routes'
import { getSystemLangs } from '~utils/lang'

Vue.use(Vuetify)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueI18n)

const store = new Vuex.Store(stores)
const router = new VueRouter({ routes, mode: 'history' })
const i18n = new VueI18n({ locale: 'en', messages: getSystemLangs() })

const app = new Vue({ store, router, i18n })
app.$mount('#ajkLmeno')

if (process.env.NODE_ENV === 'production') {
  const baseUrl = document.querySelector('base').getAttribute('href')

  if (window.location.protocol !== 'https:') {
    window.location.href = baseUrl
  }

  // register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(baseUrl + 'sw.js')
  }
}
