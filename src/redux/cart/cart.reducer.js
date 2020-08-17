const { CartActionTypes } = require("./cart.types");

const initalState = {
  hidden: true,
};

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
