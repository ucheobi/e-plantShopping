import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // Check if the item already exists in the cart
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        // If it exists, update the quantity
        existingItem.quantity++;
      } else {
        // If it doesn't exist, add the new item to the cart
        state.items.push({
          ...action.payload,
          quantity: 1, // Initialize quantity to 1 for new items
        });
      }
    },
    removeItem: (state, action) => {
      // Filter out the item to be removed based on its i
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      // Find the item in the cart
      const item = state.items.find(item => item.name === name);
      if (item) {
        // Update the item's quantity by the specified amount
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
