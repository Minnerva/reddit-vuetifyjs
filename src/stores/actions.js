import axios from 'axios'

let xjs = {}

export default {
  async getThreads ({ state, commit }, { subReddit, action }) {
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
