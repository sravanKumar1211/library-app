// Importing 'configureStore' from Redux Toolkit
// This function helps create a Redux store with good defaults (like Redux DevTools)
import { configureStore } from "@reduxjs/toolkit";

// Importing the reducer for the 'book' slice
import bookReducer from "./bookSlice";

// Creating the Redux store
const store = configureStore({
  reducer: {
    // Registering the 'book' slice reducer
    // 'book' will be the key in the Redux state (state.book)
    book: bookReducer
  }
});

// Exporting the store so it can be provided to the React app
export default store;
