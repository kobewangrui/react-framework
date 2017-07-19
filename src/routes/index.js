import Loadable from 'react-loadable'
import Index from 'views/Index'

export default [
  {
    path: '/',
    component: Index,
    childRoutes: [
      {
        path:'/one',
        component: Loadable({
          loader:() => import('views/One'),
          LoadingComponent:() => null
        })
      },
      {
        path:'/two',
        component: Loadable({
          loader:() => import('views/Two'),
          LoadingComponent:() => null
        })
      }
    ]
  }
]
