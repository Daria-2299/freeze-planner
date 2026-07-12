import { Link, useLocation } from "react-router-dom";

import classes from "./Header.module.scss";

import recipeIcon from "../../assets/icons/salad-icon.png";
import plannerIcon from "../../assets/icons/planner-icon.png";
import messageIcon from "../../assets/icons/message-icon.png";

const Header = () => {
  const links = [
    { path: "/", label: "Рецепты", icon: recipeIcon },
    {
      path: "/planner",
      label: "Планировщик",
      icon: plannerIcon,
    },
    { path: "/feedback", label: "Связь", icon: messageIcon },
  ];

  const location = useLocation();
  console.log("location", location);
  return (
    <div className={classes["header"]}>
      <nav className={classes["navigation"]}>
        {links.map((link) => {
          return (
            <Link
              key={link.path}
              to={link.path}
              className={
                location.pathname === link.path
                  ? `${classes["navigation__item"]} ${classes["navigation__item--active"]}`
                  : classes["navigation__item"]
              }
            >
              <img className={classes["navigation__icon"]} src={link.icon} />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Header;

{
  /* <Link
          to="/"
          className={`${classes["navigation__item"]} ${classes["navigation__item--active"]}`}
        >
          <img className={classes["navigation__icon"]} src={recipeIcon} />
          Рецепты
        </Link>
        <Link to="/planner" className={classes["navigation__item"]}>
          <img className={classes["navigation__icon"]} src={plannerIcon} />
          Планировщик
        </Link>
        <Link to="/feedback" className={classes["navigation__item"]}>
          <img className={classes["navigation__icon"]} src={messageIcon} />
          Связь
        </Link> */
}
