import axios from 'axios'

let xjs = {}

export default {
  strict: process.env.NODE_ENV !== 'production',
  state: {
    toolbarTitle: 'Loading...',
    subReddit: '',
    apiThread: '',
    threads: []
  },
  getters: {
    toolbarTitle: state => {
      return `r/${state.toolbarTitle}`
    },
    routeToComments: (state, getters) => id => {
      return `${state.toolbarTitle}/${id}`
    }
  },
  mutations: {
    setSubReddit (state, { subReddit }) {
      state.subReddit = subReddit
    },
    setToolbarTitle (state) {
      state.toolbarTitle = state.subReddit
    },
    setApiThread (state) {
      state.apiThread = `https://www.reddit.com/r/${state.subReddit}/hot.json`
    },
    initSubReddit (state, { threads }) {
      this.state.threads = threads.data.data.children.map(({ data }) => {
        return data
      })
    },
    addNewThreads (state, payload) {
      console.log('new')
    }
  },
  actions: {
    async getThreads ({ commit }, { subReddit, action }) {
      commit({ type: 'setSubReddit', subReddit: subReddit })
      commit('setToolbarTitle')
      commit('setApiThread')
      xjs = await axios.get(this.state.apiThread)
      if (xjs.status === 200) {
        switch (action) {
          case 'init':
            commit({ type: 'initSubReddit', threads: xjs })
            break
        }
      } else {
        console.error(xjs)
      }
    }
  }
}
