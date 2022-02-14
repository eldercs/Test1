import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login'
import Main from '../components/Main'

const routes=[
  {
      path: '/',
      component: Login,
      props: true,
/*       if(!check){
      beforeEach: (to, from) => {
          return false
        }
      }  */
  },
  {
      path: '/main',
      component: Main,
      props: true

  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
