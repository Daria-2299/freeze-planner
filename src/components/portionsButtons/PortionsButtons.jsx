import { useState } from "react";
import classes from "./portionsButtons.module.scss";

const PortionsButtons = () => {
  const [portionsValue, setPortionsValue] = useState(10);

  const increasePortions = () => {
    setPortionsValue((prev) => prev + 1);
  };

  const decreasePortions = () => {
    setPortionsValue((prev) => prev - 1);
  };

  return (
    <div className={classes["portions-control"]}>
      <button
        className={classes["portions-control__btn"]}
        onClick={decreasePortions}
        disabled={portionsValue <= 1}
      >
        -
      </button>
      <span className={classes["portions-control__value"]}>
        {portionsValue}
      </span>
      <button
        className={classes["portions-control__btn"]}
        onClick={increasePortions}
      >
        +
      </button>
    </div>
  );
};

export default PortionsButtons;
