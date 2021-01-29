import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartArr: []
  },
  mutations: {
    addCart(state, payload){
      console.log(state, payload)
      let goods = state.cartArr.find(item => item.iid = payload.id)
      if(goods) {
        goods.count += 1
      }else {
        payload.count = 1
        state.cartArr.push(payload)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
