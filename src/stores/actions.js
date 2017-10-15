import axios from 'axios'

let xjs = {}

export default {
  async getThreads ({ state, commit }, { subReddit, action }) {
    commit({ type: 'setSubReddit', subReddit: subReddit })
    commit('setToolbarTitle')
    commit('setApiThread')
    xjs = await axios.get(state.apiThread)
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
