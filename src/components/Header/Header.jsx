import classes from "./header.module.scss";

import recipeIcon from "../../assets/icons/salad-icon.png";
import plannerIcon from "../../assets/icons/planner-icon.png";
import messageIcon from "../../assets/icons/message-icon.png";

const Header = () => {
  return (
    <div className={classes["header"]}>
      <ul className={classes["navigation"]}>
        <li
          className={`${classes["navigation__item"]} ${classes["navigation__item--active"]}`}
        >
          <img className={classes["navigation__icon"]} src={recipeIcon} />
          Рецепты
        </li>
        <li className={classes["navigation__item"]}>
          <img className={classes["navigation__icon"]} src={plannerIcon} />
          Планировщик
        </li>
        <li className={classes["navigation__item"]}>
          <img className={classes["navigation__icon"]} src={messageIcon} />
          Связь
        </li>
      </ul>
    </div>
  );
};

export default Header;
