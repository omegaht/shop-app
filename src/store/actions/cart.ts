import Product from "../../models/product";
import { CartActionTypes } from "./types";

export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";

export const addToCart = (product: Product): CartActionTypes => {
  return { type: ADD_TO_CART, payload: product };
};

export const deleteFromCart = (productId: string): CartActionTypes => {
  return { type: DELETE_FROM_CART, payload: productId };
};
