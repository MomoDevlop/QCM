import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'//Importation des dependences de bootstrap-vue

import 'bootstrap/dist/css/bootstrap.min.css'//Importation des dependences de bootstrap 
import 'bootstrap-vue/dist/bootstrap-vue.min.css'//Importation des dependences de bootstrap-vue

import App from './App.vue'

Vue.use(BootstrapVue)//Importation des dependences de bootstrap-vue
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')