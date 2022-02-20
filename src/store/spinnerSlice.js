import { createSlice } from '@reduxjs/toolkit';

const spinnerSlice = createSlice({
  name: 'spinner',
  initialState: { first: false },
  reducers: {
    loading(state) {
      state.first = true;
    },
    finished(state) {
      state.first = false;
    },
  },
});

export const loadingActions = spinnerSlice.actions;

export default spinnerSlice.reducer;
