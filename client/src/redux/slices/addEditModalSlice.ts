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
    toggleEditModal: (state) => {
      state.toggleModal = !state.toggleModal
    }
  }
}) 

export default ToggleSlice.reducer;
export const { toggleEditModal } = ToggleSlice.actions
