import { cartActionsTypes } from "../actions/actionTypes";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionsTypes.ADD_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.product] };
    case cartActionsTypes.REMOVE_FROM_CART:{
      const newItems = state.cartItems.filter((i)=>i.id!==action.productId)
      return { ...state, cartItems: newItems };
    }
     
  }
  return { ...state };
};

export default cartReducer;
