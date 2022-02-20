import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Spinner = function (props) {
  return (
    <div className={styles.spinner}>
      <FontAwesomeIcon icon={faSpinner} />
    </div>
  );
};

export default Spinner;
