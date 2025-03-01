// Action types
const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_INCREASE_QUANTITY = "cart/increaseQuantity";
const CART_DECREASE_QUANTITY = "cart/decreaseQuantity";

// Action Creators
export function addItemToCart(productData) {
  return { type: CART_ADD_ITEM, payload: productData };
}

export function removeItemFromCart(productId) {
  return { type: CART_REMOVE_ITEM, payload: { productId } };
}

export function increaseItemQuantity(productId) {
  return { type: CART_INCREASE_QUANTITY, payload: { productId } };
}

export function decreaseItemQuantity(productId) {
  return { type: CART_DECREASE_QUANTITY, payload: { productId } };
}

// Reducer
export default function cartReducer(state = [], action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      // eslint-disable-next-line no-case-declarations
      const itemExist = state.find((item) => item.id === action.payload.id);

      if (itemExist) {
        return state.map((cartItem) =>
          cartItem.id === itemExist.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];

    case CART_REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload.productId);

    case CART_INCREASE_QUANTITY:
      return state.map((item) =>
        item.id === action.payload.productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case CART_DECREASE_QUANTITY:
      return state.map((item) => {
        if (item.id === action.payload.productId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

    default:
      return state;
  }
}
