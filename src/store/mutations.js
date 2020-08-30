import {
  ADD_COUNTER,
  ADD_TO_CART,
} from './mutation-types.js'

export default {
  // mutations唯一的目的就是修改state中的状态
  // mutations中的每个方法尽可能完成的事件比较单一一点
  // addCart(state,payload) {
    // playload新添加的商品
    // let oldProduct = null;
    // for (let item of state.cartList) {
    //   if (item.iid === payload.iid) {
    //     oldProduct = item
    //   }
    // }
    // }
    [ADD_COUNTER](state,payload) {
      payload.count++
    },
    [ADD_TO_CART](state,payload) {
      payload.checked = true
      state.cartList.push(payload)
    }
  }