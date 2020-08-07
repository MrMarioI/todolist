import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.prototype.$ebus = new Vue();


library.add(faPlus, faMinus)

Vue.config.productionTip = false
Vue.prototype.$ebus = new Vue();
Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
