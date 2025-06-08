import { configureStore } from "@reduxjs/toolkit";
import BooksReducer from "../slices/booksSlice";

export const store = configureStore({
  reducer: {
    books: BooksReducer,
  }
});