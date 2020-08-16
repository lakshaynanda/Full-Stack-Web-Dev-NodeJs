import Vue from 'vue'
import App from './App.vue'
import Ninjas from './Ninjas.vue' //global registration

Vue.component('Ninjas',Ninjas); //global registration

new Vue({
  el: '#app',
  render: h => h(App)
})
