import { recipeActions } from './recipeSlice';

export const fetchRecipe = function (hash) {
  return async function (dispatch) {
    const fetchData = async function () {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${hash}`
      );

      if (!response.ok) {
        throw new Error('Could not fetch data');
      }

      const data = await response.json();

      return data;
    };

    try {
      const data = await fetchData();
      let { recipe } = data.data;
      recipe = {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
      };
      dispatch(recipeActions.getResults(recipe));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateServings = function (payload) {
  return function (dispatch) {
    return;
  };
};
