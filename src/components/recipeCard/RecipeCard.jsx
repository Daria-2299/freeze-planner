import classes from "./recipeCard.module.scss";

const RecipeCard = ({ recipe }) => {
  const ingredientStr = recipe.ingredients
    .map(
      (ingredient) =>
        ingredient.title[0].toLowerCase() + ingredient.title.slice(1),
    )
    .reduce((acc, cur) => {
      const nextStr = acc + cur + " ● ";
      if (nextStr.length <= 80) {
        return nextStr;
      } else {
        return acc.slice(0, -3) + " ...";
      }
    }, "");

  return (
    <>
      <div className={classes["recipe-card"]}>
        <div className={classes["image-wrapper"]}>
          <img className={classes["image"]} src={recipe.imageUrl} />
        </div>
        <div className={classes["recipe-card__content"]}>
          <h3 className={classes["recipe-card__title"]}>{recipe.title}</h3>
          <h className={classes["recipe-card__ingredients"]}>
            <span className={classes["recipe-card__ingredients--bold"]}>
              Ингредиенты:{" "}
            </span>
            {ingredientStr}
          </h>
          <button className={classes["recipe-card__button"]}>
            Добавить в планировщик
          </button>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
