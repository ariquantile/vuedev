import Vue from 'vue'
import App from './App.vue'

import routes from './router/index.js' // <---

Vue.config.productionTip = false


import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history',
})

import vuetify from './plugins/vuetify';

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
