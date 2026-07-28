import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";

import { useLocalStorage } from "../../hooks/useLocalStorage.hook";

import PreparationBlock from "../../components/preparationBlock/preparationBlock";
import IngredientsBlock from "../../components/ingredientsBlock/IngredientsBlock";
import PortionsButtons from "../../components/portionsButtons/PortionsButtons";
import RecipeInfo from "../../components/recipeInfo/RecipeInfo";

import classes from "./recipePage.module.scss";

const RecipePage = () => {
  const { recipeId } = useParams();
  const {
    isRecipeInPlanner,
    changePortions,
    getRecipeById,
    addRecipe,
    removeRecipe,
  } = useLocalStorage();

  const [loading, setLoading] = useState(true);
  const [recipeList, setRecipeList] = useState([]);
  const [isInPlanner, setIsInPlanner] = useState(isRecipeInPlanner(+recipeId));

  useEffect(() => {
    fetch("/data/recipes.json")
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка загрузки");
        return res.json();
      })
      .then((data) => {
        setRecipeList(data);
        setLoading(false);
      });
  }, []);

  const recipe = useMemo(() => {
    if (isInPlanner) {
      return getRecipeById(+recipeId);
    }
    return recipeList.find((recipe) => recipe.id === +recipeId);
  }, [isInPlanner, recipeList, recipeId, getRecipeById]);

  const handlePlannerClick = (event) => {
    event.stopPropagation();
    isInPlanner ? removeRecipe(recipe.id) : addRecipe(recipe);
    isInPlanner ? setIsInPlanner(false) : setIsInPlanner(true);
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={classes["recipe-info"]}>
      <div className={classes["recipe-info__header"]}>
        <div className={classes["recipe-info__top"]}>
          <h2 className={classes["recipe-info__title"]}>{recipe.title}</h2>
          {isInPlanner ? (
            <div className={classes["buttons"]}>
              <PortionsButtons
                portions={recipe.portions}
                onChangePortions={changePortions}
                recipeId={recipe.id}
              />
              <button
                className={classes["recipe-info__button"]}
                onClick={handlePlannerClick}
              >
                Удалить
              </button>
            </div>
          ) : (
            <button
              className={classes["recipe-info__button"]}
              onClick={handlePlannerClick}
            >
              Добавить в планировщик
            </button>
          )}
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
