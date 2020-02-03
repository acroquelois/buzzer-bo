import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './quasar'
import store from './store'

Vue.config.productionTip = false

const token = localStorage.getItem('token')
console.log('token', token)
if(token != null){
  console.log('ping', token)
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
