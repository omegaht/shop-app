import { combineReducers, createStore } from "redux";
import { productsReducer } from "./reducers/productsReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
