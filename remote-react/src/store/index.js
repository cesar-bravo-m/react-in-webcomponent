import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

// Create a singleton store instance
let storeInstance = null;

// Function to create a new store or return the existing one
export const createStore = (initialState = {}) => {
  if (!storeInstance) {
    storeInstance = configureStore({
      reducer: {
        todos: todoReducer
      },
      preloadedState: initialState
    });
  }
  return storeInstance;
};

// Export a function to get the store instance
export const getStore = () => {
  if (!storeInstance) {
    return createStore();
  }
  return storeInstance;
};

// Function to reset the store (useful for testing)
export const resetStore = () => {
  storeInstance = null;
}; 