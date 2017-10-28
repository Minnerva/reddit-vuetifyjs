export default {
  toolbarTitle (state) {
    return `r/${state.toolbarTitle}`
  },
  routeToComments (state) {
    let f = (id) => `${state.toolbarTitle}/${id}`
    return f
  }
}
