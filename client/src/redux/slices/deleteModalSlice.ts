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
    toggleDeleteChangeAction: (state) => {
      state.toggleDeleteModal = !state.toggleDeleteModal
    }
  }
}) 

export default ToggleDeleteSlice.reducer;
export const { toggleDeleteChangeAction } = ToggleDeleteSlice.actions
