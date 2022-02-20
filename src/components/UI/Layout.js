import styles from './Layout.module.css';

const Layout = function (props) {
  return <div className={styles.container}>{props.children}</div>;
};

export default Layout;
