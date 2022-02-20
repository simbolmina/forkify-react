import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import styles from './Recipe.module.css';

const Directions = function () {
  const recipe = useSelector(state => state.recipe.recipeInfo);

  return (
    <div className={styles.recipeDirections}>
      <h2 className={styles.heading2}>How to cook it</h2>
      <p className={styles.recipeDirectionsText}>
        This recipe was carefully designed and tested by
        <span className={styles.recipePublisher}>{` ${recipe.publisher}`}</span>
        . Please check out directions at their website.
      </p>
      <a
        className={`${styles.btnSmall} ${styles.recipeBtn} ${styles.btn}`}
        href={recipe.sourceUrl}
        rel="noreferrer"
        target="_blank"
      >
        <span>Directions</span>
        <FontAwesomeIcon icon={faArrowRight} className={styles.searchIcon} />
      </a>
    </div>
  );
};

export default Directions;
