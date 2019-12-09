import Vue from 'vue'
import VueRouter from 'vue-router'
import BuzzerLayout from '../layouts/BuzzerLayout.vue'
import Login from '../views/Login.vue'
import Accueil from '../views/Accueil.vue'
import Formulaire_Q_Image from '../views/Formulaire_Q_Image.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/fqi',
    name: 'formulaireqi',
    component: Formulaire_Q_Image
  },
  {
    path:'/',
    redirect:'accueil',
    component: BuzzerLayout,
    children:[
      {path:'/accueil', component: Accueil}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
