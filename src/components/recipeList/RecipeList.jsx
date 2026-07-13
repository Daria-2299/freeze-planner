import { useState, useEffect } from "react";

import RecipeCard from "../recipeCard/recipeCard";

import classes from "./recipeList.module.scss";

const NUMBER_NEW_RECIPES = 20;

const RecipeList = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [visibleRecipes, setVisibleRecipes] = useState([]);
  const [amountRecipes, setAmountRecipes] = useState(NUMBER_NEW_RECIPES);
  const [recipesEnded, setRecipesEnded] = useState(false);

  useEffect(() => {
    fetch("/data/recipes.json")
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка загрузки");
        return res.json();
      })
      .then((data) => {
        setAllRecipes(data);
        setVisibleRecipes(data.slice(0, amountRecipes));
      });
  }, []);

  const onLoadMore = () => {
    const nextAmount = amountRecipes + NUMBER_NEW_RECIPES;
    if (allRecipes.length <= nextAmount) {
      setVisibleRecipes(allRecipes);
      setRecipesEnded(true);
      setAmountRecipes(allRecipes.length);
    } else {
      setVisibleRecipes(allRecipes.slice(0, nextAmount));
      setAmountRecipes(nextAmount);
    }
  };

  return (
    <>
      <div className={classes.wrapper}>
        {visibleRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
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

export default RecipeList;
