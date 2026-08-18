import { useNavigate } from "react-router-dom";

import PortionsButtons from "../portionsButtons/PortionsButtons";

import classes from "./recipeCard.module.scss";

const RecipeCard = ({
  recipe,
  isInPlanner,
  onAddRecipe,
  onRemoveRecipe,
  onChangePortions,
}) => {
  const navigate = useNavigate();
  const ingredientStr = recipe.ingredients
    .map(
      (ingredient) =>
        ingredient.title[0].toLowerCase() + ingredient.title.slice(1),
    )
    .reduce((acc, cur) => acc + cur + " ● ", "");

  const handlePlannerClick = (event) => {
    event.stopPropagation();
    isInPlanner ? onRemoveRecipe(recipe.id) : onAddRecipe(recipe);
  };

  return (
    <div
      className={classes["recipe-card"]}
      onClick={() => {
        navigate(`/recipes/${recipe.id}`);
      }}
    >
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
        {isInPlanner ? (
          <div className={classes["buttons"]}>
            <PortionsButtons
              portions={recipe.portions}
              onChangePortions={onChangePortions}
              recipeId={recipe.id}
            />
            <button
              className={classes["recipe-card__button"]}
              onClick={handlePlannerClick}
            >
              Удалить
            </button>
          </div>
        ) : (
          <button
            className={classes["recipe-card__button"]}
            onClick={handlePlannerClick}
          >
            Добавить в планировщик
          </button>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
