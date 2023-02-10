import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updateCostumer } from "../thunks";

export interface DataState{
  loading: boolean,
  data: any
}

const initialState:any = {
  loading: false,
  data: {}
}

const updateSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(updateCostumer.fulfilled, (state: any, action: PayloadAction<any>) => {
      state.loading = false;
      state.data = action.payload;
    })
  }
})

export default updateSlice.reducer;
