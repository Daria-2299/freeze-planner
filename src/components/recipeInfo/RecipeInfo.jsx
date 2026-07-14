import classes from "./recipeInfo.module.scss";

import clockIcon from "../../assets/icons/clock-icon.png";
import plateIcon from "../../assets/icons/plate-icon.png";

const RecipeInfo = ({ cookingTime, portions }) => {
  return (
    <div className={classes["info-block"]}>
      <p className={classes["info-block__cooking-time"]}>
        <img src={clockIcon} className={classes["info-block__icon"]} />
        {cookingTime} мин
      </p>
      <p className={classes["info-block__portions"]}>
        <img src={plateIcon} className={classes["info-block__icon"]} />
        Порции: {portions}
      </p>
    </div>
  );
};

export default RecipeInfo;
