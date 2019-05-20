import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/Home'
import Dashboard from '@/views/user/Dashboard'
import Notfound from '@/views/Notfound'
import AnimalList from '@/views/user/AnimalList'
import AnimalInfo from '@/views/user/AnimalInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/dashboard',
      component: Dashboard,
      children: [
        {
          path: '',
          name: 'animalList',
          component: AnimalList
        },
        {
          path: '/dashboard/:animal_type',
          name: 'animalinfo',
          component: AnimalInfo
        }
      ]
    },
    {
      path: '*',
      name: '404',
      component: Notfound
    }
  ]
})
