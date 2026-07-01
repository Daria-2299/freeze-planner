import "./Header.scss";

import recipeIcon from "../../assets/icons/salad-icon.png";
import plannerIcon from "../../assets/icons/planner-icon.png";
import messageIcon from "../../assets/icons/message-icon.png";

const Header = () => {
  return (
    <div className="header">
      <ul className="navigation">
        <li className="navigation__item navigation__item--active">
          <img className="navigation__icon" src={recipeIcon} />
          Рецепты
        </li>
        <li className="navigation__item ">
          <img className="navigation__icon" src={plannerIcon} />
          Планировщик
        </li>
        <li className="navigation__item">
          <img className="navigation__icon" src={messageIcon} />
          Связь
        </li>
      </ul>
    </div>
  );
};

export default Header;
