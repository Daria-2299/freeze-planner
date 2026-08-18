import classes from "./portionsButtons.module.scss";

const PortionsButtons = ({ portions, onChangePortions, recipeId }) => {
  const handlePortionsClick = (event, delta) => {
    event.stopPropagation();
    onChangePortions(recipeId, portions + delta);
  };

  return (
    <div className={classes["portions-control"]}>
      <button
        className={classes["portions-control__btn"]}
        onClick={(event) => {
          handlePortionsClick(event, -1);
        }}
        disabled={portions <= 1}
      >
        -
      </button>
      <span className={classes["portions-control__value"]}>{portions}</span>
      <button
        className={classes["portions-control__btn"]}
        onClick={(event) => {
          handlePortionsClick(event, 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default PortionsButtons;
