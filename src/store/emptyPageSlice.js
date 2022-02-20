import { createSlice } from '@reduxjs/toolkit';

export const emptyPageSlice = createSlice({
  name: 'empty',
  initialState: { isEmpty: true },
  reducers: {
    firstEntry(state) {
      state.isEmpty = !state.isEmpty;
    },
  },
});

export const emptyPageActions = emptyPageSlice.actions;

export default emptyPageSlice.reducer;
