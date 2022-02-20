import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './Recipe.module.css';

//const check = <FontAwesomeIcon icon={faCheck} />;

const Ingredients = function (props) {
  const { ingredients } = useSelector(state => state.recipe.recipeInfo);
  console.log(ingredients);
  return (
    <div className={styles.recipeIngredients}>
      <h2 className={styles.heading2}>Recipe ingredients</h2>
      <ul className={styles.recipeIngredientList}>
        {ingredients.map(item => {
          return (
            <li className={styles.recipeIngredient} key={item.description}>
              <FontAwesomeIcon icon={faCheck} className={styles.recipeIcon} />
              <div className={styles.recipeQuantity}>{item.quantity}</div>
              <div className={styles.recipeDescription}>
                <span className={styles.recipeUnit}>{item.unit}</span>
                {item.description}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Ingredients;
