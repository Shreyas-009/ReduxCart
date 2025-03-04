import { createSlice } from "@reduxjs/toolkit";

const fintWishlistItem = (state, action) => {  
  return state.findIndex((item) => item === action.payload);
};

const slice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addItemToWishlist(state, action) {
      state.push(action.payload);
    },
    removeItemFromWishlist(state, action) {
      const itemIndex = fintWishlistItem(state, action);
      state.splice(itemIndex, 1);
    },
  },
});

export const { addItemToWishlist, removeItemFromWishlist } = slice.actions;
export default slice.reducer;
