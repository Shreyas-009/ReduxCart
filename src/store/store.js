import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slices/cartSlice.js";
import wishListReducer from "./slices/wishListSlice.js";
import productReducer from "./slices/productSlice.js";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
});
