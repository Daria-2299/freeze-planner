import { useLocalStorage } from "../../services/useLocalStorage";

import classes from "./plannerProductList.module.scss";

import cartIcon from "../../assets/icons/shopping-cart-icon.png";
import { useEffect } from "react";

const PlannerProductList = ({ ingredients }) => {
  return (
    <div className={classes["products-block"]}>
      <h3 className={classes["products-block__title"]}>
        <img src={cartIcon} className={classes["products-block__icon"]} />
        Список продуктов
      </h3>
      {ingredients.length > 0 ? (
        <div className={classes["products-block__table"]}>
          <div className={classes["headlines"]}>
            <p className={classes["headlines__item"]}>Продукт</p>
            <p className={classes["headlines__item"]}>Объем</p>
          </div>

          <div className={classes["products-table"]}>
            {ingredients.map((ingredient, index) => {
              return (
                <div key={index} className={classes["products-table__row"]}>
                  <p className={classes["products-table__cell"]}>
                    {ingredient.title}
                  </p>
                  <p className={classes["products-table__cell"]}>
                    {ingredient.weight}
                  </p>
                  <p className={classes["products-table__cell"]}>
                    {ingredient.measure}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className={classes["products-block__empty-table"]}>
          <p>Вы не добавили рецепты в планировщик.</p>
        </div>
      )}
    </div>
  );
};

export default PlannerProductList;
