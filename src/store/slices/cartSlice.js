import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) => {
  return state.findIndex((item) => item.id === action.payload.id);
};

const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart(state, action) {
      const itemIndex = findItemIndex(state, action);
      itemIndex !== -1
        ? (state[itemIndex].quantity += 1)
        : state.push({ ...action.payload, quantity: 1 });
    },
    removeItemFromCart(state, action) {
      const itemIndex = findItemIndex(state, action);
      state.splice(itemIndex, 1);
    },
    emptyCart() {
      return [];
    },
    increaseItemQuantity(state, action) {
      const itemIndex = findItemIndex(state, action);
      console.log(itemIndex);
      console.log(state[itemIndex]);
      
      state[itemIndex].quantity += 1;
    },
    decreaseItemQuantity(state, action) {
      const itemIndex = findItemIndex(state, action);
      state[itemIndex].quantity -= 1;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  emptyCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = slice.actions;
export default slice.reducer;
