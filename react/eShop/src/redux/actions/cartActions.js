import { cartActionsTypes } from "./actionTypes";

export const addItemToCart = (product) => {
  return {
    type: cartActionsTypes.ADD_TO_CART,
    product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: cartActionsTypes.REMOVE_FROM_CART,
    productId
  };
};
