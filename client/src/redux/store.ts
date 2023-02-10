import { configureStore } from "@reduxjs/toolkit";
import editReducer from "./slices/addEditModalSlice"
import deleteReducer from "./slices/deleteModalSlice"
import dataReducer from "./slices/dataSlice"
import insuranceReducer from "./slices/insuranceSlice"

export const store = configureStore({
  reducer: {
    appEdit: editReducer,
    appDelete: deleteReducer,
    data: dataReducer,
    insurance: insuranceReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
