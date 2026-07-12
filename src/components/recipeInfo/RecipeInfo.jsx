import classes from "./recipeInfo.module.scss";

import clockIcon from "../../assets/icons/clock-icon.png";
import plateIcon from "../../assets/icons/plate-icon.png";

const RecipeInfo = () => {
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
          <div class={classes["portions-control"]}>
            <button class={classes["portions-control__btn"]}>+</button>
            <span class={classes["portions-control__value"]}>
              {recipe.portions}
            </span>
            <button class={classes["portions-control__btn"]}>-</button>
          </div>
        </div>
        <div className={classes["info-block"]}>
          <p className={classes["info-block__cooking-time"]}>
            <img src={clockIcon} className={classes["info-block__icon"]} />
            {recipe.cookingTime} мин
          </p>
          <p className={classes["info-block__portions"]}>
            <img src={plateIcon} className={classes["info-block__icon"]} />
            Порции: {recipe.portions}
          </p>
        </div>
      </div>
      <div className={classes["recipe-info__main"]}>
        <div className={classes["image-wrapper"]}>
          <img src={recipe.imageUrl} className={classes["image"]} />
        </div>
        <div className={classes["ingredients"]}>
          <h3 className={classes["ingredients__title"]}>Ингредиенты</h3>
          <ul className={classes["ingredients__list"]}>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className={classes["ingredients__item"]}>
                <p>{ingredient.title}</p>
                <p>
                  {" "}
                  {ingredient.weight} {ingredient.measure}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={classes["preparation"]}>
        <h3 className={classes["preparation__title"]}>Приготовление</h3>
        <ul className={classes["preparation__list"]}>
          {recipe.preparation.map((step, index) => (
            <li key={index} className={classes["preparation__step"]}>
              {step}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeInfo;
