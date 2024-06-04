import { createSlice } from '@reduxjs/toolkit'
import { IBookState } from './bookTypes'
import { getBooks, updateBook } from './bookThunk'

const initialState: IBookState = {
  status: 'idle',
  books: null,
  error: null,
  isLoading: false,
}

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, () => {
      console.log('pending book')
    })
    builder.addCase(getBooks.fulfilled, () => {
      console.log('success book')
    })
    builder.addCase(getBooks.rejected, () => {
      console.log('failed book')
    })
    //update book
    builder.addCase(updateBook.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(updateBook.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(updateBook.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
  },
})
export const {} = bookSlice.actions

export default bookSlice.reducer
