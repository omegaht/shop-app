import { ADD_TO_CART, DELETE_FROM_CART } from "../actions/cart";
import { CartActionTypes, StateType } from "../actions/types";
import CartItem from "../../models/cart-item";

const initialState: StateType = {
  items: {},
  totalSum: 0,
};

export const cartReducer = (state = initialState, action: CartActionTypes) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { payload } = action;
      let newOrupdatedItem;
      if (state.items[payload.id]) {
        newOrupdatedItem = new CartItem(
          state.items[payload.id].quantity + 1,
          payload.price,
          payload.title,
          state.items[payload.id].sum + payload.price
        );
      } else {
        newOrupdatedItem = new CartItem(
          1,
          payload.price,
          payload.title,
          payload.price
        );
      }
      return {
        ...state,
        items: { ...state.items, [payload.id]: newOrupdatedItem },
        totalSum: state.totalSum + payload.price,
      };

    case DELETE_FROM_CART:
      const selectedCartItem = state.items[action.payload];
      const currentQty = selectedCartItem.quantity;
      let updatedCartItems;
      if (currentQty > 1) {
        const updatedCartItem = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.productPrice,
          selectedCartItem.productTitle,
          selectedCartItem.sum - selectedCartItem.productPrice
        );
        updatedCartItems = {
          ...state.items,
          [action.payload]: updatedCartItem,
        };
      } else {
        updatedCartItems = { ...state.items };
        delete updatedCartItems[action.payload];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalSum: state.totalSum - selectedCartItem.productPrice,
      };

    default:
      return state;
  }
};
