import Vue from 'vue'
import VueRouter from 'vue-router'
import BuzzerLayout from '../layouts/BuzzerLayout.vue'
import Login from '../views/Login.vue'
import Accueil from '../views/Accueil.vue'
import Choix_Formulaire from '../views/Choix_Formulaire.vue'
import Formulaire_Q_Image from '../views/Formulaire_Q_Image.vue'
import Formulaire_Q_Audio from '../views/Formulaire_Q_Audio.vue'
import Formulaire_Q_Texte from '../views/Formulaire_Q_Texte.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path:'/',
    redirect:'accueil',
    component: BuzzerLayout,
    children:[
      {
        path:'/accueil', 
        component: Accueil
      },
      {
        path: '/choixf',
        name: 'choixformulaire',
        component: Choix_Formulaire
      },
      {
        path: '/fqi',
        name: 'formulaireqi',
        component: Formulaire_Q_Image
      },
      {
        path: '/fqa',
        name: 'formulaireqa',
        component: Formulaire_Q_Audio
      },
      {
        path: '/fqt',
        name: 'formulaireqt',
        component: Formulaire_Q_Texte
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
