import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import DashBoard from '@/views/DashBoard'
import AnimalDetail from '@/views/AnimalDetail'
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
      path: '/dashboard',
      name: 'DashBoard',
      component: DashBoard,
      children: [
        {
          path: ':animal_type',
      name: 'AnimalDetail',
      component: AnimalDetail,
        }
        
      ]
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
