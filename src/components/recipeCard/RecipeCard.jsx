import classes from "./recipeCard.module.scss";

const RecipeCard = ({ recipe }) => {
  const ingredientStr = recipe.ingredients
    .map(
      (ingredient) =>
        ingredient.title[0].toLowerCase() + ingredient.title.slice(1),
    )
    .reduce((acc, cur) => acc + cur + " ● ", "");

  return (
    <>
      <div className={classes["recipe-card"]}>
        <div className={classes["image-wrapper"]}>
          <img className={classes["image"]} src={recipe.imageUrl} />
        </div>
        <div className={classes["recipe-card__content"]}>
          <h3 className={classes["recipe-card__title"]}>{recipe.title}</h3>
          <p className={classes["recipe-card__ingredients"]}>
            <span className={classes["recipe-card__ingredients--bold"]}>
              Ингредиенты:{" "}
            </span>
            {ingredientStr}
          </p>
          <button className={classes["recipe-card__button"]}>
            Добавить в планировщик
          </button>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
