import { combineReducers, createStore } from "redux";

import cartReducer from "./reducers/cartReducer.js";
import wishListReducer from "./reducers/wishListReducer.js";
import productReducer from "./reducers/productReducer.js";

const reducer = combineReducers({
  products: productReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);