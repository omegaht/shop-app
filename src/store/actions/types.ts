import { ADD_TO_CART, DELETE_FROM_CART } from "./cart";
import Product from "../../models/product";

type Item = {
  [key: string]: any;
};

export interface StateType {
  items: Item;
  totalSum: number;
}

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: Product;
}

interface DeleteFromCartAction {
  type: typeof DELETE_FROM_CART;
  payload: string;
}

export type CartActionTypes = AddToCartAction | DeleteFromCartAction;
