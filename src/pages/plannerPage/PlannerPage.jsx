import { useMemo } from "react";
import { useLocalStorage } from "../../services/useLocalStorage";

import PlannerProductList from "../../components/plannerProductList/PlannerProductList";
import PlannerRecipeList from "../../components/plannerRecipeList/PlannerRecipeList";

import classes from "./plannerPage.module.scss";

const PlannerPage = () => {
  const { plannerRecipes, changePortions, removeRecipe } = useLocalStorage();

  const ingredients = useMemo(() => {
    if (plannerRecipes.length === 0) {
      return [];
    }

    const ingredientsGroup = plannerRecipes.reduce((acc, recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        if (acc[ingredient.id]) {
          acc[ingredient.id].weight += ingredient.weight;
        } else {
          acc[ingredient.id] = { ...ingredient };
        }
      });
      return acc;
    }, {});

    return Object.values(ingredientsGroup);
  }, [plannerRecipes]);

  return (
    <div className={classes.wrapper}>
      <h2 className={classes["title"]}>Планировщик</h2>
      <div className={classes["container"]}>
        <PlannerRecipeList
          recipes={plannerRecipes}
          changePortions={changePortions}
          removeRecipe={removeRecipe}
        />
        <PlannerProductList ingredients={ingredients} />
      </div>
    </div>
  );
};

export default PlannerPage;
