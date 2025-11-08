
import { createSlice } from "@reduxjs/toolkit";
import booksData from "./booksData";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    items: booksData.slice().reverse() // newest first if you prefer
  },
  reducers: {
    addBook: (state, action) => {
      //action.payload contains full book object with unique id
      state.items.unshift(action.payload);
    }
  }
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
