import { createSlice } from "@reduxjs/toolkit"

interface ToggleState {
  toggleDeleteModal: boolean
}

const initialState: ToggleState = {
  toggleDeleteModal: false
}

export const ToggleDeleteSlice = createSlice({
  name: 'toggleDeleteModal',
  initialState,
  reducers: {
    toggleDeleteModal: (state) => {
      state.toggleDeleteModal = !state.toggleDeleteModal
    }
  }
}) 

export default ToggleDeleteSlice.reducer;
export const { toggleDeleteModal } = ToggleDeleteSlice.actions
