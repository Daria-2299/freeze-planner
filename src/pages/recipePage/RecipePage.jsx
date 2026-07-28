import { useParams } from "react-router-dom";

import PreparationBlock from "../../components/preparationBlock/preparationBlock";
import IngredientsBlock from "../../components/ingredientsBlock/IngredientsBlock";
import PortionsButtons from "../../components/portionsButtons/PortionsButtons";
import RecipeInfo from "../../components/recipeInfo/RecipeInfo";

import classes from "./recipePage.module.scss";
import { useEffect, useState } from "react";

const RecipePage = () => {
  const { recipeId } = useParams();

  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    fetch("/data/recipes.json")
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка загрузки");
        return res.json();
      })
      .then((data) => {
        setRecipe(data[+recipeId - 1]);
      });
  }, [recipeId]);

  return (
    <div className={classes["recipe-info"]}>
      <div className={classes["recipe-info__header"]}>
        <div className={classes["recipe-info__top"]}>
          <h2 className={classes["recipe-info__title"]}>{recipe.title}</h2>
          <PortionsButtons portions={recipe.portions} />
        </div>
        <RecipeInfo
          cookingTime={recipe.cookingTime}
          portions={recipe.portions}
        />
      </div>

      <div className={classes["recipe-info__main"]}>
        <div className={classes["image-wrapper"]}>
          <img src={recipe.imageUrl} className={classes["image"]} />
        </div>
        <IngredientsBlock recipe={recipe} />
      </div>

      <PreparationBlock recipe={recipe} />
    </div>
  );
};

export default RecipePage;
