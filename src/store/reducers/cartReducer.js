import { produce } from "immer";

// Action types
const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const EMPTY_CART = "cart/removeAll";
const CART_INCREASE_QUANTITY = "cart/increaseQuantity";
const CART_DECREASE_QUANTITY = "cart/decreaseQuantity";

// Action Creators
export function addItemToCart(productData) {
  return { type: CART_ADD_ITEM, payload: productData };
}

export function removeItemFromCart(productId) {
  return { type: CART_REMOVE_ITEM, payload: { id: productId } };
}

export function increaseItemQuantity(productId) {
  return { type: CART_INCREASE_QUANTITY, payload: { id: productId } };
}

export function decreaseItemQuantity(productId) {
  return { type: CART_DECREASE_QUANTITY, payload: { id: productId } };
}

export function emptyCart() {
  return { type: EMPTY_CART, payload: { id: -1 } };
}

// Reducer
export default function cartReducer(initialState = [], action) {
  return produce(initialState, (state) => {
    const itemIndex = state.findIndex((item) => item.id === action.payload.id);

    switch (action.type) {
      case CART_ADD_ITEM:
        itemIndex !== -1
          ? (state[itemIndex].quantity += 1)
          : state.push({ ...action.payload, quantity: 1 });
        break;

      case CART_REMOVE_ITEM:
        state.splice(itemIndex, 1);
        break;

      case EMPTY_CART:
        state = [];
        break;

      case CART_INCREASE_QUANTITY:
        state[itemIndex].quantity += 1;
        break;

      case CART_DECREASE_QUANTITY:
        state[itemIndex].quantity -= 1;
    }
    return state;
  });
}
