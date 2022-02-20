import Ingredients from './Ingredients';
import RecipeInfo from './RecipeInfo';
import Directions from './Directions';
import RecipeFigure from './RecipeFigure';
import { useParams } from 'react-router';
import styles from './Recipe.module.css';
import { useEffect } from 'react';
import { fetchRecipe } from '../../store/recipe-actions';
import { useDispatch } from 'react-redux';

const Recipe = function (props) {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipe(params.recipeId));
  }, [params, dispatch]);

  return (
    <div className={styles.recipe}>
      <RecipeFigure />
      <RecipeInfo />
      <Ingredients />
      <Directions />
    </div>
  );
};

export default Recipe;
