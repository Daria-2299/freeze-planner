import classes from "./preparationBlock.module.scss";

const PreparationBlock = ({ recipe }) => {
  return (
    <div className={classes["preparation"]}>
      <h3 className={classes["preparation__title"]}>Приготовление</h3>
      <ul className={classes["preparation__list"]}>
        {recipe.preparation?.map((step, index) => (
          <li key={index} className={classes["preparation__step"]}>
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreparationBlock;
