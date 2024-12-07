import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IQuery, IRoutesOptions } from '../../types/types'

interface DataState {
  status: string
  type: string | null
  query: IQuery
  name: string
  columnsInfo: any
  columnsInfoSwitches: any
  routes?: IRoutesOptions | null
  filterValues: any
  searchValues: any
}

const initialState: DataState = {
  status: 'idle',
  type: null,
  query: {
    page: 1,
    limit: 10,
    orderBy: '',
    order: '',
    search: '',
    searchBy: '',
  },
  name: '',
  columnsInfo: null,
  columnsInfoSwitches: {},
  routes: {},
  filterValues: {},
  searchValues: {},
}

interface DataHandleChangeProps<K extends keyof DataState> {
  key: K
  value: DataState[K]
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    initialise: (state, action: PayloadAction<any>) => {
      const { name, columnsInfo, routes } = action.payload
      state.name = name
      state.columnsInfo = columnsInfo
      if (
        !(name in state.columnsInfoSwitches) ||
        state.columnsInfoSwitches[state.name].length !== columnsInfo.length
      ) {
        state.columnsInfoSwitches[name] = columnsInfo.map((column: any) => column.hidden)
      }
      state.routes = routes
      state.filterValues = {}
      state.searchValues = {}
      state.query = {
        page: 1,
        limit: 10,
        orderBy: '',
        order: 'asc',
        search: '',
        searchBy: '',
      }
      state.type = null
      state.status = 'succeeded'
    },
    handleChange: (state, action: PayloadAction<DataHandleChangeProps<keyof DataState>>) => {
      state[action.payload.key] = action.payload.value
    },

    handleChangeFilters: (state: any, action: any) => {
      state.filterValues = action.payload
    },

    handleColumnsHiddenChange: (state, action: PayloadAction<number>) => {
      const column = state.columnsInfoSwitches?.[state.name]
      if (column) {
        column[action.payload] = !column[action.payload]
      }
    },
    restore: (state) => {
      state.status = 'idle'
    },
  },
})

export const { initialise, handleChange, handleColumnsHiddenChange, restore, handleChangeFilters } =
  dataSlice.actions

export default dataSlice.reducer
