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

const messages = getSystemLangs()
const i18n = new VueI18n({ locale: 'en', messages })

const app = new Vue({ store, router, i18n })
app.$mount('#app')
