import { useMemo } from "react";
import { useLocalStorage } from "../../services/useLocalStorage";

import PlannerProductList from "../../components/plannerProductList/PlannerProductList";
import PlannerRecipeList from "../../components/plannerRecipeList/PlannerRecipeList";

import "./plannerPage.scss";

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
    <div className="container">
      <PlannerRecipeList
        recipes={plannerRecipes}
        changePortions={changePortions}
        removeRecipe={removeRecipe}
      />
      <PlannerProductList ingredients={ingredients} />
    </div>
  );
};

export default PlannerPage;
