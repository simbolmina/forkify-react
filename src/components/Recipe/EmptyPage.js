import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Recipe.module.css';

const EmptyPage = function (prps) {
  return (
    <div className={`${styles.recipe} ${styles.emptyPage} `}>
      <div className={styles.message}>
        <FontAwesomeIcon icon={faSmile} />
        <p>Start by searching for a recipe or an ingredient. Have fun!</p>
      </div>
    </div>
  );
};

export default EmptyPage;
