import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

Vue.axios.defaults.baseURL = 'http://localhost:3000/api'
Vue.axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'

new Vue({
  render: h => h(App),
}).$mount('#app')
