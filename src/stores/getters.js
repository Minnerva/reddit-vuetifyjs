export default {
  toolbarTitle: state => {
    return `r/${state.toolbarTitle}`
  },
  routeToComments: (state, getters) => id => {
    return `${state.toolbarTitle}/${id}`
  }
}
