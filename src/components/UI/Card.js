import styles from './Card.module.css';

const Card = function (props) {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export default Card;
