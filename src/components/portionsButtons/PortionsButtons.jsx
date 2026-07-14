import classes from "./portionsButtons.module.scss";

const PortionsButtons = ({ portions }) => {
  return (
    <div class={classes["portions-control"]}>
      <button class={classes["portions-control__btn"]}>+</button>
      <span class={classes["portions-control__value"]}>{portions}</span>
      <button class={classes["portions-control__btn"]}>-</button>
    </div>
  );
};

export default PortionsButtons;
