import { addItemsToCart } from "./cart.utils";
const { CartActionTypes } = require("./cart.types");

const initalState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
