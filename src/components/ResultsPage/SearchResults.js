import {
  faArrowLeft,
  faArrowRight,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './SearchResults.module.css';
import { searchActions } from '../../store/searchSlice';

const SearchResults = function (props) {
  const dispatch = useDispatch();
  const results = useSelector(state => state.search.recipes);
  const { page, start, end } = useSelector(state => state.search.currentPage);

  const isZero = page === 1;

  const isBigger = page > results.length / 10;

  const nextHandler = function (event) {
    dispatch(searchActions.nextPage(page));
  };

  const prevHandler = function (event) {
    dispatch(searchActions.prevPage(page));
  };

  return (
    <div className={styles.searchResults}>
      <ul className={styles.results}>
        {results.slice(start, end).map(item => {
          return (
            <li
              className={styles.preview}
              key={item.id}
              //onClick={openRecipeHandler}
            >
              <Link
                className={`${styles.previewLink} ${styles.previewLinkActive}`}
                to={item.id}
              >
                <figure className={styles.previewFig}>
                  <img src={item.image} alt="Test" />
                </figure>
                <div className={styles.previewData}>
                  <h4 className={styles.previewTitle}>{item.title}</h4>
                  <p className={styles.previewPublisher}>{item.publisher}</p>
                  <div className={styles.previewUserGenerated}>
                    <FontAwesomeIcon icon={faUser} className={styles.icon} />
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className={styles.pagination}>
        {!isZero && (
          <button
            className={`${styles.btnInline} ${styles.paginationBtnPrev}`}
            onClick={prevHandler}
          >
            <FontAwesomeIcon icon={faArrowLeft} className={styles.searchIcon} />
            <span>Page {page - 1}</span>
          </button>
        )}
        {!isBigger && (
          <button
            className={`${styles.btnInline} ${styles.paginationBtnNext}`}
            onClick={nextHandler}
          >
            <span>Page {page + 1}</span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className={styles.searchIcon}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
