import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice"; // Importing product slice reducer
import cartReducer from "../features/cart/cartSlice"; // Importing cart slice reducer

// Configure Redux store with combined reducers for products and cart
const store = configureStore({
  reducer: {
    products: productReducer, // Reducer for managing products state
    cart: cartReducer, // Reducer for managing cart state
  },
});

export default store; // Export configured Redux store
