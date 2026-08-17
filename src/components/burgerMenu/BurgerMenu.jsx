import { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./burgerMenu.module.scss";

const BurgerMenu = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={classes["burger-menu"]}>
      <button
        className={`${classes["burger-button"]} ${isMenuOpen ? classes["burger-button--active"] : ""}`}
        onClick={toggleMenu}
      >
        <span className={classes["burger-button__line"]}></span>
        <span className={classes["burger-button__line"]}></span>
        <span className={classes["burger-button__line"]}></span>
      </button>

      <div
        className={`${classes["mobile-menu"]} ${isMenuOpen ? classes["mobile-menu--open"] : ""}`}
      >
        <nav className={classes["mobile-navigation"]}>
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={
                  isActive
                    ? `${classes["mobile-navigation__item"]} ${classes["mobile-navigation__item--active"]}`
                    : classes["mobile-navigation__item"]
                }
              >
                <img
                  className={classes["mobile-navigation__icon"]}
                  src={link.icon}
                  alt={link.label}
                />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default BurgerMenu;
