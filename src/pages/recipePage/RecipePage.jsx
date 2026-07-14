import { useParams } from "react-router-dom";

import PreparationBlock from "../../components/preparationBlock/preparationBlock";
import IngredientsBlock from "../../components/ingredientsBlock/IngredientsBlock";
import PortionsButtons from "../../components/portionsButtons/PortionsButtons";
import RecipeInfo from "../../components/recipeInfo/RecipeInfo";

import classes from "./recipePage.module.scss";

const RecipePage = () => {
  // const { recipeId } = useParams();
  const recipe = {
    id: 1,
    title: "Куриные котлеты",
    description:
      "Нежные котлеты из куриного филе с зеленью. Можно жарить без разморозки.",
    calories: 210,
    protein: 22,
    fat: 10,
    carbs: 8,
    weight: 180,
    portions: 6,
    ingredients: [
      { title: "Куриное филе", weight: 300, measure: "г" },
      { title: "Лук репчатый", weight: 60, measure: "г" },
      { title: "Яйцо", weight: 50, measure: "шт." },
      { title: "Панировочные сухари", weight: 30, measure: "г" },
      { title: "Соль", weight: 5, measure: "г" },
      { title: "Перец", weight: 3, measure: "г" },
    ],
    preparation: [
      "Куриное филе нарежьте небольшими кусочками и пропустите через мясорубку.",
      "Лук очистите и мелко нарежьте или также пропустите через мясорубку.",
      "Смешайте фарш с луком, яйцом, солью и перцем. Тщательно вымешайте.",
      "Сформируйте котлеты и обваляйте их в панировочных сухарях.",
      "Разогрейте сковороду с маслом и обжарьте котлеты с двух сторон до золотистой корочки.",
      "По желанию можно тушить под крышкой 5-7 минут для полной готовности.",
    ],
    cookingTime: 30,
    freezerLife: 4,
    imageUrl:
      "https://img.iamcook.ru/old/upl/recipes/cat/u-f777f2a9cd9399a361f5cb25b4d58790.jpg",
  };

  return (
    <div class={classes["recipe-info"]}>
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
