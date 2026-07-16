import classes from "./ingredientsBlock.module.scss";

const IngredientsBlock = ({ recipe }) => {
  return (
    <div className={classes["ingredients"]}>
      <h3 className={classes["ingredients__title"]}>Ингредиенты</h3>
      <ul className={classes["ingredients__list"]}>
        {recipe.ingredients?.map((ingredient, index) => (
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
  );
};

export default IngredientsBlock;
