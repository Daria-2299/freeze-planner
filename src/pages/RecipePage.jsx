import { useParams } from "react-router-dom";

import RecipeInfo from "../components/recipeInfo/RecipeInfo";

const RecipePage = () => {
  const { recipeId } = useParams();

  return <RecipeInfo />;
};

export default RecipePage;
