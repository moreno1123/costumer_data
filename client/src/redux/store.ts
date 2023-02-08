import { configureStore } from "@reduxjs/toolkit";
import editReducer from "./slices/addEditModalSlice"
import deleteReducer from "./slices/deleteModalSlice"
import dataReducer from "./slices/dataSlice"

export const store = configureStore({
  reducer: {
    appEdit: editReducer,
    appDelete: deleteReducer,
    data: dataReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
