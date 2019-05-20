import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import DashBoard from '@/views/DashBoard'
import NotFound from '@/views/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/dashboard/:animal_type',
      name: 'DashBoard',
      component: DashBoard
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
