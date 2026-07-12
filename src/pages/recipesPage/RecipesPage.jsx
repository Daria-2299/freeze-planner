import RecipeList from "../../components/recipeList/RecipeList";

import classes from "./recipePage.module.scss";

const RecipesPage = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Список рецептов</h1>
      <RecipeList />
    </div>
  );
};

export default RecipesPage;
