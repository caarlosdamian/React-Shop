import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  Cart_Quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add_item(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.item_id === action.payload.item_id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.items.push(tempProduct);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    decrease_item(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.item_id === action.payload.item_id
      );

      if (state.items[itemIndex].cartQuantity > 1) {
        state.items[itemIndex].cartQuantity -= 1;
      } else if (state.items[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.items.filter(
          (item) => item.item_id !== action.payload.item_id
        );

        state.items = nextCartItems;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    remove_item(state, action) {
      state.items.map((cartItem) => {
        if (cartItem.item_id === action.payload.item_id) {
          const nextCartItems = state.items.filter(
            (item) => item.item_id !== cartItem.item_id
          );

          state.items = nextCartItems;
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    get_total(state, action) {
      let { total, quantity } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.Cart_Quantity = quantity;
      state.total = total;
    },
    clear_cart(state, action) {
      state.items = [];
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});

export default cartSlice.reducer;
export const { add_item, remove_item, decrease_item, get_total, clear_cart } =
  cartSlice.actions;
