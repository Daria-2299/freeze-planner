import { useState, useEffect } from "react";

const PLANNER_KEY = "planner_recipes";

export const useLocalStorage = () => {
  const [plannerRecipes, setPlannerRecipes] = useState(() => {
    try {
      const savedRecipes = localStorage.getItem(PLANNER_KEY);
      return savedRecipes ? JSON.parse(savedRecipes) : [];
    } catch (error) {
      console.error("Ошибка при загрузке рецептов из localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(PLANNER_KEY, JSON.stringify(plannerRecipes));
  }, [plannerRecipes]);

  const isRecipeInPlanner = (recipeId) => {
    return plannerRecipes.some((recipe) => recipe.id === recipeId);
  };

  const addRecipe = (recipe) => {
    if (isRecipeInPlanner(recipe.id)) setPlannerRecipes(plannerRecipes);
    else setPlannerRecipes([...plannerRecipes, recipe]);
  };

  const removeRecipe = (recipeId) => {
    setPlannerRecipes(
      plannerRecipes.filter((recipe) => recipe.id !== recipeId),
    );
  };

  const changePortions = (recipeId, portionsValue) => {
    setPlannerRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === recipeId
          ? {
              ...recipe,
              portions: portionsValue,
              ingredients: recipe.ingredients.map((ingredient) => ({
                ...ingredient,
                weight: Math.round(
                  (ingredient.weight / recipe.portions) * portionsValue,
                ),
              })),
            }
          : recipe,
      ),
    );
  };

  const getRecipeById = (recipeId) => {
    if (isRecipeInPlanner(recipeId))
      return plannerRecipes.find((recipe) => recipe.id === recipeId);
    else return {};
  };

  return {
    plannerRecipes,
    setPlannerRecipes,
    isRecipeInPlanner,
    addRecipe,
    removeRecipe,
    changePortions,
    getRecipeById,
  };
};
