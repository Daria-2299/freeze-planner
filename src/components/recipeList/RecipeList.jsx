import RecipeCard from "../recipeCard/recipeCard";

import classes from "./recipeList.module.scss";

const RecipeList = () => {
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
        { title: "Куриное филе", weight: 300 },
        { title: "Лук репчатый", weight: 60 },
        { title: "Яйцо", weight: 50 },
        { title: "Панировочные сухари", weight: 30 },
        { title: "Соль", weight: 5 },
        { title: "Перец", weight: 3 },
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
      ingredients: [
        { title: "Фарш говяжий", weight: 200 },
        { title: "Листы лазаньи", weight: 60 },
        { title: "Сыр пармезан", weight: 30 },
        { title: "Соус томатный", weight: 80 },
        { title: "Соус бешамель", weight: 100 },
      ],
      cookingTime: 60,
      freezerLife: 3,
      imageUrl: "https://ferma-m2.ru/images/shop/recipe_image/crop__2_2.jpg",
    },
    {
      id: 3,
      title: "Классические сырники",
      description: "Нежные, мягкие и слегка хрустящие сырники из творога.",
      calories: 220,
      protein: 18,
      fat: 12,
      carbs: 15,
      weight: 150,
      portions: 4,
      ingredients: [
        { title: "Творог (9%)", weight: 400 },
        { title: "Яйцо", weight: 60 },
        { title: "Мука пшеничная", weight: 50 },
        { title: "Сахар", weight: 40 },
        { title: "Соль", weight: 3 },
        { title: "Масло растительное", weight: 20 },
      ],
      cookingTime: 25,
      freezerLife: 3,
      imageUrl:
        "https://prostokvashino.ru/upload/resize_cache/iblock/69d/800_800_0/69dad574b017f44178e3b2f22a3dab3c.jpg",
    },
    {
      id: 4,
      title: "Блинчики с ветчиной и сыром",
      description: "Сытные блинчики с начинкой из  сыра и  ветчины. ",
      calories: 290,
      protein: 14,
      fat: 18,
      carbs: 22,
      weight: 200,
      portions: 5,
      ingredients: [
        { title: "Молоко", weight: 250 },
        { title: "Яйцо", weight: 60 },
        { title: "Мука пшеничная", weight: 120 },
        { title: "Ветчина", weight: 150 },
        { title: "Сыр твердый", weight: 100 },
        { title: "Масло растительное", weight: 30 },
        { title: "Соль", weight: 3 },
      ],
      cookingTime: 40,
      freezerLife: 2,
      imageUrl:
        "https://img02.rl0.ru/95618c41b6f15094ae8e5cb1614a3a3c/c1860x1050i/s1.eda.ru/StaticContent/Photos/b/1c/b1caf59b228446cebb12da56c73f2777.jpg",
    },
    {
      id: 5,
      title: "Куриная грудка с моцареллой",
      description: "Куриное филе, запеченное с томатами и нежной моцареллой.",
      calories: 195,
      protein: 28,
      fat: 8,
      carbs: 4,
      weight: 220,
      portions: 4,
      ingredients: [
        { title: "Куриная грудка", weight: 600 },
        { title: "Моцарелла (шарики)", weight: 150 },
        { title: "Помидоры", weight: 200 },
        { title: "Чеснок", weight: 10 },
        { title: "Оливковое масло", weight: 20 },
        { title: "Орегано", weight: 3 },
        { title: "Соль", weight: 5 },
        { title: "Перец", weight: 3 },
      ],
      cookingTime: 35,
      freezerLife: 3,
      imageUrl:
        "https://img.povar.ru/mobile/2f/ac/b1/9e/kurinie_grudki_s_mocarelloi_i_pomidorami-548134.JPG",
    },
    {
      id: 6,
      title: "Фаршированные перцы",
      description: "Сочные болгарские перцы, фаршированные рисом с мясом.",
      calories: 210,
      protein: 16,
      fat: 12,
      carbs: 18,
      weight: 250,
      portions: 6,
      ingredients: [
        { title: "Перец сладкий", weight: 600 },
        { title: "Фарш мясной (говядина+свинина)", weight: 400 },
        { title: "Рис", weight: 80 },
        { title: "Лук репчатый", weight: 100 },
        { title: "Морковь", weight: 100 },
        { title: "Томатная паста", weight: 50 },
        { title: "Чеснок", weight: 10 },
        { title: "Соль", weight: 6 },
        { title: "Перец", weight: 3 },
      ],
      cookingTime: 60,
      freezerLife: 4,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtc_OwOqTNEWy2B8gpIFhoJXMYBIdNw-HAEwgPaVOa-A&s",
    },
  ];

  return (
    <div className={classes.wrapper}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
