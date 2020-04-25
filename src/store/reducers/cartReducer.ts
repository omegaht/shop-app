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
      return {
        ...state,
        items: state.items.filter((item) => item.id === action.payload),
        totalSum: state.totalSum--,
      };

    default:
      return state;
  }
};
