import {
  ADD_COUNTER,
  ADD_TO_CART
} from "@/store/mutation-types";

export default {
  [ADD_COUNTER](state, payload) {
    console.log(payload)
    payload.count += 1
  },
  [ADD_TO_CART](state, payload) {
    payload.check = true
    payload.count = 1
    state.cartArr.push(payload)
  }
}