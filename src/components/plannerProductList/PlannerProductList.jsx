import classes from "./plannerProductList.module.scss";

import cartIcon from "../../assets/icons/shopping-cart-icon.png";

const PlannerProductList = () => {
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
  ];

  return (
    <div className={classes["products-block"]}>
      <h3 className={classes["products-block__title"]}>
        <img src={cartIcon} className={classes["products-block__icon"]} />
        Список продуктов
      </h3>
      <div className={classes["products-block__table"]}>
        <div className={classes["headlines"]}>
          <p className={classes["headlines__item"]}>Продукт</p>
          <p className={classes["headlines__item"]}>Объем</p>
        </div>
        <div className={classes["products-table"]}>
          {recipes.map((recipe) => {
            return recipe.ingredients.map((ingredient, index) => (
              <div key={index} className={classes["products-table__row"]}>
                <p className={classes["products-table__cell"]}>
                  {ingredient.title}
                </p>
                <p className={classes["products-table__cell"]}>
                  {ingredient.weight}
                </p>
                <p className={classes["products-table__cell"]}>
                  {ingredient.measure}
                </p>
              </div>
            ));
          })}
        </div>
      </div>
    </div>
  );
};

export default PlannerProductList;
