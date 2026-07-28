import { useLocalStorage } from "../../hooks/useLocalStorage.hook";

import PortionsButtons from "../portionsButtons/PortionsButtons";

import classes from "./plannerRecipeList.module.scss";

import pinIcon from "../../assets/icons/pin-icon.png";

const PlannerRecipeList = () => {
  const { plannerRecipes, changePortions } = useLocalStorage();

  return (
    <div className={classes["recipes-block"]}>
      <h3 className={classes["recipes-block__title"]}>
        <img src={pinIcon} className={classes["recipes-block__icon"]} />
        Список блюд
      </h3>
      <div className={classes["recipes-block__table"]}>
        <div className={classes.headlines}>
          <p className={classes.headlines__item}></p>
          <p className={classes.headlines__item}>Блюдо</p>
          <p className={classes.headlines__item}>Количество порций</p>
        </div>
        <div className={classes["recipes-table"]}>
          {plannerRecipes.map((recipe) => (
            <div key={recipe.id} className={classes["recipes-table__row"]}>
              <button
                className={`${classes["recipes-table__cell"]} ${classes["recipes-table__toggle-btn"]}`}
              >
                ✔
              </button>
              <div className={classes["recipes-table__cell"]}>
                <p>{recipe.title}</p>
              </div>
              <PortionsButtons
                portions={recipe.portions}
                onChangePortions={changePortions}
                recipeId={recipe.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlannerRecipeList;
