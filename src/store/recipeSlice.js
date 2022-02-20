import { createSlice } from '@reduxjs/toolkit';

const recipeInitalState = {
  recipeInfo: {
    id: null,
    title: null,
    publisher: null,
    sourceUrl: null,
    image: null,
    servings: null,
    cookingTime: null,
    ingredients: [],
  },
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState: recipeInitalState,
  reducers: {
    getResults(state, action) {
      const newItem = action.payload;
      state.recipeInfo.id = newItem.id;
      state.recipeInfo.title = newItem.title;
      state.recipeInfo.publisher = newItem.publisher;
      state.recipeInfo.sourceUrl = newItem.sourceUrl;
      state.recipeInfo.image = newItem.image;
      state.recipeInfo.servings = newItem.servings;
      state.recipeInfo.cookingTime = newItem.cookingTime;
      state.recipeInfo.ingredients = newItem.ingredients;
    },
    incrementServings(state, action) {
      state.recipeInfo.servings++;
      // state.recipeInfo.ingredients = state.recipeInfo.ingredients.map(
      //   ing => (ing.quantity = ing.quantity * action.payload)
      //);
    },
    decrementServings(state, action) {
      state.recipeInfo.servings--;
    },
  },
});

export const recipeActions = recipeSlice.actions;

export default recipeSlice.reducer;
