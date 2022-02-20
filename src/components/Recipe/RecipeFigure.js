import { useSelector } from 'react-redux';
import styles from './Recipe.module.css';

const RecipeFigure = function (props) {
  const recipe = useSelector(state => state.recipe.recipeInfo);
  return (
    <figure className={styles.recipeFig}>
      <img src={recipe.image} alt="Tomato" className={styles.recipeImg} />
      <h1 className={styles.recipeTitle}>
        <span>{recipe.title}</span>
      </h1>
    </figure>
  );
};

export default RecipeFigure;
