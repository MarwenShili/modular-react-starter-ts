import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import dataReducer from '../slices/dataSlice'

const dataPersistConfig = {
  key: 'data',
  storage,
  whitelist: ['columnsInfoSwitches'],
}

export const dataPersistedReducer = persistReducer(dataPersistConfig, dataReducer)
