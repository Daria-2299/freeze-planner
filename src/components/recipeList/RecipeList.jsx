import { useState, useEffect, useMemo } from "react";

import { useLocalStorage } from "../../services/useLocalStorage";

import RecipeCard from "../recipeCard/recipeCard";

import classes from "./recipeList.module.scss";

const NUMBER_NEW_RECIPES = 20;

const RecipeList = () => {
  const {
    plannerRecipes,
    addRecipe,
    removeRecipe,
    isRecipeInPlanner,
    changePortions,
  } = useLocalStorage();

  const [allRecipes, setAllRecipes] = useState([]);
  const [amountRecipes, setAmountRecipes] = useState(NUMBER_NEW_RECIPES);

  useEffect(() => {
    fetch("/data/recipes.json")
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка загрузки");
        return res.json();
      })
      .then((data) => {
        setAllRecipes(data);
      });
  }, []);

  const visibleRecipes = useMemo(() => {
    const mergedRecipes = mergeRecipesWithPlanner(allRecipes, plannerRecipes);
    return mergedRecipes.slice(0, amountRecipes);
  }, [allRecipes, plannerRecipes, amountRecipes]);

  const recipesEnded =
    allRecipes.length > 0 && amountRecipes >= allRecipes.length;

  const onLoadMore = () => {
    const nextAmount = amountRecipes + NUMBER_NEW_RECIPES;
    if (allRecipes.length <= nextAmount) {
      setAmountRecipes(allRecipes.length);
    } else {
      setAmountRecipes(nextAmount);
    }
  };

  return (
    <>
      <div className={classes.wrapper}>
        {visibleRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isInPlanner={isRecipeInPlanner(recipe.id)}
            onAddRecipe={addRecipe}
            onRemoveRecipe={removeRecipe}
            onChangePortions={changePortions}
            plannerRecipes={plannerRecipes}
          />
        ))}
      </div>
      <button
        className={classes.button}
        style={{ display: recipesEnded ? "none" : "block" }}
        onClick={() => {
          onLoadMore();
        }}
      >
        Загрузить
      </button>
    </>
  );
};

const mergeRecipesWithPlanner = (recipeList, plannerList) => {
  return recipeList.map((recipe) => {
    const recipeInPlanner = plannerList.find((item) => item.id === recipe.id);
    if (recipeInPlanner) {
      return { ...recipe, portions: recipeInPlanner.portions };
    }
    return recipe;
  });
};

export default RecipeList;
