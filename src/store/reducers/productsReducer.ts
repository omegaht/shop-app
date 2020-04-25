import PRODUCTS from "../../data/dummy-data";

const initialState = {
  products: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

export const productsReducer = (state = initialState, action) => {
  return state;
};
