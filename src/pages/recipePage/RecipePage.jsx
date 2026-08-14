import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";

import { useLocalStorage } from "../../services/useLocalStorage";

import PreparationBlock from "../../components/preparationBlock/preparationBlock";
import IngredientsBlock from "../../components/ingredientsBlock/IngredientsBlock";
import PortionsButtons from "../../components/portionsButtons/PortionsButtons";
import RecipeInfo from "../../components/recipeInfo/RecipeInfo";
import Loading from "../../components/loading/Loading";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

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

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [isInPlanner, setIsInPlanner] = useState(isRecipeInPlanner(+recipeId));

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setIsLoading(true);

        const response = await fetch("/data/recipes.json");

        if (!response.ok)
          throw new Error(`Ошибка загрузки: ${response.status}`);

        const data = await response.json();
        setIsLoading(false);
        setRecipeList(data);
      } catch (err) {
        setIsError(true);
        setIsLoading(false);
        console.error("Ошибка загрузки рецептов:", err);
      }
    };

    fetchRecipes();
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

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorMessage />;
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
