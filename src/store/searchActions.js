import { searchActions } from './searchSlice';

const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes';

export const fetchSearch = function (searchTerm) {
  return async function (dispatch) {
    const fetchData = async function () {
      const response = await fetch(`${API_URL}?search=${searchTerm}`);

      if (!response.ok) {
        throw new Error('Could not fetch data');
      }

      const data = await response.json();

      return data;
    };

    try {
      const data = await fetchData();

      const results = data.data.recipes.map(rec => {
        return {
          id: rec.id,
          title: rec.title,
          publisher: rec.publisher,
          image: rec.image_url,
        };
      });

      dispatch(searchActions.getRecipes(results));
    } catch (error) {
      console.log(error);
    }
  };
};
