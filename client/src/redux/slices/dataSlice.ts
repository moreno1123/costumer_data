import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCostumers, fetchCostumer } from "../thunks";
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
    .addCase(fetchCostumers.pending, (state: DataState) => {
      state.loading = true;
    })
    .addCase(fetchCostumers.fulfilled, (state: DataState, action: PayloadAction<Array<DataInstance>>) => {
      state.loading = false;
      state.data = action.payload;
    })
    .addCase(fetchCostumers.rejected, (state: DataState) => {
      state.loading = false;
      state.data = [];
    })
    .addCase(fetchCostumer.fulfilled, (state: any, action: PayloadAction<any>) => {
      state.loading = false;
      state.data = action.payload;
    })
  }
})

export default dataSlice.reducer;
