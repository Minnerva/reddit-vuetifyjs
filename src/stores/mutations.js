export default {
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
    state.threads = threads.data.data.children.map(({ data }) => {
      return data
    })
  },
  addNewThreads (state, payload) {
    console.log('new')
  }
}
