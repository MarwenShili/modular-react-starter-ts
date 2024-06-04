export interface IBookState {
  status: string
  books: any
  error: any
  isLoading: boolean
}

export interface IUpdateBookPayload {
  id: number
  slug: string
}
