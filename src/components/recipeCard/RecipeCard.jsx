import "./recipeCard.scss";

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
      <div className="recipe-card">
        <div className="image-wrapper">
          <img className="image" src={recipe.imageUrl} />
        </div>
        <div className="recipe-card__content">
          <h3 className="recipe-card__title">{recipe.title}</h3>
          <h className="recipe-card__ingredients">
            <span className="recipe-card__ingredients--bold">
              Ингредиенты:{" "}
            </span>
            {ingredientStr}
          </h>
          <button className="recipe-card__button">
            Добавить в планировщик
          </button>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
