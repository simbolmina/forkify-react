import { configureStore } from '@reduxjs/toolkit';
import emptyPageReducer from './emptyPageSlice';
import recipeReducer from './recipeSlice';
import spinnerReducer from './spinnerSlice';
import searchReducer from './searchSlice';

// export const TIMEOUT_SEC = 10;
// export const RES_PER_PAGE = 10;
// export const KEY = '38317c35-24f5-4abb-83f4-accccd2ea304';
// export const MODAL_CLOSE_SEC = 2.5;

const store = configureStore({
  reducer: {
    search: searchReducer,
    recipe: recipeReducer,
    spinner: spinnerReducer,
    empty: emptyPageReducer,
  },
});

export default store;
