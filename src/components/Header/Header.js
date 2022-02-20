import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../img/logo.png';
import SearchField from './SearchField/SearchField';
import Nav from './Nav';

const Header = function (props) {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>
      <SearchField />
      <Nav />
    </header>
  );
};

export default Header;
