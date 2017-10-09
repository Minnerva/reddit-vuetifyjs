import LayoutDefault from '~layouts/Default'

import ViewIndex from '~views/Index'
import Error404 from '~views/errors/404'

export default [
  {
    path: '/',
    component: LayoutDefault,
    children: [
      { path: '', component: ViewIndex },
      { path: '*', component: Error404 }
    ]
  }
]
