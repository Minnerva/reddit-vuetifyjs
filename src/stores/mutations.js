let drawerMenu = ''

export default {
  setDrawerOpen (state, { isOpen }) {
    state.drawerOpen = isOpen
  },
  setIsDoneRender (state, { isDoneRender }) {
    state.isDoneRender = isDoneRender
  },
  setSubReddit (state, { subReddit }) {
    state.subReddit = subReddit
  },
  setToolbarTitle (state) {
    state.toolbarTitle = state.subReddit
  },
  setDefaultColor (state) {
    drawerMenu = _.find(state.drawerMenus, o => {
      return o.r === state.subReddit
    })
    state.layoutPrimaryColor = drawerMenu ? drawerMenu.primaryColor : state.defaultLayoutPrimaryColor
  },
  emptyThreads (state) {
    state.threads = []
  },
  initSubReddit (state, { threads }) {
    state.threads = threads.data.data.children.map(({ data }) => {
      return data
    })
  },
  addNewThreads (state, { threads }) {
    let formatThreads = threads.data.data.children.map(({ data }) => {
      return data
    })
    state.threads.push(...formatThreads)
  },
  setThreadContent (state, { thread }) {
    state.threadContent = thread.data[0].data.children[0].data
  },
  setComments (state, { comments }) {
    state.comments = comments.data[1].data.children
  },
  emptyThreadContent (state) {
    state.threadContent = { title: '' }
  },
  emptyComments (state) {
    state.comments = []
  },
  setIsShowLoadMore (state, { isShowLoadMore }) {
    state.isShowLoadMore = isShowLoadMore
  },
  setIsLoadingMore (state, { isLoadingMore }) {
    state.isLoadingMore = isLoadingMore
  },
  setThreadAfter (state, { threadAfter }) {
    state.threadAfter = threadAfter
  }
}
