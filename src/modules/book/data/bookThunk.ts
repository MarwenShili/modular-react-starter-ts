/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../shared/utils/axios'
import { IUpdateBookPayload } from './bookTypes'
// @ts-ignore
import { message } from 'antd'

//these fn are examples to update on them
export const getBooks = createAsyncThunk('book/get-books', async () => {
  try {
    const response = await axiosInstance.get(`/api/v1/books`)
    if (response.status === 200) {
      return response.data
    }

    throw new Error(response.statusText)
  } catch (err: any) {
    return Promise.reject(err)
  }
})
export const updateBook = createAsyncThunk(
  'book/update-book',
  async (
    body: {
      slug: string
      id: number
      values: IUpdateBookPayload
    },
    thunkApi,
  ) => {
    try {
      const response = await axiosInstance.patch(`/api/v1/books/${body.id}`, {
        ...body.values,
      })
      if (response.status === 200) {
        thunkApi.dispatch(getBooks())
        message.success('Book Updated Successfully')
        return response.data
      }

      throw new Error(response.statusText)
    } catch (err: any) {
      message.error(err?.response?.data._error_message || 'something went wrong')
      return Promise.reject(err || 'something went wrong')
    }
  },
)
