import Home from '@/pages/Home'
import Edit from '@/pages/Edit'
import Player from '@/pages/Player'

export default [
  {
    path: '/', 
    component: Home
  },
  // {
  //   path: '/:id', 
  //   component: Edit
  // },
  {
    path: '/player', 
    component: Player
  },
]
