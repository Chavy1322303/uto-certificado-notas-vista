import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PortalVue from 'portal-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
Vue.use(PortalVue)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)