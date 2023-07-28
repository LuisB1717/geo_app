import "core-js/stable"
import "regenerator-runtime/runtime"
import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'
import App from './App.vue'
import router from './router'
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false

Vue.use(VueObserveVisibility)

new Vue({
  apolloProvider: createProvider(),
  router,
  render: h => h(App)
}).$mount('#app')
