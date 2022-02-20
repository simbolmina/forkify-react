import { useDispatch, useSelector } from 'react-redux';
import { fetchSearch } from '../../../store/searchActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { searchActions } from '../../../store/searchSlice';
import styles from '../Header.module.css';

const SearchField = function (props) {
  const userInput = useSelector(state => state.search.input);
  const dispatch = useDispatch();

  const searchHandler = function (event) {
    event.preventDefault();
    dispatch(fetchSearch(userInput));
  };

  const inputHandler = function (event) {
    dispatch(searchActions.getInput(event.target.value));
    //console.log(event.target.value);
  };

  return (
    <form className={styles.search} onClick={searchHandler}>
      <input
        type="text"
        className={styles.searchField}
        placeholder="Search recipes..."
        onChange={inputHandler}
        value={userInput}
      />
      <button className={`${styles.btn} ${styles.searchBtn}`}>
        <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
        <span>SEARCH</span>
      </button>
    </form>
  );
};

export default SearchField;
