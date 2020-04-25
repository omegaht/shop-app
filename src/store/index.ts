import { combineReducers, createStore } from "redux";
import { productsReducer } from "./reducers/productsReducer";
import { cartReducer } from "./reducers/cartReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  productsState: productsReducer,
  cartState: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeWithDevTools());

export default store;
