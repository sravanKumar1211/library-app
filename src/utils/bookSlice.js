// Importing the 'createSlice' method from Redux Toolkit
// createSlice helps us easily create reducers, actions, and state in one place.
import { createSlice } from "@reduxjs/toolkit";

// Importing the default list of books (initial data)
import booksData from "./booksData";

// Creating a slice for the 'book' feature/state
const bookSlice = createSlice({
  // Name of the slice — this will be used as the key in the Redux store
  name: "book",

  // Initial state for this slice
  initialState: {
    // Reverse the book list so that newest books appear first
    items: booksData.slice().reverse()
  },

  // Reducers define how the state changes when actions are dispatched
  reducers: {
    // Action: addBook
    // Used to add a new book to the store
    addBook: (state, action) => {
      // action.payload contains the full book object (with a unique id)
      // 'unshift' adds the new book to the beginning of the array
      // so that the newest book appears first in the list
      state.items.unshift(action.payload);
    }
  }
});

// Exporting the generated action so components can dispatch it
export const { addBook } = bookSlice.actions;

// Exporting the reducer to be included in the Redux store configuration
export default bookSlice.reducer;
