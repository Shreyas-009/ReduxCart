import { createSlice } from "@reduxjs/toolkit";
import { productsList } from "../productsList.js";

const slice = createSlice({
  name: "products",
  initialState: productsList,
  reducers: {},
});

export default slice.reducer;
