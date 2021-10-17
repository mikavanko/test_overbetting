import Home from '@/pages/Home'
import Edit from '@/pages/Edit'

export default [
  {
    path: '/', 
    component: Home
  },
  {
    path: '/:id', 
    component: Edit
  },
]
