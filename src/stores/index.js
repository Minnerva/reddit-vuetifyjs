import getters from '~stores/getters'
import mutations from '~stores/mutations'
import actions from '~stores/actions'

const DEFAULT_SUB_REDDIT = 'webdev'
const DEFAULT_LAYOUT_PRIMARY_COLOR = 'indigo' // only from vuetify's color

export default {
  strict: process.env.NODE_ENV !== 'production',
  state: {
    defaultLayoutPrimaryColor: DEFAULT_LAYOUT_PRIMARY_COLOR,
    defaultSubReddit: DEFAULT_SUB_REDDIT,

    toolbarTitle: 'Loading...',
    layoutPrimaryColor: DEFAULT_LAYOUT_PRIMARY_COLOR,
    drawerMenus: [
      {
        title: 'WebDev',
        path: '/',
        icon: 'home',
        primaryColor: DEFAULT_LAYOUT_PRIMARY_COLOR
      },
      {
        title: 'VueJS',
        path: 'vuejs',
        icon: 'devicon-vuejs-plain',
        primaryColor: 'green darken-3'
      },
      {
        title: 'ReactJS',
        path: 'reactjs',
        icon: 'devicon-react-original',
        primaryColor: 'light-blue lighten-1'
      }
    ],
    subReddit: DEFAULT_SUB_REDDIT, // Also, a default for index,
    apiThread: '',
    threads: []
  },
  getters,
  mutations,
  actions
}
