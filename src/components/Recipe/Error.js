const RecipeError = function (props) {
  return (
    <div className={styles.error}>
      <div>
        <svg>
          <use href="src/img/icons.svg#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>No recipes found for your query. Please try again!</p>
    </div>
  );
};

export default RecipeError;
