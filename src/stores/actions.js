import axios from 'axios'

let xjs = {}

export default {
  setLayoutStateFromParams ({ state, commit }, { r }) {
    commit({
      type: 'setSubReddit',
      subReddit: r || state.defaultSubReddit
    })
    commit('setToolbarTitle')
    commit('setDefaultColor')
  },
  async getThreads ({ state, commit }, { action }) {
    // commit({ type: 'setMainContentLoading', isLoading: true })
    commit('emptyThreads')
    xjs = await axios.get(`https://www.reddit.com/r/${state.subReddit}/hot.json`)
    if (xjs.status === 200) {
      switch (action) {
        case 'init':
          commit({ type: 'initSubReddit', threads: xjs })
          commit({ type: 'setThreadAfter', threadAfter: xjs.data.data.after })
          break
      }
    } else {
      console.error(xjs)
    }
    // commit({ type: 'setMainContentLoading', isLoading: false })
  },
  async getMoreThreads ({ state, commit }) {
    commit({ type: 'setIsLoadingMore', isLoadingMore: true })
    xjs = await axios.get(`https://www.reddit.com/r/${state.subReddit}/hot.json`, {
      params: {
        after: state.threadAfter
      }
    })
    if (xjs.status === 200) {
      commit({ type: 'addNewThreads', threads: xjs })
      commit({ type: 'setThreadAfter', threadAfter: xjs.data.data.after })
    }
    commit({ type: 'setIsLoadingMore', isLoadingMore: false })
  },
  async getComments ({ state, commit }, { id }) {
    commit('emptyThreadContent')
    commit('emptyComments')
    xjs = await axios.get(`https://www.reddit.com/r/${state.subReddit}/comments/${id}/.json`)
    if (xjs.status === 200) {
      commit({ type: 'setThreadContent', thread: xjs })
      commit({ type: 'setComments', comments: xjs })
    } else {
      console.error(xjs)
    }
  }
}
