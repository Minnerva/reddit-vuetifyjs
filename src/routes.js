import LayoutDefault from '~layouts/Default'

import ViewIndex from '~views/Index'
import ViewComments from '~views/Comments'
import Error404 from '~views/errors/404'

export default [
  {
    path: '/',
    component: LayoutDefault,
    children: [
      { path: '', component: ViewIndex },
      { path: ':r', component: ViewIndex },
      { path: ':r/:id', component: ViewComments },
      { path: '*', component: Error404 }
    ]
  }
]
