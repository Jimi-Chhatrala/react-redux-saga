import { ADD_TO_CART, REMOVE_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
  // if (action.type === ADD_TO_CART) {
  //   console.warn("reducer called", action);
  //   return action.data;
  // } else {
  //   return "No action matched.";
  // }

  // return "abc";

  switch (action.type) {
    case ADD_TO_CART:
      // add to cart logic
      console.warn("ADD_TO_CART Condition ", action);
      return 1 + 1;
    // break;
    // case REMOVE_TO_CART:
    //   console.warn("REMOVE Condition", action);
    //   return 1 - 1;

    default:
      // no case matched
      // break;
      return "no action called";
  }
};
