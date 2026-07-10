import classes from "./plannerRecipeList.module.scss";

import pinIcon from "../../assets/icons/pin-icon.png";

const PlannerRecipeList = () => {
  const recipes = [
    {
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
    },
    {
      id: 2,
      title: "Лазанья с мясом",
      description: "Классическая лазанья с фаршем и бешамелем.",
      calories: 320,
      protein: 18,
      fat: 14,
      carbs: 28,
      weight: 350,
      portions: 8,
      ingredients: [
        { title: "Фарш говяжий", weight: 200, measure: "г" },
        { title: "Листы лазаньи", weight: 60, measure: "г" },
        { title: "Сыр пармезан", weight: 30, measure: "г" },
        { title: "Соус томатный", weight: 80, measure: "г" },
        { title: "Соус бешамель", weight: 100, measure: "г" },
      ],
      cookingTime: 60,
      freezerLife: 3,
      imageUrl: "https://ferma-m2.ru/images/shop/recipe_image/crop__2_2.jpg",
    },
  ];

  return (
    <div className={classes["recipes-block"]}>
      <h3 className={classes["recipes-block__title"]}>
        <img src={pinIcon} className={classes["recipes-block__icon"]} />
        Список блюд
      </h3>
      <div className={classes["recipes-block__table"]}>
        <div className={classes.headlines}>
          <p className={classes.headlines__item}></p>
          <p className={classes.headlines__item}>Блюдо</p>
          <p className={classes.headlines__item}>Количество порций</p>
        </div>
        <div className={classes["recipes-table"]}>
          {recipes.map((recipe) => (
            <div key={recipe.id} className={classes["recipes-table__row"]}>
              <button
                className={`${classes["recipes-table__cell"]} ${classes["recipes-table__toggle-btn"]}`}
              >
                ✔
              </button>
              <div className={classes["recipes-table__cell"]}>
                <p>{recipe.title}</p>
              </div>
              <div className={classes["portions-control"]}>
                <button className={classes["portions-control__btn"]}>+</button>
                <span className={classes["portions-control__value"]}>
                  {recipe.portions}
                </span>
                <button className={classes["portions-control__btn"]}>-</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlannerRecipeList;
