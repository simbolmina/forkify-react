import styles from './Header.module.css';

const Nav = function (props) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <button className={`${styles.navBtn} ${styles.navBtnAddRecipe}`}>
            <svg className={styles.navIcon}>
              <use href="src/img/icons.svg#icon-edit"></use>
            </svg>
            <span>Add recipe</span>
          </button>
        </li>
        <li className={styles.navItem}>
          <button className={`${styles.navBtn} ${styles.navBtnBookmarks}`}>
            <svg className={styles.navIcon}>
              <use href="src/img/icons.svg#icon-bookmark"></use>
            </svg>
            <span>Bookmarks</span>
          </button>
          <div className={styles.bookmarks}>
            <ul className={styles.bookmarksList}>
              <div className={styles.message}>
                <div>
                  <svg>
                    <use href="src/img/icons.svg#icon-smile"></use>
                  </svg>
                </div>
                <p>No bookmarks yet. Find a nice recipe and bookmark it :)</p>
              </div>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
