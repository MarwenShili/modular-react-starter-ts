import { combineReducers } from "@reduxjs/toolkit";
import { dataPersistedReducer } from "./persist/dataPersist";

const rootReducer = combineReducers({
  data: dataPersistedReducer,
});

export default rootReducer;
