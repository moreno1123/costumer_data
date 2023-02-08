import { createSlice } from "@reduxjs/toolkit"

interface ToggleState {
  toggleModal: boolean
}

const initialState: ToggleState = {
  toggleModal: false
}

export const ToggleSlice = createSlice({
  name: 'toggleModal',
  initialState,
  reducers: {
    toggleChangeAction: (state) => {
      state.toggleModal = !state.toggleModal
    }
  }
}) 

export default ToggleSlice.reducer;
export const { toggleChangeAction } = ToggleSlice.actions
