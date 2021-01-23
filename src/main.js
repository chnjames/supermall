import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Swipe, SwipeItem, Col, Row, Icon} from 'vant'

Vue.use(Swipe).use(SwipeItem).use(Col).use(Row).use(Icon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
