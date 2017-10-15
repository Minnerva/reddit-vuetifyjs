import getters from '~stores/getters'
import mutations from '~stores/mutations'
import actions from '~stores/actions'

export default {
  strict: process.env.NODE_ENV !== 'production',
  state: {
    toolbarTitle: 'Loading...',
    subReddit: '',
    apiThread: '',
    threads: []
  },
  getters,
  mutations,
  actions
}
