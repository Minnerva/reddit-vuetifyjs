let drawerMenu = ''

export default {
  setSubReddit (state, { subReddit }) {
    state.subReddit = subReddit
  },
  setToolbarTitle (state) {
    state.toolbarTitle = state.subReddit
  },
  setDefaultColor (state) {
    drawerMenu = _.find(state.drawerMenus, o => {
      return o.path === state.subReddit
    })
    state.layoutPrimaryColor = drawerMenu ? drawerMenu.primaryColor : state.defaultLayoutPrimaryColor
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
