import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "../thunks";
import type { DataInstance } from "../thunks" 

export interface DataState{
  loading: boolean,
  data: any
}

const initialState:DataState = {
  loading: false,
  data: []
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchData.pending, (state: DataState) => {
      state.loading = true;
    })
    .addCase(fetchData.fulfilled, (state: DataState, action: PayloadAction<Array<DataInstance>>) => {
      state.loading = false;
      state.data = action.payload;
    })
    .addCase(fetchData.rejected, (state: DataState) => {
      state.loading = false;
      state.data = [];
    })
  }
})

export default dataSlice.reducer;
