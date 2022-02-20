import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    input: '',
    recipes: [],
    currentPage: {
      page: 1,
      start: 0,
      end: 9,
    },
  },
  reducers: {
    getInput(state, action) {
      state.input = action.payload;
    },
    getRecipes(state, action) {
      state.recipes = [];
      action.payload.forEach(item => state.recipes.push(item));
    },
    nextPage(state, action) {
      state.currentPage.page++;
      state.currentPage.start = (state.currentPage.page - 1) * 10;
      state.currentPage.end = state.currentPage.page * 10;
    },
    prevPage(state, action) {
      state.currentPage.page--;
      state.currentPage.start = (state.currentPage.page - 1) * 10;
      state.currentPage.end = state.currentPage.page * 10;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;
