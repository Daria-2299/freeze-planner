import { useNavigate } from "react-router-dom";

import PortionsButtons from "../portionsButtons/PortionsButtons";

import classes from "./plannerRecipeList.module.scss";

import pinIcon from "../../assets/icons/pin-icon.png";

const PlannerRecipeList = ({ recipes, changePortions, removeRecipe }) => {
  const navigate = useNavigate();

  const handleRecipeClick = (event, recipeId) => {
    event.preventDefault();
    removeRecipe(recipeId);
  };

  return (
    <div className={classes["recipes-block"]}>
      <h3 className={classes["recipes-block__title"]}>
        <img src={pinIcon} className={classes["recipes-block__icon"]} />
        Список блюд
      </h3>
      {recipes.length > 0 ? (
        <div className={classes["recipes-block__table"]}>
          <div className={classes.headlines}>
            <p className={classes.headlines__item}></p>
            <p className={classes.headlines__item}>Блюдо</p>
            <p className={classes.headlines__item}>Количество порций</p>
          </div>

          <div className={classes["recipes-table"]}>
            {recipes.map((recipe) => (
              <div key={recipe.id} className={classes["recipes-table__row"]}>
                <button
                  className={`${classes["recipes-table__cell"]} ${classes["recipes-table__toggle-btn"]}`}
                  onClick={(event) => {
                    handleRecipeClick(event, recipe.id);
                  }}
                >
                  ✔
                </button>
                <div
                  className={`${classes["recipes-table__cell"]} ${classes["recipes-table__cell--title"]}`}
                  onClick={() => navigate(`/recipes/${recipe.id}`)}
                >
                  <p>{recipe.title}</p>
                </div>
                <PortionsButtons
                  portions={recipe.portions}
                  onChangePortions={changePortions}
                  recipeId={recipe.id}
                  className={classes["portions-button"]}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={classes["recipes-block__empty-table"]}>
          <p>Список выбранных рецептов пуст.</p>
        </div>
      )}
    </div>
  );
};

export default PlannerRecipeList;
