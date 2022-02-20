import {
  faBookmark,
  faClock,
  faMinusCircle,
  faPlusCircle,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { recipeActions } from '../../store/recipeSlice';
import styles from './Recipe.module.css';

const RecipeInfo = function (props) {
  const recipe = useSelector(state => state.recipe.recipeInfo);
  const dispatch = useDispatch();

  const minusHandler = function (event) {
    if (recipe.servings === 1) return;
    dispatch(recipeActions.decrementServings());
  };
  const plusHandler = function (event) {
    dispatch(recipeActions.incrementServings());
  };
  return (
    <div className={styles.recipeDetails}>
      <div className={styles.recipeInfo}>
        <FontAwesomeIcon icon={faClock} className={styles.recipeInfoIcon} />
        <span
          className={`${styles.recipeInfoData} ${styles.recipeInfoDataMinutes}`}
        >
          {recipe.cookingTime}
        </span>
        <span className={styles.recipeInfoText}>minutes</span>
      </div>
      <div className={styles.recipeInfo}>
        <FontAwesomeIcon icon={faUser} className={styles.recipeInfoIcon} />
        <span
          className={`${styles.recipeInfoData} ${styles.recipeInfoDataPeople}`}
        >
          {recipe.servings}
        </span>
        <span className={styles.recipeInfoText}>servings</span>

        <div className={styles.recipeInfoButtons}>
          <button
            className={`${styles.btnTiny} ${styles.btnIncreaseServings}`}
            onClick={minusHandler}
          >
            <FontAwesomeIcon
              icon={faMinusCircle}
              className={styles.recipeInfoIcon}
            />
          </button>
          <button
            className={`${styles.btnTiny} ${styles.btnIncreaseServings}`}
            onClick={plusHandler}
          >
            <FontAwesomeIcon
              icon={faPlusCircle}
              className={styles.recipeInfoIcon}
            />
          </button>
        </div>
      </div>

      <div className={styles.recipeUserGenerated}>
        <FontAwesomeIcon icon={faUser} className={styles.recipeInfoIcon} />
      </div>
      <button className={styles.btnRound}>
        <FontAwesomeIcon
          icon={faBookmark}
          className={`${styles.recipeInfoIcon} ${styles.iconRound}`}
        />
      </button>
    </div>
  );
};

export default RecipeInfo;
