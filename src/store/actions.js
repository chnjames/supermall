import {
  ADD_COUNTER,
  ADD_TO_CART,
  ADD_CART
} from "@/store/mutation-types";

export default {
  [ADD_CART](context, payload) {
    let goods = context.state.cartArr.find(item => item.id === payload.id)
    if (goods) {
      context.commit(ADD_COUNTER, goods)
    } else {
      context.commit(ADD_TO_CART, payload)
    }
  }
}