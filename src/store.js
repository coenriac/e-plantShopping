import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Import the reducer from CartSlice

// Configure the store and pass the reducer(s)
const store = configureStore({
  reducer: {
    cart: cartReducer, // The "cart" slice is managed by cartReducer
  },
});

// Export the store to use in the application
export default store;
