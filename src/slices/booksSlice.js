import { createSlice } from "@reduxjs/toolkit"
import { allBooks, createBook, deleteBook } from "../thunks/booksThunks";

const initialState = {
  booksList: [],
  bookReview: JSON.parse(localStorage.getItem("bookReview")) || {},
  loading: false,
  error: null,
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(allBooks.pending, (state) => {state.loading = true})
      .addCase(allBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.booksList = action.payload;
      })
      .addCase(allBooks.rejected, (state) => {state.loading = false})

      .addCase(createBook.fulfilled, (state, action) => {
        state.booksList.push(action.payload);
      })

      .addCase(deleteBook.fulfilled, (state, action) => {
        state.booksList = state.booksList.filter(book => book._id !== action.payload.id);
      })
  },
  reducers: {
    addBookReview: (state, action) => {
      state.bookReview = action.payload;;
      localStorage.setItem("bookReview", JSON.stringify(state.bookReview));

      // console.log('bookReview', state.bookReview);
    }
  }
})


export const {addBookReview} = booksSlice.actions;
export default booksSlice.reducer;