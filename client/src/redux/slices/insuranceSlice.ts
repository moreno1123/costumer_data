import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getInsurance } from "../thunks";

export interface DataState{
  loading: boolean,
  data: any
}

const initialState:any = {
  loading: false,
  data: ""
}

const insuranceSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getInsurance.fulfilled, (state: any, action: PayloadAction<any>) => {
      state.loading = false;
      state.data = action.payload;
    })
  }
})

export default insuranceSlice.reducer;
