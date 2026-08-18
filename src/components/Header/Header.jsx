import { Link, useLocation } from "react-router-dom";

import BurgerMenu from "../burgerMenu/BurgerMenu";

import classes from "./header.module.scss";

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

  return (
    <div className={classes["header"]}>
      <BurgerMenu links={links} />
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
