import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../app/http";



export const allBooks = createAsyncThunk('books.all', async () => {
  const response = await http.get('/books');
  return response.data;
});

export const getBook = createAsyncThunk('books.get', async (payload) => {
  const response = await http.get(`/books/${payload}`);
  return response.data;
});

export const createBook = createAsyncThunk('books.create', async (payload) => {
  const response = await http.post(`/books`, payload);
  return response.data;
});

export const updateBook = createAsyncThunk('books.update', async (payload) => {
  const response = await http.put(`/books/${payload._id}`, payload);
  return response.data;
});

export const deleteBook = createAsyncThunk('books.delete', async (payload) => {
  const response = await http.delete(`/books/${payload._id}`, payload);
  return response.data;
});
